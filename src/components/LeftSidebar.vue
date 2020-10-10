<template>
    <aside class="left-sidebar" data-sidebarbg="skin3">
            <div class="scroll-sidebar ps-container ps-theme-default ps-active-y" data-ps-id="177d8dac-a292-5fdb-4933-53f234a7e6cd">
                <nav class="sidebar-nav">
                    <ul id="sidebarnav" class="in">
                        <li class="sidebar-item"> 
                            <router-link :to="{ path: '/products' }" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                <font-awesome-icon icon="th-large" />  
                                <span style="padding: 10px;" class="hide-menu">Produtos</span>
                            </router-link>
                        </li>
                        <li class="sidebar-item"> 
                            <a v-on:click.prevent="logout" class="sidebar-link waves-effect waves-dark sidebar-link" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
                                     stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                                     class="feather feather-log-out feather-icon">
                                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                                        <polyline points="16 17 21 12 16 7"></polyline>
                                        <line x1="21" y1="12" x2="9" y2="12"></line>
                                </svg>
                                <span class="hide-menu">Sair</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;">
                    <div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps-scrollbar-y-rail" style="top: 0px; height: 274px; right: 3px;">
                    <div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 21px;"></div>
                </div>
            </div>
    </aside>
</template>

<script> 
import { mapActions } from "vuex";
export default {
  name: 'LeftSidebar',
  props: {},
  methods: {
    ...mapActions({
        logOut: "loginStore/logOut",
    }),
    logout: function() {
        this.logOut();
        location.reload();
    }
  }
}
</script>


<style scoped lang="scss">

</style>
