import Vue from 'vue'
import VueRouter from 'vue-router'
import Crud from '../components/Crud.vue'
    import HijoUno from '../components/hijos/HijoUno.vue'
    import HijoDos from '../components/hijos/HijoDos.vue'
import HelloWorld from '../components/HelloWorld.vue'
import ApiPrueba from '../components/ApiPrueba.vue'
import PrimerEjercicio from '../components/PrimerEjercicio.vue'


Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {path:'/',component:ApiPrueba},
        {
            path:'/Crud',component:Crud,
            children:[
                {path:'/Crud/HijoUno',component:HijoUno},
                {path:'/Crud/HijoDos',component:HijoDos}
            ]

        },
        {path:'/HelloWorld',component:HelloWorld},
        {path:'/PrimerEjercicio',component:PrimerEjercicio},
        {path:'*',redirect:'/'}

    ]




});