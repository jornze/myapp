<template>
	<div >
		<div ref='my' class='my'>
		<div >
			
			  <div class='shoplist'  v-for='item in shopcar'>
			  	<p><input type='checkbox' /></p>
				<img :src='item.img' class='img'/>
				<p v-text='item.Name'></p>
				<p v-text='item.unitPrice'></p>
				<p >
					<span @click='red(item)'>-</span><input v-model='item.defaultnm'><span @click='add(item)'>+</span>
				</p>
				<p v-text='item.unitPrice*item.defaultnm'></p>
				<p >删除</p>
			  </div>
			
		</div>
		</div>
		
	</div>
</template>
<script>
import BScroll from 'better-scroll'
export default{
	data(){
		return{
			
		}
	},
	computed:{
		shopcar(){
			return Array.from(new Set(this.$root.Bus.shopcar));
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.scroll();
		})
	},
	props:{

	},
	methods:{
		scroll(){
			this.scroll=new BScroll(this.$refs.my,{
				click: {
					        type: Boolean,
					        default: true
					      }
			})
		},
		red(item){
			
			if(item.defaultnm==1){
					item.defaultnm=1
			}else{
				item.defaultnm--
			}
			
		},
		add(item){
			if(item.defaultnm==item.allnm){
					item.defaultnm=item.allnm;
			}else{
				item.defaultnm++;
			}	
			
		}
	}
}
</script>
<style>
.my{
	width:100%;
	position:absolute;
	top:0;
	bottom:40px;
	min-height:800px;
}
.shoplist{
    width:100%;
	height:100px;
	border-bottom:1px solid #ccc;
	display:flex;
}
.img{
	width:150px;
}
.shoplist p{
	flex:1;
}
</style>