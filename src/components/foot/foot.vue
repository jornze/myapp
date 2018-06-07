<template>
	<div ref='footer' id='foot'>
		<ul>
			<li>
				<router-link to='/home'>首页</router-link>
			</li>
			<li>
				<router-link to='/find'>发现</router-link>
			</li>
			<li>
				<router-link to='/my'>我的</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return{

		}
	}
		
}
</script>
<style scoped>
	#foot{
	width:100%;
	position:fixed;
	bottom:0;
	left:0;
	
	}
	#foot ul{
		display:flex;
		width:100%;
		height:40px;
		background:#999;
	}
	#foot ul li{
		flex:1;
		text-align:center;
		line-height:40px;
	}
	#foot ul li a{
		display:block;
		width:100%;
		height:100%
	}
	.router-link-active{
		background:#f40;
		color:#fff;
	}
</style>