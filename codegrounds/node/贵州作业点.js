const fs = require("fs");
const path = require("path");
const xlsx = require('node-xlsx');
const data = fs.readFileSync(path.join(__dirname, "station.json"), "utf8")
// console.log(JSON.parse(data));
let DS = JSON.parse(data).DS

const province = {
    "code": "52",
    "name": "贵州省",
    "children": [{
        "code": "5201",
        "name": "贵阳市",
        "children": [{
            "code": "520102",
            "name": "南明区"
        }, {
            "code": "520103",
            "name": "云岩区"
        }, {
            "code": "520111",
            "name": "花溪区"
        }, {
            "code": "520112",
            "name": "乌当区"
        }, {
            "code": "520113",
            "name": "白云区"
        }, {
            "code": "520115",
            "name": "观山湖区"
        }, {
            "code": "520121",
            "name": "开阳县"
        }, {
            "code": "520122",
            "name": "息烽县"
        }, {
            "code": "520123",
            "name": "修文县"
        }, {
            "code": "520181",
            "name": "清镇市"
        }]
    }, {
        "code": "5202",
        "name": "六盘水市",
        "children": [{
            "code": "520201",
            "name": "钟山区"
        }, {
            "code": "520203",
            "name": "六枝特区"
        }, {
            "code": "520221",
            "name": "水城县"
        }, {
            "code": "520281",
            "name": "盘州市"
        }]
    }, {
        "code": "5203",
        "name": "遵义市",
        "children": [{
            "code": "520302",
            "name": "红花岗区"
        }, {
            "code": "520303",
            "name": "汇川区"
        }, {
            "code": "520304",
            "name": "播州区"
        }, {
            "code": "520322",
            "name": "桐梓县"
        }, {
            "code": "520323",
            "name": "绥阳县"
        }, {
            "code": "520324",
            "name": "正安县"
        }, {
            "code": "520325",
            "name": "道真仡佬族苗族自治县"
        }, {
            "code": "520326",
            "name": "务川仡佬族苗族自治县"
        }, {
            "code": "520327",
            "name": "凤冈县"
        }, {
            "code": "520328",
            "name": "湄潭县"
        }, {
            "code": "520329",
            "name": "余庆县"
        }, {
            "code": "520330",
            "name": "习水县"
        }, {
            "code": "520381",
            "name": "赤水市"
        }, {
            "code": "520382",
            "name": "仁怀市"
        }]
    }, {
        "code": "5204",
        "name": "安顺市",
        "children": [{
            "code": "520402",
            "name": "西秀区"
        }, {
            "code": "520403",
            "name": "平坝区"
        }, {
            "code": "520422",
            "name": "普定县"
        }, {
            "code": "520423",
            "name": "镇宁布依族苗族自治县"
        }, {
            "code": "520424",
            "name": "关岭布依族苗族自治县"
        }, {
            "code": "520425",
            "name": "紫云苗族布依族自治县"
        }]
    }, {
        "code": "5205",
        "name": "毕节市",
        "children": [{
            "code": "520502",
            "name": "七星关区"
        }, {
            "code": "520521",
            "name": "大方县"
        }, {
            "code": "520522",
            "name": "黔西县"
        }, {
            "code": "520523",
            "name": "金沙县"
        }, {
            "code": "520524",
            "name": "织金县"
        }, {
            "code": "520525",
            "name": "纳雍县"
        }, {
            "code": "520526",
            "name": "威宁彝族回族苗族自治县"
        }, {
            "code": "520527",
            "name": "赫章县"
        }]
    }, {
        "code": "5206",
        "name": "铜仁市",
        "children": [{
            "code": "520602",
            "name": "碧江区"
        }, {
            "code": "520603",
            "name": "万山区"
        }, {
            "code": "520621",
            "name": "江口县"
        }, {
            "code": "520622",
            "name": "玉屏侗族自治县"
        }, {
            "code": "520623",
            "name": "石阡县"
        }, {
            "code": "520624",
            "name": "思南县"
        }, {
            "code": "520625",
            "name": "印江土家族苗族自治县"
        }, {
            "code": "520626",
            "name": "德江县"
        }, {
            "code": "520627",
            "name": "沿河土家族自治县"
        }, {
            "code": "520628",
            "name": "松桃苗族自治县"
        }]
    }, {
        "code": "5223",
        "name": "黔西南布依族苗族自治州",
        "children": [{
            "code": "522301",
            "name": "兴义市"
        }, {
            "code": "522302",
            "name": "兴仁市"
        }, {
            "code": "522323",
            "name": "普安县"
        }, {
            "code": "522324",
            "name": "晴隆县"
        }, {
            "code": "522325",
            "name": "贞丰县"
        }, {
            "code": "522326",
            "name": "望谟县"
        }, {
            "code": "522327",
            "name": "册亨县"
        }, {
            "code": "522328",
            "name": "安龙县"
        }]
    }, {
        "code": "5226",
        "name": "黔东南苗族侗族自治州",
        "children": [{
            "code": "522601",
            "name": "凯里市"
        }, {
            "code": "522622",
            "name": "黄平县"
        }, {
            "code": "522623",
            "name": "施秉县"
        }, {
            "code": "522624",
            "name": "三穗县"
        }, {
            "code": "522625",
            "name": "镇远县"
        }, {
            "code": "522626",
            "name": "岑巩县"
        }, {
            "code": "522627",
            "name": "天柱县"
        }, {
            "code": "522628",
            "name": "锦屏县"
        }, {
            "code": "522629",
            "name": "剑河县"
        }, {
            "code": "522630",
            "name": "台江县"
        }, {
            "code": "522631",
            "name": "黎平县"
        }, {
            "code": "522632",
            "name": "榕江县"
        }, {
            "code": "522633",
            "name": "从江县"
        }, {
            "code": "522634",
            "name": "雷山县"
        }, {
            "code": "522635",
            "name": "麻江县"
        }, {
            "code": "522636",
            "name": "丹寨县"
        }]
    }, {
        "code": "5227",
        "name": "黔南布依族苗族自治州",
        "children": [{
            "code": "522701",
            "name": "都匀市"
        }, {
            "code": "522702",
            "name": "福泉市"
        }, {
            "code": "522722",
            "name": "荔波县"
        }, {
            "code": "522723",
            "name": "贵定县"
        }, {
            "code": "522725",
            "name": "瓮安县"
        }, {
            "code": "522726",
            "name": "独山县"
        }, {
            "code": "522727",
            "name": "平塘县"
        }, {
            "code": "522728",
            "name": "罗甸县"
        }, {
            "code": "522729",
            "name": "长顺县"
        }, {
            "code": "522730",
            "name": "龙里县"
        }, {
            "code": "522731",
            "name": "惠水县"
        }, {
            "code": "522732",
            "name": "三都水族自治县"
        }]
    }]
}
let provinceList = []
for (let i = 0; i < province.children.length; i++) {
    provinceList.push({
        "code": province.children[i].code,
        "name": province.children[i].name,
    })
    for (let j = 0; j < province.children[i].children.length; j++) {
        provinceList.push({
            "code": province.children[i].children[j].code,
            "name": province.children[i].children[j].name,
        })
    }
}
console.log(provinceList)

