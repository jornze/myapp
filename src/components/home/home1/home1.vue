<template>
	<div class='home1' ref='home1'>
	<div>
		<template v-for='(item,index) in filteddata'>
				<div style='height:200px' :key='item.Name' class='lists' @click='showDet(item)'>
					<div class='listpl'>
						<img :src='item.img' />
					</div>
					<div class='listpr'>
						<p v-text='item.Name'></p>
						<p v-text='item.title'></p>
					</div>
					
				</div>
	    </template>
	    
	</div>
	<det ref="det" :detail='details'></det>
	</div>
</template>
<script>
import det from '@/base/det/det.vue'
import BScroll from 'better-scroll'
export default{
	data(){
		return{
			details:{
				type:Object,
				required:true
			}
		}
	},
	mounted(){
		this.$nextTick(()=>{
			this.scroll=new BScroll(this.$refs.home1,{
						
					      click: {
					        type: Boolean,
					        default: true
					      }
					})
		})
			
		
		
	},
	components:{
		det
	},
	props:{
		filteddata:''
	},
	methods:{
		showDet(item){
			this.details=item;
			
			this.$refs.det.show();	
		},

	}
		
	
}
</script>
<style>
	.lists{
		width:100%;
		display:flex;
		height:100%;
		padding:20px;
		box-sizing:border-box;
	}
	.lists .listpl{
		width:150px;
	}
	.listpl img{
		display:block;
		width:100%;
		height:100%
	}
	.listpr{
	flex:1;
	}
	.listpr p:nth-child(1){
		height:50px;
		line-height:50px;
		text-align:left;
		padding-left:30px;

	}
	.listpr p:nth-child(2){
		height:150px;
		line-height:24px;

	}
	.home1{
	    position: absolute;
	    width: 100%;
	    top: 40px;
	    bottom: 10px;
	}
	html { overflow-x: hidden; overflow-y: hidden; }
</style>











