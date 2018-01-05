<template>
	<div class="webchat-main" v-on:click.stop="statusMenu = false">
		<div class="webchat-main-drag">&#8203;</div>
		<div class="webchat-main-info">
			<div class="webchat-user">李伯特</div>
			<div class="webchat-status">
				<span class="webchat-ico webchat-status-online" v-on:click.stop="statusMenu = true">●</span>
				<ul class="webchat-dropbox" v-show="statusMenu">
					<li>
						<i class="webchat-ico">√</i>
						<cite class="webchat-ico webchat-status-online">●</cite>
						在线
					</li>
					<li>
						<i class="webchat-ico"></i>
						<cite class="webchat-ico webchat-status-offline">●</cite>
						离线
					</li>
				</ul>
			</div>
			<input class="webchat-remark" placeholder="编辑签名" value="爱编程爱生活爱科学"></input>
		</div>
		<div class="webchat-tab webchat-main-tab">
			<ul class="webchat-tab-tt">
				<li v-bind:class="{'webchat-tab-focus':mainTab==1}" title="历史会话" v-on:click="mainTab=1">
					<i class="webchat-ico webchat-ico-history" ></i>
				</li>
				<li v-bind:class="{'webchat-tab-focus':mainTab==2}" title="联系人" v-on:click="mainTab=2">
				<i class="webchat-ico webchat-ico-user"></i>
				</li>
				<li v-bind:class="{'webchat-tab-focus':mainTab==3}" title="群组" v-on:click="mainTab=3">
					<i class="webchat-ico webchat-ico-group"></i>
				</li>
			</ul>
			<ul class="webchat-tab-ct">
				<li class="webchat-tab-unselect" v-bind:class="{'webchat-tab-select': mainTab==1}">历史会话</li>
				<li class="webchat-tab-unselect webchat-main-user" v-bind:class="{'webchat-tab-select': mainTab==2}">
					<user-list cate="我的家人"></user-list>
					<user-list cate="我的老师"></user-list>
				</li>
				<li class="webchat-tab-unselect" v-bind:class="{'webchat-tab-select': mainTab==3}">群组</li>
			</ul>
		</div>
		<ul class="webchat-main-tool">
			<li id="webchat-main-tool-search"title="搜索">
				<i class="webchat-ico webchat-ico-search"></i>
			</li>
			<li id="webchat-main-tool-message" title="消息盒子">
				<i class="webchat-ico webchat-ico-bell"></i>
			</li>
			<li id="webchat-main-tool-find" title="查找">
				<i class="webchat-ico webchat-ico-add"></i>
			</li>
			<li id="webchat-main-tool-skin" title="皮肤">
				<i class="webchat-ico webchat-ico-skin"></i>
			</li>
			<li id="webchat-main-tool-about" title="关于">
				<i class="webchat-ico webchat-ico-about"></i>
			</li>
		</ul>
		<span class="webchat-main-setwin">
			<a class="webchat-ico webchat-ico-minimize" href="javascript:;"></a>
			<a class="webchat-ico webchat-ico-close" href="javascript:;"></a>
		</span>
	</div>
</template>

<script>
  import userList from '../user/userlist'

  export default {
    components: {
      'user-list': userList
    },
    data () {
      return {
        statusMenu: false,
        mainTab: 2
      }
    }
  }
</script>

