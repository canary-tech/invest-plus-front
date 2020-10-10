<template>
  <div class="dash">

        <div class="page-wrapper" style="display: block;">
            <div class="row">
                <div class="col-md-2 align-self-start">            
                    <Breadcrumb title="Produtos" />
                </div>
                <div class="col-md-8"> </div>
                <div class="col-md-2 align-self-end justify-content-between">            

                  <button class="btn btn-success">
                      <i class="mdi mdi-plus-circle"></i> Novo
                  </button>
                </div>
            </div>
            <div class="container-fluid">
              <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="d-md-flex no-block">
                            <h4 class="card-title">Projects of the Month</h4>
                            <div class="ml-auto">
                                <select class="custom-select">
                                    <option selected="">January</option>
                                    <option value="1">February</option>
                                    <option value="2">March</option>
                                    <option value="3">April</option>
                                </select>
                            </div>
                        </div>
                        <div class="table-responsive mt-2">
                            <table class="table stylish-table mb-0 mt-2 no-wrap v-middle">
                                <thead>
                                    <tr>
                                        <th class="font-weight-normal text-muted border-0 border-bottom" colspan="2">Assigned</th>
                                        <th class="font-weight-normal text-muted border-0 border-bottom">Name</th>
                                        <th class="font-weight-normal text-muted border-0 border-bottom">Priority</th>
                                        <th class="font-weight-normal text-muted border-0 border-bottom">Budget</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td style="width:50px;"><span class="round rounded-circle text-white d-inline-block text-center bg-info">S</span></td>
                                        <td>
                                            <h6 class="font-weight-medium mb-0 nowrap">Sunil Joshi</h6><small class="text-muted no-wrap">Web Designer</small></td>
                                        <td>Elite Admin</td>
                                        <td><span class="badge badge-light-success text-success">Low</span></td>
                                        <td>$3.9K</td>
                                    </tr>
                                    <tr class="active">
                                        <td><span class="round text-white d-inline-block text-center"><img src="../assets/monster/images/users-2.jpg" alt="user" class="rounded-circle" width="50"></span></td>
                                        <td>
                                            <h6 class="font-weight-medium mb-0 nowrap">Andrew</h6><small class="text-muted no-wrap">Project Manager</small></td>
                                        <td>Real Homes</td>
                                        <td><span class="badge badge-light-info text-info">Medium</span></td>
                                        <td>$23.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span class="round rounded-circle text-white d-inline-block text-center bg-success">B</span></td>
                                        <td>
                                            <h6 class="font-weight-medium mb-0 nowrap">Bhavesh patel</h6><small class="text-muted no-wrap">Developer</small></td>
                                        <td>MedicalPro Theme</td>
                                        <td><span class="badge badge-light-danger text-danger">High</span></td>
                                        <td>$12.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span class="round rounded-circle text-white d-inline-block text-center bg-primary">N</span></td>
                                        <td>
                                            <h6 class="font-weight-medium mb-0 nowrap">Nirav Joshi</h6><small class="text-muted no-wrap">Frontend Eng</small></td>
                                        <td>Elite Admin</td>
                                        <td><span class="badge badge-light-success text-success">Low</span></td>
                                        <td>$10.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span class="round rounded-circle text-white d-inline-block text-center bg-warning">M</span></td>
                                        <td>
                                            <h6 class="font-weight-medium mb-0 nowrap">Micheal Doe</h6><small class="text-muted no-wrap">Content Writer</small></td>
                                        <td>Helping Hands</td>
                                        <td><span class="badge badge-light-danger text-danger">High</span></td>
                                        <td>$12.9K</td>
                                    </tr>
                                    <tr>
                                        <td><span class="round rounded-circle text-white d-inline-block text-center bg-danger">N</span></td>
                                        <td>
                                            <h6 class="font-weight-medium mb-0 nowrap">Johnathan</h6><small class="text-muted no-wrap">Graphic</small></td>
                                        <td>Digital Agency</td>
                                        <td><span class="badge badge-light-danger text-danger">High</span></td>
                                        <td>$2.6K</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
              </div>                
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