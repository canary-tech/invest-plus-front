<template>
  <div class="dash">

        <div class="page-wrapper" style="display: block;">
            <div class="row">
                <div class="col-md-2 align-self-start">            
                    <Breadcrumb title="Dashboard" />
                </div>
                <div class="col-md-10 d-flex justify-content-end align-self-center d-none d-md-flex">
                    <div class="dropdown mr-2 hidden-sm-down">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> January 2020 </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> 
                            <a class="dropdown-item" href="#">February 2020</a> 
                            <a class="dropdown-item" href="#">March 2020</a> 
                            <a class="dropdown-item" href="#">April 2020</a> 
                        </div>
                    </div>
                    <button class="btn btn-success">
                        <i class="mdi mdi-plus-circle"></i> Novo
                    </button>
                </div>
            </div>

            <div class="container-fluid">
       
            </div>

        </div>

  </div>
</template>

<script> 
import Breadcrumb from '../components/Breadcrumb'
export default {
  name: 'Dashboard',
  components: {
    Breadcrumb,
  },
  props: {
    
  }
}
</script>


<style scoped lang="scss">

</style>