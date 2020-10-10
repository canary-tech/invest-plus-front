<template>
  <div class="">

        <div class="page-wrapper" style="display: block;">
            <div class="row">
                <div class="col-md-2">            
                    <Breadcrumb title="Produtos" />
                </div>
                <div class="col-md-10">
                      <router-link :to="{ path: '/products' }" class="btn btn-secondary">
                          Voltar
                      </router-link>
                
                </div>
                
                
                
            </div>

        </div>

  </div>
</template>

<script> 
import Breadcrumb from '../../components/Breadcrumb'
export default {
  name: 'ProductForm',
  components: {
    Breadcrumb,
  },
  props: {
    
  }
}
</script>


<style scoped lang="scss">

</style>