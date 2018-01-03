<template>
	<div class="webchat">
		<h1>WebChat</h1>
		<div class="messageshow">
			<textarea v-model="allMessage"></textarea>
		</div>
		<div class="message-send">
			<div><label>Nickname:</label><input type="text" v-model="nickname"></div>
			<div><label>Message:</label><input type="text" v-model="message" placeholder="Please input text in here!"></div>
		</div>
		<div class="btns">
			<a class="btn" @click="sendMessage">Send Message</a>
      <a class="btn" @click="exit">Exit</a>
		</div>
	</div>
</template>

<script>
var ws = new WebSocket('ws://127.0.0.1:8088')
ws.onopen = function () {
  console.log('已连接')
}
ws.onmessage = function (e) {
  console.log(e.data)
}
ws.onclose = function (e) {
  console.log('Closed:')
}
ws.onerror = function (e) {
  console.error('Error' + e)
}

export default {
  name: 'WebChat',
  data () {
    return {
      allMessage: 'message box',
      message: '',
      nickname: 'liebert'
    }
  },
  methods: {
    sendMessage: function () {
      // create websocket
      console.log('send:' + this.message)
      ws.send("{name:'" + this.nickname + "', msg:'" + this.message + "'}")
    },
    exit: function () {
      ws.close()
    }
  }
}
</script>

<style scoped>
.webchat *{font-family:caecilia, times, serif;box-sizing: border-box;}
.messageshow{width:300px;height:200px;margin:20px auto;}
.messageshow textarea{width:100%;height:100%;}
.message-send{width:300px;margin:0 auto;}
.message-send div{width:100%;height:30px;line-height:30px;margin:5px 0;}
.message-send div >label{width:100px;text-align: left;display:block;float:left}
.message-send div >input{float:left;width:200px;height:30px;}
.btn{display: inline-block;padding:8px 14px;color:rgb(255,255,255);background:rgb(74,192,135);}
.btn:hover{cursor:pointer;background:rgb(60,160,120);}
</style>