const fs = require("fs");
const path = require("path")
const xlsx = require("xlsx");
const dir = "D:/GT/2023/河北升级项目/轨迹数据/轨迹数据/download_2024-01-11_13-26-15/csv"
fs.readdir(dir, {"encoding": "utf8"}, async (err, files) => {
    if (err) {
        console.log(err)
    }
    // console.log(files)
    for (let i = 0; i < files.length; i++) {
        let itemDir = dir + "/" + files[i];
        // console.log(itemDir)
        fs.readdir(itemDir, {
            "encoding": "utf8"
        },async (err, itemFiles) => {
            
            
            if (itemFiles.length) {
                for (let i = 0; i < itemFiles.length; i++) {
                    let fileUrl = `${itemDir}/${itemFiles[i]}`
                    console.log(`read~~~~~${fileUrl}`)
                    // let data = readFileXlsx(fileUrl,itemFiles[i])
                    // console.log(data)
                    
                    // console.log(trackList);
                   
                    // let result = await mysqlDao.queryconnection(`INSERT INTO ${track} (unitId, no, creationTime,longitude,latitude,altitude,speed,direction,temperature,humidity,chjzljyl,createDate,planeHistoryNum) VALUES ?`, trackList);
                    // console.log(result)
                }
             }
        })
    }
})

// function  readFileXlsx(url,fileName) {
//     const file = fs.readFileSync(url)
//     const workbook = xlsx.read(file, {
//         type: 'buffer'
//     });
//     const sheet_name_list = workbook.SheetNames;
//     const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
//     let trackList = []
//     let time =  fileName.split("_")[0]
//     let createTime = time.substr(0,4)+"-"+time.substr(4,2)+"-"+time.substr(6,2)+" "+time.substr(8,2)+":"+time.substr(10,2)+":00"
//     let saveItem = {
//         "planeNum": rows[0].__EMPTY,
//         "filghtType": "",
//         "planeHistoryNum": fileName.split(".")[0],
//         "createTime":createTime,
//         "historyNum": 1,
//     }
//     if(rows.length){
//          for (let i = 0; i < rows.length; i++) {
//             // console.log(rows[i])
//             // console.log(rows[i].__EMPTY_1)
//             rows[i].__EMPTY_1 +=""
//             // console.log(rows[i].__EMPTY_1.substr(0, 4))
//             let creationTime = rows[i].__EMPTY_1.substr(0, 4) + "-" + rows[i].__EMPTY_1.substr(4, 2) + "-" + rows[i].__EMPTY_1.substr(6, 2) + " "+rows[i].__EMPTY_10;
//             let saveItemTrack = {
//                 unitId:rows[i].__EMPTY,
//                 no: i,
//                 creationTime:creationTime,
//                 longitude: rows[i].__EMPTY_3,
//                 latitude: rows[i].__EMPTY_4,
//                 altitude: rows[i].__EMPTY_5,
//                 speed: rows[i].__EMPTY_6,
//                 direction: rows[i].__EMPTY_7,
//                 temperature: 0,
//                 humidity:0,
//                 chjzljyl: 0,
//                 createDate: creationTime,
//                 planeHistoryNum: saveItem.planeHistoryNum,
//             }

//             trackList.push(Object.values(saveItemTrack))
//         }
//     }
//     return {
//         trackList,saveItem
//     }
//  }