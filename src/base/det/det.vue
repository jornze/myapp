<template>
	<transition name='move'>
		<div v-show='flag' class='detbd'>
			<p @click='hide'>xxxxxxx</p>
			<img :src='detail.img'
			<p v-text='detail.title'></p>
			<p v-text='detail.unitPrice'></p>
			<p v-text='detail.det'></p>
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
		hide(){
			this.flag=false
		},
		show(){
			this.flag=true
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
</style>