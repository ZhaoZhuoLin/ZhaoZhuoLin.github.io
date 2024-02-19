<template>
  <div class="container">
    <h1>长江长城,黄山黄河</h1>
    <h1>在我心中重千斤!</h1>
    <img
      style="width: 500px; height: 300px"
      src="./assets/image/黄河.png"
      alt=""
    />
  </div>
  <button @click="changeTheme" type="button">一键换肤</button>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      switchType: false,
    };
  },
  mounted() {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("data-theme", "default");
  },
  methods: {
    changeTheme() {
      this.switchType = !this.switchType;
      let themeType = this.switchType ? "digital" : "default";
      document
        .getElementsByTagName("html")[0]
        .setAttribute("data-theme", themeType);
    },
  },
};
</script>

<style scoped>
@import url("./assets/style/index.css");
</style>
