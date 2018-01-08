<template>
	<div class="webchat-chat">
		<div class="webchat-chat-hd">
      <div class="webchat-chat-userinfo">
        <img src="../../assets/images/user.jpg">
        <p class="webchat-userinfo-name">{{getUser}}</p>
        <p class="webchat-userinfo-status webchat-color-success">正在输入中...</p>
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
        <span class="webchat-send-btn">发送</span>
        <span class="webchat-send-set">
          <i class="webchat-ico webchat-ico-caret-down"></i>
        </span>
      </div>
    </div>
	</div>
</template>

<script>
export default {
  computed: {
    getUser: function () {
      return this.$route.params.user
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style>
body{min-height:300px;min-width: 300px;}
.webchat-chat-hd{height:80px;background:#efefef;}
.webchat-chat-hd *{cursor:default;}
.webchat-chat-userinfo{position:relative;padding-left:80px;display:inline-block;}
.webchat-chat-userinfo img{position:absolute;top:10px;left:10px;width:60px;border-radius:50%}
.webchat-chat-userinfo .webchat-userinfo-name{height:40px;line-height:50px;font-size:18px;}
.webchat-chat-userinfo .webchat-userinfo-status{height:40px;line-height:30px;font-size:14px;}
.webchat-chat-bd{overflow-y: auto;overflow-x:hidden;height:auto;height:280px;padding:15px;}
.webchat-chat-ft{height:158px;border-top:1px solid #efefef;}
.webchat-chat-ft .webchat-chat-tools{height:40px;}
.webchat-chat-ft .webchat-chat-tools li{height:40px;line-height:40px;margin:0 10px;font-size:24px;cursor:pointer;}
.webchat-chat-ft .webchat-chat-textarea textarea{display:block;width:100%;padding:5px;height:75px;line-height:20px;border:none;overflow:auto;resize:none;background: 0 0;}
.webchat-chat-op{text-align:right;padding:0 20px;}
.webchat-chat-op span{display: inline-block;font-size: 14px;line-height: 32px;margin-left: 5px;padding: 0 20px;background-color: #1db93e;color: #fff;border-radius: 3px;}
.webchat-chat-op .webchat-send-btn{border-radius:3px 0 0 3px}
.webchat-chat-op .webchat-send-set{margin-left:-3px;border-radius:0 3px 3px 0;padding: 0 10px;}
.webchat-color-success{color:#1db93e}
</style>