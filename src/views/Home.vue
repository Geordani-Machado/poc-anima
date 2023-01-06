<template>
  <div class=" w-screen h-screen flex">
          <SideBar/>
        <div class=" px-3 divide-x divide-zinc-700 
          w-full justify-center justify-items-center">
          <Banner class=" justify-center justify-items-center"/>
            </div>
        </div>
</template>

<script setup>
import SideBar from '../components/sidebar.vue'
import Banner from '../components/banner.vue'
</script>

<script>
export default{
  data(){
    return{
      
    }
  }
}
</script>