<style>
::-webkit-scrollbar{width: 6px;height: 6px;}
::-webkit-scrollbar-thumb{border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;background-color: #c3c3c3;}
::-webkit-scrollbar-track{background-color: transparent;}
::-webkit-scrollbar-thumb:hover{background-color: #999;}
.webchat-main{position:relative;display:block;box-sizing:content-box;margin:30px auto;width:260px;height:520px;border:1px solid #d9d9d9;border-radius:2px;box-shadow:1px 1px 50px 10px rgba(0,0,0,0.15);color:#666}
.webchat-main-drag{height:15px;padding:0 50px;background-color:#efefef;cursor:move}
.webchat-main-info{height:54px;padding:0 15px;background-color:#efefef;font-size:14px;}
.webchat-main-info .webchat-user{float:left;height:24px;line-height:24px;max-width:150px;margin-right:16px;font-size:16px;}
.webchat-main-info .webchat-status{position:relative;float:left;height:24px;line-height:24px;cursor:pointer}
.webchat-status-online{color:#3fdd86}
.webchat-status-offline{color:#aaa}
.webchat-status .webchat-dropbox{position: absolute;z-index: 100;top: 24px;left: -31px;padding: 5px 0;width: 85px;border: 1px solid #E2E2E2;border-radius: 2px;background-color: #fff;box-shadow: 1px 1px 20px rgba(0,0,0,.1);}
.webchat-status .webchat-dropbox li{position: relative;line-height: 22px;padding-left: 25px;font-size: 12px;}
.webchat-status .webchat-dropbox li:hover{background-color:#eee}
.webchat-dropbox li i{display:block;position:absolute;top:0;left:5px;font-size:14px;font-weight:bold}
.webchat-dropbox li cite{padding-right:5px;}
.webchat-remark{position: relative;left:-6px;display: block;width:100%;border:1px solid transparent;margin-top: 6px;padding: 0 5px;height: 28px;line-height: 28px;background: 0 0;border-radius: 2px;box-sizing: content-box;}
.webchat-remark{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.webchat-remark:focus{border: 1px solid #d2d2d2;border-color: rgba(0,0,0,.15);}
.webchat-main-tab{height:415px;}
.webchat-main-tab .webchat-tab-tt{height:50px;padding:10px 0px;background-color:#efefef}
.webchat-main-tab .webchat-tab-tt li{position:relative;display:block;float:left;height:30px;line-height:30px;width:33.333%;text-align:center;cursor:pointer;}
.webchat-main-tab .webchat-tab-tt li>i{font-size:22px;}
.webchat-main-tab .webchat-tab-tt li:hover i{color:#777;}
.webchat-main-tab .webchat-tab-ct{height:365px;padding:10px;background-color:rgba(255,255,255,0.8);overflow-x:hidden;overflow-y:scroll;}
.webchat-main-tab .webchat-tab-tt .webchat-tab-focus:after{content: '';position: absolute;left: 0;bottom: -10px;width: 100%;height: 1px;background-color: #dd691d;}
.webchat-tab-unselect{display:none;}
.webchat-tab-select{display:block;}
.webchat-main-user {}
.webchat-user-cate{position:relative}
.webchat-user-cate h5{height:25px;line-height:25px;cursor:pointer;}
.webchat-user-cate h5:hover{color:#000;}
.webchat-user-cate h5>em{font-style:normal;color:#999}
.webchat-user-cate .webchat-ico{font-size: 20px;color:#999}
.webchat-user-cate .webchat-dropbox{width:100%}
.webchat-user-cate .webchat-dropbox li{position:relative;height: 52px;padding:5px 15px 5px 60px;}
.webchat-user-cate .webchat-dropbox li>img{position: absolute;left:15px;top:8px;width:36px;height:36px;border-radius:50%;}
.webchat-user-cate .webchat-dropbox li>p{color:#999;font-size:12px;}
.webchat-main-tool{padding:0 10px;height:36px;background:#efefef}
.webchat-main-tool li{display:inline-block;float:left;width:20%;height:36px;line-height:36px;text-align:center;font-size:16px;cursor:pointer;}
.webchat-main-tool .webchat-ico{font-size:18px;}
.webchat-main-tool li>i{transition:all ease .2s;}
.webchat-main-tool li:hover i{color:#dd691d;}
.webchat-main-setwin{position:absolute;right:15px;top:15px;}
.webchat-main-setwin a{margin-left:3px;}
</style>