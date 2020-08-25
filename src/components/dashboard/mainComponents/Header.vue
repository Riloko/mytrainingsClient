<template>
  <div class="main-header">
        <div class="main-header-buttons">
            <slot name="btn"></slot>
        </div>
        <div class="main-header-pagging">
            <slot name="pagging"></slot> 
        </div>
  </div>
</template>


<script>



export default {
  name: "Header"    
}
</script>

