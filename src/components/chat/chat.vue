<template>
	<div class="webchat-chat">
    <div class="webchat-chat-hd">
      <div class="webchat-chat-userinfo">
        <img src="../../assets/images/user.jpg">
        <p class="webchat-userinfo-name">{{ chat.username }}</p>
        <p class="webchat-userinfo-status webchat-color-success">聊天狀態</p>
      </div>
    </div>
    <div class="webchat-chat-bd">
      <ul>
        <li>无历史消息</li>
      </ul>
    </div>
    <div class="webchat-chat-ft">
      <ul class="webchat-chat-tools">
        <li class="webchat-ico webchat-ico-smile-o"></li>
        <li class="webchat-ico webchat-ico-pic"></li>
        <li class="webchat-ico webchat-ico-folder-o"></li>
      </ul>
      <div class="webchat-chat-textarea">
        <textarea></textarea>
      </div>
      <div class="webchat-chat-op">
        <em>按&nbsp;Ctrl+Enter&nbsp;换行</em>
        <span class="webchat-send-btn">发送</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'chat'
  ],
  data () {
    return {
    }
  }
}
</script>

<style>
.webchat-chat{padding:0 10px;background-color:#f0f0f0;}
.webchat-chat .webchat-chat-hd{height:80px;border-bottom:1px solid #ddd;}
.webchat-chat .webchat-chat-userinfo{position:relative;padding-left:80px;display:inline-block;}
.webchat-chat .webchat-chat-userinfo img{position:absolute;top:10px;left:10px;width:60px;border-radius:50%}
.webchat-chat .webchat-chat-userinfo .webchat-userinfo-name{height:40px;line-height:50px;font-size:18px;}
.webchat-chat .webchat-chat-userinfo .webchat-userinfo-status{height:40px;line-height:30px;font-size:14px;}
.webchat-chat .webchat-chat-bd{height:280px;left:0;overflow-y: auto;overflow-x:hidden;padding:5px;}
.webchat-chat .webchat-chat-ft{border-top:1px solid #ddd;height:160px;right:0}
.webchat-chat .webchat-chat-ft .webchat-chat-tools{height:40px;}
.webchat-chat .webchat-chat-ft .webchat-chat-tools li{height:40px;line-height:40px;margin:0 10px;font-size:24px;cursor:pointer;}
.webchat-chat .webchat-chat-ft .webchat-chat-textarea textarea{display:block;width:100%;padding:5px;height:75px;line-height:20px;border:none;overflow:auto;resize:none;background: 0 0;}
.webchat-chat .webchat-chat-op{text-align:right;padding:0 20px;}
.webchat-chat .webchat-chat-op em{font-style:normal;color:#666;}
.webchat-chat .webchat-chat-op span{display: inline-block;font-size: 14px;line-height: 32px;margin-left: 5px;padding: 0 25px;background-color: #2e3238;color: #fff;border-radius: 3px;cursor:pointer;}
.webchat-color-success{color:#1db93e}
.fade-enter-active,.fade-leave-active{transition: all .1s ease;}
.fade-enter,.fade-leave-to{}
</style>