<template>
    <div>
        <Header />
        <LeftSidebar />      
        
    </div>
</template>


<script>
import Header from './Header'
import LeftSidebar from './LeftSidebar'

export default {
  components: {
    Header, LeftSidebar
  },
  props: {
    
  }
}
</script>