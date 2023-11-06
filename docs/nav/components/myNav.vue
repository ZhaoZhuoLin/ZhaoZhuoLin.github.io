<template>
  <div>
    <ul>
      <li v-for="(item, index) in NAV_DATA" :index="index">
        <h2>{{ item.title }}</h2>
        <div class="nav-container">
          <ul>
            <li
              v-for="(NAV_DATA_Item, NAV_DATA_Index) in item.items"
              :index="NAV_DATA_Index"
            >
            <div>
              <img :src="NAV_DATA_Item.icon" alt="">
              {{ NAV_DATA_Item.title }}
            </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
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
  mounted(){
    console.log(123)
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
.nav-container ul li{
  background-color:rgb(240, 233, 233);
  border-radius: 10px;
width: 50%;
}
.nav-container ul li div{
  display: flex;
}
.nav-container ul li div img{
  width: 30px;
}
</style>
