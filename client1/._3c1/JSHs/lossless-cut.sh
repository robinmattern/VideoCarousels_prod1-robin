#!/bin/bash

# CLI arguments {
#   _: [ 'C:/Users/robin/Videos/VSDC/sp20902_Tucker-Carlson/11-022_Final-Splits/sp20902-11-021_RawVideo00_v21-1-00.00.14.086_1._Fall_2022_Elections.mp4'
#         ]
# }

      bSync=0

      aPGM="/C/Installs/lossless-cut/LosslessCut.exe"
      aPath="C:\\Users\\robin\\Videos\\VSDC\\sp20902_Tucker-Carlson\\11-022_Final-Splits"
      aPath="C:\\Home\\Robin\\Projs\\Carousels\\dev01-robin\\client1\\7c1_tucker-carlso-app\\assets\\videos"

#     aFile="sp20902-11-021_RawVideo00_v21-1-00.00.14.086_1._Fall_2022_Elections.mp4"

#     aFile="sp20902-11-021_RawVideo00_v21-2-00.12.21.847_2._Jason_Witlock_interview.mp4"

#     aFile="sp20902-11-021_RawVideo00_v21-3-00.20.22.491_3._Tucker's_speech_at_Family_Leadership_Summit.mp4"

#     aFile="sp20902-11-021_RawVideo00_v21-4-00.26.40.538_4._U.S._Corporations__Abortion_and_Paid_Leave.mp4"

#     aFile="sp20902-11-021_RawVideo00_v21-6-00.36.17.377_5._Ned_Ryan_on_the_Importance_of_Family.mp4"
#     aFile="sp20902-11-021_RawVideo00_v21-6-00.36.17.377_5._Ned_Ryan_on_the_Importance_of_Family_2.mp4"

      aFile="sp20902-11-021_RawVideo00_v21-7-00.38.54.337_6._Tucker_on_the_Importance_of_Beauty.mp4"

#     aFile="sp20902-11-021_RawVideo00_v21-7-00.38.54.337_6._Tucker_on_the_Importance_of_Beauty_2.mp4"
#     aFile="sp20902-11-021_RawVideo00_v21-7-00.38.54.337_6._Tucker_on_the_Importance_of_Beauty_2-cut-merged.mp4"

#     aFile="sp20902-11-021_RawVideo00_v21-9-00.56.57.459_7._Are_Political_Messages_like_Fads.mp4"
#     aFile="sp20902-11-021_RawVideo00_v21-9-00.56.57.459_7._Are_Political_Messages_like_Fads-cut-merged.mp4"

  if [ "${bSync}" == "1" ]; then

      aFile1="${aFile/-cut-merged/}"
#echo cp  -p "${aFile/.mp4/-proj.llc}" "${aFile1/.mp4/-cut-merged-proj.llc}"; exit
      cp  -p "${aFile/.mp4/-proj.llc}" "${aFile1/.mp4/-cut-merged-proj.llc}"

#     aFile1="sp20902-11-021_RawVideo00_v21-7-00.38.54.337_6._Tucker_on_the_Importance_of_Beauty_2-cut-merged.mp4"
      aFile1="${aFile1/.mp4/-cut-merged.mp4}"
#     echo ${aFile}; exit

      node parseLLC.njs "${aFile}"
      node parseLLC.njs "${aFile1}" -sync -save -secs  # replace for lossless-cut
      node parseLLC.njs "${aFile1}" -sync -save        # for RAM's carousel

    else

#     echo   "${aPath}\\${aFile}"

      node parseLLC.njs "${aFile}"
      echo ""

#    "${aPGM}" "${aPath}\\${aFile}" >dev/null
     "${aPGM}" "${aPath}\\${aFile}"

      node parseLLC.njs "${aFile}" -save

      fi

