<template>
  <div class="dash">

        <div class="page-wrapper" style="display: block;">
            <div class="row">
                <div class="col-md-2">            
                    <Breadcrumb title="Produtos" />
                </div>
                <div class="col-md-10">
                    <router-link :to="{ path: '/products' }" class="btn btn-secondary">Voltar</router-link>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-12 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <form class="mt-3">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <small class="text-muted">Instituição</small>
                                            <select class="form-control" v-model="status">
                                                <option selected="selected" value="" ></option>
                                                <option v-for="i in institions" :key="i" :value="i">{{ i.name }}</option>
                                            </select>
                                        </div>                                        
                                    </div>

                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>

  </div>
</template>

<script> 
import Breadcrumb from '../../components/Breadcrumb'
import axios from 'axios'
export default {
  name: 'ProductForm',
  components: {
    Breadcrumb,
  },
  props: {
    
  },
  data() {
    return {
      status: "",
      institions: []
    }
  }, 
  created: function() {
    let URL = 'http://www.amock.io/api/instituicoes';
    
    axios.get(URL).then(resp => {
        this.institions = resp.data;
    });    
  }
}
</script>


<style scoped lang="scss">

</style>