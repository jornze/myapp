<template>
	<div ref='find'>
		<template v-for='item in data'>
			<p>{{item.age}}-{{item.name}}-{{item.professional}}</p>
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
			}
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