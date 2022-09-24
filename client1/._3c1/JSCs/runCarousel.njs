/*\
##=========+====================+================================================+
##RD         runCarousel        | Handle Video Carousel HTML Events
##RFILE    +====================+=======+===============+======+=================+
##FD   runCarousel.njs          |  25022|  9/21/22 14:20|   446| u1-20921-1420
##FD   runCarousel.njs          |  24742|  9/22/22 17:07|   447| u1-20922-1707
##DESC     .--------------------+-------+---------------+------+-----------------+
#            There are two sets of events.  Those for the slides and those for the
#            videos.  We've tried to
#
#              1. Start with the slides advancing every pJSON.Interval seconds
#
#              2. Clicking on "Pause" or "Resume" stops or starts the slides
#
#              3. Clicking on Video link on the first TOC page jumps to the video
#                 and without playing the video. The slides may continue.
#
#              4. Clicking on Cue Point link on the a Video TOC page jumps to
#                 the Cue Point in the video and starts playing the video.
#                 When a Video is playing, the slides are put on "Pause"
#
#              5. Clicking on a Page Number or the "Prev" or "Next" buttons jumps
#                 to a video and stops the previous video from playing, if necessary
#
#              6. Clicking on the Play Video button, will play the current video
#                 and the next video when the current video ends
#
#              7. Clicking on the Stop Video button, will stop the current video
#                 from playing and resume the slides advancing.
#
##LIC      .--------------------+----------------------------------------------+
#            Copyright (c) 2022 JScriptWare * Released under
#            MIT License: http://www.opensource.org/licenses/mit-license.php
##FNCS     .--------------------+----------------------------------------------+
             myCarousel.carousel             ( pConfig }
             myCarousel.slide                ( slideTo( e ) )  // fires before slide
             myCarousel.slid                 ( slideTo( e ) )  // fires after slide, not used
             play3.play                      ( e ) { .. }
             play3.pause                     ( e ) { .. }
             play3.ended                     ( e ) { .. }
             carousel-linked-nav>li>a'.click ( e ) { .. }
             toggleSlides                    ( e ) { .. }
             pauseVideo                      ( aFnc ) { .. }
             HMS2Secs                        ( aStr ) { .. }
             fmtID                           ( aCD, aID ) { .. }
             getCuePt                        ( aCuePt ) { .. }
             setCuePt                        ( nVidNo, nCuePt ) { .. }
             moveTo                          ( idx )  { .. }
             slideTo                         ( )  { .. }
             onClick                         ( me )  { .. }
             setCaption                      ( nID ) { .. }
             setClipCap                      ( pClip ) { .. }
             shoItems                        ( ) { .. }
             getActiveSlide                  ( aNext ) { .. }

##CHGS     .--------------------+----------------------------------------------+
# .(20901.01  9/01/22 RAM 12:00p| Created
# .(20904.05  9/04/22 RAM  2:15p| Wrote HMS2Secs
# .(20904.06  9/04/22 RAM  3:00p| Wrote video pause handler
# .(20905.01  9/05/22 RAM  9:30a| Pause video
# .(20905.02  9/05/22 RAM 10:00a| Pass 'setCuePt[2]' and 'onClick[5]' to pauseVideo
# .(20905.04  9/05/22 RAM 11:20a| Set Active class for MyLinks
# .(20905.06  9/05/22 RAM 12:50p| Assign bPlaying and bPaused
# .(20907.02  9/06/22 RAM  8:00p| Wrote toggleSlides
# .(20907.06  9/06/22 RAM  8:45p| Turn off bPaused
# .(20912.01  9/12/22 RAM  1:20p| Set slide interval to pJSON.Interval
# .(20914.01  9/14/22 RAM  3:40p| Stringify mMedia[ aID ].No
# .(20915.01  9/15/22 RAM 12:00p| Wrote Video play, pause and ended handlers
# .(20916.03  9/16/22 RAM  2:30p| Wrote setClipCap
# .(20916.04  9/16/22 RAM  2:45p| Return pClip instead of mClip[0].TS)
# .(20918.03  9/18/22 RAM  9:20p| Get Video URL from pJSON.VidURLs
# .(20922.03  9/22/22 RAM 10:55a| Fix big in getCuePt

##PRGM     +====================+===============================================+
##ID 69.600. Main               |
##SRCE     +====================+===============================================+
\*/
/*  INVOKE CAROUSEL */
// -------------------------------------------------------------------
$('#myCarousel')
//       .carousel( { interval: 7000      } )                                           //#.(20912.01.2)
         .carousel( { interval: nInterval * 1000 } )                                    // .(20912.01.2)
         .on( 'slide.bs.carousel', function ( e ) {
           if (bPlaying) {
//             console.log( `carousel[1]   Don't move to next slide.` )
//             e.preventDefault()
               return
               }
//           console.log( e.currentTarget )
//           document.getElementById('player').pause();                                 //#.(20904.06.2)
//           $('.play3').pause();                                                       // .(20904.06.2)
//           setCaption( getActiveSlide( 'next' ) )
             } );

