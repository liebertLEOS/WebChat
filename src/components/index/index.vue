<template>
	<div class="webchat-index">

    <div class="webchat-chat" v-if="chatWindowStatus > 0">
      <div class="webchat-chat-win" v-drag="'webchat-win-hd'" v-show="chatWindowStatus == 1">
        <div class="webchat-win-hd">
          <span class="webchat-ico webchat-ico-safari"></span>
          <span class="webchat-tt">{{winTitle}}</span>
          <span class="webchat-win-set">
            <a class="webchat-ico webchat-ico-minimize" href="javascript:;" v-on:click.stop="chatWindowStatus = 2"></a>
            <a class="webchat-ico webchat-ico-close" href="javascript:;" v-on:click.stop="chatWindowStatus = 0"></a>
          </span>
        </div>
        <div class="webchat-win-bd clearfix">
          <ul class="webchat-tab-tt" v-show="userlist.length > 1">
            <li v-for="(user, index) in userlist" :class="{'focus':index == current}" v-on:click.stop="current = index">
                <img src="../../assets/images/user.jpg">
                <span>{{ user.name }}</span>
                <i class="webchat-ico webchat-ico-close" v-on:click.stop="removeUser(index)"></i>
            </li>
          </ul>
          <ul class="webchat-tab-ct">
            <li v-for="(user, index) in userlist" v-show="index == current">
              <div class="webchat-chat-hd">
                <div class="webchat-chat-userinfo">
                  <img src="../../assets/images/user.jpg">
                  <p class="webchat-userinfo-name">{{ user.name }}</p>
                  <p class="webchat-userinfo-status webchat-color-success">{{ user.status }}</p>
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
      </div>
      <div class="webchat-win-min" v-show="chatWindowStatus == 2" v-drag="'webchat-win-min-drag'">
        <div class="webchat-win-min-drag">
          <span class="webchat-ico webchat-ico-safari"></span>
          <span class="webchat-tt">{{winTitle}}</span>
          <span class="webchat-win-set">
            <a class="webchat-ico webchat-ico-maximize" href="javascript:;" v-on:click.stop="chatWindowStatus = 1"></a>
            <a class="webchat-ico webchat-ico-close" href="javascript:;" v-on:click.stop="chatWindowStatus = 0"></a>
          </span>
        </div>
      </div>
    </div>

		<div class="webchat-maincontainer">
      <div class="webchat-main" v-on:click.stop="statusMenu = false" v-show="showMain">
        <div class="webchat-main-drag">&#8203;</div>
        <div class="webchat-main-info">
          <div class="webchat-user">李伯特</div>
          <div class="webchat-status">
            <span class="webchat-ico" v-bind:class="{'webchat-status-offline': status==0,'webchat-status-online': status==1,'webchat-status-busy': status==2}" v-on:click.stop="statusMenu = true"></span>
            <ul class="webchat-dropbox" v-show="statusMenu">
              <li v-on:click="setStatus(1)">
                <i class="webchat-ico" v-bind:class="{'webchat-ico-check': status==1}"></i>
                <cite class="webchat-ico webchat-status-online"></cite>
                在线
              </li>
              <li v-on:click="setStatus(2)">
                <i class="webchat-ico" v-bind:class="{'webchat-ico-check': status==2}"></i>
                <cite class="webchat-ico webchat-status-busy"></cite>
                忙碌
              </li>
              <li v-on:click="setStatus(0)">
                <i class="webchat-ico" v-bind:class="{'webchat-ico-check': status==0}"></i>
                <cite class="webchat-ico webchat-status-offline"></cite>
                隐身
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
            <transition name="slide-fade">
              <li class="webchat-tab-item" v-show="mainTab === 1">
                <ul class="webchat-main-user-list">
                  <li>
                    <img src="../../assets/images/user.jpg">
                    <span>张小强</span>
                    <p>爱编程爱生活爱科学</p>
                  </li>
                  <li>
                    <img src="../../assets/images/user.jpg">
                    <span>李小强</span>
                    <p>爱编程爱生活爱科学</p>
                  </li>
                </ul>
              </li>
            </transition>
            <transition name="slide-fade">
            <li class="webchat-tab-item" v-show="mainTab === 2">
              <ul class="webchat-user-cate" v-for="cate in userCateList" >
                <user-list v-bind:cate="cate" v-on:adduser='addUser'></user-list>
              </ul>
            </li>
            </transition>
            <transition name="slide-fade">
              <li class="webchat-tab-item" v-show="mainTab === 3">
                <group-list></group-list>
              </li>
            </transition>
          </ul>
        </div>
        <ul class="webchat-main-tool">
          <li id="webchat-main-tool-search"title="搜索" v-on:click="showSearch = true">
            <i class="webchat-ico webchat-ico-search"></i>
          </li>
          <li id="webchat-main-tool-message" title="消息盒子">
            <i class="webchat-ico webchat-ico-bell"></i>
          </li>
          <li id="webchat-main-tool-find" title="查找">
            <i class="webchat-ico webchat-ico-add"></i>
          </li>
          <li id="webchat-main-tool-cog" title="设置">
            <i class="webchat-ico webchat-ico-cog"></i>
          </li>
          <li id="webchat-main-tool-about" title="关于">
            <i class="webchat-ico webchat-ico-about"></i>
          </li>
        </ul>
        <div class="webchat-search-input" v-show="showSearch">
          <input><label class="webchat-ico webchat-ico-close" v-on:click="showSearch = false"></label>
        </div>
        <span class="webchat-main-setwin">
          <a class="webchat-ico webchat-ico-minimize" href="javascript:;" v-on:click="showMain = false"></a>
          <a class="webchat-ico webchat-ico-close" href="javascript:;" v-on:click="showMain = false"></a>
        </span>
      </div>
      <div class="webchat-main-min" v-on:click="showMain = true" v-show="!showMain">
        <div class="webchat-min-userinfo">
          <img src="../../assets/images/user.jpg">
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import userList from '../user/userlist'
  import groupList from '../group/groupList'
  import {mapState} from 'vuex'
  import {getUserCateList} from '../../service/getData'

  export default {
    components: {
      'user-list': userList,
      'group-list': groupList
    },
    methods: {
      async initData () {
        this.userCateList = getUserCateList()
        console.log(this.userCateList)
      },
      removeUser: function (index) {
        if (index <= this.current) {
          this.current = --this.current < 0 ? 0 : this.current
        }
        this.userlist.splice(index, 1)
      },
      addUser: function (user) {
        // 數組去重
        var len = this.userlist.length - 1

        while (len >= 0) {
          if (this.userlist[len].id === user.id) break
          len--
        }
        if (len < 0) { // 新成員
          this.userlist.push(user)
          len = this.userlist.length - 1
        }
        this.chatWindowStatus = 1
        this.current = len
        this.winTitle = '与' + this.userlist[len].name + '聊天中'
      },
      setStatus: function (value) {
        this.status = value
      }
    },
    computed: {
      ...mapState([
        'chatList'
      ])
    },
    data () {
      return {
        winTitle: '',
        statusMenu: false,
        mainTab: 2,
        status: 1,
        showSearch: false,
        showMain: true,
        userlist: [],
        current: 0,
        chatWindowStatus: 0,
        userCateList: []
      }
    },
    created () {
      this.initData()
    }
  }
