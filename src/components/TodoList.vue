<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 formulario p-5">
                <form  @submit.prevent="crearTarea">
                    <label class="form-label me-1" for="task">Nueva Tarea: </label>
                    <input type="text" v-model="nuevaTarea" id="task"> 
                    <input class="btn btn-info btn-sm" type="submit" value="Crear tarea">
                </form>
            </div>
            <div class="col-lg-2"></div>
        </div>
        
        <div class="row text-start">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 tareas mt-4">
                <ul class="list-group">
                    <li 
                        class="list-group-item" 
                        v-for="(tarea, index) in tareas" :key="index"
                        @click="completarTarea(tarea.texto)"
                    >{{tarea.texto}}</li>
                </ul>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TodoList',
    data: function(){
        return{
            nuevaTarea:"",
            tareas:[]
        }
    },
    methods:{
        crearTarea(){
        let tarea={
            texto:this.nuevaTarea,
            completed:false
        };
        this.tareas.push(tarea);
        this.nuevaTarea="";
        console.log(this.tareas);
        },
        completarTarea(tareaTxt){
            var t = String(tareaTxt);
            console.log(t);
            var id = this.tareas.indexOf(t);
            console.log(id);
            //console.log(id+"---"+inx)
            //console.log(id)
            //if(idTarea === id){
              //  console.log(idTarea+"//"+id);
                //this.tarea.completed = !this.tarea.completed
            //}
        }
    }
    
}
</script>

<style scoped>
.formulario{
    background: #FFF;
}
.tareas{
    padding:0px
}
</style>