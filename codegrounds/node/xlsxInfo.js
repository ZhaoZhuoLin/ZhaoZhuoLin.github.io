const xlsx = require('node-xlsx');
const fs = require("fs")
const data = [

    ['name', 'age'],

    ['Tom', '20'],

    ['John', '30']

];

// 将数据转换为xlsx格式

const buffer = xlsx.build([{name: 'sheet1', data: data}]);

// 写入xlsx文件

fs.writeFileSync('data.xlsx', buffer, {'flag': 'w'});