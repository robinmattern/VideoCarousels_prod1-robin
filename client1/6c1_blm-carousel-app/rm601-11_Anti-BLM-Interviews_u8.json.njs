/*
##=========+====================+================================================+
##RD         VideoCarousel      | JSON Data for Slides, Videos and CuePoints
##RFILE    +====================+=======+===============+======+=================+
##FD   Anti-BLM-Interviews.json |  19042|  9/22/22 09:01|   211| u5.20922-0908
##FD   Anti-BLM-Interviews.json |   5372|  9/23/22 18:28|    80| u8-20923-1828
##DESC     .--------------------+-------+---------------+------+-----------------+
#            This executble JSON object contains the data elements that define
#            the slides, video file names, and cue points. It also contains titles
#            and captions for each slide and cue point.
#
##LIC      .--------------------+----------------------------------------------+
#            Copyright (c) 2022 JScriptWare * Released under
#            MIT License: http://www.opensource.org/licenses/mit-license.php
##CHGS     .--------------------+----------------------------------------------+
# .(20901.01  9/01/22 RAM 12:00p| Created
# .(20921.01  9/21/22 RAM  2:20p| Added home page URL in VidURLs
# .(20923.02  9/23/22 RAM  6:25p| Switch order of Vernon Jones videos
# .(20923.03  9/23/22 RAM  6:30p| Added t=22 to first video to skip silence

##SRCE     +====================+===============================================+
*/

var pJSON =

{ "Interval": 4  // secs for each slide

, "VidURLs" : { "home"  : "../index.html"
//            , "home1" : "http://159.223.154.110/VideoCarousels/prod1-robin/client1/index.html"
              , "jp221" : "http://159.223.154.110/VideoCarousels/prod1-robin/client1/6c1_blm-carousel-app/assets/videos"
              , "local" : "./assets/videos"
                 }
, "IDs": [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

, "Items":
   [ { ID: 'it00.00-00', No: 0,  Title: "Anti-BLM Interviews, Jul'20"       , Type: 'TOC'   }
   , { ID: 'it01.00-00', No: 1,  Title: "Tucker, Jason Whitlock"            , Type: 'Video' }
   , { ID: 'it02.00-00', No: 2,  Title: "DailyCaller, Vernon Jones on Trump", Type: 'Video' }
   , { ID: 'it03.00-00', No: 3,  Title: "DailyCaller, Vernon Jones article" , Type: 'Video' }
   , { ID: 'it04.00-00', No: 4,  Title: "Martha, Jack Brewer Kids Shot"     , Type: 'Video' }
   , { ID: 'it05.00-00', No: 5,  Title: "Martha, John Ayaya Kids Shot"      , Type: 'Video' }
   , { ID: 'it06.00-00', No: 6,  Title: "Martha, Kids Shot"                 , Type: 'Video' }
   , { ID: 'it07.00-00', No: 7,  Title: "Vernon Jones, WarRoom"             , Type: 'Video' }
   , { ID: 'it08.00-00', No: 8,  Title: "Martha, Deroy Murdock"             , Type: 'Video' }
   , { ID: 'it09.00-00', No: 9,  Title: "Vernon Jones, YouTube"             , Type: 'Video' }
   , { ID: 'it10.00-00', No: 10, Title: "Kenneth Kline, Columbus Mayor"     , Type: 'Video' }
     ]
, "Media":
   [ { ID: 'im00.00-00', No:   "", Len: '            ', URL: ''                                                        , Size: '          ', UpdatedOn: ''                , Type: 'toc' }
   , { ID: 'im01.00-00', No:  "1", Len: '            ', URL: 'jp221!//rm00706)_Tucker_Jason-Whitlock.mp4#t=22'         , Size: '  72017892', UpdatedOn: '2020-07-09 20:21', Type: 'mp4' } // .(20923.03.1)
   , { ID: 'im02.00-00', No:  "2", Len: '            ', URL: 'jp221!//rm00706_DailyCaller_Vernon-Jones_onTrump.mp4'    , Size: '  65018325', UpdatedOn: '2020-07-10 00:46', Type: 'mp4' } // .(20923.02.1)
   , { ID: 'im03.00-00', No:  "3", Len: '            ', URL: 'jp221!//rm00706_DailyCaller_Vernon-Jones.mp4'            , Size: '   9167924', UpdatedOn: '2020-07-09 23:55', Type: 'mp4' } // .(20923.02.2)
   , { ID: 'im04.00-00', No:  "4", Len: '            ', URL: 'jp221!//rm00706_Martha_Jack-Brewer_Kids-Shot.mp4'        , Size: '  20670809', UpdatedOn: '2020-07-09 23:31', Type: 'mp4' }
   , { ID: 'im05.00-00', No:  "5", Len: '            ', URL: 'jp221!//rm00706_Martha_John-Ayaya_Kids-Shot.mp4'         , Size: '  50928854', UpdatedOn: '2020-07-09 23:27', Type: 'mp4' }
   , { ID: 'im06.00-00', No:  "6", Len: '            ', URL: 'jp221!//rm00706_Martha_Kids-Shot.mp4'                    , Size: '  89781700', UpdatedOn: '2020-07-09 23:25', Type: 'mp4' }
   , { ID: 'im07.00-00', No:  "7", Len: '            ', URL: 'jp221!//rm00706_Vernon-Jones_WarRoom.mp4'                , Size: '  18732697', UpdatedOn: '2020-07-10 00:31', Type: 'mp4' }
   , { ID: 'im08.00-00', No:  "8", Len: '            ', URL: 'jp221!//rm00706_YouTube_Vernon-Jones.mp4'                , Size: '  42442541', UpdatedOn: '2020-07-10 00:15', Type: 'mp4' }
   , { ID: 'im09.00-00', No:  "9", Len: '            ', URL: 'jp221!//rm00707)_Martha_Deroy-Murdock.mp4'               , Size: '  13153078', UpdatedOn: '2020-07-08 06:20', Type: 'mp4' }
   , { ID: 'im10.00-00', No: "10", Len: '            ', URL: 'jp221!//rm00707)_Martha_Kenneth-Kline_Columbus-Mayor.mp4', Size: '  75303439', UpdatedOn: '2020-07-09 23:48', Type: 'mp4' }
     ]
, "Clips": [ { } ]

   }
// ---------------------------------------------------------------------------------------------------------------------

      if (typeof( module    ) != 'undefined') {
          module.exports       =  pJSON
          }
      if (typeof( documents ) == 'undefined') {
          console.log( pJSON )
          }










