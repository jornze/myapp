<template>
	<div>
		<template v-for='(item,index) in filteddata'>
				<div style='height:200px' :key='item.Name'>
					<p v-text='item.Name'></p>
					<p v-text='item.title'></p>
				</div>
	    </template>
	</div>
</template>
<script>
export default{
	props:{
		filteddata:''
	}
		
	
}
</script>
<style></style>