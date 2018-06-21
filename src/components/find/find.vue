<template>
	<div ref='find'>
		<template v-for='item in data'>
			<p>{{item.title}}-{{item.name}}</p>
			<img :src="url+item.img" />
		</template>
	</div>
</template>
<script>
export default{
	data(){
		return{
			data:{
				type:Object,
				required:true
			},
			url:'http://localhost:4000'
		}
	},
	mounted(){
		this.$nextTick(function(){
			this.getdata();
		})
	},
	methods:{
		getdata(){
			this.$http.get('/nodejson/123').then(res=>{
			
				this.data=res.data.data;
				console.log(this.data);
			
			})
			.catch(err=>{
				console.log('get123',err)
			})
		}
		
	}
}
</script>
<style></style>