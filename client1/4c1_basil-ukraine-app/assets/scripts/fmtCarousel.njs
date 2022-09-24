/*\
##=========+====================+================================================+
##RD         fmtCarousel        | Format Video Carousel HTML
##RFILE    +====================+=======+===============+======+=================+
##FD   fmtCarousel.njs          |  19714|  9/21/22 10:50|   316| v1-20921-1050
##FD   fmtCarousel.njs          |  25163|  9/22/22 16:03|   411| u1-20922-1603
##FD   fmtCarousel.njs          |  25092|  9/24/22 16:04|   410| u1-20924-1604
##DESC     .--------------------+-------+---------------+------+-----------------+
#            Format the HTML to display and run videos as a slideshow with
#            Twitter's Bootstrap Carousel component.
#
##LIC      .--------------------+----------------------------------------------+
#            Copyright (c) 2022 JScriptWare * Released under
#            MIT License: http://www.opensource.org/licenses/mit-license.php
##FNCS     .--------------------+----------------------------------------------+
#           waitSecs( nSecs, onWaitComplete ) { .. }
#           waitFor(  aDiv, onWaitComplete ) { .. }
#           fmtLinks( mItems ) { .. }
#           fmtLink(  pItem ) { .. }
#           fmtMedia( mMedia ) { .. }
#           fmtMediaItem( pMediaItem ) { .. }
#           fmtVideoItem( pVideoItem, aID ) { .. }
#           fmtImageItem( pImageItem, aID ) { .. }
#           getSlides( mItems ) { .. }
#           fmtTOC( mItems, nNo, bNoLinks ) { .. }
#           fmtTOC_Item( pItem ) { .. }
#           fmtTOC1( mItems ) { .. }
#           fmtTOC2( mItems ) { .. }
#           fmtTOC_Item2( pTOCItem ) { .. }
#           fmtTOC3( ) { .. }
#           fmtSteps( mClips, nNo ) { .. }
#           fmtStep( pStep, j ) { .. }
#           fmtSteps1( mClips, nNo ) { .. }
#           fmtSteps3( mClips, nNo ) { .. }
#           fmtSteps4( mClips, nNo ) { .. }
#           fmtSteps6( mClips, nNo ) { .. }
#           fmtSteps7( mClips, nNo ) { .. }

##CHGS     .--------------------+----------------------------------------------+
# .(20901.01  9/01/22 RAM 12:00p| Created
# .(20903.01  9/02/22 RAM  2:30p| Wrote fmtImageItem
# .(20904.06  9/04/22 RAM  9:30a| Get rid of id="player"
# .(20905.03  9/04/22 RAM 10:15a| Change mClips to mItems
# .(20907.03  9/07/22 RAM  3:30p| Add id to pagination links
# .(20907.04  9/07/22 RAM  3:45p| Added Pause/Resume slideshow
# .(20912.01  9/12/22 RAM  8:40p| Added Interval from JSON file
# .(20914.01  9/14/22 RAM  1:15p| Stringify nID


# .(20917.01  9/17/22 RAM  4:10p| Added bNoLinks to fmtTOC
# .(20917.02  9/17/22 RAM  4:25p| Add setCuePt onClick function
# .(20920.01  9/20/22 RAM  5:30p| Get video URL from remote server

# .(20924.01  9/24/22 RAM  4:00p| Set cover timout to 15000

##PRGM     +====================+===============================================+
##ID 69.600. Main               |
##SRCE     +====================+===============================================+
\*/

     if (typeof(document) == 'undefined') {
         console.log( `Reading file: '${ __dirname   }/../../et601-11_Carousel.json.njs'` )
     var pJSON      =  require(          __dirname + '/../../et601-11_Carousel.json.njs'  )
         }
//   -----------------------------------------------------------------------------------------------

     var mItems     =  pJSON.Items
     var mMedia     =  pJSON.Media
     var mClips     =  pJSON.Clips
     var mIDs       =  pJSON.IDs

     var aTOC       =  fmtTOC(   mItems )
     var aMedia     =  fmtMedia( mMedia )
     var aLinks     =  fmtLinks( mItems )

     var nInterval  =  pJSON.Interval // secs                                                               // .(20912.01.1 Added)

