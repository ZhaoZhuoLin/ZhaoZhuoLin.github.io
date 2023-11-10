<template>
  <div>
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
                <!-- <img :src="articleItem.icon?articleItem.icon:''" mode="scaleToFill" /> -->
                <div>
                  <h4>
                  {{ articleItem.title }} 
                </h4>
                <!-- <div>{{ articleItem.desc }}</div> -->
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NAV_DATA } from "./data.js";
export default {
  name: "nav",
  data() {
    return {
      NAV_DATA: NAV_DATA,
    };
  },
  mounted() {
    console.log(123);
  },
  methods:{
    checkActicleItem(val){
      if(val.link){
        window.open(val.link)
      }
    }
  }
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
  background-color: var(--vp-c-bg-soft);
  border-radius: 10px;
  border: 1px solid #dddde3;
  width: 49%;
  margin-top: 0px !important;
  margin-bottom: 10px;
  padding: 10px;
  margin-right: 1%;
}
/* .nav-container ul li div {
  display: flex;
}
.nav-container ul li div img {
  width: 30px;
}
.articleItem{
  display: flex;
  flex-wrap: wrap;
} */
.articleItem{
  display: flex;
 } 
.articleItem img {
  width: 50px;
  height: 50px;
  padding-right: 5px;
}
</style>