let resultName = provinceList.find((i) => i.name == "六枝特区")
// console.log(resultName)


let APHSTool = []
let result = []
for (let i = 0; i < DS.length; i++) {
    const element = DS[i];
    // APHSTool.push(element.APHSTool)
    let tool = []
    if (element.APHSTool.includes("高炮")) {
        tool.push("高炮")
    }
    if (element.APHSTool.includes("火箭")) {
        tool.push("火箭")
    }
    element.APHSTool = tool.join(",")
    // let P_NAME = provinceList.find((i)=>i.name == element.P_NAME)
    element['P_NAME_CODE'] = "520000"
    // let C_NAME = provinceList.find((i) => i.name == element.C_NAME)
    // // element['C_NAME_CODE'] = C_NAME.code
    // if (C_NAME) {
    //     element['C_NAME_CODE'] = C_NAME.code
    // } else {
    //     element['C_NAME_CODE'] = ""
    // }
    // let CT_NAME = provinceList.find((i) => i.name == element.CT_NAME)
    // if (CT_NAME) {
        element['C_NAME_CODE'] = element.VACODE.substr(0,4)+"00"

        element['CT_NAME_CODE'] = element.VACODE
    // } else {
    //     element['CT_NAME_CODE'] = ""
    // }
    // console.log(CT_NAME)
    if(i==0){
        let keys = Object.keys(element);
        result.push(keys)
    }
    let vals = Object.values(element)
    result.push(vals)
}
console.log(result)


const buffer = xlsx.build([{name: 'sheet1', data: result}]);

// 写入xlsx文件

fs.writeFileSync('贵州省作业点信息.xlsx', buffer, {'flag': 'w'});