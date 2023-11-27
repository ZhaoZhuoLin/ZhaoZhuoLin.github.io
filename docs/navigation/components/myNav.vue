<template>
  <div>
    <div v-for="(item, index) in NAV_DATA" :index="index">
      <h2>{{ item.title }}</h2>
      <div class="nav-container">
        <ul>
          <li
            v-for="(articleItem, articleItemIndex) in item.items"
            :index="articleItemIndex"
          >
            <div class="articleItem" @click="checkActicleItem(articleItem)">
              <div>
                <h4>
                  {{ articleItem.title }}
                </h4>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
   </div>
</template>

<script>
import sidebar from "../../.vitepress/sidebar";
import { NAV_DATA } from "./data.js";
import * as echarts from "echarts";
export default {
  name: "nav",
  data() {
    return {
      NAV_DATA: NAV_DATA,
    };
  },
  mounted() {
  },
  methods: {
    checkActicleItem(val) {
      if (val.link) {
        window.open(val.link);
      }
    },
  },
};
</script>

<style scoped>
.nav-container ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
}
.nav-container ul li {
  cursor: pointer;
  background-color: var(--vp-c-bg-soft);
  border-radius: 10px;
  border: 1px solid #dddde3;
  width: 49%;
  margin-top: 0px !important;
  margin-bottom: 10px;
  padding: 10px;
  margin-right: 1%;
} 
</style>