/*  AUTOPLAY NAV HIGHLIGHT */
// -------------------------------------------------------------------
$('#myCarousel')
//      .bind( 'slide', slideTo( ) );  // fires before slide
        .bind( 'slid',  slideTo    );  // fires after slide, but it didn't because it binded slideTo(), not the function slideTo

// -------------------------------------------------------------------

/*  VIDEO PLAY, PAUSE EVENTS */
// -------------------------------------------------------------------
//$('.play3').play( function( e ) {
//         alert( `play3.onClick[1] ${ e.target }` )
//         } )

$('.play3').each( function( ) {                                                         // .(20915.01.1 RAM Beg Added)
              console.log( `play3[1]      Setting: '${ $(this).html().match( /id=.+? /) }'` )

         $(this).on( 'play', function( e ) {
          var aID = $(e.target).html().match( /id=.+? /)
//            alert( `play3.onPlay[1] ${ $(e.target).html().match( /id=.+? /) }` )
              console.log( `play3[1]      Play  slide ${ aID }` )
              $( '#SlidesToggle'  ).text( 'Resume' )
              $( '#myCarousel').carousel( 'pause'  )
              bPlaying=true
              } )
//            -------------------------------------------------------

         $(this).on( 'pause', function( e ) {
          var aID = $(e.target).html().match( /id=.+? /)
//            alert( `play3.onPause[1] ${ $(e.target).html().match( /id=.+? /) }` )
              console.log( `play3[2]      Pause slide ${ aID }` )
              $( '#SlidesToggle'  ).text( 'Pause' )
              $( '#myCarousel').carousel( 'cycle' )
              bPlaying=false
              } )
//            -------------------------------------------------------

         $(this).on( 'ended', function( e ) {
          var aID = $(e.target).html().match( /id=.+? /)
//        var mID = $('.item.active'), aID = mID[0] ? mID[0].id : ''
//            alert( `play3.onEnded[1] ${ $(e.target).html().match( /id=.+? /) }` )
              console.log( `play3[3]      End   slide ${ aID }` )
//        var aID = (nID == mItems.length - 1) ? '01' : `${ nID + 1 }`.padStart(2,'0')
              $( '#myCarousel').carousel( 'next' )
          var mID = $('.item.next'), aID = mID[0] ? mID[0].id : ''
          if (aID == '') {
              console.log( `play3[4]   ** Can't find next slide` )
              return
              }
          var pVideo = document.getElementById( `v${ aID.substr(1) }` )                 // $('#v6').play() no workie
          if (pVideo == undefined) {
              console.log( `play3[5]   ** Can't play next slide ${aID}` )
              return
              }
              console.log( `play3[5]      Play  slide id="v${ aID.substr(1) }"` )

              pVideo.play()
              pPrevVideo = pVideo

              $( '#SlidesToggle'  ).text( 'Resume' )
              $( '#myCarousel').carousel( 'pause'  )
              bPlaying=true

          var idx = `${mMedia[aID.substr(1)].No}`.replace( /\.[0-9]+/, '' )             // .(20914.01.4)
              $( '.carousel-linked-nav .active').removeClass( 'active' );               // remove active class from Page No. button
              $( '#myLinks li:eq(' + idx + ')' ).addClass(    'active' );               // .(20905.04.1 RAM The above works, but this is better)

//            setClipCap( aID.substr(1) )                                               //#.(20916.03.7)
              } )
//            -------------------------------------------------------
    } );                                                                                // .(20915.01.1 RAM End)

