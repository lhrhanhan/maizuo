<template>
  <div>
    <comtop></comtop>
    <div class="city-wrap">
      <div class="header">
        <p class="middle">GPS定位你所在城市</p>
      </div>
      <div class="content">
        <p class="foot">深圳</p>
        <div class="middle">
          热门城市
        </div>
        <div class="concity">
          <p class="foot-con">北京</p>
          <p class="foot-con">上海</p>
          <p class="foot-con">广州</p>
          <p class="foot-con">深圳</p>
        </div>
        <div class="middle">
          按字母查询
        </div>

        <div class="zimu">
          <p class="foot-con" v-for="i in abcArr">{{i}}</p>
        </div>
      </div>
      <div class="footer">
        <div class="zimu">
          <p class="middle" v-for="j in abcArr">
            {{j}}
            <p class="foot-con"></p>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import comtop from './comtop'
  export default {
    name: 'Index',
    data () {
      return {
        abcArr: [
          'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'
        ],
        bigArr: [],
        aArr: []
      }
    },
    mounted () {
      this.$request({
        type:'GET',
        url: 'api/city?__t=1515937073340',
        success: function (res) {
          // console.log(res.data.data.cities)
          this.bigArr = res.data.data.cities
          // for (let a in this.bigArr) {
          //   let firstzimu = this.bigArr[a].pinyin.split('')[0]
          //   let city = this.bigArr[a].name.split()
          // }

          var letter = []
          let obj = {}
          for(var i=0;i<26;i++){
            obj.zimu = String.fromCharCode(65+i)
            obj.city = []
            letter.push(obj)

          }
          console.log(letter)

        }
      })
    },
    components: {
      comtop
    }
  }
</script>

<style scoped>
  .foot-con {
    width: 24.2%;
    font-size: 16px;
    line-height: 46px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: #838383;
    border-bottom: #ebebeb 1px solid
  }

  .content {
    background-color: #fff;
  }

  .foot {
    margin: 0;
    width: 24.2%;
    font-size: 16px;
    line-height: 46px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
    color: #e2941a;
    border-bottom: #ebebeb 1px solid;
  }

  .middle{
    padding-left: 15px;
    font-size: 14px;
    line-height: 40px;
    background-color: #ebebeb;
    margin-top: -1px
  }

.city-wrap {
  background-color: #ebebeb;
  height: 2000px;
  margin-top: 50px;
}
</style>