//                     console.log( aTOC )
//                     console.log( aMedia )
//                     console.log( mLinks.join( '\n' ) )

     var aCarousel  =
                    [ `  `
                    , `  ${ aMedia }`
                    , `  `
                       ].join( '\n' )

     if (typeof(document) != 'undefined') {
//       $(document).ready( function() {



           $( '#myItems' ).html( aCarousel )    //  Add slides
//         $( '.carousel-control' ).toggle()    //# Turn on side nav buttons
           $( '#myLinks' ).html( aLinks )       //  Add TOC and Pagination links
           $( '#myLinks' ).toggle()             //  Turn off Pagination links links

//   waitFor( '#s7', function() {  // was: #myItems '#s7'  }
     waitSecs( 15000, function() {              // .(20924.01.2 RAM)

           $( '.carousel-control' ).toggle()    //  Turn on side nav buttons
//         $( '#myLinks' ).html( aLinks )       //# Add TOC and Pagination links
           $( '#myLinks' ).toggle()             //  Turn on Pagination links links
           $( '#cover'   ).toggle()             //  Turn off cover page
//         $( '#main'    ).toggle()
           } )
//       } )

      } else {
         console.log( "Running outside browser")
         console.log(  aCarousel )
         console.log(  aLinks    )
         }

// ---------------  =  ---------------------------------------------------------------

function waitSecs(  nSecs, onWaitComplete ) {
                    setTimeout( onWaitComplete, nSecs )
                    }
// ---------------  =  ---------------------------------------------------------------

function waitFor(   aDiv, onWaitComplete ) {
              if ($(aDiv).length) {                         onWaitComplete()
                } else {
                    setTimeout( function() { waitFor( aDiv, onWaitComplete ) }, 100 )
                    }
              }
// ---------------  =  ---------------------------------------------------------------

function fmtLinks( mItems ) {
     var mLinks     =  getSlides( mItems ) // mItems.filter( pItem => { return pItem.Type.match( /video/ ) != null } )
     var aHome      =     `<a href="${ pJSON.VidURLs.home }"><span class="material-icons" style="font-size:14px; height:20px;">Home</span></a>\n`
     var aLinks     =  aHome + mLinks.map( fmtLink ).join( '\n' )
//       aLinks    += `\n  <a                   href="#" onclick="toggleSlides( event )">Pause</a>`         // .(20907.04.1 RAM Added Pause/Resume slideshow)
         aLinks    += `\n  <a id="SlidesToggle" href="#" onclick="toggleSlides( event )">Pause</a>`         // .(20907.03.1 RAM Add id)
         aLinks    += `\n  <div class="caption"></div>`
  return aLinks
         }
//       ---------  =  -----------------------------------------------------

function fmtLink( pItem ) {
     var aActive    =  pItem.No == 0 ? 'class="active"' : '              '
  return              `  <li ${ aActive }><a href="#${ pItem.No * 1 }">${ pItem.No - 0 }</a></li>`
         }
//       ---------  =  -----------------------------------------------------

function fmtMedia( mMedia ) {
     var mMediaDivs =  mMedia.filter( pItem => { return pItem.Type.match( /mp4|png|jpg|toc|steps[0-9]+/ ) != null } )
     var aMediaDivs =  mMediaDivs.map( fmtMediaItem ).join( '\n\n  ' )
  return aMediaDivs
         }
// ---------------  =  ---------------------------------------------------------------

