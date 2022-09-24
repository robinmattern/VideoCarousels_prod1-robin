/*
##=========+====================+================================================+
##RD         VideoCarousel      | JSON Data for Slides, Videos and CuePoints
##RFILE    +====================+=======+===============+======+=================+
##FD   rm601-11_Carousel_u5.json|  19042|  9/22/22 09:01|   211| u5.01-20922-0901
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
# .(20921.01  9/21/22 RAM  2:20p| Add home page URL in VidURLs
# .(20923.01  9/23/22 RAM  6:10p| Add URLs to various video services.  Vimeo works

##SRCE     +====================+===============================================+
*/

var pJSON =

{ "Interval": 4  // secs for each slide

, "VidURLs" : { "home"  : "../index.html"
//            , "home1" : "http://159.223.154.110/VideoCarousels/prod1-robin/client1/index.html"
              , "jp221" : "http://159.223.154.110/VideoCarousels/prod1-robin/client1/4c1_basil-ukraine-app/assets/videos"
              , "local" : "./assets/videos"
                 }

, "IDs"     : [ 0, 1, 3, 4, 6, 7, 8, 11 ]
//"IDs"     : [ 1, 2, 4, 5, 7, 8, 9, 12 ]
//"IPs"     : [ 0, 1, 0, 3, 4, 0, 6, 7, 8, 0, 0, 11, 0 ]

, "Items"   : [ { ID: 'it00-00-00', No: 0,  Title: "Basil Nikas, Moldova 3/12/22 "             , Type: 'TOC'   }

              , { ID: 'it01-00-01', No: 1,  Title: "News from Palanka, Menu"                   , Type: 'Steps' }
//            , { ID: 'it01-01-00', No:-1,  Title: "News from Palanka"                         , Type: 'Video' }

              , { ID: 'it02-01-02', No: 2,  Title: "MOLD-Expo, Basil at MOLD-Expo, Video"      , Type: 'Video' }

              , { ID: 'it03-00-03', No: 3,  Title: "MOLD-Expo, First Stop, Menu"               , Type: 'Steps' }
//            , { ID: 'it03-01-00', No:-1,  Title: "MOLD-Expo, First Stop"                     , Type: 'Video' }

              , { ID: 'it04-00-04', No: 4,  Title: "MOLD-Expo, Reporting from Chisinau, Menu"  , Type: 'Steps' }
              , { ID: 'it04-01-05', No: 5,  Title: "MOLD-Expo, Reporting from Chisinau, Video" , Type: 'Video' }

              , { ID: 'it05-00-06', No: 6,  Title: "MOLD-Expo, Refugees Coming & Leaving, Menu", Type: 'Steps' }
//            , { ID: 'it05-01-00', No:-1,  Title: "MOLD-Expo, Refugees Coming & Leaving"      , Type: 'Video' }
//            , { ID: 'it05-02-00', No:-1,  Title: "MOLD-Expo, Refugees Coming & Leaving"      , Type: 'Video' }

              , { ID: 'it06-00-07', No: 7,  Title: "C-TV Reporting, Coming and Leaving, Menu"  , Type: 'Steps' }
//            , { ID: 'it06-01-00', No:-1,  Title: "C-TV Reporting, Coming and Leaving"        , Type: 'Video' }
                ]

, "Media"   : [ { ID: 'im00-00-00', No: "",      Len: '            ', URL: './it00.00-00_TOC.jpg'                                        , Size:  '     1000', UpdatedOn: '2022-02-28 20:24', Type: 'toc' }

              , { ID: 'im01-01-01', No: "1.1",   Len: '            ', URL: './it01.00-01_News from Palanka.jpg'                          , Size:  '     1000', UpdatedOn: '2022-02-28 20:24', Type: 'steps1' }
//            , { ID: 'im01-01-00', No: "1.2",   Len: '00:03:40.000', URL:   'local!//bn20228-19-110_News-From-Palanka11.mp4'            , Size: '  80662442', UpdatedOn: '2022-02-28 20:24', Type: 'mp4' }
              , { ID: 'im01-01-00', No: "1.2",   Len: '00:03:40.000', URL:   'jp221!//bn20228-19-110_News-From-Palanka11.mp4'            , Size: '  80662442', UpdatedOn: '2022-02-28 20:24', Type: 'mp4' }

//            , { ID: 'im02-01.02', No: "2",     Len: '00:00:38.000', URL:         './sp20308-12-402_MOLD EXPO REFUGIATI PART 2_1.1.mp4' , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
//            , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'jp221!//sp20308-12-402_MOLD EXPO REFUGIATI PART 2_1.1.mp4' , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }

//            , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'jp221!//sp20308-12-402_MOLD%20EXPO%20REFUGIATI%20PART%202_1.1.mp4'                                                                   , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
// google x   , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://drive.google.com/file/d/194PjcDcGxr4SEpc_wfq7T0iua9xXvwL7/view'                                                              , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
// onedrive x , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://sicomm.sharepoint.com/:v:/s/AgencySupport/EW6nQpuYo9BFuBXdaaFGFNsBB2N4pvJRmvn_FwvwQzmwsg?e=n9k5ey'                           , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
// onedrive   , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://sicomm-my.sharepoint.com/:v:/g/personal/robin_mattern_sicomm_net/ESpCwfe2TyVAmyt98998TUMB_9Od5b4GTt7mRK0FyznEMg?e=Zecn7W'    , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
// Vimeo x    , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://vimeo.com/750999515#t=20.2'                                                                                                  , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
// dropbox    , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://www.dropbox.com/s/tyygc4vs1mzaa7o/sp20308-12-402_MOLD%20EXPO%20REFUGIATI%20PART%202_1.1.mp4?dl=0'                            , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
// google x   , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://drive.google.com/file/d/194PjcDcGxr4SEpc_wfq7T0iua9xXvwL7/preview'                                                           , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
//            , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'http://159.223.154.110/VideoCarousels/prod1-robin/client1/4c1_basil-ukraine-app/assets/videos/sp20308-12-402_MOLD%20EXPO%20REFUGIATI%20PART%202_1.1.mp4'                           , Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }
              , { ID: 'im02-01-02', No: "2",     Len: '00:00:38.000', URL:   'https://player.vimeo.com/progressive_redirect/playback/750999515/rendition/720p/file.mp4?loc=external&signature=529820f9f437876885ea5c80c0975653f5c5ff87578a41ad4adc435c32bdc90a', Size: '   4355619', UpdatedOn: '2022-03-12 16:33', Type: 'mp4' }

              , { ID: 'im03-00-03', No: "3.1",   Len: '            ', URL: './it03.01-00_First Stop.jpg'                                 , Size: '      1000', UpdatedOn: '2022-03-12 16:34', Type: 'steps3' }
              , { ID: 'im03-01-00', No: "3.2",   Len: '00:01:02.000', URL:   'jp221!//sp20308-12-402_MOLD EXPO REFUGIATI PART 2_2.1.mp4' , Size: '   9503467', UpdatedOn: '2022-03-12 16:34', Type: 'mp4' }

              , { ID: 'im04-00-04', No: "4",     Len: '            ', URL: './it04.00-04_Report from Chisinau.jpg'                       , Size: '      1000', UpdatedOn: '2022-03-12 16:34', Type: 'steps4' }
              , { ID: 'im04-01-05', No: "5",     Len: '00:01:28.000', URL:   'jp221!//sp20308-12-402_MOLD EXPO REFUGIATI PART 2_3.1.mp4' , Size: '   9710937', UpdatedOn: '2022-03-12 16:35', Type: 'mp4' }

              , { ID: 'im05-00-06', No: "6.1",   Len: '            ', URL: './it05.00-06_Refugees Coming & Leaving.mp4'                  , Size: '      1000', UpdatedOn: '2022-03-12 16:34', Type: 'steps6' }
              , { ID: 'im05-01-00', No: "6.2",   Len: '00:06:11.000', URL:   'jp221!//sp20308-12-402_MOLD EXPO REFUGIATI PART 2_4.1.mp4' , Size: '  69937551', UpdatedOn: '2022-03-12 16:41', Type: 'mp4' }
              , { ID: 'im05-02-00', No: "6.3",   Len: '00:11:16.000', URL:   'jp221!//sp20308-12-402_MOLD EXPO REFUGIATI PART 2_4.5.mp4' , Size: ' 135869172', UpdatedOn: '2022-03-12 16:49', Type: 'mp4' }

              , { ID: 'im06-00-07', No: "7.1",   Len: '            ', URL: './it06.00-07_C-TV Reporting.jpg'                             , Size: '      1000', UpdatedOn: '2022-03-12 16:34', Type: 'steps7' }
              , { ID: 'im06-01-00', No: "7.2",   Len: '00:01:49.000', URL:   'jp221!//sp20310-04-111_BETA MOLDEXPO ENG_byVSDC.mp4'       , Size: '  12016688', UpdatedOn: '2022-03-12 14:03', Type: 'mp4' }
                ]

, "Clips"   : [ { ID: 'ic01-01-00', No: "1.1",    TS: '00:00:00.000', Marker: "News from Palanka"       , Description: "" }
              , { ID: 'ic01-02-01', No: "1.2.1",  TS: '00:00:13.850', Marker: "Basil Nikas Reporting"   , Description: "From Polanka, Moldova" }
              , { ID: 'ic01-02-02', No: "1.2.2",  TS: '00:00:49.000', Marker: "Ukraniane Refugees"      , Description: "Even though the situation in Ukraine is hard, the Moldvians are helping with all they have" }
              , { ID: 'ic01-02-03', No: "1.2.3",  TS: '00:00:54.750', Marker: "German Husbands"         , Description: "Waiting for his wife and relatives" }
              , { ID: 'ic01-02-04', No: "1.2.4",  TS: '00:01:25.850', Marker: "Julie Take 1"            , Description: "Ukranian Refugee" }
              , { ID: 'ic01-02-05', No: "1.2.5",  TS: '00:02:31.600', Marker: "Volunteer"               , Description: "Helping Refugees" }
              , { ID: 'ic01-02-06', No: "1.2.6",  TS: '00:02:40.900', Marker: "Another Volunteer"       , Description: "We are here from different churches. We are helping, giving them food. I am here from yesterday, didn't even sleep." }
              , { ID: 'ic01-02-07', No: "1.2.7",  TS: '00:02:50.550', Marker: "More Volunteers"         , Description: "We went from that part of the boarder to give them food.  Hungry people are staying in lines and also offering here." }
              , { ID: 'ic01-02-08', No: "1.2.8",  TS: '00:03:04.200', Marker: "Giving SIM Cards"        , Description: "We are trying to give them all SIM Cards, a place to live.  People are coming and proposing a free place." }
              , { ID: 'ic01-02-09', No: "1.2.9",  TS: '00:03:19.400', Marker: "Julie Take 2"            , Description: "" }
              , { ID: 'ic01-02-10', No: "1.2.10", TS: '00:03:28.600', Marker: "Ana-Maria Botnarescu"    , Description: "Reporter / Operator: Vitalie Afganu" }
              , { ID: 'ic01-02-11', No: "",       TS: '00:03:40.000', Marker: "The End"                 , Description: "" }

              , { ID: 'ic02-01-00', No: "2.1",    TS: '00:00:00.000', Marker: "MOLD-Expo, Take 1"       , Description: "" }
              , { ID: 'ic02-01-01', No: "2.1.1",  TS: '00:00:00.000', Marker: "Basil at MOLD-Expo"      , Description: "" }
              , { ID: 'ic02-01-02', No: "",       TS: '00:00:38.000', Marker: "The End"                 , Description: "" }

              , { ID: 'ic03-01-00', No: "3.1",    TS: '00:00:00.000', Marker: "MOLD-Expo, Take 2"       , Description: "" }
              , { ID: 'ic03-01-01', No: "3.1.1",  TS: '00:00:38.000', Marker: "First Stop"              , Description: "" }
              , { ID: 'ic03-01-02', No: "",       TS: '00:01:02.000', Marker: "The End"                 , Description: "" }

              , { ID: 'ic04-01-00', No: "4.1",    TS: '00:00:00.000', Marker: "MOLD-Expo, Take 3"       , Description: "" }
              , { ID: 'ic04-01-01', No: "4.1.1",  TS: '00:01:40.000', Marker: "Reporting from Chisinau" , Description: "" }
              , { ID: 'ic04-01-02', No: "",       TS: '00:01:28.000', Marker: "The End"                 , Description: "" }

              , { ID: 'ic06-01-00', No: "6.1",    TS: '00:00:00.000', Marker: "MOLD-Expo, Take 4"       , Description: "" }
              , { ID: 'ic06-02-01', No: "6.2.1",  TS: '00:00:00.000', Marker: "Registration Site"       , Description: "" }
              , { ID: 'ic06-02-02', No: "6.2.2",  TS: '00:03:08.000', Marker: "Getting off the Bus"     , Description: "" }
              , { ID: 'ic06-02-03', No: "6.2.3",  TS: '00:05:09.000', Marker: "Showing Identification"  , Description: "" }
              , { ID: 'ic06-02-04', No: "6.2.4",  TS: '00:06:05.000', Marker: "Getting on the Bus"      , Description: "" }

              , { ID: 'ic06-03-05', No: "6.3.5",  TS: '00:09:19.000', Marker: "Carabinieri at Bus Door" , Description: "" }
              , { ID: 'ic06-03-06', No: "6.3.6",  TS: '00:11:21.000', Marker: "Pleading to Get On"      , Description: "" }
              , { ID: 'ic06-03-07', No: "6.3.7",  TS: '00:12:17.000', Marker: "No More Room"            , Description: "" }
              , { ID: 'ic06-03-08', No: "6.3.8",  TS: '00:14:07.000', Marker: "The Door Closes"         , Description: "" }
              , { ID: 'ic06-03-09', No: "6.3.9",  TS: '00:14:34.000', Marker: "Bus is Ready to Go"      , Description: "" }
              , { ID: 'ic06-03-10', No: "6.3.10", TS: '00:16:10.000', Marker: "One More Boy Get On"     , Description: "" }
              , { ID: 'ic06-03-11', No: "6.3.11", TS: '00:17:14.000', Marker: "Sombody Objects"         , Description: "" }
              , { ID: 'ic06-03-12', No: "6.3.12", TS: '0O:17:59.000', Marker: "The Mem Talk About It"   , Description: "" }
              , { ID: 'ic06-03-13', No: "6.3.13", TS: '0O:19:05.000', Marker: "Another Bus Arrives"     , Description: "" }
              , { ID: 'ic06-03-14', No: "6.3.14", TS: '00:20:15.500', Marker: "And Disappears"          , Description: "" }
              , { ID: 'ic06-03-15', No: "6.3.15", TS: '00:20:35.000', Marker: "Fade Out"                , Description: "" }
              , { ID: 'ic06-03-16', No: "",       TS: '00:21:00.000', Marker: "The End"                 , Description: "" }

              , { ID: 'ic07-01-00', No: "7.1",    TS: '00:00:00.000', Marker: "C-TV Reporting"          , Description: "" }
              , { ID: 'ic07-02-01', No: "7.2.1",  TS: '00:00:04.000', Marker: "Coming and Leaving"      , Description: "Thousands of refugees are dailing coming to find a place to stay" }
              , { ID: 'ic07-02-02', No: "7.2.2",  TS: '00:00:22.500', Marker: "Basil Nikas"             , Description: "Cotidianul TV Reporter" }
              , { ID: 'ic07-02-03', No: "7.2.3",  TS: '00:01:02.000', Marker: "Josep Borell"            , Description: "High Representative of the EU Foreign Affairs" }
              , { ID: 'ic07-02-04', No: "7.2.4",  TS: '00:01:28.250', Marker: "Mother Speaking"         , Description: "How hard it is for kids" }
              , { ID: 'ic07-02-05', No: "",       TS: '00:01:49.000', Marker: "The End"                 , Description: "" }

                ]
              }
