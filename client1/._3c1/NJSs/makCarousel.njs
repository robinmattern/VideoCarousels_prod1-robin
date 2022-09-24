
     var  aVideoDir = 'assets/videos'
     var  aTitle    = "Tucker Carlson, Sep'2022"

     var  pJSON     =
           { "Interval": 4 // secs
           , "Items"   : [ { ID: 'it00      ', No: 0,  Title: aTitle, Type: 'TOC' } ]
           , "IDs"     : [ 0 ]
           , "Media"   : [ { ID: 'im00      ', No: "",   Len: '            ', URL: './rm20913-12_Tucker-Carlson_CoverPage.png', Size:  '     1000', UpdatedOn: '2022-02-28 20:24', Type: 'toc' } ]
           , "Clips"   : [ ]
              }

     var  iID       =  0
     var  mVideos   =  shell( 'ls -1 *.mp4', aVideoDir )                  // s.b. /_v[0-9]+/
          mVideos   =  mVideos.filter( aVideo => aVideo > '' && aVideo.match( /_v[0-9]-/ ) == null )                // .(20915.03.1 Remove _v[0-9] files)

//        fmtVideo( mVideos[0], 0 )
//        fmtVideo( mVideos[6], 6 )
          mVideos.forEach( fmtVideo )

//        console.log( fmtObj(  pJSON ) )
          console.log( fmtJSON( pJSON ) )

// ----------------------------------------------------------------------

function  fmtJSON( pJSON ) {
     var  aCR = "\n".padEnd(11)

     var  aJSON = `pJSON =\n`
                + `{ Interval: ${ pJSON.Interval }\n`
                + `, Items:  [ ${ pJSON.Items.map( fmtItem  ).join( aCR ).substr(2) } ${aCR}  ]\n`
                + `, IDs:    [ ${ pJSON.IDs.join( ', ' ) } ]\n\n`
                + `, Media:  [ ${ pJSON.Media.map( fmtMedia ).join( aCR ).substr(2) } ${aCR}  ]\n`
                + `, Clips:  [ ${ pJSON.Clips.map( fmtClip  ).join( aCR ).substr(2) } ${aCR}  ]\n`
                + `  }\n`
                + `//---------------------------------------------------------------------------------------------------------------------

      if (typeof(module) != 'undefined') {
          module.exports = pJSON
          }
      if (typeof(documents) == 'undefined') {
          console.log( pJSON )
          }
                  `
  return  aJSON
          }
// ----------------------------------------------------------------------

