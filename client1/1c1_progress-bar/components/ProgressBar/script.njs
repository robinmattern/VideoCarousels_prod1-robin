// -----------------------------------------------------------------------------------------------------

       if (typeof(document) == 'undefined') { document = makDocument( ) }

// -----------------------------------------------------------------------------------------------------

class Progress {                // Global class object

//    --------------------------------------------------------------

      constructor( now, min, max, options ) {

            this.dom       =  makDiv( "progress-bar" );
            this.min       =  min;
            this.max       =  max;
            this.now       =  now;
            this.intervalCode = 0;

            console.log( `constructor[1]    Sync set: ${ this.now }` )
            this.syncState( );

        if (options.parent) {  document.querySelector( options.parent ).appendChild( this.dom ); }
          else              {  document.body                           .appendChild( this.dom ) }


        }   // eom constructor
//    --------------------------------------------------------------

      syncState( ) {

            this.dom.style.width = this.now + "%";
            console.log( `syncState[1]      Sync now: ${ this.now }` )

        }   // eom syncState
//    --------------------------------------------------------------

      startTo( step, time ) {

        if (this.intervalCode !== 0) { return; }

            this.intervalCode = setInterval(         ( ) =>                                              // 1.    workie, cuz {this}       is defined in parent    function
//          this.intervalCode = setInterval(                                                             // 2. no workie, cuz {this}       is local   to anonymous function
//          this.intervalCode = setInterval(                  onSetInterval                    , time )  // 3. no workie, cuz {this}       is local   to anonymous function
//          this.intervalCode = setInterval( function( )    { onSetInterval.call(  this     ) }, time )  // 4. no workie, cuz {this} can't be defined by { call( class  scope: this      ) }
//          this.intervalCode = setInterval( function( )    { onSetInterval.call(  Progress ) }, time )  // 5. no workie, cuz {this} can't be defined by { call( class  scope: Progress  ) }
//          this.intervalCode = setInterval( function( )    { onSetInterval.call( pProgress ) }, time )  // 6.    workie, cuz {this}       is defined by { call( object scope: pProgress ) }

//        ---------------------------------------------

                                {                                               // 1.
//   function  ( ) {                                                            // 2.
//   function  onSetInterval( ) {                                               // 3., 4., 5. or 6.
           if (this.now    +  step > this.max) {
               this.now    =  this.max;
               this.syncState( );
               clearInterval( this.intervalCode );
               return;
               }
               this.now += step;
               this.syncState()

            }, time )   // eof   setInterval(         ( ) => { ... }, time )     // 1.
//          }, time )   // eof   setInterval( function( )    { ... }, time )     // 2.
//          }           // eof onSetInterval          ( )    { ... }             // 3., 4., 5. or 6.
//        ---------------------------------------------
        }   // eom startTo
//    --------------------------------------------------------------

      end() {

            this.now       =  this.max;
            clearInterval(    this.intervalCode );
            this.syncState( );
            console.log( `end[1]            Sync end: ${ this.now }` )

            document.querySelector( '.container h2' ).style.display = 'none';
            document.querySelector( '.progress'     ).style.display = 'none';

        }   // eom startTo
//    --------------------------------------------------------------
   }   // eoc Progress
// ------------------------------------------------------------------

        var pProgress  =  new Progress( 5, 0, 100, { parent : ".progress" } );

            pProgress.startTo( 10, 500 );                       // ( step length, time in msecs )

            setTimeout( ( ) => { pProgress.end( ) }, 5000 )    // end progress after 5s

// ------------------------------------------------------------------

  function  makDiv( aClassName ) {

            return elt( 'div', { className: aClassName } )
            }

  function  elt( type, prop, ...childrens ) { // helper function-> return <DOMelement>
     try {
        let elem = document.createElement(type);
        if (prop) Object.assign( elem, prop );
       for (let child of childrens) {
        if (typeof child == "string") { elem.appendChild( document.createTextNode( child ) ); }
         else                         { elem.appendChild( elem ); }
            }
     return elem;
     } catch( pErr ) { return { style: {} } }
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

