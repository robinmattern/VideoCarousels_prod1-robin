// -----------------------------------------------------------------------------------------------------

       if (typeof(document) == 'undefined') { document = makDocument( ) }

// -----------------------------------------------------------------------------------------------------

  var Progress = { }            // Global "class" variable

//    --------------------------------------------------------------

      Progress.constructor  =  function( now, min, max, options ) {

            this.dom        =  makDiv( "progress-bar" );
            this.min        =  min;
            this.max        =  max;
            this.now        =  now;
            this.intervalCode = 0;

            console.log( `constructor[1]    Sync set: ${ this.now }` )
            this.syncState( );

        if (options.parent) {  document.querySelector( options.parent ).appendChild( this.dom ) }
          else              {  document.body                           .appendChild( this.dom ) }

     return this
        }   // eom constructor
//    --------------------------------------------------------------

  Progress.syncState = function( ) {

            this.dom.style.width = this.now + "%";
            console.log( `syncState[1]      Sync now: ${ this.now }` )

        }   // eom syncState
//    --------------------------------------------------------------

   Progress.startTo = function( step, time ) {

        if (this.intervalCode !== 0) { return; }

            this.intervalCode = setInterval(  // () => { ... callback function }

//        ---------------------------------------------

     function  onSetInterval( ) {
          var  This = Progress
           if (This.now    +  step > This.max) {
               This.now    =  This.max;
               This.syncState();
               clearInterval( This.intervalCode );
               return;
               }
               This.now += step;
               This.syncState()

            }, time )   // eof SetInterval
//        ---------------------------------------------
        }   // eom startTo
//    --------------------------------------------------------------

    Progress.end = function() {

            this.now       =  this.max;
            clearInterval(    this.intervalCode );
            this.syncState( );
            console.log( `end[1]            Sync end: ${ this.now }` )

            document.querySelector( '.container h2' ).style.display = 'none';
            document.querySelector( '.progress'     ).style.display = 'none';

        }   // eom startTo
//    --------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

       let  pProgress      =  Progress.constructor( 15, 0, 100, { parent : ".progress" } );

            pProgress.startTo( 5, 500 );                       // ( step length, time in msecs )

            setTimeout( ( ) => { pProgress.end( ) }, 5000 )    // end progress after 5 secs

// -----------------------------------------------------------------------------------------------------

  function  makDiv( aClassName ) {

            return { style: { } };
            return elt( 'div', { className: aClassName } )

            } // eof makDiv
//    --------------------------------------------------------------

  function  elt( type, prop, ...childrens ) { // helper function-> return <DOMelement>

        let elem = document.createElement(type);
        if (prop) Object.assign( elem, prop );
       for (let child of childrens) {
        if (typeof child == "string") { elem.appendChild( document.createTextNode( child ) ); }
         else                         { elem.appendChild( elem ); }
            }
     return elem;

            } // eof elt
//    --------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

   function makDocument() {
        var pDocument   = { body: { appendChild: appendChild }
                          , querySelector: function( ) { return { appendChild: appendChild, style: { } } }
                            }
     return pDocument
   function appendChild() { console.log( "appendChild[1]" ) }
            }