</script>

<style lang="scss">
.webchat-chat-win{position:absolute;width:802px;height:545px;left:0;top:0;border:1px solid #ddd;background:#fff;box-shadow: 1px 1px 50px 1px #ddd;z-index:1001}
.webchat-win-hd{height:24px;line-height:25px;padding:0 5px;background:#efefef;cursor:move;}
.webchat-win-hd .webchat-tt{font-size:10px;}
.webchat-win-set{float:right;}
.webchat-win-set a{margin-left:3px;}
.webchat-win-set .webchat-ico-minimize{color:#89ec4a;}
.webchat-ico-minimize:hover{color:#67f30f;}
.webchat-win-set .webchat-ico-close{color:#ff5555;}
.webchat-ico-close:hover{color:#ff1010;}
.webchat-win-min{position:absolute;bottom:10px;left:10px;height:28px;width:240px;line-height:28px;padding:0 5px;background:#efefef;cursor:move;}
.webchat-win-min .webchat-tt{font-size:10px;}
.webchat-win-min-drag{cursor:move;}
.webchat-chat-win .webchat-tab-tt{float:left;width:200px;height:520px;background-color:#2e3238;overflow:hidden;}
.webchat-chat-win .webchat-tab-tt:hover{overflow-y:auto}
.webchat-chat-win .webchat-tab-tt::-webkit-scrollbar{width: 6px;height: 6px;}
.webchat-chat-win .webchat-tab-tt::-webkit-scrollbar-thumb{border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;background-color: #bbb;}
.webchat-chat-win .webchat-tab-tt::-webkit-scrollbar-track{background-color: #f2f2f2;}
.webchat-chat-win .webchat-tab-tt::-webkit-scrollbar-thumb:hover{background-color: #666;}
.webchat-chat-win .webchat-tab-ct{float:left;width:600px;height:100%;}
.webchat-chat-win .webchat-tab-tt >li{padding:10px;height:60px;color:#fff;font-size:16px;border-bottom: 1px solid #292c33;cursor:pointer;}
.webchat-chat-win .webchat-tab-tt >li:hover{background:#3a3f45;}
.webchat-chat-win .webchat-tab-tt >li.focus{background:#3a3f45;}
.webchat-chat-win .webchat-tab-tt >li img{border-radius:50%;height:40px;width:40px;margin-right:10px;}
.webchat-chat-win .webchat-tab-tt >li i{display:none;float:right;color:#aaa;margin-right:10px;line-height:40px;font-size:22px;cursor:pointer;}
.webchat-chat-win .webchat-tab-tt >li:hover i{display:inherit;}
.webchat-chat-win .webchat-tab-tt >li i:hover{color:#fff;}
.webchat-chat-win .webchat-tab-ct >li{height:100%;width:100%;display:block;}
.webchat-chat-win .webchat-chat-hd{display:inline-block;height:80px;}
.webchat-chat-win .webchat-chat-hd *{cursor:default;}
.webchat-chat-win .webchat-tab-ct .webchat-chat-userinfo{position:relative;padding-left:80px;display:inline-block;}
.webchat-chat-win .webchat-tab-ct .webchat-chat-userinfo img{position:absolute;top:10px;left:10px;width:60px;border-radius:50%}
.webchat-chat-win .webchat-tab-ct .webchat-chat-userinfo .webchat-userinfo-name{height:40px;line-height:50px;font-size:18px;}
.webchat-chat-win .webchat-tab-ct .webchat-chat-userinfo .webchat-userinfo-status{height:40px;line-height:30px;font-size:14px;}
.webchat-chat-win .webchat-chat-bd{overflow-y: auto;overflow-x:hidden;height:auto;height:280px;padding:15px;}
.webchat-chat-win .webchat-chat-ft{height:158px;border-top:1px solid #efefef;}
.webchat-chat-win .webchat-chat-ft .webchat-chat-tools{height:40px;}
.webchat-chat-win .webchat-chat-ft .webchat-chat-tools li{height:40px;line-height:40px;margin:0 10px;font-size:24px;cursor:pointer;}
.webchat-chat-win .webchat-chat-ft .webchat-chat-textarea textarea{display:block;width:100%;padding:5px00;height:75px;line-height:20px;border:none;overflow:auto;resize:none;background: 0 0;}
.webchat-chat-win .webchat-chat-op{text-align:right;padding:0 20px;}
.webchat-chat-win .webchat-chat-op span{display: inline-block;font-size: 14px;line-height: 32px;margin-left: 5px;padding: 0 20px;background-color: #1db93e;color: #fff;border-radius: 3px;}
.webchat-chat-win .webchat-chat-op .webchat-send-btn{border-radius:3px 0 0 3px}
.webchat-chat-win .webchat-chat-op .webchat-send-set{margin-left:-3px;border-radius:0 3px 3px 0;padding: 0 10px;}
.webchat-color-success{color:#1db93e}
$main-color: #eee;
.webchat-main{position:fixed;bottom:0px;right:3px;display:block;box-sizing:content-box;width:260px;height:520px;border:1px solid #d9d9d9;border-radius:2px;box-shadow:1px 1px 50px 10px rgba(0,0,0,0.15);color:#666}
.webchat-main-drag{height:15px;padding:0 50px;background-color:$main-color;cursor:move}
.webchat-main-info{height:54px;padding:0 15px;background-color:$main-color;font-size:14px;}
.webchat-main-info .webchat-user{float:left;height:24px;line-height:24px;max-width:150px;margin-right:16px;font-size:16px;}
.webchat-main-info .webchat-status{position:relative;float:left;height:24px;line-height:24px;cursor:pointer}
.webchat-status-online{color:#3fdd86}
.webchat-status-offline{color:#999}
.webchat-status-online:before,.webchat-status-offline:before{content: "\f111";}
.webchat-status-busy{color:#dd691d}
.webchat-status-busy:before{content: "\f017";}
.webchat-status span{transition:all ease .2s;}
.webchat-status .webchat-dropbox{position: absolute;z-index: 100;top: 24px;left: -31px;padding: 5px 0;width: 85px;border: 1px solid #E2E2E2;border-radius: 2px;background-color: #fff;box-shadow: 1px 1px 20px rgba(0,0,0,.1);}
.webchat-status .webchat-dropbox li{position: relative;line-height: 22px;padding-left:6px;font-size: 12px;}
.webchat-status .webchat-dropbox li:hover{background-color:#eee}
.webchat-dropbox li i{display:inline-block;color:#000;width:14px;}
.webchat-dropbox li cite{padding-right:5px;}
.webchat-remark{position: relative;left:-6px;display: block;width:100%;border:1px solid transparent;margin-top: 6px;padding: 0 5px;height: 28px;line-height: 28px;background: 0 0;border-radius: 2px;box-sizing: content-box;}
.webchat-remark{overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
.webchat-remark:focus{border: 1px solid #ccc;}
.webchat-main-tab{height:415px;}
.webchat-main-tab .webchat-tab-tt{height:50px;padding:10px 0px;background-color:$main-color}
.webchat-main-tab .webchat-tab-tt li{position:relative;display:block;float:left;height:30px;line-height:30px;width:33.333%;text-align:center;cursor:pointer;}
.webchat-main-tab .webchat-tab-tt li>i{font-size:22px;}
.webchat-main-tab .webchat-tab-tt li:hover i{color:#777;}
.webchat-main-tab .webchat-tab-ct{position:relative;height:365px;padding:10px 0px;background-color:rgba(255,255,255,0.8);overflow:hidden;transition:opacity ease .5s;}
.webchat-main-tab .webchat-tab-ct:hover{overflow-y:auto;}
.webchat-main-tab .webchat-tab-ct::-webkit-scrollbar{width: 6px;height: 6px;}
.webchat-main-tab .webchat-tab-ct::-webkit-scrollbar-thumb{border-radius: 3px;-moz-border-radius: 3px;-webkit-border-radius: 3px;background-color: #bbb;}
.webchat-main-tab .webchat-tab-ct::-webkit-scrollbar-track{background-color: #f2f2f2;}
.webchat-main-tab .webchat-tab-ct::-webkit-scrollbar-thumb:hover{background-color: #666;}
.webchat-main-tab .webchat-tab-tt .webchat-tab-focus:after{content: '';position: absolute;left: 0;bottom: -10px;width: 100%;height: 1px;background-color: #ff8d42;}
.webchat-tab-item{position: absolute;width:100%}
.webchat-user-cate{position:relative}
.webchat-user-cate h5{height:28px;line-height:28px;padding-left:25px;cursor:pointer;}
.webchat-user-cate h5 *{transition:all ease .2s;}
.webchat-user-cate h5:hover{color:#000;}
.webchat-user-cate h5>span{height:28px;line-height:28px;}
.webchat-user-cate h5>em{font-style:normal;color:#999}
.webchat-user-cate .webchat-ico{height:28px;line-height:28px;font-size:20px;margin-right:5px;color:#999;}
.webchat-user-cate .webchat-ico-angle-right.down{transform: rotateZ(90deg);}
.webchat-main-user-list{width:100%}
.webchat-main-user-list li{position:relative;height: 52px;padding:5px 15px 5px 60px;}
.webchat-main-user-list li:hover{background:#f2f2f2;cursor:pointer;}
.webchat-main-user-list li>img{position: absolute;left:15px;top:8px;width:36px;height:36px;border-radius:50%;}
.webchat-main-user-list li>p{color:#999;font-size:12px;}
.webchat-main-tool{padding: hil0 10px;height:36px;background:$main-color}
.webchat-main-tool li{display:inline-block;float:left;width:20%;height:36px;line-height:36px;text-align:center;font-size:16px;cursor:pointer;}
.webchat-main-tool .webchat-ico{font-size:18px;}
.webchat-main-tool li>i{transition:all ease .2s;}
.webchat-main-tool li:hover i{color:#ff5555;/*color:#dd691d;*/}
.webchat-search-input{position:absolute;height:36px;bottom:1px;left:0px;padding:0 6px;background-color:#fff;}
.webchat-search-input input{position:relative;height:30px;line-height:30px;width:248px;padding:2px 10px;border-radius:3px;background-color:$main-color;border:none;}
.webchat-search-input label{position: absolute;right:20px;top:0;line-height:30px;font-size:18px;cursor:pointer;color:#777}
.webchat-main-setwin{position:absolute;right:14px;top:19px;}
.webchat-main-setwin a{margin-left:3px;}
.webchat-main-setwin .webchat-ico-minimize{color:#89ec4a;}
.webchat-main-setwin .webchat-ico-minimize:hover{color:#67f30f;}
.webchat-main-setwin .webchat-ico-close{color:#ff5555;}
.webchat-main-setwin .webchat-ico-close:hover{color:#ff1010;}
.slide-fade-enter-active {transition: all .2s ease;}
.slide-fade-leave-active {transition: all .2s ease;}
/*.slide-fade-enter{transform: translateX(100px);opacity: 0;}*/
.slide-fade-enter, .slide-fade-leave-to{transform: translateX(-100px);opacity: 0;}
.webchat-main-min{position:fixed;bottom:0;right:0;z-index:1000;padding:5px;border:1px solid #ccc;background-color:#efefef}
.webchat-main-min .webchat-min-userinfo{width:45px;height:45px;border-radius:50%;overflow:hidden;cursor:pointer}
.webchat-main-min .webchat-min-userinfo img{width:100%;height:100%;}
</style>