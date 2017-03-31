<template lang="html">
	<header class="top">
		<h1 class="logo"></h1>
		<span class="location"><img src="../../../static/img/location-white.png"/></span>
		<p class="addr">请填写地址</p>
		<span class="arr"><img src="../../../static/img/down-arr1.png"/></span>
		<div class="search"><img src="../../../static/img/search-white.png"/></div>
		<lb></lb>
	</header>
</template>

<script>
import lb from '../../components/lb'
	export default{
		components:{
			lb
		}
	}
</script>

<style lang="less">
	.top{
		width:10rem;
		height:1.2rem;
		background:#78c652;
		.logo{
			width:2.293333rem;
			height:1.2rem;
			background:url(../../../static/img/wc-logo.png) no-repeat center center;
			background-size:1.253333rem 0.746667rem;
			float:left;
		}
		.location{
			width:0.4rem;
			height:1.2rem;
			display:block;
			float:left;
			line-height:1.2rem;
			img{
				width:0.4rem;
				height:0.4rem;
			}
		}
		.addr{
			width:3.333333rem;
			height:1.2rem;
			float:left;
			text-align:center;
			line-height:1.2rem;
			color:#fff;
			font-size:0.426667rem;
		}
		.arr{
			width:0.4rem;
			height:1.2rem;
			display:block;
			float:left;
			line-height:1.2rem;
			img{
				width:0.4rem;
				height:0.4rem;
			}
		}
		.search{
			width:1.066667rem;
			height:1.2rem;
			float:right;
			img{
				width:0.746667rem;
				height:0.746667rem;
				margin-top:0.266667rem;
			}
		}
	}
</style>