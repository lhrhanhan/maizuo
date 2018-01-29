<template>
  <div class="wrap">
    <div class="header">
      <div class="left">
        <div class="tupian">
          <img src="../assets/comment/three.png" alt="">
        </div>

        <div class="myself">
          我的
        </div>
      </div>

      <div class="right">
        <div class="adress" @click="isAdress">
          <router-link to="/city">
            <span>贵阳</span>
            <img src="../assets/comment/up.png" alt="">
          </router-link>
        </div>

        <div class="my">
          <img src="../assets/comment/myself.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "header",
      data () {
        return {

        }
      },
      methods: {
        isAdress: function () {
          this.$request({
            type:'GET',
            url: 'api/city?__t=1515937073340',
            success: function (res) {
              console.log(res.data)

            }
          })
        }
      },

    }
</script>

<style scoped>
  .my{
    width: 50%;
    float: left;
    text-align: center;

    box-sizing: border-box;
  }

  .my img {
    position: relative;
    top: 5px;
    width: 37%;
  }

  .adress span {
    width: 14px;
    color: #999;
  }

.adress{
  width: 50%;
  float: left;
}

.adress img {
  width: 30%;
  position: relative;
  top: 5px;
}
  .left {
    overflow: hidden;
    float: left;
  }

.header {
  background: #282828;
  position: fixed;
  z-index: 500;
  top: 0;
  right: 0;
  left: 0;
  width: auto;
  height: 50px;
  line-height: 50px;
  overflow: hidden;
}

  .tupian {
    width: 48px;
    height: 50px;
    float: left;
    text-align: center;
    border-right: 1px solid #222;
    box-shadow: 10px 0 26px #363636;
    color: #999;
  }

  .tupian img {
    width: 46%;
  }

  .myself {
    padding: 0 1em;
    float: left;
    font-size: 14px;
    color: #efefef;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .right {
    float: right;
    width: 120px;
  }
</style>
