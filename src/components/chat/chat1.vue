<template>
	<div class="webchat-chatcontainer webchat-drag" v-drag="'webchat-drag-btn'">
    <div class="webchat-drag-btn"></div>
		<ul class="webchat-tab-tt" v-if="getUser.length > 1">
			<li v-for="(user, index) in getUser" :class="{'focus':index == current}" v-on:click.stop="current = index">
					<img src="../../assets/images/user.jpg">
					<span>{{ user.username }}</span>
					<i class="webchat-ico webchat-ico-close" v-on:click.stop="removeUser(index)"></i>
			</li>
		</ul>
		<ul class="webchat-tab-ct">
			<li v-for="(user, index) in getUser" v-show="index == current">
				<div class="webchat-chat-hd">
					<div class="webchat-chat-userinfo">
						<img src="../../assets/images/user.jpg">
						<p class="webchat-userinfo-name">{{ user.username }}</p>
						<p class="webchat-userinfo-status webchat-color-success">{{ user.userstatus }}</p>
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
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  methods: {
    removeUser: function (index) {
      if (index <= this.current) {
        this.current = --this.current < 0 ? 0 : this.current
      }
      this.userlist.splice(index, 1)
    }
  },
  computed: {
    getUser: function () {
      return this.userlist
    }
  },
  data () {
    return {
      userlist: [
        {
          username: '李伯特',
          userstatus: '正在输入中...'
        },
        {
          username: '张小强',
          userstatus: '在线'
        },
        {
          username: '李师师',
          userstatus: '在线'
        },
        {
          username: '李师师',
          userstatus: '在线'
        },
        {
          username: '李师师',
          userstatus: '在线'
        },
        {
          username: '李师师',
          userstatus: '在线'
        },
        {
          username: '张小强',
          userstatus: '在线'
        },
        {
          username: '张小强',
          userstatus: '在线'
        },
        {
          username: '张小强',
          userstatus: '在线'
        },
        {
          username: '张小强',
          userstatus: '在线'
        },
        {
          username: '张小强',
          userstatus: '在线'
        },
        {
          username: '张小强',
          userstatus: '在线'
        }
      ],
      current: 0
    }
  }
}
</script>

<style>
.webchat-drag{position:absolute;}
.webchat-drag-btn{position:absolute;top:0;left:0;height:80px;width:100%;background:#efefef;cursor:move;}
.webchat-chatcontainer{width:602px;height:520px;border:1px solid #ddd;background:#fff;box-shadow: 1px 1px 50px 1px #ddd;z-index:1001}
.webchat-chatcontainer .webchat-tab-tt{position:absolute;width:200px;height:520px;top:-1px;left:-200px;background-color:#2e3238;overflow:hidden;border:1px solid #ddd;box-shadow: 1px 1px 50px 1px #ddd;z-index:1001}
.webchat-chatcontainer .webchat-tab-tt:hover{overflow-y:auto}
.webchat-chatcontainer .webchat-tab-tt::-webkit-scrollbar{width: 6px;height: 6px;}
.webchat-chatcontainer .webchat-tab-tt::-webkit-scrollbar-thumb{border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;background-color: #bbb;}
.webchat-chatcontainer .webchat-tab-tt::-webkit-scrollbar-track{background-color: #f2f2f2;}
.webchat-chatcontainer .webchat-tab-tt::-webkit-scrollbar-thumb:hover{background-color: #666;}
.webchat-chatcontainer .webchat-tab-ct{float:left;width:600px;height:100%;}
.webchat-chatcontainer .webchat-tab-tt >li{padding:10px;height:60px;color:#fff;font-size:16px;border-bottom: 1px solid #292c33;cursor:pointer;}
.webchat-chatcontainer .webchat-tab-tt >li:hover{background:#3a3f45;}
.webchat-chatcontainer .webchat-tab-tt >li.focus{background:#3a3f45;}
.webchat-chatcontainer .webchat-tab-tt >li img{border-radius:50%;height:40px;width:40px;margin-right:10px;}
.webchat-chatcontainer .webchat-tab-tt >li i{display:none;float:right;color:#aaa;margin-right:10px;line-height:40px;font-size:22px;cursor:pointer;}
.webchat-chatcontainer .webchat-tab-tt >li:hover i{display:inherit;}
.webchat-chatcontainer .webchat-tab-tt >li i:hover{color:#fff;}
.webchat-chatcontainer .webchat-tab-ct >li{height:100%;width:100%;display:block;}
.webchat-chatcontainer .webchat-chat-hd{display:inline-block;height:80px;}
.webchat-chatcontainer .webchat-chat-hd *{cursor:default;}
.webchat-chatcontainer .webchat-tab-ct .webchat-chat-userinfo{position:relative;padding-left:80px;display:inline-block;}
.webchat-chatcontainer .webchat-tab-ct .webchat-chat-userinfo img{position:absolute;top:10px;left:10px;width:60px;border-radius:50%}
.webchat-chatcontainer .webchat-tab-ct .webchat-chat-userinfo .webchat-userinfo-name{height:40px;line-height:50px;font-size:18px;}
.webchat-chatcontainer .webchat-tab-ct .webchat-chat-userinfo .webchat-userinfo-status{height:40px;line-height:30px;font-size:14px;}
.webchat-chatcontainer .webchat-chat-bd{overflow-y: auto;overflow-x:hidden;height:auto;height:280px;padding:15px;}
.webchat-chatcontainer .webchat-chat-ft{height:158px;border-top:1px solid #efefef;}
.webchat-chat-ft .webchat-chat-tools{height:40px;}
.webchat-chat-ft .webchat-chat-tools li{height:40px;line-height:40px;margin:0 10px;font-size:24px;cursor:pointer;}
.webchat-chat-ft .webchat-chat-textarea textarea{display:block;width:100%;padding:5px00;height:75px;line-height:20px;border:none;overflow:auto;resize:none;background: 0 0;}
.webchat-chat-op{text-align:right;padding:0 20px;}
.webchat-chat-op span{display: inline-block;font-size: 14px;line-height: 32px;margin-left: 5px;padding: 0 20px;background-color: #1db93e;color: #fff;border-radius: 3px;}
.webchat-chat-op .webchat-send-btn{border-radius:3px 0 0 3px}
.webchat-chat-op .webchat-send-set{margin-left:-3px;border-radius:0 3px 3px 0;padding: 0 10px;}
.webchat-color-success{color:#1db93e}
</style>