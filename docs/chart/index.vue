<template>
  <div>
    <div id="mainTest" style="width: 100%; height: 500px"></div>
  </div>
</template>

<script>
import sidebar from "../.vitepress/sidebar";
import * as echarts from "echarts";
export default {
  name: "chart",
  data() {
    return {
      myChart: "",
    };
  },
  mounted() {
    let data = [];
    let links = [];
    let index = 0;

    data.push({
      name: "代码时间",
      category: 0,
      symbolSize: 80,
    });
    links.push({
      source: 0,
      target:0,
      value: "",
    });
    for (let i = 0; i < sidebar.length; i++) {
      index += 1;
      data.push({
        name: sidebar[i].text,
        category: index,
        symbolSize: 60,
      });
      links.push({
        source: 0,
        target: index,
        value: "",
      });
      if (sidebar[i].items && sidebar[i].items.length) {
        sidebar[i].items.forEach((item) => {
          index += 1;
          data.push({
            name: item.text,
            category: index,
            symbolSize: 40,
          });
          links.push({
            source: index-1,
            target: index,
            value: item.text,
          });
        });
      }
    }
    console.log(data);
    console.log(links);

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
  },
  methods: {
    initCharts() {},
  },
};
</script>

<style scoped></style>
