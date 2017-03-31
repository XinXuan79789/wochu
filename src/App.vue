<template>
  <div id="app">
    <div class="tabbar">
    	<section class="home">
    		<router-link to="/home"><span>首页</span></router-link>
    	</section>
    	<section class="fenlei">
    		<router-link to="/fenlei"><span>分类</span></router-link>
    	</section>
    	<section class="cart">
    		<router-link to="/cart"><span>购物车</span></router-link>
    	</section>
    	<section class="mine">
    		<router-link to="/mine"><span>我的</span></router-link>
    	</section>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style lang="less">
*{
	box-sizing: border-box;
	font-family:"微软雅黑";
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*color: #2c3e50;*/
}
#app .tabbar{
	width:10rem;
	height:1.44rem;
	position:fixed;
	border-top:0.026667rem solid orange;
	left:0;
	right:0;
	bottom:0;
	display:flex;
	justify-content:space-around;
	align-items:center;	
	section{
		width:25%;
		height:1.44rem;
		text-align:center;
		line-height:1.44rem;
		font-size:0.373333rem;
		a{
			color:#898989;
			width:2.48rem;
			height:1.44rem;
			display:block;
		}
	}
	.home{
		a{
			background:url(../static/img/index_r.png) no-repeat top center;
			background-size:0.533333rem 0.533333rem ;
		}
		span{
			display: block;
			margin:0.266667rem 0 0 0;
		}
	}
	.fenlei{
		a{
			background:url(../static/img/shopping_n.png) no-repeat top center;
			background-size:0.533333rem 0.533333rem ;
		}
		span{
			display: block;
			margin:0.266667rem 0 0 0;
		}
		
	}
	
	.cart{
		a{
			background:url(../static/img/cart_n.png) no-repeat top center;
			background-size:0.533333rem 0.533333rem ;
		}
		span{
			display: block;
			margin:0.266667rem 0 0 0;
		}
	}
	.mine{
		a{
			background:url(../static/img/my_n.png) no-repeat top center;
			background-size:0.533333rem 0.533333rem ;
		}
		span{
			display: block;
			margin:0.266667rem 0 0 0;
		}
	}
	
}




</style>