/*  SLIDE ON CLICK EVENT */
// -------------------------------------------------------------------
$('.carousel-linked-nav > li > a').click( function( e ) {
         onClick( this ) ;  // this = e.target
         } )
/*  Utilities by RAM */
// -------------------------------------------------------------------

     var pPrevVideo = {}                                                                // .(20905.02.1 RAM Prev Video)
     var bPlaying   = false                                                             // .(20905.06.1 RAM Let's see if this helps)
     var bPaused    = false                                                             // .(20907.06.2)

// ---------------  =  ---------------------------------------------------------------

function toggleSlides( e ) {                                                            // .(20907.02.3 RAM Beg Added)
         bPaused = $( e.target ).text() == 'Pause'
     if (bPaused) {
         $( e.target ).text('Resume')
         $('#myCarousel').carousel( 'pause' )
     } else {
         $( e.target ).text('Pause')
         $('#myCarousel').carousel( 'cycle' )
     }   }
// ---------------  =  ---------------------------------------------------------------

function pauseVideo( aFnc ) {                                                           // .(20905.02.1 RAM Beg pauseVideo)
     if (pPrevVideo && pPrevVideo.id) {
     var vdx    =     `${ pPrevVideo.id }`.substr(1)
         console.log( `pauseVideo[1] pPrevVideo: $( #v${ vdx } ).pause()` )
         pPrevVideo.pause()
     } else {
         console.log( `pauseVideo[2] pPrevVideo: Not Defined` )
         }
         pPrevVideo = {}
     var pSlide = $('.active'); if (pSlide[0]) {
     var vdx    =               `${ pSlide[0] ? pSlide[0].id : '' }`.substr(1)
         vdx    =   vdx ? vdx : `${ pSlide[1] ? pSlide[1].id : '' }`.substr(1)
//       console.log( `pauseVideo[2] Current vdx: 'v${ vdx }'` )

     var pVideo = $( `#v${ vdx }` ); if (pVideo[0]) {
         console.log( `${ `${aFnc}:`.padEnd(13) } pNextVideo: $( #v${ vdx } )` )
//       pVideo[0].pause()
         pPrevVideo = pVideo[0]
     } else {
     var mHTML  = pSlide[0].innerHTML.split('\n'); var aHTML = mHTML[1] ? mHTML[1] : mHTML.join(' ')
     if (aHTML.match( /Slide<\/a>$/) ) { debugger }
         console.log( `${ `${aFnc}:`.padEnd(13) } pSlide.id:  No active video. '${ aHTML.replace( /^ +/, '' ) }'` ) }
     } else {
         console.log( `${ `${aFnc}:`.padEnd(13) } pSlide:     No active slide` ) }
         }                                                                              // .(20905.02.1 RAM End)
// ---------------  =  ---------------------------------------------------------------

function HMS2Secs( aStr ) {                                                             // .(20904.05.1 RAM Beg Added)
     var n = (aStr = `${aStr}.` ).indexOf( '.' )
     var a =  aStr.substr(0, n), t = aStr.substr( n ).replace( /\./g, '' ); // console.log( a, t )
     var p =  a.split( /[:.]/ ), s = 0, m = 1;
  while (p.length > 0) { s += m * parseInt( p.pop(), 10); m *= 60; }
  return s // + '.' + t.padStart( 3, '0' ) ;
         }
// ---------------  =  ---------------------------------------------------------------
 function fmtID( aCD, aID ) {
      var m = aID.split( /[-.]/ ).map( n => `${n}`.padStart( 2, '0' ) );
   return `${ aCD }${ m.join( '-' ) }`
          }
