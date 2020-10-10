<template>
  <div class="dash">

        <div class="page-wrapper" style="display: block;">
            <div class="row">
                <div class="col-xs-5 col-md-1">            
                    <Breadcrumb title="Produtos" />
                </div>
                <div class="col-xs-2 col-md-7"> </div>
                <div class="col-xs-5 col-md-4">            
                  <router-link :to="{ path: '/products-edit/new' }" class="btn btn-success">
                      Novo
                  </router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="message-box" style="height: 476px;" >
                                <div class="message-widget">
                                    <router-link :to="{ path: '/products-edit/ad634fg63rt51jh3tyk' }" class="d-flex py-2 px-3">
                                        <div class="w-100 v-middle pl-2">
                                            <span class="font-12 text-nowrap d-block time">Nubank</span> 
                                            <h5 class="mb-10 mt-10">Conta Corrente 100% CDI</h5> 
                                            <span class="col-md-6">R$ 1.520,95</span> 
                                            <span class="col-md-6">12,36%</span> 
                                        </div>
                                    </router-link>
                                </div>
                                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: -132px;">
                                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                                </div>
                                <div class="ps-scrollbar-y-rail" style="top: 132px; right: 3px; height: 476px;">
                                    <div class="ps-scrollbar-y" tabindex="0" style="top: 104px; height: 372px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script> 
import Breadcrumb from '../../components/Breadcrumb'
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