<template>
    <div>
        <h4>Este es el primer enlace</h4>
        <mdb-card color="info-color" class="text-center">
          <mdb-card-body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </mdb-card-body>
        </mdb-card>
    </div>
</template>

<script>
import { mdbCard, mdbCardBody } from 'mdbvue';

export default {
    name:'HijoDos',
    components:{
        mdbCard,
      mdbCardBody,
    }
    
}
</script>

<style scoped>


</style>