// ---------------  =  ---------------------------------------------------------------

 function getCuePt( aCuePt ) {
      var aCueID =  fmtID( 'ic', aCuePt )
//    var mClip  =  mClips.filter( ( pClip, i ) => { return (aCuePt == pClip.No) ? i : 0 } )
//    var mClip  =  mClips.filter( ( pClip, i ) => { return (aCueID == pClip.ID) ? i : 0 } )    //#.(20922.03.1)
      var mClip  =  mClips.filter( ( pClip, i ) =>           aCueID == pClip.ID            )    // .(20922.03.1 RAM A real bug. For first Cue ID in mClips, i = 0)
   return mClip.length ? mClip[0] : '' // '00:00:00.000'                                        // .(20916.04.1 RAM Was: mClip[0].TS)
          }
// ---------------  =  ---------------------------------------------------------------

 function setCuePt( nVidNo, nCuePt ) {
//        alert( `Going to cue point: getCuePt( '${ nVidNo }.${ nCuePt }' )`)

      var pClip = getCuePt( `${ nVidNo }.${ nCuePt }` )                                 // .(20916.03.2)
      if (pClip) {                                                                      // .(20916.03.3)
//        alert( `Going to cue point: ${ aCuePt } for '${ nVidNo }.${ nCuePt }'.` )
      } else {
//        alert( `CuePt No, '${ `${nVidNo}`.replace( /\./g, '-' ) }-${ nCuePt }', not found` )
          alert( `CuePt No, '${  fmtID( 'ic', `${nVidNo}.${ nCuePt }` ) }', not found` )
          bPlaying = false                                                              // .(20905.06.2)
          return
          }
      var aCuePt  = pClip.TS
      var pSource = $( `#s${ nVidNo }`.replace( /\./g, '-' ) )
      var pVideo  = $( `#v${ nVidNo }`.replace( /\./g, '-' ) )
      if (pVideo.length) {
      var nSecs   = HMS2Secs( aCuePt ); nSecs += (nVidNo == 6.3 ? -558 : 0 )

          pSource[0].src = `${ pSource[0].src.replace( /#.+/, '' ) }#t=${ nSecs }`
      var aSrc    = unescape( pSource[0].src.replace( /.+\/videos\//, '/videos/' ) )
//        alert( `Setting URL to: '${ pSource[0].src }'` )
          console.log( `setCuePt[1]   Setting Cue Point for '${ nVidNo }.${ nCuePt }' to '${ aCuePt }' (URL: '${ aSrc }')` )

          pVideo[0].load()
          pauseVideo( 'setCuePt[2]' )                                                   // .(20905.02.3)
          setClipCap( pClip )                                                           // .(20916.03.4)

      if (nVidNo == 6.3) { $('#myCarousel').carousel(  10    ) }
        else {             $('#myCarousel').carousel( 'next' ) }

          bPlaying = true  // $('#myCarousel').carousel( { pause: true } )              // .(20905.06.3)
          pVideo[0].play()
          }
          }                                                                             // .(20904.05.1 RAM End)
// ---------------  =  ---------------------------------------------------------------

function moveTo( idx )  {
//       $('#myCarousel').carousel( idx - 1 )
//       $($('#myCarousel .item')[   7      ]).removeClass( 'active' )
//       $($('#myCarousel .item')[  idx - 1 ]).addClass(    'active' )
//       shoItems()
//       windows.event.stopPropagation();
         onClick( idx )
         }
// -------------------------------------------------------------------

function slideTo( )  {                                                                  // runs for click on Page No, click on Prev/Next buttons, and on autoplay
//       $("video").each( function () { this.pause() } );                               // .(20904.05.1 RAM Will this work?)
//       console.log( `\nslideTo[1]` )

     if (bPlaying) {                                                                    // .(20905.06.5 RAM Beg)
         console.log( `\nslideTo[1]    Don't move tp next slide, video is playing` )
//       debugger
         return
     } else {
         console.log( `\nslideTo[1]    No video is playing` )
         }                                                                              // .(20905.06.5 RAM Beg)

//   var idx =  $('#myCarousel.item.active').index();                                   // get index of currently active item. No Workir
//   var nID =  getActiveSlide( 'next' )
     var nID =  getActiveSlide( )                                                       // current active slide (item/page, not media row)
     if (nID == -1) {
         console.log( `slideTo[2]    Can't find current active slide` )
         return
         }
//   var idx =  mMedia[ nID ].No.replace( /^[0-9]+\//, '')
     var idx = `${mMedia[ nID ].No}`.replace( /\.[0-9]+/, '' )                          // .(20914.01.4)
     var vdx = `${mMedia[ nID ].No}`.replace( /\./g,     '-' )                          // .(20905.02.2 RAM Pause video).(20914.01.5)
     if (isNaN( idx )) {
         console.log( `slideTo[3]    mMedia[ ${nID} ] does not have a valid idx: ${ mMedia[ nID ] }` )
         return
         }
     var pVideo    = $( `#v${ vdx }` ); if (pVideo[0]) {
         bPlaying != pVideo[0].paused
     if (bPlaying && false) {
         console.log( `slideTo[4]    pVideo is ${ bPlaying ? "" : "NOT" } playing. ${ bPlaying ? "Don't slide." : "" }.` )
         return }
         }
         idx = idx * 1
//       console.log( `slideTo[5]    mMedia[ ${nID} ], slideNo: ${idx}, No: '${ mMedia[ nID ].No }', ID: ${ mMedia[ nID ].No }`                                )  //#.(20918.03.1 RAM before reset of Page No button, after Slide)
         console.log( `slideTo[5]    mMedia[ ${nID} ], slideNo: ${idx}, No: '${ mMedia[ nID ].No }', ID: ${ mMedia[ nID ].No }, URL: '${ mMedia[ nID ].URL }'` )  // .(20918.03.1 RAM Added URL)
//   var pVideo  = $( `#v${ vdx }` ); if (pVideo[0]) {                                  //#.(20905.02.3).(20905.02.5)
//       console.log( `slideTo[5]    pVideo: $( #v${ vdx } ).pause()` )
//       pVideo[0].pause() }                                                            //#.(20905.02.4).(20905.02.5)

         pauseVideo( 'slideTo[6]' )                                                     // .(20905.02.5)
         $('.carousel-linked-nav .active'            ).removeClass( 'active' );         // remove active class from Page No. button
//       $('.carousel-linked-nav li:eq(' + idx + ')' )   .addClass( 'active' );         //#.(20905.04.1) select currently active item and add active class
               $('#myLinks       li:eq(' + idx + ')' )   .addClass( 'active' );         // .(20905.04.1 RAM The above works, but this is better)

   idx = $('.carousel-linked-nav .active').index()                                      // .(20905.04.1 RAM Does idx change?)
//       console.log( `slideTo[7]    mMedia.row: ${nID} and slideNo: ${idx}` )          // after reset of Page No button, after Slide
         console.log( `slideTo[7]    mMedia[ ${nID} ], slideNo: ${idx}, No: '${ mMedia[ nID ].No }', ID: ${ mMedia[ nID ].No }` )          // before reset of Page No button, after Slide

//   var nID =  mIDs[ idx ]                                                             // Media Slide No <= Visible Item No
     if (typeof(nID) == 'undefined' || nID == -1) {
         console.log( `slideTo[8]    mMedia[ ${nID} ] is not defined` )
         }
         setCaption( nID )
         };
// -------------------------------------------------------------------

function onClick( me )  {
     if (isNaN(me) == false) { idx = me } else {
     var idx =  Number( $( me ).attr( 'href' ).substring( 1 ));                         // Slide No <= grab href, remove pound sign, convert to number
         }
     var nID =  mIDs[ idx ]                                                             // Media Slide No <= Visible Item No
         console.log( `\nonClick[1]    mMedia[ ${nID} ] and slideNo: ${idx}` )          // before reset of Page No button, after Slide

     if (typeof(nID) == 'undefined') {
         console.log(   `onClick[2]    What is nID: ${nID} and idx: ${idx}` )
         }
     var cdx = $('.carousel-linked-nav .active a' )[0].href.replace( /^.+#/, '')
     if (cdx == idx && bPlaying == false) {                                             // .(20905.06.4)
         console.log(   `onClick[3]    Clicking on the same item.  Don't move carousel` )
         return
         }
     if (cdx == idx && bPlaying == true) {                                              // .(20905.06.4)
         $('#myCarousel').carousel( 'pause' );
         console.log(   `onClick[3]    Move to same slide while video is playing` )
//       return
         }
         bPlaying = false

         $('#myCarousel').carousel( nID - 0 ); // triggers slideTo()                    // slide to number - 0 (account for zero indexing)
         pauseVideo(    'onClick[5]' )                                                  // .(20905.02.2)

//       slideTo() is run
//       $('.carousel-linked-nav .active' ).removeClass( 'active' );                    // remove current active class
//       $( me                      ).parent().addClass( 'active' );                    // add active class to just clicked on item

//       setCaption( nID )
  return false;  // don't follow the link

         } // eof onClick
// -------------------------------------------------------------------

function setCaption( nID ) {
     if (nID == -1) { return }
//   var nID =  mIDs[ idx ]                                                             // Media Slide No <= Visible Item No
//   if (typeof(nID) == 'undefined') {
//       console.log( `what is nID: ${nID} and idx: ${idx}` )
//       }
//   var idx =  mMedia[ nID ].No.replace( /^[0-9]+\//, '')
     var idx = `${mMedia[ nID ].No}`.replace( /\.[0-9]+/, '')                           // .(20914.01.8)

     if (isNaN( idx )) {
         console.log( `setCaption[1] mMedia[ ${nID} ] does not have a valid idx: ${ mMedia[ nID ] }` )
         return
         }
         idx = idx * 1
//   var aNo =  mMedia[ nID ].ID.substr( 2, 5 )
//   var aNo =  mMedia[ nID ].ID; aNo = idx.padStart(2,'0') + aNo.substr( 4, 3 )        // switch ItemNo with SlideNo
//       aNo =  aNo.replace( /^0/, '' ).replace( /\.0+/, '.' ).replace( /\.$/, '' )
     var aNo =  mMedia[ nID ].No; aNo = `${aNo}${ aNo ? ". " : "" }`

//       console.log( `setCaption[1] mMedia.row: ${nID} and slideNo: ${idx}, Title: '${aNo}${ mItems[ idx ].Title }'` )
         console.log( `setCaption[1] mMedia[ ${nID} ], slideNo: ${idx}, , Title: '${aNo}${ mItems[ idx ].Title }'` )
         $('.caption')[0].innerHTML = `${aNo}${ mItems[ idx ].Title }`

         } // eof setCaption
// -------------------------------------------------------------------

function setClipCap( pClip ) {                                                          // .(20916.03.5 RAM Beg Added)

     if (!pClip.ID) { return }

     var nID = mClips.filter( pClip1 => pClip.ID == pClip1.ID ); nID = nID[0] ? nID[0] : -1

     if (nID == -1) {
         console.log( `setClipCap[1] Not a valid pClip` )
         return
         }
     var aNo   =  pClip.No; aNo = `${aNo}${ aNo ? ". " : "" }`

         console.log( `setClipCap[2] mClips[ ${nID} ], Title: '${aNo}${ pClip.Marker }'` )
         $('.caption')[0].innerHTML = `${aNo}${ pClip.Marker }`

         } // eof setClipCaption                                                        // .(20916.03.5 RAM End)
// -------------------------------------------------------------------

function shoItems() {
     var mItems = $( '#myCarousel .item' )
         mItems.map( nID => { pItem = mItems[ nID ]
     var aItem  = pItem.innerHTML.substring(5,8)
     var aClass = $( pItem ).attr( 'class' )
         console.log( nID + ": " + aItem + " - " + aClass )
         } ) }
// -------------------------------------------------------------------

function getActiveSlide( aNext ) {
     var nID    = -1
     var mItems = $( '#myCarousel .item' )
         mItems.filter( i => {
             pItem  = mItems[i]
         var mHTML  = pItem.innerHTML.split( '\n' ) // .substring( 5, 8 )
         var aClass = $( pItem ).attr( 'class' )
//           console.log( i + ": " + aItem + " - " + aClass )
         if (aClass.match( /active/)) { nID = i
             console.log( `getActive[1]  mItems.row: ${i}: class "${aClass}", HTML: ${ mHTML[1].replace( /^ +/, '' ) }` )
             }
         } )
         nID   += (aNext == 'next') ? 1 : 0;
         nID    = (nID == mMedia.length) ? 0 : nID
         return nID // #myCarousel Item ID
         }
// -------------------------------------------------------------------
