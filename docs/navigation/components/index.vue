<script setup>
import { menu } from "./menu.js";
import * as echarts from "echarts";
import { reactive } from "vue";
const menuList = reactive(menu);
const checkActicleItem = (val) => {
  val.link ? window.open(val.link) : "";
};
</script>
<template>
  <div>
    <div v-for="(item, index) in menuList" :index="index" :key="index">
      <h3>{{ item.title }}</h3>
      <div class="nav-container">
        <ul>
          <li
            v-for="(articleItem, articleItemIndex) in item.items"
            :index="articleItemIndex"
          >
            <div class="articleItem" @click="checkActicleItem(articleItem)">
              <div>
                <h6>
                  {{ articleItem.title }}
                </h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.nav-container ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
  padding: 0px !important;
  margin: 0px !important;
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
