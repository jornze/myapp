<template>
	<transition name='move'>
		<div v-show='flag' class='detbd'>
			<p @click='hide'>xxxxxxx</p>
			<img :src='$root.$data.url+detail.img'>
			<p v-text='detail.title'></p>
			<p v-text='detail.unitPrice'></p>
			<p v-text='detail.det'></p>
			<p @click='addShopcar(detail)'>加入购物车</p>
		</div>
	</transition>
	
</template>
<script>
export default{
	data(){
		return{
			flag:false
		}
	},
	props:{
		detail:{
			type:Object,
			required:true
		}
	},
	methods:{
		show(){
			this.flag=true;
		},
		hide(){
			this.flag=false;
		},
		addShopcar(detail){
			this.$emit('addshopcar',detail);
			
		}
		
	}
}
</script>
<style>
.detbd{
	position:fixed;
	top:0;
	left:0;
	background:red;
	color:#fff;
	width:100%;
	height:100%;
	z-index:11;

}
.move-enter, .move-leave-to{
	left:100%;
	
}
.move-enter-active, .move-leave-active{
	transition:all 0.6s;
}
</style>