function  fmtVideo( aVideoFile, i ) {
     var  aLLCfile  =  aVideoFile.replace( /.mp4/, '' ).replace( /'/g, "\\\'" )

//        console.log(`ls -1 ${ aLLCfile }-proj-*` ); return
     var  mLLCs     =  shell( `ls -1 ${ aLLCfile }-proj-*`, aVideoDir )
      if (mLLCs.join() == "") { console.log( `Didn't find any .llc files: '${ aLLCfile }-proj-*.llc' in '${aVideoDir}'` ); return }

//        console.log( mLLCs[0] ); return
     var  aLLCdata  =  shell( `cat ${ mLLCs[0] }`, aVideoDir ).join('')
      if (aLLCdata     == "") { console.log( `Didn't find the .llc file: ${ mLLCs[0] }` ); return }

//        console.log(`pLLCdata = ${ aLLCdata }` ); process.exit()
    try { eval( `pLLCdata = ${ aLLCdata }` )
    } catch( pErr ) {           console.log( `Couldn't parse json in .llc file: ${ mLLCs[0] }` ); return }

//        console.log( pLLCdata )
          fmtSlide( pLLCdata, i + 1 )

// ----------------------------------------------------------------------

 function fmtSlide( pLLC, i ) {
      var n         =   pLLC.cutSegments.length - 1, k = `${i}`.padStart ( 2, '0' )

//    var pItem0    = { ID: `it${k}-00-${k}`, No:  i, Title: pLLC.cutSegments[ 0 ].name.replace( /^[0-9. ]+/, '' ), Type: 'Video' }
      var pItem0    = { ID: `it${k}      `,   No:  i, Title: pLLC.cutSegments[ 0 ].name.replace( /^[0-9. ]+/, '' ), Type: 'Video' }
      var pMedia0   = { ID: `im${k}      `,   No:  i, Len:   pLLC.cutSegments[ n ].end,  URL: `./${ pLLC.mediaFileName }`, Size: '         0', UpdatedOn: '2022-09-14 20:24', Type: 'mp4' }

          pJSON.IDs.push( ++iID )
//        pJSON.Items.push( pItem0  )
//        pJSON.Media.push( pMedia0 )

      if (n > 0) {
//    var pMedia1   = { ID: `im${k}-01-00`,   No: `${i}.1`,   Len: '            ', URL: './it01.00-01_News from Palanka.jpg'                  , Size:  '         ', UpdatedOn: '2022-02-28 20:24', Type: `steps${i}` }
          pMedia1   =   pMedia0
      var pMedia0   = { ID: `im${k}      `,   No:  i, Len: '            ', URL: ''                  , Size:  '         ', UpdatedOn: '2022-02-28 20:24', Type: `steps${i}` }

          pItem0.Type  = 'Steps'
          pMedia1.No   = `${i}.1`
          pMedia1.ID   = `im${k}-01   `

//        pJSON.Items[ pJSON.Items.length - 1 ].Type = 'Steps'
//        pJSON.Media[ pJSON.Media.length - 1 ].No   = `${i}.1`
//        pJSON.Media[ pJSON.Media.length - 1 ].ID   = `it${k}-01-00`
//        pJSON.Media.push( pMedia1 )

          iID        =  iID + 1
      var aID        = `ic${k}-01`
      var mSegments  =  pLLC.cutSegments.splice(1)
          mSegments.forEach( fmtSegment )
          } // eif n > 0

          pJSON.Items.push( pItem0  )
          pJSON.Media.push( pMedia0 )
      if (n > 0) {
          pJSON.Media.push( pMedia1 )
          }

// ----------------------------------------------------------------------

 function fmtSegment( pSegment, j ) {
      var nNo    = `${ aID.substr(2,2) }.${ j+1 }` * 1, l = `${ j+1 }`.padStart ( 2, '0' )
//        console.log(   `${aID}-${l}`, `"${nNo}"`, pSegment.name.replace( /^[0-9. ]+/, '' ) )
      var pClip  = { ID: `${aID}-${l}`, No: `${nNo}`, TS: pSegment.start, Marker: pSegment.name.replace( /^[0-9. ]+/, '' ) , Description: "" }
          pJSON.Clips.push( pClip )
//        pText.Clips.push( fmtClip( pClip ) )

          } // eof fmtSegment
// ----------------------------------------------------------------------
        } // eof fmtItem
// ----------------------------------------------------------------------
      } // eof fmtVideo
// ----------------------------------------------------------------------

function fmtItem( pItem ) {
//   var pItem   =    { ID: `it${k}-00-${k}`, No: i, Title: pLLC.cutSegments[ 0 ].name.replace( /^[0-9. ]+/, '' ), Type: 'Video' }
     var aItem   = `, { ID: ${          fmtStr( pItem.ID,         15, "'"    ) }`
                 +     `No: ${          fmtStr( pItem.No,          7, '"', 1 ) }`
                 +     `Title: ${       fmtStr( pItem.Title,      55         ) }`
                 +     `Type: ${        fmtStr( pItem.Type,        0, '"', 1 ) }`
                 +    ` }`
  return aItem
         }
// ----------------------------------------------------------------------

function fmtMedia( pMedia ) {
//   var pMedia  =    { ID: `it${k}-00-00`,   No: i, Len:   pLLC.cutSegments[ n ].end,  URL: `./${ pLLC.mediaFileName }`, Size: '         0', UpdatedOn: '2022-09-14 20:24', Type: 'mp4' }
     var aMedia  = `, { ID: ${          fmtStr( pMedia.ID,         15, "'"    ) }`
                 +     `No: ${          fmtStr( pMedia.No,          9, '"', 1 ) }`
                 +     `Len: ${         fmtStr( pMedia.Len,        16, "'", 1 ) }`
                 +    ` URL: ${         fmtStr( pMedia.URL,       105         ) }`
                 +     `Size: ${        fmtStr( pMedia.Size * 1,   10, "'", 1 ) }`
                 +     `UpdatedOn: ${   fmtStr( pMedia.UpdatedOn,  20         ) }`
                 +     `Type: ${        fmtStr( pMedia.Type,        0, '"', 1 ) }`
                 +    ` }`
  return aMedia
         }
// ----------------------------------------------------------------------

function fmtClip( pClip ) {
//   var pClip   =      { ID: `${aID}-${l}`, No: `${nNo}`, TS: pSegment.start, Marker: pSegment.name.replace( /^[0-9. ]+/, '' ) , Description: "" }
     var aClip   = `, { ID: ${          fmtStr( pClip.ID,         15, "'"    ) }`
                 +     `No: ${          fmtStr( pClip.No,         10, '"', 1 ) }`
                 +     `TS: ${          fmtStr( pClip.TS,         16, "'"    ) }`
                 +    ` Marker: ${      fmtStr( pClip.Marker,     55         ) }`
                 +     `Description: ${ fmtStr( pClip.Description, 0, '"', 1 ) }`
                 +    ` }`
  return aClip
         }
// ----------------------------------------------------------------------

function  shell( aCmd, aDir ) {
     var  execS     =  require( 'child_process' ).execFileSync;
//   var  mResult   =  execS( 'bash', [ 'ls','-l' ], pExecOpts )
     var  mCmds     =  aCmd.split( ' ' )
     var  aPath     = __dirname
     var  pExecOpts = { cwd: `${aPath}\\${ aDir || '' }`, encoding: 'ASCII' }
//        console.log( "mCmds[0]",mCmds[0] ); console.log( "mCmds.splice(1)", mCmds.splice(1) ); return
//        console.log( "pExecOpts",pExecOpts ); return
    try {
     var  aResult   =  execS( mCmds[0], mCmds.splice(1), pExecOpts )
  } catch(pErr) { aResult = "" }
//   var  mResult   =  execS( 'ls', ['-1'], pExecOpts )

   return aResult.split( '\n' )
          }  // eof shell
// ----------------------------------------------------------------------

function fmtStr( a, n, f, c ) {
         f = f ? f : '"'; n = n ? n : 0; var s = (isNaN(a) == true), g = (s == 0 && f == "'") ? "" : f, e = `${a || ' '}`.match( /^\s+$/ ) != null
     var c = c ? c : (g == "'"); n = c ? n : n - 2; c = (n == 0) ? 0 : c ; var d = (n == 0) ? 0 : (!c)
         a = (e == 1  && c == 1 && f == "'" && s == 0) ? `'${ ''.padEnd( n - 4 ) }'` : a; g = (e == 1  && f == "'" && s == 0) ? '' : g
  return pad( `${g}${a}${g}${ c ? ", " : "" }`, n, g ) + ( d ? ", " : "" )
function pad( a, n, f ) { return f == "" ? a.padStart( n ) : a.padEnd( n ) }
         } // eof fmtStr
// ----------------------------------------------------------------------

function  fmtObj( pObj ) {
     var  inspect   =  require( 'util' ).inspect;
   return inspect( pObj, { depth: 9 } )
          } // eof fmtObj
// ----------------------------------------------------------------------

/*
    var { exec } = require("child_process");
     var  exec   = require("child_process").execFile;

//   var  aPath = '/C/Home/Robin/Projs/Carousels/dev01-robin/client1/7c1_tucker-carlso-app'
     var  aPath = __dirname
     var  pExecOpts = { cwd: `${aPath}/assets/videos`, encoding: 'ASCII' }

//        pExecOpts.cwd = pExecOpts.cwd.replace( /\//g, '\\' )
//        console.log( pExecOpts.cwd); process.exit()

//        exec( 'ls', ['-l'], pExecOpts, onExec )
//        exec( 'bash', [ 'ls','-l' ], pExecOpts, onExec )


          console.log( mResult)

//        exec("pwd", onExec )
 // exec("./rdir .mp4", onExec )


function  onExec(error, stdout, stderr) {
      if (error ) { console.log( `error: ${error.message}` ); return; }
      if (stderr) { console.log( `stderr: ${stderr}`       ); return; }
          console.log(`stdout: ${stdout}`);
          }
*/