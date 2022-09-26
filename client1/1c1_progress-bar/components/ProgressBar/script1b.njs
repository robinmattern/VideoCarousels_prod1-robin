// -----------------------------------------------------------------------------------------------------

       if (typeof(document) == 'undefined') { document = makDocument( ) }

// -----------------------------------------------------------------------------------------------------

        var pProgress = { }     // Global object variable

//    --------------------------------------------------------------

   function constructor( now, min, max, options ) {

            pProgress.dom    =  makDiv( "pProgress-bar" );
            pProgress.min    =  min;
            pProgress.max    =  max;
            pProgress.now    =  now;
            pProgress.intervalCode = 0;

            console.log( `constructor[1]    Sync set: ${ pProgress.now }` )
            syncState( );

        if (options.parent) {  document.querySelector( options.parent ).appendChild( pProgress.dom ) }
          else              {  document                           .body.appendChild( pProgress.dom ) }

     return pProgress
        }   // eom constructor
//    --------------------------------------------------------------

   function syncState( ) {

            pProgress.dom.style.width  =  pProgress.now + "%";
            console.log( `syncState[1]      Sync now: ${ pProgress.now }` )

        }   // eom syncState
//    --------------------------------------------------------------

   function startTo( step, time ) {

        if (pProgress.intervalCode !== 0) { return; }

            pProgress.intervalCode = setInterval(  // () => { ... callback function }

//        ---------------------------------------------

      function onSetInterval( ) {

           if (pProgress.now +  step > pProgress.max) {
               pProgress.now =  pProgress.max;
               syncState( );
               clearInterval(  pProgress.intervalCode );
               return;
               }
               pProgress.now += step;
               syncState( )

            }, time ) // eof SetInterval
//        ---------------------------------------------
        }   // eom startTo
//    --------------------------------------------------------------

   function end( ) {

            pProgress.now    =  pProgress.max;
            clearInterval(      pProgress.intervalCode );
            syncState( );
            console.log( `end[1]            Sync end: ${ pProgress.now }` )

            document.querySelector( '.container h2' ).style.display = 'none';
            document.querySelector( '.progress'     ).style.display = 'none';

        }   // eom startTo
//    --------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

            constructor( 15, 0, 100, { parent : ".progress" } );

            startTo( 5, 500 );                                 // ( step length, time in msecs )

            setTimeout( ( ) => { end( ) }, 5000 )              // end progress after 5 secs

// -----------------------------------------------------------------------------------------------------

   function makDiv( aClassName ) {

   return { style: { } };
   return   elt( 'div', { className: aClassName } )

            }   // eof makDiv
//        ----------------------------------------------------------

   function elt( type, prop, ...childrens ) { // helper function-> return <DOMelement>

        let elem = document.createElement(type);
        if (prop) Object.assign( elem, prop );
       for (let child of childrens) {
        if (typeof child == "string") { elem.appendChild( document.createTextNode( child ) ); }
         else                         { elem.appendChild( elem ); }
            }
     return elem;

            }   // eof elt
//        ----------------------------------------------------------
// -----------------------------------------------------------------------------------------------------

   function makDocument() {
        var pDocument   = { body: { appendChild: appendChild }
                          , querySelector: function( ) { return { appendChild: appendChild, style: { } } }
                            }
     return pDocument
   function appendChild() { console.log( "appendChild[1]" ) }
            }

