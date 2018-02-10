<template>
  <div class="wrap">
    <comtop></comtop>
    <div class="inp">
      <input ref="chulai" class="tel" type="text" placeholder="输入手机号/邮箱" @input="getInput" ><br>
      <div class="non" v-if="non" @click="isClickYzm">发送验证码</div>
      <div class="non" v-if="!isReally">重发({{count}})   </div>
      <div class="input-bg"></div>
      <input class="yanzhenma" type="text" placeholder="输入密码/验证码">
      <div class="input-bg1"></div>
      <div class="btn">
        <input type="button" value="登录">
      </div>
    </div>

  </div>
</template>

<script>
  import comtop from './comtop'
  export default {
    name: "Login",
    components: {
      comtop
    },
    data () {
      return {
        non: false,
        timer: null,
        count: '',
        isReally: true
      }
    },
    methods: {
      getInput () {
        let PhoneNum = this.$refs.chulai.value
        if (!(/^1[3|4|5|8][0-9]\d{8}$/.test(PhoneNum))) {
          this.non = false
        } else {
          this.non = true
        }
      },
      isClickYzm () {
        var timestamp = new Date().getTime()
        console.log(timestamp)
        alert('短信已发,请尽快使用')
        this.non = false
        const TIME_COUNT = 3
        if (!this.timer) {
          this.count = TIME_COUNT
          this.isReally = false
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--
            } else {
              this.non = true
              this.isReally = true
              clearInterval(this.timer)
            }
          }, 1000)
        }

        this.$request({
          type: 'POST',
          url: `api/city?__t=${timestamp}`,
          success: function (res) {
            console.log(res.data.msg)
          }

        })
      },
    },
    mounted () {

    }
  }
</script>

<style scoped>
  .non{
    width: 95px;
    position: absolute;
    right: 5px;
    top: 15px;
    background-color: #29a097;
    color: #fff;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    font-size: 12px;
  }

  .wrap{
    position: absolute;
    min-height: 100%;
    width: 100%;
    background-color: #f6f6f6;
  }
.inp {

  margin: 60px 30px 20px;

  position: relative;
}

.input-bg{
  position: absolute;
  top: 37px;
  height: 12px;
  width: 100%;
  border: solid #c4c4c4;
  border-width: 0 1px 1px 1px;
}
  .tel{
    border: none;
    background-color: #f6f6f6;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
    width: 100%;
    height: 30px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    margin-top: 15px;
    font-size: 14px;
  }

  .yanzhenma {
    margin-top: 20px;
    border: none;
    background-color: #f6f6f6;
    border-radius: 0px;
    box-shadow: none;
    outline: none;
    width: 100%;
    height: 30px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    margin-top: 25px;
    font-size: 14px;
  }

  .input-bg1 {
    position: absolute;
    top: 104px;
    height: 12px;
    width: 100%;
    border: solid #c4c4c4;
    border-width: 0 1px 1px 1px;
  }

  .btn input {
    width: 163px;
    background-color: #fe8233;
    color: #fff;
    border: none;
    border-radius: 36px;
    margin-top: 45px;
    padding: 8px 12px;
    font-size: 15px;
    outline: none;
  }

  .btn {
    text-align: center;
  }



</style>