// ---------------------------------------------------------------------------------------------------------------------

      if (typeof( module    ) != 'undefined') {
          module.exports       =  pJSON
          }
      if (typeof( documents ) == 'undefined') {
          console.log( pJSON )
          }

/*
 1.1  00:03:40.000  80662442  2022-02-28 20:24  ./bn20228-19-110_News-From-Palanka11.mp4

 2.1  00:00:38.000   4355619  2022-03-12 16:33  ./sp20308-12-402_MOLD EXPO REFUGIATI PART 2_1.1.mp4
 2.2  00:01:02.000   9503467  2022-03-12 16:34  ./sp20308-12-402_MOLD EXPO REFUGIATI PART 2_2.1 .mp4
 2.3  00:01:28.000   9710937  2022-03-12 16:35  ./sp20308-12-402_MOLD EXPO REFUGIATI PART 2_3.1.mp4

 2.4  00:06:11.000  69937551  2022-03-12 16:41  ./sp20308-12-402_MOLD EXPO REFUGIATI PART 2_4.1.mp4
 2.5  00:11:16.000 135869172  2022-03-12 16:49  ./sp20308-12-402_MOLD EXPO REFUGIATI PART 2_4.5.mp4

 3.1  00:01:49.000  12016688  2022-03-12 14:03  ./sp20310-04-111_BETA MOLDEXPO ENG_byVSDC,20fps,40%.mp4

---------------------------------------------------------------------------------------------------------------------

, { ID: "1.1"    , Len: "00:03:40.000", URL: "/videos/bn20228-19-110_News-From-Palanka11.mp4"                , Size: "  80662442", UpdatedOn: "2022-02-28 20:24" }
, { ID: "1.1.1"   , TS: "00:00:13.850", Marker: "Basil Nikas"             , Description: "From Polanka, Moldova" }
, { ID: "1.1.2"   , TS: "00:00:49.000", Marker: "Ukraniane Refugees"      , Description: "Even though the situation in Ukraine is hard, the Moldvians are helping with all they have" }
, { ID: "1.1.3"   , TS: "00:00:54.750", Marker: "German Husbands"         , Description: "Waiting for his wife and relatives" }
, { ID: "1.1.4"   , TS: "00:01:25.850", Marker: "Julies"                  , Description: "Ukranian Refugee" }
, { ID: "1.1.5"   , TS: "00:02:31.600", Marker: "Volunteer"               , Description: "Helping Refugees" }
, { ID: "1.1.6"   , TS: "00:02:40.900", Marker: "Another Volunteer"       , Description: "We are here from different churches. We are helping, giving them food. I am here from yesterday, didn't even sleep." }
, { ID: "1.1.7"   , TS: "00:02:50.550", Marker: "More Volunteers"         , Description: "We went from that part of the boarder to give them food.  Hungry people are staying in lines and also offering here." }
, { ID: "1.1.8"   , TS: "00:03:04.200", Marker: "Giving SIM Cards"        , Description: "We are trying to give them all SIM Cards, a place to live.  People are coming and proposing a free place." }
, { ID: "1.1.9"   , TS: "00:03:19.400", Marker: "Julie"                   , Description: "" }
, { ID: "1.1.10"  , TS: "00:03:28.600", Marker: "Reporter: Ana-Maria Botnarescu", Description: "Operator: Vitalie Afganu" }

, { ID: "2.1"    , Len: "00:00:38.000", URL: "/videos/sp20308-12-402_MOLD EXPO REFUGIATI PART 2_1.1.mp4"     , Size: "   4355619", UpdatedOn: "2022-03-12 16:33" }
, { ID: "2.1.1"   , TS: "00:00:00.000", Marker: "Basil at MoldExpo"       , Description: "" }

, { ID: "2.2"    , Len: "00:01:02.000", URL: "/videos/sp20308-12-402_MOLD EXPO REFUGIATI PART 2_2.1 .mp4"    , Size: "   9503467", UpdatedOn: "2022-03-12 16:34" }
, { ID: "2.2.1"   , TS: "00:00:38.000", Marker: "First Stop"              , Description: "" }

, { ID: "2.3"    , Len: "00:01:28.000", URL: "/videos/sp20308-12-402_MOLD EXPO REFUGIATI PART 2_3.1.mp4"     , Size: "   9710937", UpdatedOn: "2022-03-12 16:35" }
, { ID: "2.3.1"   , TS: "00:01:40.000", Marker: "MOLDExpo, Chisinau"      , Description: "" }

, { ID: "2.4"    , Len: "00:06:11.000", URL: "/videos/sp20308-12-402_MOLD EXPO REFUGIATI PART 2_4.1.mp4"     , Size: "  69937551", UpdatedOn: "2022-03-12 16:41" }
, { ID: "2.4.1"   , TS: "00:03:08.000", Marker: "Registration Site"       , Description: "" }
, { ID: "2.4.2"   , TS: "00:05:09.000", Marker: "Getting off the Bus"     , Description: "" }
, { ID: "2.4.3"   , TS: "00:06:05.000", Marker: "Showing Identification"  , Description: "" }
, { ID: "2.4.4"   , TS: "00:06:49.000", Marker: "Getting on the Bus"      , Description: "" }

, { ID: "2.4"    , Len: "00:11:16.000", URL: "/videos/sp20308-12-402_MOLD EXPO REFUGIATI PART 2_4.5.mp4"     , Size: " 135869172", UpdatedOn: "2022-03-12 16:49" }
, { ID: "2.4.5"   , TS: "00:09:19.000", Marker: "Carabinieri at Bus Door" , Description: "" }
, { ID: "2.4.6"   , TS: "00:11:21.000", Marker: "Pleading to Get On"      , Description: "" }
, { ID: "2.4.7"   , TS: "00:12:17.000", Marker: "No More Room"            , Description: "" }
, { ID: "2.4.8"   , TS: "00:14:07.000", Marker: "The Door Closes"         , Description: "" }
, { ID: "2.4.9"   , TS: "00:14:34.000", Marker: "Bus is Ready to Go"      , Description: "" }
, { ID: "2.4.10"  , TS: "00:16:10.000", Marker: "One More Boy Get On"     , Description: "" }
, { ID: "2.4.11"  , TS: "00:17:14.000", Marker: "Sombody Objects"         , Description: "" }
, { ID: "2.4.12"  , TS: "0O:17:59.000", Marker: "The Mem Talk About It"   , Description: "" }
, { ID: "2.4.13"  , TS: "0O:19:05.000", Marker: "Another Bus Arrives"     , Description: "" }
, { ID: "2.4.14"  , TS: "00:20:15.500", Marker: "And Disappears"          , Description: "" }
, { ID: "2.4.15"  , TS: "00:20:35.000", Marker: "The End"                 , Description: "" }
, { ID: "2.4.16"  , TS: "00:21:00.000", Marker: ""

, { ID: "3.1"    , Len: "00:01:49.000", URL: "/videos/sp20310-04-111_BETA MOLDEXPO ENG_byVSDC,20fps,40%.mp4" , Size: "  12016688", UpdatedOn: "2022-03-12 14:03" }
, { ID: "3.1.1"   , TS: "00:00:04.000", Marker: "Coming and Leaving"      , Description: "Thousands of refugees are dailing coming to find a place to stay" }
, { ID: "3.1.2"   , TS: "00:00:22.500", Marker: "Basil Nikas"             , Description: "Cotidianul TV Reporter" }
, { ID: "3.1.3"   , TS: "00:01:02.000", Marker: "Josep Borell"            , Description: "High Representative of the EU Foreign Affairs" }
, { ID: "3.1.4"   , TS: "00:01:28.250", Marker: "Mother Speaking"         , Description: "How hard it is for kids" }
, { ID: "3.1.5"   , TS: "00:01:49.000", Marker: "The End"                 , Description: "" }

*/
