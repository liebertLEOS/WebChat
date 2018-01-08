<template>
  <div class="webchat-win-container" v-if="show">
  	<div class="webchat-win" v-bind:class="winClass" v-drag="'webchat-win-hd'" v-show="!showWinMin">
  		<div class="webchat-win-hd">
  			<span class="webchat-ico webchat-ico-safari"></span>
  			<span class="webchat-tt">{{winTitle}}</span>
  			<span class="webchat-win-set">
          <a class="webchat-ico webchat-ico-minimize" href="javascript:;" v-on:click="showMin = true"></a>
          <a class="webchat-ico webchat-ico-close" href="javascript:;" v-on:click="show = false"></a>
        </span>
  		</div>
  		<div class="webchat-win-bd">
  			<slot name="bd"></slot>
  		</div>
  	</div>
    <div class="webchat-win-min" v-show="showWinMin" v-drag="'webchat-win-min-drag'">
      <div class="webchat-win-min-drag">
        <span class="webchat-ico webchat-ico-safari"></span>
        <span class="webchat-tt">{{winTitle}}</span>
        <span class="webchat-win-set">
          <a class="webchat-ico webchat-ico-maximize" href="javascript:;" v-on:click="showWinMin = false"></a>
          <a class="webchat-ico webchat-ico-close" href="javascript:;" v-on:click="show = false"></a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: ['winClass', 'winTitle', 'show', 'showMin'],
      data: function () {
        return {
          showWinMin: this.showMin
        }
      }
    }
</script>

<style>
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
</style>