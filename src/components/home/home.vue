<template>
<div>
	<nav class='nav'>
			<template v-for='(item,index) in head'>
				<div :key='index' v-text='item.title' class='navli' :class="{'active':cur==item.ind} " @click='navtab(item)'></div>
			</template>
	</nav>
	
	<div ref='home' id='home'>
		<div class='homebar' >
			<keep-alive>
				<transition name='move'>
					<component :is='hometab' :filteddata='filteddata'></component>
				</transition>
			</keep-alive>
			
        </div>
	</div>
</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import home1 from '@/components/home/home1/home1'
	import home2 from '@/components/home/home2/home2'
	import home3 from '@/components/home/home3/home3'
	import home4 from '@/components/home/home4/home4'
	export default{
		data(){
			return{
				head:[
					{"title":"前端","ind":"1","type":"web"},
					{"title":"服务器","ind":"2","type":"server"},
					{"title":"xml","ind":"3","type":"xml"},
					{"title":".NET","ind":"4","type":"net"}
				],
				allbook:[],
				cur:1,
				type:'web',
				

			}
		},
		components:{
			home1,
			home2,
			home3,
			home4
		},
		computed:{
			hometab(){
				return 'home'+this.cur;
			},
			filteddata(){
				return this.allbook.filter(item=>item.type==this.type)
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.fetchallBookdata();
			})
		},
		methods:{
			fetchallBookdata(){
				this.$http.get('static/data.json').then(res=>{
					this.allbook=res.data.book;
					this.scroll=new BScroll(this.$refs.home,{

					})
				}).catch(err=>{console.log('fetchallbookdata',err)})
			},
			navtab(item){
				this.cur=item.ind;
				this.type=item.type;
				
			}
		}

	}
</script>
<style>
#home{
	position:absolute;
	width:100%;
	top:40px;
	bottom:10px;
	min-height:800px;
}
.nav{
	display:flex;
	display:-webkit-flex;
	position:fixed;
	top:0;
	z-index:1000;
	background:#eee;
	width:100%;
}
.nav .navli{
	flex:1;
	-webkit-box-flex: 1;
	height:40px;
	text-align:center;
	line-height:40px;

}
.active{
	color:#f40;
	border-bottom:1px solid #f40;
}
</style>