const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");
const file = fs.readFileSync(path.join(__dirname, "./榆林市作业点信息.xlsx"))
const workbook = xlsx.read(file, {
    type: 'buffer'
});

const sheet_name_list = workbook.SheetNames;
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

function dmsToDecimal(degrees, minutes, seconds) {
    // 将度、分、秒转换为十进制度数
    let decimalDegrees = Math.abs(degrees) + (minutes / 60) + (seconds / 3600);
    // 判断原始数值是否为负数
    if (degrees < 0) {
        decimalDegrees = -decimalDegrees;
    }
    return decimalDegrees;
}
let gaopao = [];
let huojian = [];

data.map(item => {
    console.log(item)
    let position = item['position'].split("E")
    for (let i = 0; i < position.length; i++) {
        let r = position[i].replace("°", ",").replace("′", ",").replace("″", "").replace("N", "").split(",")
        if (i == 0) {
            let Longitude = dmsToDecimal(Number(r[0]), Number(r[1]), Number(r[2]));
            item['Longitude'] = Longitude;
        }
        if (i == 1) {
            let Latitude = dmsToDecimal(Number(r[0]), Number(r[1]), Number(r[2]));
            item['Latitude'] = Latitude;
        }
    }

    if (item.workTool && item.workTool.includes("高炮")) {
        item['StationType'] = 2;
        gaopao.push(item)
    }
    if (item.workTool &&  item.workTool.includes("火箭")) {
        item['StationType'] = 1;
        huojian.push(item)
    }
    return item
})
let result = [...gaopao, ...huojian]
console.log(result.length)
fs.writeFileSync(path.join(__dirname, "result.json"), JSON.stringify(result))