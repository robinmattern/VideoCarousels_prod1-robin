/*
##=========+====================+================================================+
##RD         VideoCarousel      | JSON Data for Slides, Videos and CuePoints
##RFILE    +====================+=======+===============+======+=================+
##FD   Tucker-Carlson.json.njs  |  11880|  9/22/22 15:49|   102| u4-20922-1549
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

##SRCE     +====================+===============================================+
*/

var pJSON =

{ "Interval": 4  // secs for each slide

, "VidURLs" : { "home"  : "../index.html"
//            , "home1" : "http://159.223.154.110/VideoCarousels/prod1-robin/client1/index.html"
              , "jp221" : "http://159.223.154.110/VideoCarousels/prod1-robin/client1/7c1_tucker-carlson-app/assets/videos"
              , "local" : "./assets/videos"
                 }
, "IDs":  [ 0, 1, 3, 5, 7, 9, 11, 12 ]

, "Items":[ { ID: 'it00      ',  No: "0",   Title: "Tucker Carlson, Sep'2022"                           , Type: "TOC" }
          , { ID: 'it01      ',  No: "1",   Title: "Fall 2022 Elections"                                , Type: "Steps" }
          , { ID: 'it02      ',  No: "2",   Title: "Jason Witlock interview 1"                          , Type: "Steps" }
          , { ID: 'it03      ',  No: "3",   Title: "Tucker's speech at Family Leadership Summit"        , Type: "Steps" }
          , { ID: 'it04      ',  No: "4",   Title: "U.S. Corporations' Abortion and Paid Leave"         , Type: "Steps" }
          , { ID: 'it05      ',  No: "5",   Title: "Ned Ryan on the Importance of Family"               , Type: "Steps" }
          , { ID: 'it06      ',  No: "6",   Title: "Tucker on the Importance of Beauty"                 , Type: "Video" }
          , { ID: 'it07      ',  No: "7",   Title: "Are Political Messages just the fad of the moment?" , Type: "Steps" }
            ]
, "Media":[ { ID: 'im00      ',  No: "",      Len: '            ',  URL: "jp221!//rm20913-12_Tucker-Carlson_CoverPage.png"                                                         , Size:     1000, UpdatedOn: "2022-02-28 20:24", Type: "toc" }
          , { ID: 'im01      ',  No: "1",     Len: '            ',  URL: ""                                                                                                        , Size: '      ', UpdatedOn: "2022-02-28 20:24", Type: "steps1" }
          , { ID: 'im01-01   ',  No: "1.1",   Len: '00:12:07.831',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-1-00.00.14.086_1._Fall_2022_Elections.mp4"                         , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
          , { ID: 'im02      ',  No: "2",     Len: '            ',  URL: ""                                                                                                        , Size: '      ', UpdatedOn: "2022-02-28 20:24", Type: "steps2" }
          , { ID: 'im02-01   ',  No: "2.1",   Len: '00:02:51.004',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-2-00.12.21.847_2._Jason_Witlock_interview.mp4"                     , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
          , { ID: 'im03      ',  No: "3",     Len: '            ',  URL: ""                                                                                                        , Size: '      ', UpdatedOn: "2022-02-28 20:24", Type: "steps3" }
          , { ID: 'im03-01   ',  No: "3.1",   Len: '00:06:16.838',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-3-00.20.22.491_3._Tucker_s_speech_at_Family_Leadership_Summit.mp4" , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
          , { ID: 'im04      ',  No: "4",     Len: '            ',  URL: ""                                                                                                        , Size: '      ', UpdatedOn: "2022-02-28 20:24", Type: "steps4" }
          , { ID: 'im04-01   ',  No: "4.1",   Len: '00:03:23.040',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-4-00.26.40.538_4._U.S._Corporations__Abortion_and_Paid_Leave.mp4"  , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
          , { ID: 'im05      ',  No: "5",     Len: '            ',  URL: ""                                                                                                        , Size: '      ', UpdatedOn: "2022-02-28 20:24", Type: "steps5" }
          , { ID: 'im05-01   ',  No: "5.1",   Len: '00:02:23.013',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-6-00.36.17.377_5._Ned_Ryan_on_the_Importance_of_Family_2.mp4"      , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
          , { ID: 'im06      ',  No: "6",     Len: '00:06:57.600',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-7-00.38.54.337_6._Tucker_on_the_Importance_of_Beauty.mp4"          , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
          , { ID: 'im07      ',  No: "7",     Len: '            ',  URL: ""                                                                                                        , Size: '      ', UpdatedOn: "2022-02-28 20:24", Type: "steps7" }
          , { ID: 'im07-01   ',  No: "7.1",   Len: '00:02:15.670',  URL: "jp221!//sp20902-11-021_RawVideo00_v21-9-00.56.57.459_7._Are_Political_Messages_like_Fads-cut-merged.mp4" , Size: '      ', UpdatedOn: "2022-09-14 20:24", Type: "mp4" }
            ]
, "Clips":[ { ID: 'ic01-01-01',  No: "1.1",    TS: '00:00:16.840',  Marker: "School Board Elections"                             , Description: "" }
          , { ID: 'ic01-01-02',  No: "1.2",    TS: '00:00:51.311',  Marker: "Congressional Elections"                            , Description: "" }
          , { ID: 'ic01-01-03',  No: "1.3",    TS: '00:01:12.717',  Marker: "NYC District 19"                                    , Description: "" }
          , { ID: 'ic01-01-04',  No: "1.4",    TS: '00:01:38.665',  Marker: "Three other races"                                  , Description: "" }
          , { ID: 'ic01-01-05',  No: "1.5",    TS: '00:01:52.587',  Marker: "Why - The Abortion Issue"                           , Description: "" }
          , { ID: 'ic01-01-06',  No: "1.6",    TS: '00:02:05.366',  Marker: "Lack of Republican Turnout"                         , Description: "" }
          , { ID: 'ic01-01-07',  No: "1.7",    TS: '00:02:44.365',  Marker: "Why is turnout low"                                 , Description: "" }
          , { ID: 'ic01-01-08',  No: "1.8",    TS: '00:03:38.907',  Marker: "Does Lindsey Graham's message work?"                , Description: "" }
          , { ID: 'ic01-01-09',  No: "1.9",    TS: '00:04:46.594',  Marker: "Joe Kent's (WA) winning message"                    , Description: "" }
          , { ID: 'ic01-01-10',  No: "1.1",    TS: '00:05:32.305',  Marker: "The winning message"                                , Description: "" }
          , { ID: 'ic01-01-11',  No: "1.11",   TS: '00:07:00.994',  Marker: "Ron DeSantis' (FL) winning message"                 , Description: "" }
          , { ID: 'ic01-01-12',  No: "1.12",   TS: '00:08:37.924',  Marker: "Blake Masters' (AZ) winning message"                , Description: "" }
          , { ID: 'ic01-01-13',  No: "1.13",   TS: '00:09:38.918',  Marker: "Police response times"                              , Description: "" }
          , { ID: 'ic01-01-14',  No: "1.14",   TS: '00:10:22.529',  Marker: "Sen Coryn's (TX) losing message"                    , Description: "" }
          , { ID: 'ic01-01-15',  No: "1.15",   TS: '00:11:37.070',  Marker: "The key point"                                      , Description: "" }
          , { ID: 'ic02-01-01',  No: "2.1",    TS: '00:00:19.389',  Marker: "Our kids is the most important issue"               , Description: "" }
          , { ID: 'ic02-01-02',  No: "2.2",    TS: '00:01:07.136',  Marker: "Foccusing on Biden is a mistake"                    , Description: "" }
          , { ID: 'ic02-01-03',  No: "2.3",    TS: '00:02:24.547',  Marker: "The Democratic party is a satanic cult"             , Description: "" }
          , { ID: 'ic03-01-01',  No: "3.1",    TS: '00:00:25.280',  Marker: "What if voters think their votes don't matter"      , Description: "" }
          , { ID: 'ic03-01-02',  No: "3.2",    TS: '00:01:20.567',  Marker: "Do politicians listen to voters?"                   , Description: "" }
          , { ID: 'ic03-01-03',  No: "3.3",    TS: '00:02:05.948',  Marker: "How are your children doing?"                       , Description: "" }
          , { ID: 'ic03-01-04',  No: "3.4",    TS: '00:04:32.530',  Marker: "Are you happier working or raising children?"       , Description: "" }
          , { ID: 'ic03-01-05',  No: "3.5",    TS: '00:05:24.648',  Marker: "Children are the main source of joy in life."       , Description: "" }
          , { ID: 'ic03-01-06',  No: "3.6",    TS: '00:06:15.762',  Marker: "End of speech"                                      , Description: "" }
          , { ID: 'ic04-01-01',  No: "4.1",    TS: '00:00:01.848',  Marker: "U.S. Single Parenthood"                             , Description: "" }
          , { ID: 'ic04-01-02',  No: "4.2",    TS: '00:00:24.092',  Marker: "Paid Maternity Leave"                               , Description: "" }
          , { ID: 'ic04-01-03',  No: "4.3",    TS: '00:00:41.790',  Marker: "Money for Abortions"                                , Description: "" }
          , { ID: 'ic04-01-04',  No: "4.4",    TS: '00:00:54.122',  Marker: "Rebecca Heinrichs, Hudson Institution"              , Description: "" }
          , { ID: 'ic04-01-05',  No: "4.5",    TS: '00:01:46.074',  Marker: "Less money for flexible maternity care"             , Description: "" }
          , { ID: 'ic04-01-06',  No: "4.6",    TS: '00:02:50.129',  Marker: "Not the American Dream"                             , Description: "" }
          , { ID: 'ic05-01-01',  No: "5.1",    TS: '00:00:04.343',  Marker: "U.S. has highest rate of single parented children"  , Description: "" }
          , { ID: 'ic05-01-02',  No: "5.2",    TS: '00:00:46.491',  Marker: "The Goal is to Destroy the American Family"         , Description: "" }
          , { ID: 'ic05-01-03',  No: "5.3",    TS: '00:01:22.767',  Marker: "Without Fathers, Self-Goverence is not taught"      , Description: "" }
          , { ID: 'ic05-01-04',  No: "5.4",    TS: '00:01:35.315',  Marker: "Leaving the State to govern over the choas"         , Description: "" }
          , { ID: 'ic05-01-05',  No: "5.5",    TS: '00:01:49.331',  Marker: "% of School Shootings are by Fatherless Children"   , Description: "" }
          , { ID: 'ic07-01-01',  No: "7.1",    TS: '00:00:40.037',  Marker: "Why do Republican Leaders go along?"                , Description: "" }
          , { ID: 'ic07-01-02',  No: "7.2",    TS: '00:00:57.502',  Marker: "Every six months there's a new story to buy into."  , Description: "" }
            ]
  }
//---------------------------------------------------------------------------------------------------------------------

      if (typeof( module    ) != 'undefined') {
          module.exports       =  pJSON
          }
      if (typeof( documents ) == 'undefined') {
          console.log( pJSON )
          }