function fmtMediaItem( pMediaItem ) {
     var aID        = `${pMediaItem.No}`.replace( /[0-9]+\//, '' )                                          // .(20914.01.1 RAM Make sure it's a string)
         aID        = "-"                                                                                   // .(20914.01.1 RAM ??)
     var aID        =  isNaN( aID ) ? '       ' : `ID="${ aID.padStart( 2,'0' ) }"`
     if (pMediaItem.Type.match( /mp4/     )) { return fmtVideoItem( pMediaItem, aID ) }
     if (pMediaItem.Type.match( /png|jpg/ )) { return fmtImageItem( pMediaItem, aID ) }
     if (pMediaItem.Type.match( /toc/     )) { return fmtTOC(       mItems, pMediaItem.No ) }               // .(20905.03.1 RAM was mClips)

     if (pMediaItem.Type.match( /steps1/  )) { return fmtSteps1(    mClips, pMediaItem.No ) }

     if (pMediaItem.Type.match( /steps3/  )) { return fmtSteps3(    mClips, pMediaItem.No ) }
     if (pMediaItem.Type.match( /steps4/  )) { return fmtSteps4(    mClips, pMediaItem.No ) }

     if (pMediaItem.Type.match( /steps6/  )) { return fmtSteps6(    mClips, pMediaItem.No ) }
     if (pMediaItem.Type.match( /steps7/  )) { return fmtSteps7(    mClips, pMediaItem.No ) }
         }
// ---------------  =  ---------------------------------------------------------------

function fmtVideoItem( pVideoItem, aID ) {
//   var aID        = `${pVideoItem.No}`.replace( /\./g, '-' )-' )                                          //#.(20914.01.2 RAM ??)
     var aID        = `${pVideoItem.No}`.replace( /\./g, '-' )                                              // .(20914.01.2 RAM ??)

     var aURL       =  pVideoItem.URL;                                                                      // .(20920.01.1 RAM Beg)
     var nPos       =  aURL.indexOf( "!//" ), aStore = './assets/videos'
     if (nPos > 0)  {  aStore = pJSON.VidURLs[ aURL.substr( 0, nPos ) ]; aURL = aURL.substr( nPos + 3 ) }
     if (aStore)    {
//       aURL       =  aURL.match( /^http/ ) ?  aURL : `./assets/videos/${ aURL }`
         aURL       =  aURL.match( /^http/ ) ?  aURL : `${aStore}/${ aURL }`                                // .(20920.01.1 RAM End)
     } else {
         console.log( `** Invalid Video Store: '${ pVideoItem.URL.substr( 0, nPos ) }'.` ); return
         }

     var mDivs      = [ `<div        id="i${ aID }" class="item">` // <!-- ${ pVideoItem.No } -->`
//                    , `  <video    id="player"    class="play3"  controls>`  //#.(20904.06.1 RAM Get rid of id="player")
                      , `  <video    id="v${ aID }" class="play3"  controls>`  // .(20904.06.1)
//                    , `    <source                src=                "${ pVideoItem.URL }" type="video/mp4">`
//                    , `    <source id="s${ aID }" src="./assets/videos/${ pVideoItem.URL }" type="video/mp4">`   //#.(20920.01.2)
                      , `    <source id="s${ aID }" src=                "${           aURL }" type="video/mp4">`   // .(20920.01.2)
                      , `  </video><br><br>`
                      , `</div>` ]
  return mDivs.join( '\n  ' )
         }
// ---------------  =  ---------------------------------------------------------------

function fmtImageItem( pImageItem, aID ) {
     var aID        = `${pVideoItem.No}`.replace( /\./g, '-' )                                              // .(20914.01.3)
     var mDivs      = [ `<div        id="i${ aID }" class="item">` // <!-- ${ pImageItem.No } -->`
//                    , `  <img      id="s${ aID }" src=          "${ pImageItem.URL }" />`
                      , `  <img      id="s${ aID }" src="../images/${ pImageItem.URL }" />`
                      , `</div>` ]
  return mDivs.join( '\n  ' )
         }
// ---------------  =  ---------------------------------------------------------------

 function getSlides( mItems ) {
// return mItems.filter( pItem => { return pItem.Type.match( /video/ ) != null } )
   return mItems.filter( pItem => { return pItem.No >= 0 } )
          }
// ---------------  =  ---------------------------------------------------------------

 function fmtTOC( mItems, nNo, bNoLinks ) {                                                                 // .(20917.01.3)
      var aSlideTitle = bNoLinks ? 'slideTitle1' : 'slideTitle'                                             // .(20917.01.4)
      var mDivs     = [ `<div id="i0" class="item slideBG">`
                      , `  <div       class="${ aSlideTitle }">${ mItems[0].Title }</div>`                  // .(20917.01.5 RAM Make class dynamic)
                      , `  <ol        class="carousel-linked-nav slideItems">`

//                    , `  <ol        class="slideItems">`

//                    , `    <li      class="slideItem"   >News from Palanka</li>`
//                    , `    <li      class="slideItem"   >MOLD-Expo, Take 1, Basil at MOLD-Expo</li>`
//                    , `    <li      class="slideItem"   >MOLD-Expo, Take 2, First Stop</li>`
//                    , `    <li      class="slideItem"   >MOLD-Expo, Take 3, Reporting from Chisinau</li>`
//                    , `    <li      class="slideItem"   >MOLD-Expo, Take 3, Reporting from Chisinau</li>`
//                    , `    <li      class="slideItem"   >MOLD-Expo, Take 4, Refugees Coming & Leaving</li>`
//                    , `    <li      class="slideItem"   >C-TV Reporting, Coming and Leaving</li>`

//                    , `    <li class=""><a class="goTo" href="#1">1. News from Palanka</a></li>`
//                    , `    <li class=""><a class="goTo" href="#2">2. MOLD-Expo, Take 1, Basil at MOLD-Expo</a></li>`
//                    , `    <li class=""><a class="goTo" href="#3">3. MOLD-Expo, Take 2, First Stop</a></li>`
//                    , `    <li class=""><a class="goTo" href="#4">4. MOLD-Expo, Take 3, Reporting from Chisinau</a></li>`
//                    , `    <li class=""><a class="goTo" href="#5">5. MOLD-Expo, Take 3, Reporting from Chisinau</a></li>`
//                    , `    <li class=""><a class="goTo" href="#7">6. MOLD-Expo, Take 4, Refugees Coming & Leaving</a></li>`
//                    , `    <li class=""><a class="goTo" href="#7">7. C-TV Reporting, Coming and Leaving</a></li>`

//                    , `    <li><a   class="slideItem" href="#1">1. News from Palanka</a></li>`
//                    , `    <li><a   class="slideItem" href="#2">2. MOLD-Expo, Take 1, Basil at MOLD-Expo</a></li>`
//                    , `    <li><a   class="slideItem" href="#3">3. MOLD-Expo, Take 2, First Stop</a></li>`
//                    , `    <li><a   class="slideItem" href="#4">4. MOLD-Expo, Take 3, Report from Chisinau, Text</a></li>`
//                    , `    <li><a   class="slideItem" href="#5">5. MOLD-Expo, Take 3, Report from Chisinau, Slide</a></li>`
//                    , `    <li><a   class="slideItem" href="#6">6. MOLD-Expo, Take 4, Refugees Coming & Leaving</a></li>`
//                    , `    <li><a   class="slideItem" href="#7">7. C-TV Reporting, Coming and Leaving</a></li>`

                      ,  ... mItems.filter( pItem => { return pItem.No != 0 } ).map( fmtTOC_Item )

                      , `  </ol>`
                      , `</div>` ]

    function fmtTOC_Item( pItem ) {
         if (bNoLinks) {                                                                                    // .(20917.01.6)
      return `    <li      class="slideItem" >${ pItem.Title }</li>`                                        // .(20917.01.7)
         } else {                                                                                           // .(20917.01.8)
//    return `    <li><a   class="slideItem" href="#${ pItem.No }">${ pItem.No }. ${ pItem.Title }</a></li>`
      return `    <li><a   class="slideItem" href="#${ pItem.No }"               >${ pItem.Title }</a></li>`// .(20917.02.3)
          }   }                                                                                             // .(20917.01.9)
   return mDivs.join( '\n  ' )
          }
// ---------------  =  ---------------------------------------------------------------

function fmtTOC1( mItems ) {

//return fmtImageItem( { URL: './images/it00.00-00_TOC.jpg' } )
  return fmtImageItem( { URL: '../images/it00.00-00_TOC.jpg' } )                                            // .(20903.01.1 RAM)

     var mLIs       =  getSlides( mItems ) // mItems.filter( pItem => { return pItem.Type.match( /video/ ) != null } )
     var aOL        = [ `<ol       class="carousel-linked-nav">`
                      , `${ mLIs.map( fmtTOC_Item ).join( '\n    ' ) }`
                      , `</ol>` ]
  return aOL.join( '\n    ' )
         }
// ---------------  =  ---------------------------------------------------------------

function fmtTOC2( mItems ) {
     var mTOCItems  =  getSlides( mItems ) // mItems.filter( pItem => { return pItem.Type.match( /video/ ) != null } )
     var aTOCItems  = '<ol       class="carousel-linked-nav">\n'
                    + `${ TOCItems }\n`
                    + '</ol>\n'
         aTOCItems  =  aTocItems.replace( /${ TOCItems }/, mTOCItems.map( fmtTOC_Item2 ).join( '\n' ) )
  return aTOCItems
         }
// ---------------  =  ---------------------------------------------------------------

function fmtTOC_Item2( pTOCItem ) {
     var aLI        = `  <li><a  class="goTo" href="#${ pTOCItem.No }">${ pTOCItem.No }. ${ pTOCItem.Title }</a></li>`
//   var aLI        = '  <li><a  class="goTo" href="#{No}">{No}. {Title}</a></li>'
//       aLI        = aTOCItem.replace( /{No}/g,    pTOCItem.No )
//       aLI        = aTOCItem.replace( /{Title}/g, pTOCItem.Title )
  return aLI
         }
// ---------------  =  ---------------------------------------------------------------

function fmtTOC3( ) {
//return fmtImageItem( { URL: './images/it00.00-00_TOC.jpg' } )
  return fmtImageItem( { URL: '../images/it00.00-00_TOC.jpg' } )                                            // .(20903.01.2 RAM)
         }
// ---------------  =  ---------------------------------------------------------------

function fmtSteps( mClips, nNo ) {
     var aNo       = `${nNo}`.padStart( 2, '0' ), nVid = `${nNo}.1` * 1
     var aTitle    =  mItems.filter( pItem => pItem.ID.match( `^it${ aNo }` ) )[0].Title
     var mSteps    =  mClips.filter( pStep => pStep.ID.match( `^ic${ aNo }` ) )
     var mDivs     = [ `<div id="i${ aNo }" class="item slideBG">`
                     , `  <div       class="slideItemTitle">${ nNo }. ${ aTitle }</div>`
                     , `  <ol        class="slideItems scroll2">`

                      ,  ... mSteps.map( fmtStep )

                      , `  </ol>`
                      , `</div>` ]

    function fmtStep( pStep, j ) {
//       return `    <li><a   class="slideItem" onclick="setCuePt( ${ nVid }, ${ j + 1 } )">${ j + 1 }. ${ pStep.Marker }</a></li>`
         return `    <li><a   class="slideItem" onclick="setCuePt( ${ nVid }, ${ j + 1 } )"            >${ pStep.Marker }</a></li>`   // .(20917.02.4)
             }
   return mDivs.join( '\n  ' ).replace( /scroll2/, (mSteps.length <= 11) ? '' : 'scroll2' )
          }
// ---------------  =  ---------------------------------------------------------------

function fmtSteps1( mClips, nNo ) {
      var aID       = nNo.replace( /\./g, '-' )
      var mDivs     = [ `<div id="i${ aID }" class="item slideBG">` // <!-- ${ nNo } -->`
                      , `  <div       class="slideTitle">1. News from Palanka</div>`
                      , `  <ol        class="slideItems">`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  1)" >Basil Nikas Reporting</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  2)" >Ukraniane Refugees</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  3)" >German Husbands</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  4)" >Julie Take 1</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  5)" >Volunteer</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  6)" >Another Volunteer</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  7)" >More Volunteers</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  8)" >Giving SIM Cards</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2,  9)" >Julie Take 2</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 1.2, 10)" >Ana-Maria Botnarescu</a></li>`
                      , `  </ol>`
 //                   , `  <div class="note"> Note: These links to cue points in the video are not working yet. Click > (Next) button to view the video.</div>`
                      , `</div>` ]
   return mDivs.join( '\n  ' )
          }
// ---------------  =  ---------------------------------------------------------------

 function fmtSteps3( mClips, nNo ) {
      var aID       = nNo.replace( /\./g, '-' )
      var mDivs     = [ `<div id="i${ aID }" class="item slideBG">` // <!-- ${ nNo } -->`
                      , `  <div       class="slideTitle">3. First Stop</div>`
