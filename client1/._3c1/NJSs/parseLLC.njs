//      console.log( "parseLLC.njs[1]" ); // process.exit()

    var aFile = 'sp20902-11-016_Tucker-Carlson_v16-1662843640519.llc'
//  var aFile = 'sp20902-11-017_Tucker-Carlson_v17-1662843640519.llc'
//  var aFile = 'sp20902-11-018_Tucker-Carlson_v18-1662852417917.llc'

    var aFile = '11-021_Chapter1/sp20902-11-021_RawVideo00-proj.llc'
    var aMP4  = '11-021_Chapter1/sp20902-11-021_RawVideo00-cut-merged-1662933706835.mp4'

//  var aFile = '11-021_Chapter1/sp20902-11-022_RawVideo00-proj.llc'
//  var aMP4  = '11-021_Chapter1/sp20902-11-022_RawVideo00-cut-merged-1662934677633.mp4'

    var aFile = '11-021_Chapter1/sp20902-11-021_RawVideo00_v21-2-00.12.21.847_2._Jason_Witlock_interview-proj.llc'
    var aMP4  = ''

    var bSave =  false
    var bSecs =  false
//  var bSecs =  false
    var bSync =  false

    if (process.argv.length > 2) {
        aMP4  =  process.argv[2]
        aFile =  aMP4.replace( /.mp4/, `-proj.llc` )
        }
    if (process.argv.length > 3) {
        bSave =  bSave ? bSave : process.argv[3].match( /-save/ ) != null
        bSecs =  bSecs ? bSecs : process.argv[3].match( /-secs/ ) != null
        bSync =  bSync ? bSync : process.argv[3].match( /-sync/ ) != null
        }
    if (process.argv.length > 4) {
        bSave =  bSave ? bSave : process.argv[4].match( /-save/ ) != null
        bSecs =  bSecs ? bSecs : process.argv[4].match( /-secs/ ) != null
        bSync =  bSync ? bSync : process.argv[4].match( /-sync/ ) != null
        }
    if (process.argv.length > 5) {
        bSave =  bSave ? bSave : process.argv[5].match( /-save/ ) != null
        bSecs =  bSecs ? bSecs : process.argv[5].match( /-secs/ ) != null
        bSync =  bSync ? bSync : process.argv[5].match( /-sync/ ) != null
        }

//      console.log( `aFile: ${aFile}` ); process.exit()
//      console.log( `bSave: ${bSave}, ` ); process.exit()

    var aJSON   =  readFile( aFile );            // console.log( aJSON )
//  var pJSON   =  JSON.parse( aJSON )

    if (aJSON == "") { process.exit() }

        eval( `pJSON = ${ aJSON }` ); // console.log( pJSON )

    var aLLC    =  fmtLLC( pJSON )
        console.log( aLLC )

    var aTS     = (new Date).getTime()
    var aProj   = `-proj-${aTS}.llc`

    if (bSync) {

//    var aTS   = (new Date).toISOString()
//        aTS   = `${aTS.substr(3,1)}${aTS.substr(5,2)}${aTS.substr(8,2)}.${aTS.substr(11,2)}${aTS.substr(14,2)}`
//
//    var aProj = `-cut-merged-proj.llc`
//        aFile =  aMP4.replace( /.mp4/, aProj )
//        saveFile( aFile, aLLC )
//
//        bSecs =  false
//    var aLLC  =  fmtLLC( pJSON )
//    var aProj = `-cut-merged-proj-${ (new Date).getTime() }`
//
//    } else {

    var aProj   =  bSecs ? `-proj.llc` : aProj
        }

        aMP4    =  aMP4 ? aMP4 : aFile.replace( /-proj.llc/, '.mp4' )
        aFile   =  aMP4.replace( /.mp4/, aProj )

    if (bSave) {
        console.log( "Saving .llc file: " + aFile + "\n" )
//      console.log( `aFile: ${ aFile  }` )
//      console.log( `aMP4:  ${ aMP4 }` )

        saveFile( aFile, aLLC )
        }

// ----------------------------------------------------------------------

function fmtLLC( pJSON ) {

    pRSON = {}
    pRSON.version         = pJSON.version
    pRSON.mediaFileName   = bSync ? aMP4 : pJSON.mediaFileName
    mClips                = pJSON.cutSegments

//  console.log( fmtClip( mClips[0] ) ); return

//  pRSON.cutSegments     = aClips = mClips.map( pClip => fmtClip( pClip ) ).join( '\n' )
//  pRSON.cutSegments     = mClips.map( fmtClip )

    nStart = bSync ? mClips[0].start : 0

    aStr = `{ version: ${           pRSON.version }\n`
         + `, mediaFileName: '${    pRSON.mediaFileName }'\n`
         + `, cutSegments: \n  [ ${ mClips.map( fmtClip ).join( '\n  , ' ) }\n`
         + `    ]\n`
         + `  }`

    return aStr
    }
