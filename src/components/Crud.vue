<template>
  <div class="container">
    <h3 class="h3 text-center mb-4">Administración de Tareas</h3>

    <!---Formulario--->
    <div class="row formulario">
      <div class="col-lg-2"></div>
      <div class="grey-text col-lg-8">
        <mdb-input label="Tarea" type="text" v-model="tarea">
          <mdb-btn
            size="md"
            color="primary"
            group
            slot="append"
            @click="guardarTarea()"
            v-bind:disabled="tarea==''"
            v-if="actualizar==false"
            >Guardar
          </mdb-btn>
          <mdb-btn
            size="md"
            color="success"
            group
            slot="append"
            @click="actualizarTarea()"
            v-bind:disabled="tarea==''"
            v-else
            >Actualizar
          </mdb-btn>
        </mdb-input>
        {{ tarea }}
      </div>
      <div class="col-lg-2"></div>
    </div>

    <!---Tabla--->
    <div>
      <mdb-tbl>
        <mdb-tbl-head color="black" textWhite>
          <tr>
            <th>Id</th>
            <th>Tarea</th>
            <th></th>
            <th>Estado</th>
          </tr>
        </mdb-tbl-head>
        <mdb-tbl-body>
          <tr v-for="(tarea, index) in tareas" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td
              class="elemento"
              @click="completarTarea(index)"
              :class="{ 'text-muted': tarea.completada == true }"
            >
              {{ tarea.tarea }}
            </td>
            <td>
              <mdb-btn color="danger" size="sm" @click="eliminarTarea(index)"
                ><mdb-icon icon="trash" />
              </mdb-btn>
              <mdb-btn color="success" size="sm" @click="editarTarea(index)"
                ><mdb-icon icon="pen" />
              </mdb-btn>
            </td>
            <td v-if="tarea.completada == true">Completada</td>
            <td v-else></td>
          </tr>
        </mdb-tbl-body>
      </mdb-tbl>
    </div>
    
    <!--Alerta--->
    <mdb-alert class="alerta"
      color="success"
      v-if="alerta"
      @closeAlert="alerta = false"
      dismiss>
      La tarea ha sido <b class="tipoAlerta">{{tipoAlerta}}</b> con éxito.
    </mdb-alert>
    <hr>
    <router-link to="/Crud/HijoUno">
      <mdb-nav-item href="#" waves-fixed>Primer sub-enlace</mdb-nav-item>
    </router-link>
    ||
    <router-link to="/Crud/HijoDos">
      <mdb-nav-item href="#" waves-fixed>Segundo sub-enlace</mdb-nav-item>
    </router-link>

    <router-view />

    
  </div>
</template>


<script>
import {
  mdbInput,
  mdbBtn,
  mdbTbl,
  mdbTblHead,
  mdbTblBody,
  mdbIcon,
  mdbAlert,
} from "mdbvue";
export default {
  name: "Crud",
  data() {
    return {
      tarea: "",
      tareas: [],
      //edoTarea:false,
      idRecibido: 0,
      alerta: false,
      tipoAlerta:'',
      actualizar:false,
    };
  },
  components: {
    mdbInput,
    mdbBtn,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbIcon,
    mdbAlert,
  },
  computed: {
    colorAlerta() {
      return {'primary':this.tipoAlerta=='guardada',
              'danger':this.tipoAlerta=='eliminada'
              }
    },
  },
  methods: {
    guardarTarea() {
      var nuevaTarea = { tarea: this.tarea, completada: false };
      this.tareas.push(nuevaTarea);
      this.tarea = "";
      this.tipoAlerta='guardada';
      this.alerta=true;
      //console.log(this.tareas);
    },
    eliminarTarea(index) {
      this.tareas.splice(index, 1);
      this.tipoAlerta='eliminada';
      this.alerta=true;
    },
    completarTarea(index) {
      this.idRecibido = parseInt(index);
      this.tareas[index].completada = true;
    },
    editarTarea(index) {
      this.idRecibido = parseInt(index);
      console.log(this.idRecibido);
      this.tarea= this.tareas[this.idRecibido].tarea;
      this.actualizar=true;
      //this.tareas[index].tarea =
    },
    actualizarTarea(){
      this.tareas[this.idRecibido].tarea= this.tarea;
      this.tipoAlerta="editada";
      this.alerta=true;
      this.actualizar=false;
      this.tarea="";
    }
  },
};
</script>

<style scoped>
.espacio {
  padding: 0px;
}
.formulario {
  background: #ffff;
}
.elemento:hover {
  cursor: pointer;
}
.alerta{
  position:fixed;
  right: 10px;
  top:10px;
}
.tipoAlerta{
  font-weight: bold;
}
</style>