<script setup>
import sidebar from "../.vitepress/sidebar";
import * as echarts from "echarts";
import { ref, reactive, onMounted } from "vue";
let datas = reactive([
  {
    name: "代码时间",
    category: 0,
    symbolSize: 90,
    itemStyle:{
        color:"#8661fc"
      }
  },
]);
let links = reactive([
  {
    source: 0,
    target: 0,
    value: "",
  },
]);

onMounted(() => {
  createDatafromSlideBar();
});
const createDatafromSlideBar = () => {
  let index = 0;
  for (let i = 0; i < sidebar.length; i++) {
    index += 1;
    datas.push({
      name: sidebar[i].text,
      category: index,
      symbolSize: 75,
      itemStyle:{
        color:"#4aaeae"
      }
    });
    links.push({
      source: 0,
      target: index,
      value: "",
    });
  }

  for (let i = 0; i < sidebar.length; i++) {
    let { items } = sidebar[i];
    if (items && items.length) {
      items.map((item) => {
        index += 1;
        datas.push({
          name: item.text,
          category: index,
          symbolSize: 50,
        });
        links.push({
          source: i + 1,
          target: index,
          value: item.link,
        });
      });
    }
  }
  console.log(datas)
  console.log(links)
  createEcharts(datas, links);
};

const createEcharts = (data, links) => {
  var chart = echarts.init(document.getElementById("mainTest"), "vintage");
  var option = {
    animationDurationUpdate: 1500,
    label: {
      normal: {
        show: true,
        textStyle: {
          fontSize: 12,
        },
      },
    },
    series: [
      {
        type: "graph",
        layout: "force",
        symbolSize: 50,
        roam: true,
        categories: [],
        label: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12,
            },
          },
        },
        draggable: true,
        cursor: "help",
        force: {
          repulsion: 1000,
        },
        data,
        links,
      },
    ],
  };
  chart.setOption(option);
};
</script>
<template>
  <div>
    <div id="mainTest" style="width: 100%; height: 650px"></div>
  </div>
</template>

<style scoped></style>
