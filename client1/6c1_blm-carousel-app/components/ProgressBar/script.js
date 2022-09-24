/*
 * (class)Progress<nowValue, minValue, maxValue>
 */
// ------------------------------------------------------------------

class Progress { //Progress class

  constructor( now, min, max, options ) {

            this.dom    =  makDiv( "progress-bar" );
            this.min    =  min;
            this.max    =  max;
            this.now    =  now;
            this.intervalCode = 0;

            console.log( `constructor[1]    Sync now: ${ this.now }` )
            this.syncState( );
        if (options.parent) { document.querySelector( options.parent ).appendChild( this.dom ); }
          else              { document.body.appendChild( this.dom ) }

        } // eom constructor
//  ----------------------------------------------------

  syncState( ) {
            this.dom.style.width = this.now + "%";
            console.log( `syncState[1]      Sync now: ${ this.now }` )

        } // eom syncState
//  ----------------------------------------------------

   startTo( step, time ) {

        if (this.intervalCode !== 0) { return; }

            this.intervalCode = setInterval( ( ) => {

            if (this.now    +  step > this.max) {
                this.now    =  this.max;
                this.syncState();
                clearInterval( this.intervalCode );  // was this.interval
                this.intervalCode = 0;
                return;
                }
                this.now += step;
                this.syncState()

            }, time ) // eof setInterval( ( ) => { ... }, time )

        } // eom startTo
//  ----------------------------------------------------

    end() {
            this.now          =  this.max;
            clearInterval(       this.intervalCode );
            this.intervalCode =  0;
            this.syncState( );
            console.log( `end[1]            Sync end: ${ this.now }` )

            document.querySelector( '.container h2' ).style.display = 'none';
            document.querySelector( '.progress'     ).style.display = 'none';
        } // eom startTo
//  ----------------------------------------------------

} // eoc Progress
// ------------------------------------------------------------------

       let  pb  =  new Progress( 15, 0, 100, { parent : ".progress" } );
            pb.startTo( 5, 500 ); // (step length, arg2 -> time(ms) )

            setTimeout( () => { pb.end() }, 15000 ) //end to progress after 5s

// ------------------------------------------------------------------

  function  makDiv( aClassName ) {
            return elt( 'div', { className: aClassName } )
            }

  function  elt( type, prop, ...childrens ) { // helper function-> return <DOMelement>
        let elem = document.createElement(type);
        if (prop) Object.assign( elem, prop );
       for (let child of childrens) {
        if (typeof child == "string") { elem.appendChild( document.createTextNode( child ) ); }
         else                         { elem.appendChild( elem ); }
            }
     return elem;
            }
// ------------------------------------------------------------------

