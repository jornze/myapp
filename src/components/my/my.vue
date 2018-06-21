<template>
	<div >
		<div ref='my' class='my'>
		<div >
			  <div class='shoptop'>
			  	<p class='toptit'>选择</p>
				<p class='img'>展示</p>
				<p class='toptit'>书名</p>
				<p  class='toptit'>单价</p>
				<p class='toptit'>
					数量
				</p>
				<p  class='toptit'>总价</p>
				<p  class='toptit'>操作</p>
			  </div>
			  
			  <div >
				  	<div class='shoplist'  v-for='(item,index) in getstorage' >
					  	<p class='check'><input type='checkbox' /></p>
						<img :src='item.img' class='img'/>
						<p v-text='item.Name' class='tablep'></p>
						<p  class='tablep'>{{item.unitPrice  | unitprice}}</p>
						<p class='tablep'>
							<span @click='red(item)'>-</span><input v-model='item.defaultnm' disabled='disabled'><span @click='add(item)'>+</span>
						</p>
						<p class='tablep'>{{ item.unitPrice*item.defaultnm | allmon('元') }}</p>
						<p  class='tablep' @click='dele(index)'>删除</p>
				  	</div>
			  </div>
			  <div>暂无商品</div>
			
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
	watch:{
		
	},
	computed:{
		


	},
	filters:{
		unitprice(val){
			return '￥'+val;
		},
		allmon(val,type){
			return "￥"+val+type
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.scroll();
			//this.getstorage();
			//localStorage.clear();
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
		},
		dele(index){
		   
			this.dd.splice(index,1);
			
		}
	}
}
</script>
<style scoped>
.my{
	width:100%;
	position:absolute;
	top:0;
	bottom:40px;
	min-height:800px;
}
.shoptop{
	 width:100%;
	height:40px;
	background:#f40;
	display:flex;
	color:#fff;
}

.shoptop .toptit{
	width:20%;
	line-height:40px;
	color:#fff;
}
.shoptop p{
	flex:1;
	line-height:40px;
	color:#fff;
}
.shoplist{
    width:100%;
	height:100px;
	border-bottom:1px solid #ccc;
	display:flex;
}
.img{
	width:20%;
}
.shoplist p{
	flex:1;
}
.check{
	width:5%;
	margin-top:40px;
}
.tablep{
	width:15%;
	height:50px;
	margin-top:30px;
	line-height:50px;
}
.tablep input{
	display:inline-block;
	width:50%;
	height:30px;

}
.tablep span{
display:inline-block;
	width:20%;
	height:34px;
	line-height:34px;
	background:#ccc;
}
</style>