//  ----------------------------------------------------------------------

function fmtClip( pClip, i ) {
                             nSecs_end   = pClip.end  - nStart
                             pClip.start = sec2time( pClip.start, nStart )
                             pClip.end   = sec2time( pClip.end  , nStart )

     if (pClip.start.match( /^   /)) {                              // .(20915.02.1 RAM Beg Added)
         pClip.start = bSecs ? '0           ' : '00:00:00.000'      // .(20915.03.1 RAM Added 's)
         }                                                          // .(20915.02.1 RAM End)

     if (pClip.end.match( /^   /)) {
         aEnd = `                   `
      } else {
         aEnd = `, end: '${ `${ pClip.end }'` }`                    // .(20915.03.2)
         }

     var aStr =
//         `{ start: ${  `${ pClip.start }`.substr(0,12).padEnd(12) }`
//       + `, end: ${    `${ pClip.end   }`.substr(0,12).padEnd(12) }`
//         `{ start: ${  `${ pClip.start }`.toHHMMSS()  }`
//       + `, end: ${    `${ pClip.end   }`.toHHMMSS()  }`

//         `{ start: ${  `${ sec2time( pClip.start, nStart ) }` }`
//       + `, end: ${    `${ sec2time( pClip.end  , nStart ) }` }`

           `{ start: '${  `${ pClip.start }'` }`
         +`${ aEnd }`
         + `, name: '${  `${ pClip.name.replace( /'/g, "\\'" ) }'`.padEnd(50)  }`
         + ` }`

     if (bSync && i < (mClips.length - 1)) {
//       console.log( i,  mClips[ i ].end, pClip.end )
//       mClips[ i+1 ].start = pClip.end; nStart = 0
         mClips[ i+1 ].start = nSecs_end; nStart = 0
         }
 return aStr
        }
//  -----------------------------------------------------

   function toHHMMSS( nSecs ) {
// String.prototype.toHHMMSS = function () {
//  var sec_num   =  parseInt( this,  10); // don't forget the second param
    var sec_num   =  parseInt( nSecs, 10); // don't forget the second param
    var hours     =  Math.floor(sec_num / 3600);
    var minutes   =  Math.floor((sec_num - (hours * 3600)) / 60);

    var seconds   =  sec_num - (hours * 3600) - (minutes * 60);
    var millsecs  =  sec_num - (hours * 3600) - (minutes * 60) - seconds;

    if (hours     <  10) { hours    = "0" + hours;    }
    if (minutes   <  10) { minutes  = "0" + minutes;  }
    if (seconds   <  10) { seconds  = "0" + seconds;  }
    if (millsecs  <  10) { millsecs = "0" + millsecs; }

    return hours  + ':' + minutes + ':' + seconds + '.' + millsecs;
    }
//  -----------------------------------------------------

function sec2time(   nSecs,   nStart ) {
         nStart  =  nStart ? nStart : 0
     if (nSecs  ==  undefined) {   return "            " }  //#.(20915.02.3 RAM Added ', 0')
//   if (nSecs  ==  undefined) {   return "0.00        " }  // .(20915.02.3)
         aEnd = `                   `

         nSecs   =  nSecs  -  nStart
     if (bSecs) {   return `${nSecs}`.substr(0,12).padEnd(12) }

     var pad      =  function( num, size ) { return ('000' + num).slice( size * -1 ); },
         time     =  parseFloat( nSecs).toFixed( 3 ),
         hours    =  Math.floor( time / 60  / 60),
         minutes  =  Math.floor( time / 60) % 60,
         seconds  =  Math.floor( time - minutes * 60),
         millsecs =  time.slice(-3);
  return pad( hours, 2 ) + ':' + pad( minutes, 2 ) + ':' + pad( seconds, 2 ) + '.' + pad( millsecs, 3 );
         }
//  -----------------------------------------------------

function readFile( aFile ) {
     if (aFile.match( /^[\\\/]|[CcDdEeFfGgMm]:/ ) == null) { aFile=`./${aFile}` }
   try {
  return require( 'fs' ).readFileSync( `${ aFile }`, 'ASCII' )
  } catch(e) { console.log( `\n*** File not found, '${aFile}'` )
  return '' }
         }
//  -----------------------------------------------------

function saveFile( aFile, aData ) {
     if (aFile.match( /^[\\\/]|[CcDdEeFfGgMm]:/ ) == null) { aFile=`./${aFile}` }
  return require( 'fs' ).writeFileSync( `${ aFile }`, aData, 'ASCII' )
         }
