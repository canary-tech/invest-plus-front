<template>
    <header class="topbar" data-navbarbg="skin3">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin3">
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)">
                        <font-awesome-icon icon="bars" />
                    </a>
                    <router-link :to="{ path: '/'}" class="navbar-brand">
                        <span class="logo-text">
                             <!-- <img src="../assets/monster/images/logo-text.png" alt="homepage" class="dark-logo">
                             <img src="../assets/monster/images/logo-light-text.png" class="light-logo" alt="homepage"> -->
                             iPlus
                        </span> 
                        <b class="logo-icon">
                            <img src="../assets/monster/images/logo-icon.png" alt="homepage" class="dark-logo">
                            <img src="../assets/monster/images/logo-light-icon.png" alt="homepage" class="light-logo">
                        </b>
                    </router-link>
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <!-- <i class="ti-more"></i> -->
                    </a>
                </div> 
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin3">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item d-none d-md-block">
                            <a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar">
                                 <font-awesome-icon icon="angle-double-left" />
                            </a>
                        </li>
                        
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item search-box d-none d-md-block">
                            <form class="app-search mt-3 mr-2">
                                <input type="text" class="form-control rounded-pill border-0" placeholder="Search for..."> 
                                <a class="srh-btn">
                                    <font-awesome-icon icon="times" />
                                </a> 
                            </form>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/monster/images/users-1.jpg" alt="user" class="rounded-circle" width="31">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <div class="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                                    <div class=""><img src="../assets/monster/images/users-1.jpg" alt="user" class="rounded" width="80"></div>
                                    <div class="ml-2">
                                        <h4 class="mb-0">Steave Jobs</h4>
                                        <p class=" mb-0">varun@gmail.com</p>
                                        <a href="profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a>
                                    </div>
                                </div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-user mr-1 ml-1"></i> My Profile</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-wallet mr-1 ml-1"></i> My Balance</a>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-email mr-1 ml-1"></i> Inbox</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="ti-settings mr-1 ml-1"></i> Account Setting</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="javascript:void(0)"><i class="fa fa-power-off mr-1 ml-1"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    </header>
</template>

<script> 
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>


<style scoped lang="scss">

</style>
