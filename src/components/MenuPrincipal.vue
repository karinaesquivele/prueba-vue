<template>
  <div>
    <mdb-navbar position="top" dark color="stylish" scrolling>
      <mdb-navbar-brand href="#">Ejercicios</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <router-link to="/">
            <mdb-nav-item href="#" waves-fixed>Inicio</mdb-nav-item>
          </router-link>
          <router-link to="/HelloWorld">
            <mdb-nav-item href="#" waves-fixed>HelloWorld</mdb-nav-item>
          </router-link>
          <router-link to="/Crud">
            <mdb-nav-item href="#" waves-fixed>Crud</mdb-nav-item>
          </router-link>
          <router-link to="/PrimerEjercicio">
            <mdb-nav-item href="#" waves-fixed>Primer Ejercicio</mdb-nav-item>
          </router-link>
          
        </mdb-navbar-nav>
        
      </mdb-navbar-toggler>
    </mdb-navbar>

    
    
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
} from "mdbvue";
export default {
  name: "MenuPrincipal",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
  },
};
</script>

<style scoped>
</style>