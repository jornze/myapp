<template>
	<div class='home1' ref='home3'>
	<div>
		<template v-for='(item,index) in filteddata'>
				<div style='height:200px' :key='item.name' class='lists' @click='showDet(item)'>
					<div class='listpl'>
						<img :src='$root.$data.url+item.img' />
					</div>
					<div class='listpr'>
						<p v-text='item.name'></p>
						<p v-text='item.title'></p>
					</div>
					
				</div>
	    </template>
	    
	</div>
	<det ref="det" :detail='details'  @addshopcar='addshop'></det>
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
			this.scroll=new BScroll(this.$refs.home3,{
						
					      click: {
					        type: Boolean,
					        default: true
					      },
					      pullup: {
					       type: Boolean, 
					       default: true
					       },

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
		addshop(detail){
		   
		   if(this.localdata.length==0){
					this.localdata.push(detail);
			}else{

					/*for(let i=0;i<this.localdata.length;i++){
				
						if(this.localdata[i].Name==detail.Name){
							this.localdata[i].defaultnm=parseInt(this.localdata[i].defaultnm)+1;
						}else{
							this.localdata.push(detail);
						}
		  			}*/
			}
			
			
			
			
				
	    }

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