//                    , `  <ol        class="slideItems"></ol>`
                      , `  <div class="note"> Note: There are no links to cue points in the video yet. Click > (Next) button to view the video.</div>`
                      , `</div>` ]
   return mDivs.join( '\n  ' )
          }
// ---------------  =  ---------------------------------------------------------------

 function fmtSteps4( mClips, nNo ) {
      var aID       = nNo.replace( /\./g, '-' )
      var mDivs     = [ `<div id="i${ aID }" class="item slideBG">` // <!-- ${ nNo } -->`
                      , `  <div       class="slideTitle">4. Reporting from Chisinau</div>`
//                    , `  <ol        class="slideItems"></ol>`
                      , `  <div class="note"> Note: There are no links to cue points in the video yet. Click > (Next) button to view the video.</div>`
                      , `</div>` ]
   return mDivs.join( '\n  ' )
          }
// ---------------  =  ---------------------------------------------------------------

 function fmtSteps6( mClips, nNo ) {
      var aID       = nNo.replace( /\./g, '-' )
      var mDivs     = [ `<div id="i${ aID }" class="item slideBG">` // <!--${ nNo } -->`
                      , `  <div       class="slideTitle">6. MOLD-Expo, Take 4</div>`
                      , `  <div       class="scroll">`
                      , `  <ol        class="slideItems">`

                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.2,  1)" >Registration Site</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.2,  2)" >Getting off the Bus</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.2,  3)" >Showing Identification</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.2,  4)" >Getting on the Bus</a></li>`

                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3,  5)" >Carabinieri at Bus Door</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3,  6)" >Pleading to Get On</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3,  7)" >No More Room</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3,  8)" >The Door Closes</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3,  9)" >Bus is Ready to Go</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3, 10)" >One More Boy Get On</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3, 11)" >Sombody Objects</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3, 12)" >The Mem Talk About It</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3, 13)" >Another Bus Arrives</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3, 14)" >And Disappears</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 6.3, 15)" >Fade Out</a></li>`                                      , `  </ol>`
                      , `  </ol>`
                      , `  </div> <!-- eof scroll --> `
//                    , `  <div class="note"> Note: These links to cue points in the video are not working yet. Click > (Next) button to view the video.</div>`
                      , `</div>` ]
   return mDivs.join( '\n  ' )
          }
// ---------------  =  ---------------------------------------------------------------

 function fmtSteps7( mClips, nNo ) {
      var aID       = nNo.replace( /\./g, '-' )
      var mDivs     = [ `<div id="i${ aID }" class="item slideBG">` // <!--${ nNo } -->`
                      , `  <div       class="slideTitle">7. C-TV Reporting</div>`
//                    , `  <div       class="scroll">`
                      , `  <ol        class="slideItems">`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 7.2, 1)" >Coming and Leaving</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 7.2, 2)" >Basil Nikas</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 7.2, 3)" >Josep Borell</a></li>`
                      , `    <li><a   class="slideItem" onclick="setCuePt( 7.2, 4)" >Mother Speaking</a></li>`
                      , `  </ol>`
                      , `  <div class="note"> Note: These links to cue points in the video are not working yet. Click > (Next) button to view the video.</div>`
                      , `</div>` ]
   return mDivs.join( '\n  ' )
          }
// ---------------  =  ---------------------------------------------------------------
