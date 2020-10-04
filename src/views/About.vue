<template>
  <div class="about">

    <!-- ============================================================== -->
    <!-- Preloader - style you can find in spinners.css -->
    <!-- ============================================================== -->
    <div class="preloader" style="display: none;">
        <div class="lds-ripple">
            <div class="lds-pos"></div>
            <div class="lds-pos"></div>
        </div>
    </div>
    <!-- ============================================================== -->
    <!-- Main wrapper - style you can find in pages.scss -->
    <!-- ============================================================== -->
    <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin3" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full" class="">
        <!-- ============================================================== -->
        <!-- Topbar header - style you can find in pages.scss -->
        <!-- ============================================================== -->
        <header class="topbar" data-navbarbg="skin3">
            <nav class="navbar top-navbar navbar-expand-md navbar-dark">
                <div class="navbar-header" data-logobg="skin3">
                    <!-- This is for the sidebar toggle which is visible on mobile only -->
                    <a class="nav-toggler waves-effect waves-light d-block d-md-none" href="javascript:void(0)"><i class="ti-menu ti-close"></i></a>
                    <!-- ============================================================== -->
                    <!-- Logo -->
                    <!-- ============================================================== -->
                    <a class="navbar-brand" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html">
                        <!-- Logo icon -->
                        <b class="logo-icon">
                            <!--You can put here icon as well // <i class="wi wi-sunset"></i> //-->
                            <!-- Dark Logo icon -->
                            <!-- <img src="./Monster Template by WrapPixel_files/logo-icon.png" alt="homepage" class="dark-logo"> -->
                            <!-- Light Logo icon -->
                            <!-- <img src="./Monster Template by WrapPixel_files/logo-light-icon.png" alt="homepage" class="light-logo"> -->
                        </b>
                        <!--End Logo icon -->
                        <!-- Logo text -->
                        <span class="logo-text">
                             <!-- dark Logo text -->
                             <!-- <img src="./Monster Template by WrapPixel_files/logo-text.png" alt="homepage" class="dark-logo"> -->
                             <!-- Light Logo text -->    
                             <!-- <img src="./Monster Template by WrapPixel_files/logo-light-text.png" class="light-logo" alt="homepage"> -->
                        </span>
                    </a>
                    <!-- ============================================================== -->
                    <!-- End Logo -->
                    <!-- ============================================================== -->
                    <!-- ============================================================== -->
                    <!-- Toggle which is visible on mobile only -->
                    <!-- ============================================================== -->
                    <a class="topbartoggler d-block d-md-none waves-effect waves-light" href="javascript:void(0)" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i class="ti-more"></i></a>
                </div>
                <!-- ============================================================== -->
                <!-- End Logo -->
                <!-- ============================================================== -->
                <div class="navbar-collapse collapse" id="navbarSupportedContent" data-navbarbg="skin3">
                    <!-- ============================================================== -->
                    <!-- toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item d-none d-md-block"><a class="nav-link sidebartoggler waves-effect waves-light" href="javascript:void(0)" data-sidebartype="mini-sidebar"><i class="icon-arrow-left-circle"></i></a></li>
                        <!-- ============================================================== -->
                        <!-- Comment -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-message"></i>
                                 <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu mailbox animated bounceInDown">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="font-weight-medium border-bottom rounded-top py-3 px-4">
                                            Notifications
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-center notifications position-relative ps-container ps-theme-default" style="height:250px;" data-ps-id="e1eb04d2-5b85-88b4-455a-2b32937a54b7">
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-danger rounded-circle btn-circle"><i class="fa fa-link"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Luanch Admin</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my new admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:30 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-success rounded-circle btn-circle"><i class="ti-calendar"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Event today</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just a reminder that you have event</span> <span class="font-12 text-nowrap d-block text-muted">9:10 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-info rounded-circle btn-circle"><i class="ti-settings"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Settings</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">You can customize this template as you want</span> <span class="font-12 text-nowrap d-block text-muted">9:08 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <span class="btn btn-primary rounded-circle btn-circle"><i class="ti-user"></i></span>
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                            </a>
                                        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                                    </li>
                                    <li>
                                        <a class="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <strong>Check all notifications</strong> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Comment -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- Messages -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle waves-effect waves-dark" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" id="2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="mdi mdi-email"></i>
                                 <div class="notify"> <span class="heartbit"></span> <span class="point"></span> </div>
                            </a>
                            <div class="dropdown-menu mailbox animated bounceInDown" aria-labelledby="2">
                                <ul class="list-style-none">
                                    <li>
                                        <div class="font-weight-medium border-bottom rounded-top py-3 px-4">
                                            Messages
                                        </div>
                                    </li>
                                    <li>
                                        <div class="message-center message-body position-relative ps-container ps-theme-default" style="height:250px;" data-ps-id="f8ce32a1-4acc-4903-68df-ac51e270d34b">
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle online"></span> </span> -->
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:30 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle busy"></span> </span> -->
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Sonu Nigam</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">I've sung a song! See you at</span> <span class="font-12 text-nowrap d-block text-muted">9:10 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/3.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle away"></span> </span> -->
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Arijit Sinh</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">I am a singer!</span> <span class="font-12 text-nowrap d-block text-muted">9:08 AM</span> </div>
                                            </a>
                                            <!-- Message -->
                                            <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2">
                                                <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/4.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span> -->
                                                <div class="w-75 d-inline-block v-middle pl-2">
                                                    <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                            </a>
                                        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                                    </li>
                                    <li>
                                        <a class="nav-link border-top text-center text-dark pt-3" href="javascript:void(0);"> <b>See all e-Mails</b> <i class="fa fa-angle-right"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End Messages -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- mega menu -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown mega-dropdown"><a class="nav-link dropdown-toggle waves-effect waves-dark" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <span class=""><i class="mdi mdi-view-grid"></i></span>
                            </a>
                            <div class="dropdown-menu animated bounceInDown">
                                <div class="mega-dropdown-menu row">
                                    <div class="col-lg-3 col-xlg-2 mb-4">
                                        <h4 class="mb-3">CAROUSEL</h4>
                                        <!-- CAROUSEL -->
                                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner" role="listbox">
                                                <div class="carousel-item active">
                                                    <!-- <div class="container p-0"> <img class="d-block img-fluid" src="./Monster Template by WrapPixel_files/img1.jpg" alt="First slide"></div> -->
                                                </div>
                                                <div class="carousel-item">
                                                    <!-- <div class="container p-0"><img class="d-block img-fluid" src="./Monster Template by WrapPixel_files/img2.jpg" alt="Second slide"></div> -->
                                                </div>
                                                <div class="carousel-item">
                                                    <!-- <div class="container p-0"><img class="d-block img-fluid" src="./Monster Template by WrapPixel_files/img3.jpg" alt="Third slide"></div> -->
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#carouselExampleControls" role="button" data-slide="prev"> <span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="sr-only">Previous</span> </a>
                                            <a class="carousel-control-next" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#carouselExampleControls" role="button" data-slide="next"> <span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="sr-only">Next</span> </a>
                                        </div>
                                        <!-- End CAROUSEL -->
                                    </div>
                                    <div class="col-lg-3 mb-4">
                                        <h4 class="mb-3">ACCORDION</h4>
                                        <!-- Accordian -->
                                        <div id="accordion">
                                            <div class="card mb-1">
                                                <div class="card-header" id="headingOne">
                                                    <h5 class="mb-0">
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  Collapsible Group Item #1
                                                </button>
                                              </h5>
                                                </div>
                                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card mb-1">
                                                <div class="card-header" id="headingTwo">
                                                    <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                  Collapsible Group Item #2
                                                </button>
                                              </h5>
                                                </div>
                                                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card mb-1">
                                                <div class="card-header" id="headingThree">
                                                    <h5 class="mb-0">
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                  Collapsible Group Item #3
                                                </button>
                                              </h5>
                                                </div>
                                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                                    <div class="card-body">
                                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3  mb-4">
                                        <h4 class="mb-3">CONTACT US</h4>
                                        <!-- Contact -->
                                        <form>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="exampleInputname1" placeholder="Enter Name"> </div>
                                            <div class="form-group">
                                                <input type="email" class="form-control" placeholder="Enter email"> </div>
                                            <div class="form-group">
                                                <textarea class="form-control" id="exampleTextarea" rows="3" placeholder="Message"></textarea>
                                            </div>
                                            <button type="submit" class="btn btn-info">Submit</button>
                                        </form>
                                    </div>
                                    <div class="col-lg-3 col-xlg-4 mb-4">
                                        <h4 class="mb-3">List style</h4>
                                        <!-- List style -->
                                        <ul class="list-style-none">
                                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> You can give link</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Give link</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another Give link</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Forth link</a></li>
                                            <li><a href="javascript:void(0)"><i class="fa fa-check text-success"></i> Another fifth link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <!-- ============================================================== -->
                        <!-- End mega menu -->
                        <!-- ============================================================== -->
                    </ul>
                    <!-- ============================================================== -->
                    <!-- Right side toggle and nav items -->
                    <!-- ============================================================== -->
                    <ul class="navbar-nav">
                        <!-- ============================================================== -->
                        <!-- Search -->
                        <!-- ============================================================== -->
                        <li class="nav-item search-box d-none d-md-block">
                            <form class="app-search mt-3 mr-2">
                                <input type="text" class="form-control rounded-pill border-0" placeholder="Search for..."> 
                                <a class="srh-btn"><i class="ti-search"></i></a> 
                            </form>
                        </li>
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-muted waves-effect waves-dark pro-pic" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <!-- <img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle" width="31"> -->
                            </a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <div class="d-flex no-block align-items-center p-3 mb-2 border-bottom">
                                    <!-- <div class=""><img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded" width="80"></div> -->
                                    <div class="ml-2">
                                        <h4 class="mb-0">Steave Jobs</h4>
                                        <p class=" mb-0">varun@gmail.com</p>
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/profile.html" class="btn btn-rounded btn-danger btn-sm">View Profile</a>
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
                        <!-- ============================================================== -->
                        <!-- User profile and search -->
                        <!-- ============================================================== -->
                        <!-- ============================================================== -->
                        <!-- create new -->
                        <!-- ============================================================== -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <i class="flag-icon flag-icon-us"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right  animated bounceInDown" aria-labelledby="navbarDropdown2">
                                <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#"><i class="flag-icon flag-icon-us"></i> English</a>
                                <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#"><i class="flag-icon flag-icon-fr"></i> French</a>
                                <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#"><i class="flag-icon flag-icon-es"></i> Spanish</a>
                                <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#"><i class="flag-icon flag-icon-de"></i> German</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <!-- ============================================================== -->
        <!-- End Topbar header -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <aside class="left-sidebar" data-sidebarbg="skin3">
            <!-- Sidebar scroll-->
            <div class="scroll-sidebar ps-container ps-theme-default ps-active-y" data-ps-id="82265538-712f-854f-a744-e831636e8a5d">
                <!-- Sidebar navigation-->
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="in">
                        <!-- User Profile-->
                        <li>
                            <!-- User profile -->
                            <div class="user-profile text-center position-relative pt-4 mt-1">
                                <!-- User profile image -->
                                <!-- <div class="profile-img m-auto"> <img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="w-100 rounded-circle"> </div> -->
                                <!-- User profile text-->
                                <div class="profile-text py-1"> <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="dropdown-toggle link u-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">Markarn Doe <span class="caret"></span></a>
                                    <div class="dropdown-menu animated flipInY">
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="dropdown-item"><i class="ti-user"></i> My Profile</a>
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="dropdown-item"><i class="ti-wallet"></i> My Balance</a>
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="dropdown-item"><i class="ti-email"></i> Inbox</a>
                                        <div class="dropdown-divider"></div> <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="dropdown-item"><i class="ti-settings"></i> Account Setting</a>
                                        <div class="dropdown-divider"></div> <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/login.html" class="dropdown-item"><i class="fa fa-power-off"></i> Logout</a>
                                    </div>
                                </div>
                            </div>
                            <!-- End User profile text-->
                        </li>
                        <!-- User Profile-->
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Personal</span></li>
                        <li class="sidebar-item selected"> <a class="sidebar-link has-arrow waves-effect waves-dark active" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home feather-icon"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg><span class="hide-menu">Dashboard <span class="badge badge-pill badge-success">5</span></span></a>
                            <ul aria-expanded="false" class="collapse first-level in">
                                <li class="sidebar-item active"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" class="sidebar-link active"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Modern Dashboard  </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index2.html" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Awesome Dashboard </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index3.html" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Classy Dashboard </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index4.html" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Analytical Dashboard </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index5.html" class="sidebar-link"><i class="mdi mdi-adjust"></i><span class="hide-menu"> Minimal Dashboard </span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sidebar feather-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg><span class="hide-menu">Sidebar Type </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/sidebar-type-minisidebar.html" class="sidebar-link"><i class="mdi mdi-view-quilt"></i><span class="hide-menu"> Minisidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/sidebar-type-iconsidebar.html" class="sidebar-link"><i class="mdi mdi-view-parallel"></i><span class="hide-menu"> Icon Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/sidebar-type-overlaysidebar.html" class="sidebar-link"><i class="mdi mdi-view-day"></i><span class="hide-menu"> Overlay Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/sidebar-type-fullsidebar.html" class="sidebar-link"><i class="mdi mdi-view-array"></i><span class="hide-menu"> Full Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/sidebar-type-horizontalsidebar.html" class="sidebar-link"><i class="mdi mdi-view-module"></i><span class="hide-menu"> Horizontal Sidebar </span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-clipboard feather-icon"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg><span class="hide-menu">Page Layouts </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/layout-inner-fixed-left-sidebar.html" class="sidebar-link"><i class="mdi mdi-format-align-left"></i><span class="hide-menu"> Inner Fixed Left Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/layout-inner-fixed-right-sidebar.html" class="sidebar-link"><i class="mdi mdi-format-align-right"></i><span class="hide-menu"> Inner Fixed Right Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/layout-inner-left-sidebar.html" class="sidebar-link"><i class="mdi mdi-format-float-left"></i><span class="hide-menu"> Inner Left Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/layout-inner-right-sidebar.html" class="sidebar-link"><i class="mdi mdi-format-float-right"></i><span class="hide-menu"> Inner Right Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/page-layout-fixed-header.html" class="sidebar-link"><i class="mdi mdi-view-quilt"></i><span class="hide-menu"> Fixed Header </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/page-layout-fixed-sidebar.html" class="sidebar-link"><i class="mdi mdi-view-parallel"></i><span class="hide-menu"> Fixed Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/page-layout-fixed-header-sidebar.html" class="sidebar-link"><i class="mdi mdi-view-column"></i><span class="hide-menu"> Fixed Header &amp; Sidebar </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/page-layout-boxed-layout.html" class="sidebar-link"><i class="mdi mdi-view-carousel"></i><span class="hide-menu"> Box Layout </span></a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Apps</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-chats.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-message-circle feather-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg><span class="hide-menu">Chat Apps</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-calendar.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-calendar feather-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg><span class="hide-menu">Calender</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-taskboard.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layout feather-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg><span class="hide-menu">Taskboard</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-notes.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book feather-icon"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg><span class="hide-menu">Notes</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-todo.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle feather-icon"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg><span class="hide-menu">Todo</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-invoice.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text feather-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><span class="hide-menu">Invoice</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/app-contacts.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone feather-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg><span class="hide-menu">Contact</span></a></li>

                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail feather-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span class="hide-menu">Inbox </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/inbox-email.html" class="sidebar-link"><i class="mdi mdi-email"></i><span class="hide-menu"> Email </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/inbox-email-detail.html" class="sidebar-link"><i class="mdi mdi-email-alert"></i><span class="hide-menu"> Email Detail </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/inbox-email-compose.html" class="sidebar-link"><i class="mdi mdi-email-secure"></i><span class="hide-menu"> Email Compose </span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark feather-icon"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg><span class="hide-menu">Ticket </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ticket-list.html" class="sidebar-link"><i class="mdi mdi-book-multiple"></i><span class="hide-menu"> Ticket List </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ticket-detail.html" class="sidebar-link"><i class="mdi mdi-book-plus"></i><span class="hide-menu"> Ticket Detail </span></a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">UI</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-cpu feather-icon"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg><span class="hide-menu">Ui Elements </span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-buttons.html" class="sidebar-link"><i class="mdi mdi-toggle-switch"></i><span class="hide-menu"> Buttons</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-modals.html" class="sidebar-link"><i class="mdi mdi-tablet"></i><span class="hide-menu"> Modals</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-tab.html" class="sidebar-link"><i class="mdi mdi-sort-variant"></i><span class="hide-menu"> Tab</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-tooltip-popover.html" class="sidebar-link"><i class="mdi mdi-image-filter-vintage"></i><span class="hide-menu"> Tooltip &amp; Popover</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-notification.html" class="sidebar-link"><i class="mdi mdi-message-bulleted"></i><span class="hide-menu"> Notification</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-progressbar.html" class="sidebar-link"><i class="mdi mdi-poll"></i><span class="hide-menu"> Progressbar</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-typography.html" class="sidebar-link"><i class="mdi mdi-format-line-spacing"></i><span class="hide-menu"> Typography</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-bootstrap.html" class="sidebar-link"><i class="mdi mdi-bootstrap"></i><span class="hide-menu"> Bootstrap Ui</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-breadcrumb.html" class="sidebar-link"><i class="mdi mdi-equal"></i><span class="hide-menu"> Breadcrumb</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-list-media.html" class="sidebar-link"><i class="mdi mdi-file-video"></i><span class="hide-menu"> List Media</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-grid.html" class="sidebar-link"><i class="mdi mdi-view-module"></i><span class="hide-menu"> Grid</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-carousel.html" class="sidebar-link"><i class="mdi mdi-view-carousel"></i><span class="hide-menu"> Carousel</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-scrollspy.html" class="sidebar-link"><i class="mdi mdi-application"></i><span class="hide-menu"> Scrollspy</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-toasts.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu"> Toasts</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-spinner.html" class="sidebar-link"><i class="mdi mdi-apple-safari"></i><span class="hide-menu"> Spinner</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-copy feather-icon"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg><span class="hide-menu">Cards</span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-cards.html" class="sidebar-link"><i class="mdi mdi-layers"></i><span class="hide-menu"> Basic Cards</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-card-customs.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu">Custom Cards</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-card-weather.html" class="sidebar-link"><i class="mdi mdi-weather-fog"></i><span class="hide-menu">Weather Cards</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-card-draggable.html" class="sidebar-link"><i class="mdi mdi-bandcamp"></i><span class="hide-menu">Draggable Cards</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hard-drive feather-icon"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line></svg><span class="hide-menu">Components</span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/component-sweetalert.html" class="sidebar-link"><i class="mdi mdi-layers"></i><span class="hide-menu"> Sweet Alert</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/component-nestable.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu">Nestable</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/component-noui-slider.html" class="sidebar-link"><i class="mdi mdi-weather-fog"></i><span class="hide-menu">Noui slider</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/component-rating.html" class="sidebar-link"><i class="mdi mdi-bandcamp"></i><span class="hide-menu">Rating</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/component-toastr.html" class="sidebar-link"><i class="mdi mdi-poll"></i><span class="hide-menu">Toastr</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid feather-icon"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg><span class="hide-menu">Widgets </span></a>
                            <ul aria-expanded="false" class="collapse  first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/widgets-apps.html" class="sidebar-link"><i class="mdi mdi-comment-processing-outline"></i><span class="hide-menu"> Apps Widgets  </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/widgets-data.html" class="sidebar-link"><i class="mdi mdi-calendar"></i><span class="hide-menu"> Data Widgets  </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/widgets-charts.html" class="sidebar-link"><i class="mdi mdi-bulletin-board"></i><span class="hide-menu"> Charts Widgets</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Forms</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-layers feather-icon"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg><span class="hide-menu">Form Elements</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-inputs.html" class="sidebar-link"><i class="mdi mdi-priority-low"></i><span class="hide-menu"> Forms Input</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-input-groups.html" class="sidebar-link"><i class="mdi mdi-rounded-corner"></i><span class="hide-menu"> Input Groups</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-input-grid.html" class="sidebar-link"><i class="mdi mdi-select-all"></i><span class="hide-menu"> Input Grid</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-checkbox-radio.html" class="sidebar-link"><i class="mdi mdi-shape-plus"></i><span class="hide-menu"> Checkboxes &amp; Radios</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-bootstrap-touchspin.html" class="sidebar-link"><i class="mdi mdi-switch"></i><span class="hide-menu"> Bootstrap Touchspin</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-bootstrap-switch.html" class="sidebar-link"><i class="mdi mdi-toggle-switch-off"></i><span class="hide-menu"> Bootstrap Switch</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-select2.html" class="sidebar-link"><i class="mdi mdi-relative-scale"></i><span class="hide-menu"> Select2</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-dual-listbox.html" class="sidebar-link"><i class="mdi mdi-tab-unselected"></i><span class="hide-menu"> Dual Listbox</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text feather-icon"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg><span class="hide-menu">Form Layouts</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-basic.html" class="sidebar-link"><i class="mdi mdi-vector-difference-ba"></i><span class="hide-menu"> Basic Forms</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-material.html" class="sidebar-link"><i class="mdi mdi-vector-difference-ba"></i><span class="hide-menu"> Material Forms</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-horizontal.html" class="sidebar-link"><i class="mdi mdi-file-document-box"></i><span class="hide-menu"> Form Horizontal</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-actions.html" class="sidebar-link"><i class="mdi mdi-code-greater-than"></i><span class="hide-menu"> Form Actions</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-row-separator.html" class="sidebar-link"><i class="mdi mdi-code-equal"></i><span class="hide-menu"> Row Separator</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-bordered.html" class="sidebar-link"><i class="mdi mdi-flip-to-front"></i><span class="hide-menu"> Form Bordered</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-striped-row.html" class="sidebar-link"><i class="mdi mdi-content-duplicate"></i><span class="hide-menu"> Striped Rows</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-detail.html" class="sidebar-link"><i class="mdi mdi-cards-outline"></i><span class="hide-menu"> Form Detail</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-package feather-icon"><path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line></svg><span class="hide-menu">Form Addons</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-paginator.html" class="sidebar-link"><i class="mdi mdi-export"></i><span class="hide-menu"> Paginator</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-img-cropper.html" class="sidebar-link"><i class="mdi mdi-crop"></i><span class="hide-menu"> Image Cropper</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-dropzone.html" class="sidebar-link"><i class="mdi mdi-crosshairs-gps"></i><span class="hide-menu"> Dropzone</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-mask.html" class="sidebar-link"><i class="mdi mdi-box-shadow"></i><span class="hide-menu"> Form Mask</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-typeahead.html" class="sidebar-link"><i class="mdi mdi-cards-variant"></i><span class="hide-menu"> Form Typehead</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-square feather-icon"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg><span class="hide-menu">Form Validation</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-bootstrap-validation.html" class="sidebar-link"><i class="mdi mdi-credit-card-scan"></i><span class="hide-menu"> Bootstrap Validation</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-custom-validation.html" class="sidebar-link"><i class="mdi mdi-credit-card-plus"></i><span class="hide-menu"> Custom Validation</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet feather-icon"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg><span class="hide-menu">Form Pickers</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-picker-colorpicker.html" class="sidebar-link"><i class="mdi mdi-calendar-plus"></i><span class="hide-menu"> Form Colorpicker</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-picker-datetimepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-clock"></i><span class="hide-menu"> Form Datetimepicker</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-picker-bootstrap-rangepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-range"></i><span class="hide-menu"> Form Bootstrap Rangepicker</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-picker-bootstrap-datepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-check"></i><span class="hide-menu"> Form Bootstrap Datepicker</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-picker-material-datepicker.html" class="sidebar-link"><i class="mdi mdi-calendar-text"></i><span class="hide-menu"> Form Material Datepicker</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit feather-icon"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg><span class="hide-menu">Form Editor</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-editor-ckeditor.html" class="sidebar-link"><i class="mdi mdi-drawing"></i><span class="hide-menu">Ck Editor</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-editor-quill.html" class="sidebar-link"><i class="mdi mdi-drupal"></i><span class="hide-menu">Quill Editor</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-editor-summernote.html" class="sidebar-link"><i class="mdi mdi-brightness-6"></i><span class="hide-menu">Summernote Editor</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-editor-tinymce.html" class="sidebar-link"><i class="mdi mdi-bowling"></i><span class="hide-menu">Tinymce Edtor</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-wizard.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card feather-icon"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg><span class="hide-menu">Form Wizard</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/form-repeater.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-crop feather-icon"><path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path></svg><span class="hide-menu">Form Repeater</span></a></li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Tables</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-codepen feather-icon"><polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line></svg><span class="hide-menu">Bootstrap Tables</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-basic.html" class="sidebar-link"><i class="mdi mdi-border-all"></i><span class="hide-menu">Basic Table </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-dark-basic.html" class="sidebar-link"><i class="mdi mdi-border-left"></i><span class="hide-menu">Dark Basic Table </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-sizing.html" class="sidebar-link"><i class="mdi mdi-border-outside"></i><span class="hide-menu">Sizing Table </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-layout-coloured.html" class="sidebar-link"><i class="mdi mdi-border-bottom"></i><span class="hide-menu">Coloured Table Layout</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-hard-drive feather-icon"><line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line></svg><span class="hide-menu">Datatables</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-datatable-basic.html" class="sidebar-link"><i class="mdi mdi-border-vertical"></i><span class="hide-menu"> Basic Initialisation</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-datatable-api.html" class="sidebar-link"><i class="mdi mdi-blur-linear"></i><span class="hide-menu"> API</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-datatable-advanced.html" class="sidebar-link"><i class="mdi mdi-border-style"></i><span class="hide-menu"> Advanced Initialisation</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-jsgrid.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-disc feather-icon"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle></svg><span class="hide-menu">Table Jsgrid</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-responsive.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone feather-icon"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line></svg><span class="hide-menu">Table Responsive</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-footable.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-command feather-icon"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg><span class="hide-menu">Table Footable</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-editable.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 feather-icon"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg><span class="hide-menu">Table Editable</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/table-bootstrap.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-target feather-icon"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg><span class="hide-menu">Table Bootstrap</span></a></li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Charts</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-morris.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader feather-icon"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg><span class="hide-menu"> Morris Chart</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-chart-js.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pie-chart feather-icon"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg><span class="hide-menu">Chartjs</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-sparkline.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-radio feather-icon"><circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path></svg><span class="hide-menu">Sparkline Chart</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-chartist.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trello feather-icon"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect></svg><span class="hide-menu">Chartis Chart</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-slack feather-icon"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg><span class="hide-menu">C3 Charts</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-c3-axis.html" class="sidebar-link"><i class="mdi mdi-arrange-bring-to-front"></i> <span class="hide-menu">Axis Chart</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-c3-bar.html" class="sidebar-link"><i class="mdi mdi-arrange-send-to-back"></i> <span class="hide-menu">Bar Chart</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-c3-data.html" class="sidebar-link"><i class="mdi mdi-backup-restore"></i> <span class="hide-menu">Data Chart</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-c3-line.html" class="sidebar-link"><i class="mdi mdi-backburger"></i> <span class="hide-menu">Line Chart</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 feather-icon"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg><span class="hide-menu">Echarts</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-echart-basic.html" class="sidebar-link"><i class="mdi mdi-chart-line"></i> <span class="hide-menu">Basic Charts</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-echart-bar.html" class="sidebar-link"><i class="mdi mdi-chart-scatterplot-hexbin"></i> <span class="hide-menu">Bar Chart</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/chart-echart-pie-doughnut.html" class="sidebar-link"><i class="mdi mdi-chart-pie"></i> <span class="hide-menu">Pie &amp; Doughnut Chart</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Sample Pages</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart feather-icon"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg><span class="hide-menu">Ecommerce Pages</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/eco-products.html" class="sidebar-link"><i class="mdi mdi-cards-variant"></i> <span class="hide-menu">Products</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/eco-products-cart.html" class="sidebar-link"><i class="mdi mdi-cart"></i> <span class="hide-menu">Products Cart</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/eco-products-edit.html" class="sidebar-link"><i class="mdi mdi-cart-plus"></i> <span class="hide-menu">Products Edit</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/eco-products-detail.html" class="sidebar-link"><i class="mdi mdi-camera-burst"></i> <span class="hide-menu">Product Details</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/eco-products-orders.html" class="sidebar-link"><i class="mdi mdi-chart-pie"></i> <span class="hide-menu">Product Orders</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/eco-products-checkout.html" class="sidebar-link"><i class="mdi mdi-clipboard-check"></i> <span class="hide-menu">Products Checkout</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-book-open feather-icon"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg><span class="hide-menu">Sample Pages </span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/starter-kit.html" class="sidebar-link"><i class="mdi mdi-crop-free"></i> <span class="hide-menu">Starter Kit</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-animation.html" class="sidebar-link"><i class="mdi mdi-debug-step-over"></i> <span class="hide-menu">Animation</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-search-result.html" class="sidebar-link"><i class="mdi mdi-search-web"></i> <span class="hide-menu">Search Result</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-gallery.html" class="sidebar-link"><i class="mdi mdi-camera-iris"></i> <span class="hide-menu">Gallery</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-treeview.html" class="sidebar-link"><i class="mdi mdi-file-tree"></i> <span class="hide-menu">Treeview</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-block-ui.html" class="sidebar-link"><i class="mdi mdi-codepen"></i> <span class="hide-menu">Block UI</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-session-timeout.html" class="sidebar-link"><i class="mdi mdi-timer-off"></i> <span class="hide-menu">Session Timeout</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-session-idle-timeout.html" class="sidebar-link"><i class="mdi mdi-timer-sand-empty"></i> <span class="hide-menu">Session Idle Timeout</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-utility-classes.html" class="sidebar-link"><i class="mdi mdi-tune"></i> <span class="hide-menu">Helper Classes</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-maintenance.html" class="sidebar-link"><i class="mdi mdi-camera-iris"></i> <span class="hide-menu">Maintenance Page</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock feather-icon"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg><span class="hide-menu">Authentication</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-login1.html" class="sidebar-link"><i class="mdi mdi-account-key"></i><span class="hide-menu"> Login </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-login2.html" class="sidebar-link"><i class="mdi mdi-account-key"></i><span class="hide-menu"> Login 2 </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-register1.html" class="sidebar-link"><i class="mdi mdi-account-plus"></i><span class="hide-menu"> Register</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-register2.html" class="sidebar-link"><i class="mdi mdi-account-plus"></i><span class="hide-menu"> Register 2</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-lockscreen.html" class="sidebar-link"><i class="mdi mdi-account-off"></i><span class="hide-menu"> Lockscreen</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-recover-password.html" class="sidebar-link"><i class="mdi mdi-account-convert"></i><span class="hide-menu"> Recover password</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-users feather-icon"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg><span class="hide-menu">Users</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-user-card.html" class="sidebar-link"><i class="mdi mdi-account-box"></i> <span class="hide-menu"> User Card </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-profile.html" class="sidebar-link"><i class="mdi mdi-account-network"></i><span class="hide-menu"> User Profile</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/ui-user-contacts.html" class="sidebar-link"><i class="mdi mdi-account-star-variant"></i><span class="hide-menu"> User Contact</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip feather-icon"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path></svg><span class="hide-menu">Invoice</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-invoice.html" class="sidebar-link"><i class="mdi mdi-vector-triangle"></i><span class="hide-menu"> Invoice Layout </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/pages-invoice-list.html" class="sidebar-link"><i class="mdi mdi-vector-rectangle"></i><span class="hide-menu"> Invoice List</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-map feather-icon"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg><span class="hide-menu">Maps</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/map-google.html" class="sidebar-link"><i class="mdi mdi-google-maps"></i><span class="hide-menu"> Google Map </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/map-vector.html" class="sidebar-link"><i class="mdi mdi-map-marker-radius"></i><span class="hide-menu"> Vector Map</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-feather feather-icon"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg><span class="hide-menu">Icons</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/icon-material.html" class="sidebar-link"><i class="mdi mdi-emoticon"></i> <span class="hide-menu"> Material Icons </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/icon-fontawesome.html" class="sidebar-link"><i class="mdi mdi-emoticon-cool"></i><span class="hide-menu"> Fontawesome Icons</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/icon-themify.html" class="sidebar-link"><i class="mdi mdi-chart-bubble"></i><span class="hide-menu"> Themify Icons</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/icon-weather.html" class="sidebar-link"><i class="mdi mdi-weather-cloudy"></i><span class="hide-menu"> Weather Icons</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/icon-simple-lineicon.html" class="sidebar-link"><i class="mdi mdi mdi-image-broken-variant"></i> <span class="hide-menu"> Simple Line icons</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/icon-flag.html" class="sidebar-link"><i class="mdi mdi-flag-triangle"></i><span class="hide-menu"> Flag Icons</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-activity feather-icon"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg><span class="hide-menu">Timeline</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/timeline-center.html" class="sidebar-link"><i class="mdi mdi-clock-fast"></i> <span class="hide-menu"> Center Timeline </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/timeline-horizontal.html" class="sidebar-link"><i class="mdi mdi-clock-end"></i><span class="hide-menu"> Horizontal Timeline</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/timeline-left.html" class="sidebar-link"><i class="mdi mdi-clock-in"></i><span class="hide-menu"> Left Timeline</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/timeline-right.html" class="sidebar-link"><i class="mdi mdi-clock-start"></i><span class="hide-menu"> Right Timeline</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail feather-icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg><span class="hide-menu">Email Template</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/email-templete-alert.html" class="sidebar-link"><i class="mdi mdi-message-alert"></i> <span class="hide-menu"> Alert </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/email-templete-basic.html" class="sidebar-link"><i class="mdi mdi-message-bulleted"></i><span class="hide-menu"> Basic</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/email-templete-billing.html" class="sidebar-link"><i class="mdi mdi-message-draw"></i><span class="hide-menu"> Billing</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/email-templete-password-reset.html" class="sidebar-link"><i class="mdi mdi-message-bulleted-off"></i><span class="hide-menu"> Password-Reset</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-x feather-icon"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line></svg><span class="hide-menu">Error Pages</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/error-400.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i> <span class="hide-menu"> Error 400 </span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/error-403.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 403</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/error-404.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 404</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/error-500.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 500</span></a></li>
                                <li class="sidebar-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/error-503.html" class="sidebar-link"><i class="mdi mdi-alert-outline"></i><span class="hide-menu"> Error 503</span></a></li>
                            </ul>
                        </li>
                        <li class="sidebar-item"> <a class="sidebar-link has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-pull-request feather-icon"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg><span class="hide-menu">Multi level dd</span></a>
                            <ul aria-expanded="false" class="collapse first-level">
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.1</span></a></li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.2</span></a></li>
                                <li class="sidebar-item"> <a class="has-arrow sidebar-link" href="javascript:void(0)" aria-expanded="false"><i class="mdi mdi-playlist-plus"></i> <span class="hide-menu">Menu 1.3</span></a>
                                    <ul aria-expanded="false" class="collapse second-level">
                                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.1</span></a></li>
                                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.2</span></a></li>
                                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.3</span></a></li>
                                        <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-octagram"></i><span class="hide-menu"> item 1.3.4</span></a></li>
                                    </ul>
                                </li>
                                <li class="sidebar-item"><a href="javascript:void(0)" class="sidebar-link"><i class="mdi mdi-playlist-check"></i><span class="hide-menu"> item 1.4</span></a></li>
                            </ul>
                        </li>
                        <li class="nav-devider"></li>
                        <li class="nav-small-cap"><i class="mdi mdi-dots-horizontal"></i> <span class="hide-menu">Extra</span></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/Documentation/document.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3 feather-icon"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg><span class="hide-menu">Documentation</span></a></li>
                        <li class="sidebar-item"> <a class="sidebar-link waves-effect waves-dark sidebar-link" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/authentication-login1.html" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out feather-icon"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg><span class="hide-menu">Log Out</span></a></li>
                    </ul>
                </nav>
                <!-- End Sidebar navigation -->
            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; height: 888px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 230px;"></div></div></div>
            <!-- End Sidebar scroll-->
            <!-- Bottom points-->
            <div class="sidebar-footer">
                <!-- item-->
                <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" class="link" data-toggle="tooltip" title="" data-original-title="Settings"><i class="ti-settings"></i></a>
                <!-- item-->
                <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" class="link" data-toggle="tooltip" title="" data-original-title="Email"><i class="mdi mdi-gmail"></i></a>
                <!-- item-->
                <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i class="mdi mdi-power"></i></a>
            </div>
            <!-- End Bottom points-->
        </aside>
        <!-- ============================================================== -->
        <!-- End Left Sidebar - style you can find in sidebar.scss  -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper  -->
        <!-- ============================================================== -->
        <div class="page-wrapper" style="display: block;">
            <!-- ============================================================== -->
            <!-- Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <div class="page-breadcrumb">
                <div class="row">
                    <div class="col-md-5 align-self-center">
                        <h3 class="page-title">Dashboard</h3>
                        <div class="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#">Home</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="col-md-7 d-flex justify-content-end align-self-center d-none d-md-flex">
                        <div class="d-flex">
                            <div class="dropdown mr-2 hidden-sm-down">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> January 2020 </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"> <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#">February 2020</a> <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#">March 2020</a> <a class="dropdown-item" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#">April 2020</a> </div>
                            </div>
                            <button class="btn btn-success"><i class="mdi mdi-plus-circle"></i> Create</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- ============================================================== -->
            <!-- End Bread crumb and right sidebar toggle -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- Container fluid  -->
            <!-- ============================================================== -->
            <div class="container-fluid">
                <!-- Row -->
                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Daily Sales</h4>
                                <div class="text-right">
                                    <h2 class="font-weight-light mb-0"><i class="ti-arrow-up text-success"></i> $120</h2>
                                    <span class="text-muted">Todays Income</span>
                                </div>
                                <span class="text-success">80%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-success" role="progressbar" style="width: 80%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Weekly Sales</h4>
                                <div class="text-right">
                                    <h2 class="font-weight-light mb-0"><i class="ti-arrow-up text-info"></i> $5,000</h2>
                                    <span class="text-muted">Todays Income</span>
                                </div>
                                <span class="text-info">30%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-info" role="progressbar" style="width: 30%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Monthly Sales</h4>
                                <div class="text-right">
                                    <h2 class="font-weight-light mb-0"><i class="ti-arrow-up text-purple"></i> $8,000</h2>
                                    <span class="text-muted">Todays Income</span>
                                </div>
                                <span class="text-purple">60%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-purple" role="progressbar" style="width: 60%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-3 col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Yearly Sales</h4>
                                <div class="text-right">
                                    <h2 class="font-weight-light mb-0"><i class="ti-arrow-down text-danger"></i> $12,000</h2>
                                    <span class="text-muted">Todays Income</span>
                                </div>
                                <span class="text-danger">80%</span>
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 80%; height: 6px;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>
                <!-- Row -->
                <!-- Row -->
                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex flex-wrap">
                                            <div>
                                                <h3>Revenue Statistics</h3>
                                                <h6 class="card-subtitle">January 2020</h6> </div>
                                            <div class="ml-auto ">
                                                <ul class="list-inline">
                                                    <li class="list-inline-item">
                                                        <h6 class="text-muted"><i class="fa fa-circle mr-1 text-success"></i>Product A</h6> </li>
                                                    <li class="list-inline-item">
                                                        <h6 class="text-muted"><i class="fa fa-circle mr-1 text-info"></i>Product B</h6> </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                                        <h1 class="mb-0 font-weight-light">$54578</h1>
                                        <h6 class="text-muted">Total Revenue</h6></div>
                                    <div class="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                                        <h1 class="mb-0 font-weight-light">$43451</h1>
                                        <h6 class="text-muted">Online Revenue</h6></div>
                                    <div class="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                                        <h1 class="mb-0 font-weight-light">$44578</h1>
                                        <h6 class="text-muted">Product A</h6></div>
                                    <div class="col-lg-3 col-md-6 mb-4 mt-3 text-center">
                                        <h1 class="mb-0 font-weight-light">$12578</h1>
                                        <h6 class="text-muted">Product B</h6></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->
                <!-- Row -->
                <div class="row">
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Sales of the Month</h4>
                                <div id="visitor" class="mt-3 m-auto c3" style="height: 300px; width: 300px; max-height: 300px; position: relative;"><svg width="300" height="300" style="overflow: hidden;"><defs><clippath id="c3-1601750178060-clip"><rect width="300" height="276"></rect></clippath><clippath id="c3-1601750178060-clip-xaxis"><rect x="-31" y="-20" width="362" height="40"></rect></clippath><clippath id="c3-1601750178060-clip-yaxis"><rect x="-29" y="-4" width="20" height="300"></rect></clippath><clippath id="c3-1601750178060-clip-grid"><rect width="300" height="276"></rect></clippath><clippath id="c3-1601750178060-clip-subchart"><rect width="300" height="0"></rect></clippath></defs><g transform="translate(0.5,4.5)"><text class="c3-text c3-empty" text-anchor="middle" dominant-baseline="middle" x="150" y="138" style="opacity: 0;"></text><g clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip)" class="c3-regions" style="visibility: hidden;"></g><g clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip-grid)" class="c3-grid" style="visibility: hidden;"><g class="c3-xgrid-focus"><line class="c3-xgrid-focus" x1="-10" x2="-10" y1="0" y2="276" style="visibility: hidden;"></line></g></g><g clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip)" class="c3-chart"><g class="c3-stanford-elements"><g class="c3-stanford-lines" style="shape-rendering: geometricprecision;"></g><g class="c3-stanford-texts"></g><g class="c3-stanford-regions"></g></g><g class="c3-event-rects" style="fill-opacity: 0;"><rect class="c3-event-rect" x="0" y="0" width="300" height="276"></rect></g><g class="c3-chart-bars"><g class="c3-chart-bar c3-target c3-target-Item-A" style="pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-A c3-bars c3-bars-Item-A" style="cursor: pointer;"></g></g><g class="c3-chart-bar c3-target c3-target-Item-B" style="pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-B c3-bars c3-bars-Item-B" style="cursor: pointer;"></g></g><g class="c3-chart-bar c3-target c3-target-Item-C" style="pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-C c3-bars c3-bars-Item-C" style="cursor: pointer;"></g></g><g class="c3-chart-bar c3-target c3-target-Item-D" style="pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-D c3-bars c3-bars-Item-D" style="cursor: pointer;"></g></g></g><g class="c3-chart-lines"><g class="c3-chart-line c3-target c3-target-Item-A" style="opacity: 1; pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-A c3-lines c3-lines-Item-A"></g><g class=" c3-shapes c3-shapes-Item-A c3-areas c3-areas-Item-A"></g><g class=" c3-selected-circles c3-selected-circles-Item-A"></g><g class=" c3-shapes c3-shapes-Item-A c3-circles c3-circles-Item-A" style="cursor: pointer;"></g></g><g class="c3-chart-line c3-target c3-target-Item-B" style="opacity: 1; pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-B c3-lines c3-lines-Item-B"></g><g class=" c3-shapes c3-shapes-Item-B c3-areas c3-areas-Item-B"></g><g class=" c3-selected-circles c3-selected-circles-Item-B"></g><g class=" c3-shapes c3-shapes-Item-B c3-circles c3-circles-Item-B" style="cursor: pointer;"></g></g><g class="c3-chart-line c3-target c3-target-Item-C" style="opacity: 1; pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-C c3-lines c3-lines-Item-C"></g><g class=" c3-shapes c3-shapes-Item-C c3-areas c3-areas-Item-C"></g><g class=" c3-selected-circles c3-selected-circles-Item-C"></g><g class=" c3-shapes c3-shapes-Item-C c3-circles c3-circles-Item-C" style="cursor: pointer;"></g></g><g class="c3-chart-line c3-target c3-target-Item-D" style="opacity: 1; pointer-events: none;"><g class=" c3-shapes c3-shapes-Item-D c3-lines c3-lines-Item-D"></g><g class=" c3-shapes c3-shapes-Item-D c3-areas c3-areas-Item-D"></g><g class=" c3-selected-circles c3-selected-circles-Item-D"></g><g class=" c3-shapes c3-shapes-Item-D c3-circles c3-circles-Item-D" style="cursor: pointer;"></g></g></g><g class="c3-chart-arcs" transform="translate(150,133)"><text class="c3-chart-arcs-title" style="text-anchor: middle; opacity: 1;"></text><g class="c3-chart-arc c3-target c3-target-Item-A"><g class=" c3-shapes c3-shapes-Item-A c3-arcs c3-arcs-Item-A"><path class=" c3-shape c3-shape c3-arc c3-arc-Item-A" transform="" style="fill: rgb(237, 241, 245); cursor: pointer;" d="M7.736706153613403e-15,-126.35A126.35,126.35,0,1,1,-48.35205167932909,116.73217893280108L-42.61180019385274,102.87398594513178A111.35,111.35,0,1,0,6.818221054252888e-15,-111.35Z"></path></g><text dy=".35em" class="" transform="translate(99.13777614315853,19.719729749390243)" style="opacity: 1; text-anchor: middle; pointer-events: none;"></text></g><g class="c3-chart-arc c3-target c3-target-Item-B"><g class=" c3-shapes c3-shapes-Item-B c3-arcs c3-arcs-Item-B"><path class=" c3-shape c3-shape c3-arc c3-arc-Item-B" transform="" style="fill: rgb(0, 158, 251); cursor: pointer;" d="M-48.35205167932909,116.73217893280108A126.35,126.35,0,0,1,-126.35,1.5473412307226806e-14L-111.35,1.3636442108505777e-14A111.35,111.35,0,0,0,-42.61180019385274,102.87398594513178Z"></path></g><text dy=".35em" class="" transform="translate(-84.04494841154127,56.157039153621376)" style="opacity: 1; text-anchor: middle; pointer-events: none;"></text></g><g class="c3-chart-arc c3-target c3-target-Item-C"><g class=" c3-shapes c3-shapes-Item-C c3-arcs c3-arcs-Item-C"><path class=" c3-shape c3-shape c3-arc c3-arc-Item-C" transform="" style="fill: rgb(85, 206, 99); cursor: pointer;" d="M-126.35,1.5473412307226806e-14A126.35,126.35,0,0,1,-89.3429418029203,-89.34294180292027L-78.73634008512208,-78.73634008512205A111.35,111.35,0,0,0,-111.35,1.3636442108505777e-14Z"></path></g><text dy=".35em" class="" transform="translate(-93.38574314624086,-38.681641343463305)" style="opacity: 1; text-anchor: middle; pointer-events: none;"></text></g><g class="c3-chart-arc c3-target c3-target-Item-D"><g class=" c3-shapes c3-shapes-Item-D c3-arcs c3-arcs-Item-D"><path class=" c3-shape c3-shape c3-arc c3-arc-Item-D" transform="" style="fill: rgb(116, 90, 242); cursor: pointer;" d="M-89.3429418029203,-89.34294180292027A126.35,126.35,0,0,1,-2.321011846084021e-14,-126.35L-2.0454663162758666e-14,-111.35A111.35,111.35,0,0,0,-78.73634008512208,-78.73634008512205Z"></path></g><text dy=".35em" class="" transform="translate(-38.681641343463326,-93.38574314624084)" style="opacity: 1; text-anchor: middle; pointer-events: none;"></text></g></g><g class="c3-chart-texts"><g class="c3-chart-text c3-target c3-target-Item-A  " style="opacity: 1; pointer-events: none;"><g class=" c3-texts c3-texts-Item-A"></g></g><g class="c3-chart-text c3-target c3-target-Item-B  " style="opacity: 1; pointer-events: none;"><g class=" c3-texts c3-texts-Item-B"></g></g><g class="c3-chart-text c3-target c3-target-Item-C  " style="opacity: 1; pointer-events: none;"><g class=" c3-texts c3-texts-Item-C"></g></g><g class="c3-chart-text c3-target c3-target-Item-D  " style="opacity: 1; pointer-events: none;"><g class=" c3-texts c3-texts-Item-D"></g></g></g></g><g clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip-grid)" class="c3-grid c3-grid-lines"><g class="c3-xgrid-lines"></g><g class="c3-ygrid-lines"></g></g><g class="c3-axis c3-axis-x" clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip-xaxis)" transform="translate(0,276)" style="visibility: visible; opacity: 0;"><text class="c3-axis-x-label" transform="" style="text-anchor: end;" x="300" dx="-0.5em" dy="-0.5em"></text><g class="tick" transform="translate(150, 0)" style="opacity: 1;"><line x1="0" x2="0" y2="6"></line><text x="0" y="9" transform="" style="text-anchor: middle; display: block;"><tspan x="0" dy=".71em" dx="0">0</tspan></text></g><path class="domain" d="M0,6V0H300V6"></path></g><g class="c3-axis c3-axis-y" clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip-yaxis)" transform="translate(0,0)" style="visibility: visible; opacity: 0;"><text class="c3-axis-y-label" transform="rotate(-90)" style="text-anchor: end;" x="0" dx="-0.5em" dy="1.2em"></text><g class="tick" transform="translate(0,254)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">2</tspan></text></g><g class="tick" transform="translate(0,221)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">3</tspan></text></g><g class="tick" transform="translate(0,188)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">4</tspan></text></g><g class="tick" transform="translate(0,155)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">5</tspan></text></g><g class="tick" transform="translate(0,123)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">6</tspan></text></g><g class="tick" transform="translate(0,90)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">7</tspan></text></g><g class="tick" transform="translate(0,57)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">8</tspan></text></g><g class="tick" transform="translate(0,24)" style="opacity: 1;"><line x2="-6"></line><text x="-9" y="0" style="text-anchor: end;"><tspan x="-9" dy="3">9</tspan></text></g><path class="domain" d="M-6,1H0V276H-6"></path></g><g class="c3-axis c3-axis-y2" transform="translate(300,0)" style="visibility: hidden; opacity: 0;"><text class="c3-axis-y2-label" transform="rotate(-90)" style="text-anchor: end;" x="0" dx="-0.5em" dy="-0.5em"></text><g class="tick" transform="translate(0,276)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0</tspan></text></g><g class="tick" transform="translate(0,249)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.1</tspan></text></g><g class="tick" transform="translate(0,221)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.2</tspan></text></g><g class="tick" transform="translate(0,194)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.3</tspan></text></g><g class="tick" transform="translate(0,166)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.4</tspan></text></g><g class="tick" transform="translate(0,139)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.5</tspan></text></g><g class="tick" transform="translate(0,111)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.6</tspan></text></g><g class="tick" transform="translate(0,84)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.7</tspan></text></g><g class="tick" transform="translate(0,56)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.8</tspan></text></g><g class="tick" transform="translate(0,29)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">0.9</tspan></text></g><g class="tick" transform="translate(0,1)" style="opacity: 1;"><line x2="6"></line><text x="9" y="0" style="text-anchor: start;"><tspan x="9" dy="3">1</tspan></text></g><path class="domain" d="M6,1H0V276H6"></path></g></g><g transform="translate(0.5,300.5)" style="visibility: hidden;"><g clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip-subchart)" class="c3-chart"><g class="c3-chart-bars"></g><g class="c3-chart-lines"></g></g><g clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip)" class="c3-brush" fill="none" pointer-events="all"><rect class="overlay" pointer-events="all" cursor="crosshair" x="0" y="0" width="300" height="0"></rect><rect class="selection" cursor="move" fill="#777" fill-opacity="0.3" stroke="#fff" shape-rendering="crispEdges" style="display: none;"></rect><rect class="handle handle--w" cursor="ew-resize" style="display: none;"></rect><rect class="handle handle--e" cursor="ew-resize" style="display: none;"></rect></g><g class="c3-axis-x" transform="translate(0,0)" clip-path="url(https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#c3-1601750178060-clip-xaxis)" style="opacity: 0;"><g class="tick" transform="translate(150, 0)" style="opacity: 1;"><line x1="0" x2="0" y2="6"></line><text x="0" y="9" transform="" style="text-anchor: middle; display: block;"><tspan x="0" dy=".71em" dx="0">0</tspan></text></g><path class="domain" d="M0,6V0H300V6"></path></g></g><g transform="translate(0,280)"><g class="c3-legend-item c3-legend-item-Item-A" style="visibility: hidden; cursor: pointer;"><text x="14" y="9" style="pointer-events: none;">Item A</text><rect class="c3-legend-item-event" x="0" y="-5" width="0" height="0" style="fill-opacity: 0;"></rect><line class="c3-legend-item-tile" x1="-2" y1="4" x2="8" y2="4" stroke-width="10" style="stroke: rgb(237, 241, 245); pointer-events: none;"></line></g><g class="c3-legend-item c3-legend-item-Item-B" style="visibility: hidden; cursor: pointer;"><text x="14" y="9" style="pointer-events: none;">Item B</text><rect class="c3-legend-item-event" x="0" y="-5" width="0" height="0" style="fill-opacity: 0;"></rect><line class="c3-legend-item-tile" x1="-2" y1="4" x2="8" y2="4" stroke-width="10" style="stroke: rgb(0, 158, 251); pointer-events: none;"></line></g><g class="c3-legend-item c3-legend-item-Item-C" style="visibility: hidden; cursor: pointer;"><text x="14" y="9" style="pointer-events: none;">Item C</text><rect class="c3-legend-item-event" x="0" y="-5" width="0" height="0" style="fill-opacity: 0;"></rect><line class="c3-legend-item-tile" x1="-2" y1="4" x2="8" y2="4" stroke-width="10" style="stroke: rgb(85, 206, 99); pointer-events: none;"></line></g><g class="c3-legend-item c3-legend-item-Item-D" style="visibility: hidden; cursor: pointer;"><text x="14" y="9" style="pointer-events: none;">Item D</text><rect class="c3-legend-item-event" x="0" y="-5" width="0" height="0" style="fill-opacity: 0;"></rect><line class="c3-legend-item-tile" x1="-2" y1="4" x2="8" y2="4" stroke-width="10" style="stroke: rgb(116, 90, 242); pointer-events: none;"></line></g></g><text class="c3-title" x="150" y="0"></text></svg><div class="c3-tooltip-container" style="position: absolute; pointer-events: none; display: none;"></div></div>
                                <div class="round-overlap mt-2"><i class="mdi mdi-cart"></i></div>
                                <ul class="list-inline mt-4 text-center pt-1">
                                    <li class="list-inline-item"><i class="fa fa-circle text-purple"></i> Item A</li>
                                    <li class="list-inline-item"><i class="fa fa-circle text-success"></i> Item B</li>
                                    <li class="list-inline-item"><i class="fa fa-circle text-info"></i> Item C</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Sales Prediction</h4>
                                        <div class="d-flex flex-row">
                                            <div class="align-self-center">
                                                <span class="display-6">$3528</span>
                                                <h6 class="text-muted">(150-165 Sales)</h6>
                                            </div>
                                            <div class="ml-auto">
                                                <div id="sales-prediction" style="width: 150px; height: 150px; -webkit-tap-highlight-color: transparent; user-select: none; position: relative;" _echarts_instance_="ec_1601750177864"><div style="position: relative; overflow: hidden; width: 150px; height: 150px; padding: 0px; margin: 0px; border-width: 0px;"><canvas data-zr-dom-id="zr_0" width="150" height="150" style="position: absolute; left: 0px; top: 0px; width: 150px; height: 150px; user-select: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); padding: 0px; margin: 0px; border-width: 0px;"></canvas></div><div></div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="card-title">Sales Difference</h4>
                                        <div class="d-flex flex-row">
                                            <div class="align-self-center">
                                                <span class="display-6">$4316</span>
                                                <h6 class="text-muted">(150-165 Sales)</h6>
                                            </div>
                                            <div class="ml-auto">
                                                <div class="sales-diff" style="width:120px; height: 120px;"><svg xmlns:ct="http://gionkunz.github.com/chartist-js/ct" width="100%" height="100%" class="ct-chart-donut" style="width: 100%; height: 100%;"><g class="ct-series ct-series-a"><path d="M37.5,98.971A45,45,0,1,0,60,15" class="ct-slice-donut" ct:value="35" style="stroke-width: 20px;"></path></g><g class="ct-series ct-series-b"><path d="M21.029,37.5A45,45,0,0,0,37.636,99.049" class="ct-slice-donut" ct:value="15" style="stroke-width: 20px;"></path></g><g class="ct-series ct-series-c"><path d="M60,15A45,45,0,0,0,20.951,37.636" class="ct-slice-donut" ct:value="10" style="stroke-width: 20px;"></path></g></svg></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-row">
                                    <!-- <div class=""><img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle" width="100"></div> -->
                                    <div class="pl-3">
                                        <h3 class="font-weight-medium">Daniel Kristeen</h3>
                                        <h6>UIUX Designer</h6>
                                        <button class="btn btn-success"><i class="ti-plus"></i> Follow</button>
                                    </div>
                                </div>
                                <div class="row mt-4 pt-2">
                                    <div class="col border-right">
                                        <h2 class="font-weight-light">14</h2>
                                        <h6>Photos</h6></div>
                                    <div class="col border-right">
                                        <h2 class="font-weight-light">54</h2>
                                        <h6>Videos</h6></div>
                                    <div class="col">
                                        <h2 class="font-weight-light">145</h2>
                                        <h6>Tasks</h6></div>
                                </div>
                            </div>
                            <div class="card-body border-top">
                                <ul class="list-icons d-flex flex-item text-center list-style-none">
                                    <li class="col my-1"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Website"><i class="fa fa-globe pl-2"></i></a></li>
                                    <li class="col my-1"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="twitter"><i class="fab fa-twitter pl-2"></i></a></li>
                                    <li class="col my-1"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Facebook"><i class="fab fa-facebook-square pl-2"></i></a></li>
                                    <li class="col my-1"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Youtube"><i class="fab fa-youtube pl-2"></i></a></li>
                                    <li class="col my-1"><a href="javascript:void(0)" data-toggle="tooltip" title="" data-original-title="Linkd-in"><i class="fab fa-linkedin pl-2"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->
                <!-- Row -->
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Recent Chats</h4>
                                <div class="chat-box scrollable ps-container ps-theme-default" style="height: 375px;" data-ps-id="a611638a-9553-46e4-f575-ebc6c0f026d1">
                                    <!--chat Row -->
                                    <ul class="chat-list m-0 p-0">
                                        <!--chat Row -->
                                        <li class="mt-4">
                                            <!-- <div class="chat-img d-inline-block align-top"><img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle"></div> -->
                                            <div class="chat-content pl-3 d-inline-block">
                                                <h5 class="text-muted text-nowrap">James Anderson</h5>
                                                <div class="box mb-2 d-inline-block text-dark rounded p-2 bg-light-info">Lorem Ipsum is simply dummy text of the printing &amp; type setting industry.</div>
                                            </div>
                                            <div class="chat-time d-inline-block text-right text-muted">10:56 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li class="mt-4">
                                            <!-- <div class="chat-img d-inline-block align-top"><img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" class="rounded-circle"></div> -->
                                            <div class="chat-content pl-3 d-inline-block">
                                                <h5 class="text-muted text-nowrap">Bianca Doe</h5>
                                                <div class="box mb-2 d-inline-block text-dark rounded p-2 bg-light-success">It’s Great opportunity to work.</div>
                                            </div>
                                            <div class="chat-time d-inline-block text-right text-muted">10:57 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li class="odd mt-4">
                                            <div class="chat-content pl-3 d-inline-block text-right">
                                                <div class="box mb-2 d-inline-block text-dark rounded p-2 bg-light-inverse">I would love to join the team.</div>
                                                <br>
                                            </div>
                                            <div class="chat-time d-inline-block text-right text-muted">10:58 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li class="odd mt-4">
                                            <div class="chat-content pl-3 d-inline-block text-right">
                                                <div class="box mb-2 d-inline-block text-dark rounded p-2 bg-light-inverse">Whats budget of the new project.</div>
                                                <br>
                                            </div>
                                            <div class="chat-time d-inline-block text-right text-muted">10:59 am</div>
                                        </li>
                                        <!--chat Row -->
                                        <li class="mt-4">
                                            <!-- <div class="chat-img d-inline-block align-top"><img src="./Monster Template by WrapPixel_files/3.jpg" alt="user" class="rounded-circle"></div> -->
                                            <div class="chat-content pl-3 d-inline-block">
                                                <h5 class="text-muted text-nowrap">Angelina Rhodes</h5>
                                                <div class="box mb-2 d-inline-block text-dark rounded p-2 bg-light-primary">Well we have good budget for the project</div>
                                            </div>
                                            <div class="chat-time d-inline-block text-right text-muted">11:00 am</div>
                                        </li>
                                        <!--chat Row -->
                                    </ul>
                                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                            </div>
                            <div class="card-body border-top">
                                <div class="row">
                                    <div class="col-8">
                                        <textarea placeholder="Type your message here" class="form-control border-0"></textarea>
                                    </div>
                                    <div class="col-4 text-right">
                                        <button type="button" class="btn btn-info btn-circle btn-lg"><i class="fas fa-paper-plane"></i> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Recent Messages</h4>
                                <div class="message-box scrollable ps-container ps-theme-default" style="height: 476px;" data-ps-id="78dede06-1414-4a14-24ea-e8808809bccc">
                                    <div class="message-widget message-scroll">
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle online"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been.</span> <span class="font-12 text-nowrap d-block time">9:30 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle busy"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Sonu Nigam</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">I've sung a song! See you at</span> <span class="font-12 text-nowrap d-block time">9:10 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <span class="round bg-info d-inline-block text-white text-center rounded-circle">A</span> <span class="profile-status rounded-circle away"></span> </div>
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Arijit Sinh</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">Simply dummy text of the printing and typesetting industry.</span> <span class="font-12 text-nowrap d-block time">9:08 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/4.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">Just see the my admin!</span> <span class="font-12 text-nowrap d-block time">9:02 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle online"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">Welcome to the Elite Admin</span> <span class="font-12 text-nowrap d-block time">9:30 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle busy"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Sonu Nigam</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">I've sung a song! See you at</span> <span class="font-12 text-nowrap d-block time">9:10 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center border-bottom py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/3.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle away"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Arijit Sinh</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">I am a singer!</span> <span class="font-12 text-nowrap d-block time">9:08 AM</span> </div>
                                        </a>
                                        <!-- Message -->
                                        <a href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#" class="d-flex align-items-center py-2 px-3">
                                            <!-- <div class="user-img position-relative d-inline-block mb-2 mr-0 mr-md-3"> <img src="./Monster Template by WrapPixel_files/4.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </div> -->
                                            <div class="w-75 d-inline-block v-middle pl-2">
                                                <h5 class="mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-truncate mail-desc">Just see the my admin!</span> <span class="font-12 text-nowrap d-block time">9:02 AM</span> </div>
                                        </a>
                                    </div>
                                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->
                <!-- Row -->
                <div class="row">
                    <div class="col-lg-8">
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
                                                <!-- <td><span class="round text-white d-inline-block text-center"><img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" class="rounded-circle" width="50"></span></td> -->
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
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-md-flex no-block">
                                    <h4 class="card-title">Weather Report</h4>
                                    <div class="ml-auto">
                                        <select class="custom-select">
                                            <option selected="">Today</option>
                                            <option value="1">Weekly</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center flex-row mt-4">
                                    <div class="p-2 display-5 text-info"><i class="wi wi-day-showers"></i> <span>73<sup>°</sup></span></div>
                                    <div class="p-2">
                                        <h3 class="mb-0">Saturday</h3><small>Ahmedabad, India</small></div>
                                </div>
                                <table class="table table-borderless">
                                    <tbody><tr>
                                        <td>Wind</td>
                                        <td class="font-weight-medium">ESE 17 mph</td>
                                    </tr>
                                    <tr>
                                        <td>Humidity</td>
                                        <td class="font-weight-medium">83%</td>
                                    </tr>
                                    <tr>
                                        <td>Pressure</td>
                                        <td class="font-weight-medium">28.56 in</td>
                                    </tr>
                                    <tr>
                                        <td>Cloud Cover</td>
                                        <td class="font-weight-medium">78%</td>
                                    </tr>
                                    <tr>
                                        <td>Ceiling</td>
                                        <td class="font-weight-medium">25760 ft</td>
                                    </tr>
                                </tbody></table>
                                <ul class="list-unstyled row text-center city-weather-days border-top m-0 pt-3">
                                    <li class="col col-6 col-md-3 text-center mt-2 pt-1"><i class="d-block font-20 text-info wi wi-day-sunny"></i><span class="d-block tetxt-muted text-nowrap pt-2">09:30</span>
                                        <h3 class="font-weight-light mt-1">70<sup>°</sup></h3></li>
                                    <li class="col col-6 col-md-3 text-center mt-2 pt-1"><i class="d-block font-20 text-info wi wi-day-cloudy"></i><span class="d-block tetxt-muted text-nowrap pt-2">11:30</span>
                                        <h3 class="font-weight-light mt-1">72<sup>°</sup></h3></li>
                                    <li class="col col-6 col-md-3 text-center mt-2 pt-1"><i class="d-block font-20 text-info wi wi-day-hail"></i><span class="d-block tetxt-muted text-nowrap pt-2">13:30</span>
                                        <h3 class="font-weight-light mt-1">75<sup>°</sup></h3></li>
                                    <li class="col col-6 col-md-3 text-center mt-2 pt-1"><i class="d-block font-20 text-info wi wi-day-sprinkle"></i><span class="d-block tetxt-muted text-nowrap pt-2">15:30</span>
                                        <h3 class="font-weight-light mt-1">76<sup>°</sup></h3></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->
                <!-- Row -->
                <div class="row">
                    <!-- Column -->
                    <div class="col-lg-4">
                        <div class="card">
                            <!-- <img class="card-img-top img-responsive" src="./Monster Template by WrapPixel_files/img1.jpg" alt="Card"> -->
                            <div class="card-body">
                                <ul class="list-inline font-14">
                                    <li class="list-inline-item">20 May 2016</li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="link">3 Comment</a></li>
                                </ul>
                                <h3 class="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4">
                        <div class="card">
                            <!-- <img class="card-img-top img-responsive" src="./Monster Template by WrapPixel_files/img2.jpg" alt="Card"> -->
                            <div class="card-body">
                                <ul class="list-inline font-14">
                                    <li class="list-inline-item">20 May 2016</li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="link">3 Comment</a></li>
                                </ul>
                                <h3 class="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                    <!-- Column -->
                    <div class="col-lg-4">
                        <div class="card">
                            <!-- <img class="card-img-top img-responsive" src="./Monster Template by WrapPixel_files/img4.jpg" alt="Card"> -->
                            <div class="card-body">
                                <ul class="list-inline font-14">
                                    <li class="list-inline-item">20 May 2016</li>
                                    <li class="list-inline-item"><a href="javascript:void(0)" class="link">3 Comment</a></li>
                                </ul>
                                <h3 class="font-normal">Featured Hydroflora Pots Garden &amp; Outdoors</h3>
                            </div>
                        </div>
                    </div>
                    <!-- Column -->
                </div>
                <!-- Row -->
                <!-- Row -->
                <div class="row">
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Recent Comments</h4>
                            </div>
                            <!-- ============================================================== -->
                            <!-- Comment widgets -->
                            <!-- ============================================================== -->
                            <div class="comment-widgets scrollable position-relative mb-2 ps-container ps-theme-default" style="height: 450px;" data-ps-id="99b8d2a9-647b-15ea-60e0-679a8a480c59">
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row p-3">
                                    <!-- <div class="p-2"><span class="round text-white d-inline-block text-center"><img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" width="50" class="rounded-circle"></span></div> -->
                                    <div class="comment-text w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                        <h5>James Anderson</h5>
                                        <p class="mb-1">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        <div class="comment-footer d-flex align-items-center">
                                            
                                            <span class="badge badge-light-info text-info">Pending</span>
                                            <span class="action-icons">
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-check"></i></a>
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-heart"></i></a>    
                                                </span>
                                            <span class="text-muted ml-auto">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row p-3 active">
                                    <!-- <div class="p-2"><span class="round text-white d-inline-block text-center"><img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" width="50" class="rounded-circle"></span></div> -->
                                    <div class="comment-text active w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                        <h5>Michael Jorden</h5>
                                        <p class="mb-1">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>
                                        <div class="comment-footer d-flex align-items-center">
                                            <span class="badge badge-light-success text-success">Approved</span>
                                            <span class="action-icons active">
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="icon-close"></i></a>
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-heart text-danger"></i></a>    
                                                </span>
                                            <span class="text-muted ml-auto">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row p-3">
                                    <!-- <div class="p-2"><span class="round text-white d-inline-block text-center"><img src="./Monster Template by WrapPixel_files/3.jpg" alt="user" width="50" class="rounded-circle"></span></div> -->
                                    <div class="comment-text w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                        <h5>Johnathan Doeting</h5>
                                        <p class="mb-1">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                                        <div class="comment-footer d-flex align-items-center">
                                            <span class="badge badge-light-danger text-danger">Rejected</span>
                                            <span class="action-icons">
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-pencil-alt"></i></a>
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-check"></i></a>
                                                    <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-heart"></i></a>    
                                                </span>
                                            <span class="text-muted ml-auto">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- Comment Row -->
                                <div class="d-flex flex-row comment-row p-3">
                                    <!-- <div class="p-2"><span class="round text-white d-inline-block text-center"><img src="./Monster Template by WrapPixel_files/4.jpg" alt="user" width="50" class="rounded-circle"></span></div> -->
                                    <div class="comment-text w-100 py-1 py-md-3 pr-md-3 pl-md-4 px-2">
                                        <h5>James Anderson</h5>
                                        <p class="mb-1">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has beenorem Ipsum is simply dummy text of the printing and type setting industry..</p>
                                        <div class="comment-footer d-flex align-items-center">
                                            <span class="badge badge-light-info text-info">Pending</span>
                                            <span class="action-icons">
                                                        <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-pencil-alt"></i></a>
                                                        <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-check"></i></a>
                                                        <a href="javascript:void(0)" class="pl-3 align-middle"><i class="ti-heart"></i></a>    
                                                    </span>
                                            <span class="text-muted ml-auto">April 14, 2016</span>
                                        </div>
                                    </div>
                                </div>
                            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex align-items-center">
                                    <h4 class="card-title">To Do list</h4>
                                    <div class="ml-auto">
                                        <button class="btn btn-sm btn-rounded btn-success" data-toggle="modal" data-target="#myModal">Add Task</button>
                                    </div>
                                </div>
                                <!-- ============================================================== -->
                                <!-- To do list widgets -->
                                <!-- ============================================================== -->
                                <div class="to-do-widget mt-3 scrollable ps-container ps-theme-default" style="height: 444px;" data-ps-id="2dd6efc5-e72c-a570-0d29-be29cde54051">
                                    <!-- .modal for add task -->
                                    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header d-flex align-items-center">
                                                    <h4 class="modal-title">Add Task</h4>
                                                    <button type="button" class="close ml-auto" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">×</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    <form>
                                                        <div class="form-group">
                                                            <label>Name</label>
                                                            <input type="text" class="form-control" placeholder="Enter Your Name">
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Email address</label>
                                                            <input type="email" class="form-control" placeholder="Enter email">
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-success" data-dismiss="modal">Submit</button>
                                                </div>
                                            </div>
                                            <!-- /.modal-content -->
                                        </div>
                                        <!-- /.modal-dialog -->
                                    </div>
                                    <!-- /.modal -->
                                    <ul class="list-task todo-list list-group mb-0" data-role="tasklist">
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputSchedule" name="inputCheckboxesSchedule">
                                                <label for="inputSchedule" class="font-weight-normal"> <span>Schedule meeting with</span> </label>
                                            </div>
                                            <!-- <ul class="assignedto list-inline m-0 pl-4 ml-1">
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Steave"></li>
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Jessica"></li>
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka"></li>
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina"></li>
                                            </ul> -->
                                        </li>
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputCall" name="inputCheckboxesCall">
                                                <label for="inputCall" class="font-weight-normal"> <span>Give Purchase report to</span> <span class="badge badge-light-danger text-danger">Today</span> </label>
                                            </div>
                                            <!-- <ul class="assignedto m-0 pl-4 ml-1 list-inline">
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Priyanka"></li>
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Selina"></li>
                                            </ul> -->
                                        </li>
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputBook" name="inputCheckboxesBook">
                                                <label for="inputBook" class="font-weight-normal"> <span>Book flight for holiday</span> </label>
                                            </div>
                                            <div class="item-date font-12 pl-4 ml-1 d-inline-block"> 26 jun 2020</div>
                                        </li>
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputForward" name="inputCheckboxesForward">
                                                <label for="inputForward" class="font-weight-normal"> <span>Forward all tasks</span> <span class="badge badge-light-warning text-warning">2 weeks</span> </label>
                                            </div>
                                            <div class="item-date font-12 pl-4 ml-1 d-inline-block"> 26 jun 2020</div>
                                        </li>
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputRecieve" name="inputCheckboxesRecieve">
                                                <label for="inputRecieve" class="font-weight-normal"> <span>Recieve shipment</span> </label>
                                            </div>
                                            <div class="item-date font-12 pl-4 ml-1 d-inline-block"> 26 jun 2020</div>
                                        </li>
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputpayment" name="inputCheckboxespayment">
                                                <label for="inputpayment" class="font-weight-normal"> <span>Send payment today</span> </label>
                                            </div>
                                            <div class="item-date font-12 pl-4 ml-1 d-inline-block"> 26 jun 2020</div>
                                        </li>
                                        <li class="list-group-item border-0 mb-0 py-3 pr-3 pl-0" data-role="task">
                                            <div class="checkbox checkbox-info">
                                                <input type="checkbox" id="inputForward2" name="inputCheckboxesd">
                                                <label for="inputForward2" class="font-weight-normal"> <span>Important tasks</span> <span class="badge badge-light-success text-success">2 weeks</span> </label>
                                            </div>
                                            <!-- <ul class="assignedto m-0 pl-4 ml-1 list-inline">
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Assign to Steave"></li>
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Assign to Jessica"></li>
                                                <li class="list-inline-item"><img class="rounded-circle" src="./Monster Template by WrapPixel_files/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" title="" data-original-title="Assign to Selina"></li>
                                            </ul> -->
                                        </li>
                                    </ul>
                                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Row -->
            </div>
            <!-- ============================================================== -->
            <!-- End Container fluid  -->
            <!-- ============================================================== -->
            <!-- ============================================================== -->
            <!-- footer -->
            <!-- ============================================================== -->
            <footer class="footer">
                   © 2020 Monster Admin by wrappixel.com
            </footer>
            <!-- ============================================================== -->
            <!-- End footer -->
            <!-- ============================================================== -->
        </div>
        <!-- ============================================================== -->
        <!-- End Page wrapper  -->
        <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
    <!-- End Wrapper -->
    <!-- ============================================================== -->
    <!-- ============================================================== -->
    <!-- customizer Panel -->
    <!-- ============================================================== -->
    <aside class="customizer">
        <a href="javascript:void(0)" class="service-panel-toggle"><i class="fa fa-spin fa-cog"></i></a>
        <div class="customizer-body ps-container ps-theme-default" data-ps-id="dfd851e4-c640-578a-bf62-bdf99e1bed25">
            <ul class="nav customizer-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><i class="mdi mdi-wrench font-20"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#chat" role="tab" aria-controls="chat" aria-selected="false"><i class="mdi mdi-message-reply font-20"></i></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="https://www.wrappixel.com/demos/admin-templates/monster-bootstrap-latest/monster/src/dark/index.html#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><i class="mdi mdi-star-circle font-20"></i></a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <!-- Tab 1 -->
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="p-3 border-bottom">
                        <!-- Sidebar -->
                        <h5 class="font-weight-medium mb-2 mt-2">Layout Settings</h5>
                        <div class="checkbox checkbox-info mt-2">
                            <input type="checkbox" name="theme-view" id="theme-view">
                            <label for="theme-view"> <span>Dark Theme</span> </label>
                        </div>
                        <div class="checkbox checkbox-info mt-2">
                            <input type="checkbox" class="custom-control-input sidebartoggler" name="collapssidebar" id="collapssidebar">
                            <label for="collapssidebar"> <span>Collapse Sidebar</span> </label>
                        </div>
                        <div class="checkbox checkbox-info mt-2">
                            <input type="checkbox" name="sidebar-position" id="sidebar-position">
                            <label for="sidebar-position"> <span>Fixed Sidebar</span> </label>
                        </div>
                        <div class="checkbox checkbox-info mt-2">
                            <input type="checkbox" name="header-position" id="header-position">
                            <label for="header-position"> <span>Fixed Header</span> </label>
                        </div>
                        <div class="checkbox checkbox-info mt-2">
                            <input type="checkbox" name="boxed-layout" id="boxed-layout">
                            <label for="boxed-layout"> <span>Boxed Layout</span> </label>
                        </div>
                    </div>
                    <div class="p-3 border-bottom">
                        <!-- Logo BG -->
                        <h5 class="font-weight-medium mb-2 mt-2">Logo Backgrounds</h5>
                        <ul class="theme-color m-0 p-0">
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-logobg="skin1"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-logobg="skin2"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-logobg="skin3"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-logobg="skin4"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-logobg="skin5"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-logobg="skin6"></a></li>
                        </ul>
                        <!-- Logo BG -->
                    </div>
                    <div class="p-3 border-bottom">
                        <!-- Navbar BG -->
                        <h5 class="font-weight-medium mb-2 mt-2">Navbar Backgrounds</h5>
                        <ul class="theme-color m-0 p-0">
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-navbarbg="skin1"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-navbarbg="skin2"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-navbarbg="skin3"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-navbarbg="skin4"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-navbarbg="skin5"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-navbarbg="skin6"></a></li>
                        </ul>
                        <!-- Navbar BG -->
                    </div>
                    <div class="p-3 border-bottom">
                        <!-- Logo BG -->
                        <h5 class="font-weight-medium mb-2 mt-2">Sidebar Backgrounds</h5>
                        <ul class="theme-color m-0 p-0">
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-sidebarbg="skin1"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-sidebarbg="skin2"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-sidebarbg="skin3"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-sidebarbg="skin4"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-sidebarbg="skin5"></a></li>
                            <li class="theme-item list-inline-item mr-1"><a href="javascript:void(0)" class="theme-link rounded-circle d-block" data-sidebarbg="skin6"></a></li>
                        </ul>
                        <!-- Logo BG -->
                    </div>
                </div>
                <!-- End Tab 1 -->
                <!-- Tab 2 -->
                <div class="tab-pane fade" id="chat" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <ul class="mailbox list-style-none mt-3">
                        <li>
                            <div class="message-center chat-scroll position-relative ps-container ps-theme-default" data-ps-id="a1c592d0-d356-aea7-eb55-cc677872833d">
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_1" data-user-id="1">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/1.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle online"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:30 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_2" data-user-id="2">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/2.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle busy"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Sonu Nigam</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">I've sung a song! See you at</span> <span class="font-12 text-nowrap d-block text-muted">9:10 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_3" data-user-id="3">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/3.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle away"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Arijit Sinh</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">I am a singer!</span> <span class="font-12 text-nowrap d-block text-muted">9:08 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_4" data-user-id="4">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/4.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Nirav Joshi</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_5" data-user-id="5">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/5.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Sunil Joshi</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_6" data-user-id="6">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/6.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Akshay Kumar</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_7" data-user-id="7">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/7.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Pavan kumar</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                </a>
                                <!-- Message -->
                                <!-- Message -->
                                <a href="javascript:void(0)" class="message-item d-flex align-items-center border-bottom px-3 py-2" id="chat_user_8" data-user-id="8">
                                    <!-- <span class="user-img position-relative d-inline-block"> <img src="./Monster Template by WrapPixel_files/8.jpg" alt="user" class="rounded-circle w-100"> <span class="profile-status rounded-circle offline"></span> </span> -->
                                    <div class="w-75 d-inline-block v-middle pl-2">
                                        <h5 class="message-title mb-0 mt-1">Varun Dhavan</h5> <span class="font-12 text-nowrap d-block text-muted text-truncate">Just see the my admin!</span> <span class="font-12 text-nowrap d-block text-muted">9:02 AM</span> </div>
                                </a>
                                <!-- Message -->
                            <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
                        </li>
                    </ul>
                </div>
                <!-- End Tab 2 -->
                <!-- Tab 3 -->
                <div class="tab-pane fade p-3" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <h6 class="mt-3 mb-3">Activity Timeline</h6>
                    <div class="steamline">
                        <div class="sl-item">
                            <div class="sl-left bg-success"> <i class="ti-user"></i></div>
                            <div class="sl-right">
                                <div class="font-weight-medium">Meeting today <span class="sl-date"> 5pm</span></div>
                                <div class="desc">you can write anything </div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <div class="sl-left bg-info"><i class="fas fa-image"></i></div>
                            <div class="sl-right">
                                <div class="font-weight-medium">Send documents to Clark</div>
                                <div class="desc">Lorem Ipsum is simply </div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <!-- <div class="sl-left"> <img class="rounded-circle" alt="user" src="./Monster Template by WrapPixel_files/2.jpg"> </div> -->
                            <div class="sl-right">
                                <div class="font-weight-medium">Go to the Doctor <span class="sl-date">5 minutes ago</span></div>
                                <div class="desc">Contrary to popular belief</div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <!-- <div class="sl-left"> <img class="rounded-circle" alt="user" src="./Monster Template by WrapPixel_files/1.jpg"> </div> -->
                            <div class="sl-right">
                                <div><a href="javascript:void(0)">Stephen</a> <span class="sl-date">5 minutes ago</span></div>
                                <div class="desc">Approve meeting with tiger</div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <div class="sl-left bg-primary"> <i class="ti-user"></i></div>
                            <div class="sl-right">
                                <div class="font-weight-medium">Meeting today <span class="sl-date"> 5pm</span></div>
                                <div class="desc">you can write anything </div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <div class="sl-left bg-info"><i class="fas fa-image"></i></div>
                            <div class="sl-right">
                                <div class="font-weight-medium">Send documents to Clark</div>
                                <div class="desc">Lorem Ipsum is simply </div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <!-- <div class="sl-left"> <img class="rounded-circle" alt="user" src="./Monster Template by WrapPixel_files/4.jpg"> </div> -->
                            <div class="sl-right">
                                <div class="font-weight-medium">Go to the Doctor <span class="sl-date">5 minutes ago</span></div>
                                <div class="desc">Contrary to popular belief</div>
                            </div>
                        </div>
                        <div class="sl-item">
                            <!-- <div class="sl-left"> <img class="rounded-circle" alt="user" src="./Monster Template by WrapPixel_files/6.jpg"> </div> -->
                            <div class="sl-right">
                                <div><a href="javascript:void(0)">Stephen</a> <span class="sl-date">5 minutes ago</span></div>
                                <div class="desc">Approve meeting with tiger</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Tab 3 -->
            </div>
        <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 3px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 0px;"></div></div></div>
    </aside>
    <div class="chat-windows hide-chat"></div>

  </div>
</template>
