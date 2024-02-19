const fs = require("fs")
// const path = require("path")
// var data = [{
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231210_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231210_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231206_B3587_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231205_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231204_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231203_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231203_B3587_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231203_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231128_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231128_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231127_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231127_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231121_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231121_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231113_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231105_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231105_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231030_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231028_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231028_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231024_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231020_B3587_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231020_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231020_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20231012_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231012_B3587_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231012_B3587_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231012_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20231012_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230924_B3587_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230924_B3587_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230924_B3587_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230924_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230924_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230923_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230922_B3587_011",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230922_B3587_010",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230922_B3587_09",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230922_B3587_08",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230917_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230910_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230725_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230725_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230721_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230713_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230712_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230712_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230710_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230709_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230705_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230704_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230703_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230630_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230628_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230628_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230628_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230628_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230626_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230623_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230623_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230623_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230623_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230623_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230619_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230619_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230616_B3586_08",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230616_B3586_07",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230616_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230616_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230616_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230616_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230614_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230614_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230614_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230614_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230614_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230613_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230610_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230604_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230602_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230601_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230530_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230529_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230526_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230523_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230523_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230517_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230516_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230516_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230516_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3586_07",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3586_06",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230514_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230511_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230511_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230511_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230511_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230511_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230510_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230509_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230509_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230509_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230509_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230508_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230505_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230504_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230427_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230427_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230427_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230425_B3586_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230425_B3586_04",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230425_B3586_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230425_B3586_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230425_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230424_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230423_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230423_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230422_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230421_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230421_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230417_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230414_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230406_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230405_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230404_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230404_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230403_B3587_02",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230403_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230227_B3587_05",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230218_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230216_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230216_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230214_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230213_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230211_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230210_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230210_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230209_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230209_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230204_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230105_B3587_03",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230105_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230104_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3586",
//         "filghtType": "-",
//         "planeHistoryNum": "20230103_B3586_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     },
//     {
//         "planeNum": "B3587",
//         "filghtType": "-",
//         "planeHistoryNum": "20230102_B3587_01",
//         "macroscopicView": null,
//         "planeTrackInfoList": null
//     }
// ]
// let months = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
// ]
// let result = []
// for (let m = 0; m < months.length; m++) {

//     // const e  lement = array[m];
//     let item = {
//         month: m,
//         list: []
//     }
//     for (let i = 0; i < data.length; i++) {
//         // const element = array[i];
//         let itemMonth = data[i].planeHistoryNum.substr(4, 2)

//         if (itemMonth == item.month) {
//             item.list.push(data[i])
//         }

//     }
//     result.push(item)
// }
// const writeStream = fs.createWriteStream('./北京飞机轨迹.json', {
//     encoding: "utf8"
// })
// writeStream.write(JSON.stringify(result));
// writeStream.end()
// writeStream.on('finish', () => {
//     console.log('写入完成')
// }) 

var data = [{
    "month": 1,
    "list": [{
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230105_B3587_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230105_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230104_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230103_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230102_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 2,
    "list": [{
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230227_B3587_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230218_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230216_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230216_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230214_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230213_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230211_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230210_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230210_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230209_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230209_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230204_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 4,
    "list": [{
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230427_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230427_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230427_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230425_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230425_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230425_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230425_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230425_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230424_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230423_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230423_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230422_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230421_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230421_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230417_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230414_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230406_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230405_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230404_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230404_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230403_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230403_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 5,
    "list": [{
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230530_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230529_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230526_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230523_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230523_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230517_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230516_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230516_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230516_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3586_07",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3586_06",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230514_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230511_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230511_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230511_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230511_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230511_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230510_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230509_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230509_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230509_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230509_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230508_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230505_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230504_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 6,
    "list": [{
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230630_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230628_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230628_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230628_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230628_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230626_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230623_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230623_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230623_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230623_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230623_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230619_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230619_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230616_B3586_08",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230616_B3586_07",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230616_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230616_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230616_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230616_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230614_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230614_B3586_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230614_B3586_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230614_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230614_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230613_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230610_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230604_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230602_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230601_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 7,
    "list": [{
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230725_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230725_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230721_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230713_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230712_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230712_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230710_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230709_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230705_B3586_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230704_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230703_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 9,
    "list": [{
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230924_B3587_05",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230924_B3587_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230924_B3587_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230924_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20230924_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230923_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230922_B3587_011",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230922_B3587_010",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230922_B3587_09",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230922_B3587_08",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230917_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20230910_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 10,
    "list": [{
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231030_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231028_B3586_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231028_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231024_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231020_B3587_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231020_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231020_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231012_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231012_B3587_04",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231012_B3587_03",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231012_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231012_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}, {
    "month": 11,
    "list": [{
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231128_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231128_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231127_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231127_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231121_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231121_B3587_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231113_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3586",
        "filghtType": "-",
        "planeHistoryNum": "20231105_B3586_01",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }, {
        "planeNum": "B3587",
        "filghtType": "-",
        "planeHistoryNum": "20231105_B3587_02",
        "macroscopicView": null,
        "planeTrackInfoList": null
    }]
}]

const axios = require("axios")
// console.log(axios)

async function init() {
    for (let i = 0; i < data.length; i++) {
        // const element = array[i];
        let itemPromise = []
        if (data[i].list.length) {
            for (let j = 0; j < data[i].list.length; j++) {
                let p = await getdata(data[i].list[j].planeHistoryNum)
                itemPromise.push(p)
            }
        }
        console.log(itemPromise.length)
        Promise.all(itemPromise).then((res) => {
            console.log(res)
            let writeStream = fs.createWriteStream(`./${i}北京飞机轨迹.json`, {
                encoding: "utf8"
            })
            for (let r = 0; r < res.length; r++) {
                let saveData = {
                    planeHistoryNum: res[r].data.data[0].planeHistoryNum,
                    list: res[r].data.data
                }
                writeStream.write(JSON.stringify(saveData));
            }
            writeStream.end()
            writeStream.on('finish', () => {
                console.log(`${i}写入完成`)
            })
            // fs.writeFile(path.join(__dirname, `./${i}北京飞机轨迹.json`), JSON.stringify(res), (err) => {
            //     if (err) {
            //         console.log(err)

            //     }
            //     console.log("123")
            // })



        })
    }
}
init()

function getdata(planeHistoryNum) {
    let url = "http://39.107.107.142:18091/planeTrackInfo/getDataByPlaneHistoryNum?planeHistoryNum="
    url += planeHistoryNum
    return new Promise((resolve, reject) => {
        axios.get(url).then((res) => {
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}