<template>
    <div>
        <h1>Tabla de Datos</h1>
        <table>
            <thead>
                <tr>
                    <th>Mail</th>
                    <th>Contraseña</th>
                    <th>Dirección</th>
                    <th>Ciudad</th>
                    <th>Provincia</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in getFormData" :key="item.id">
                    <td>{{ item.mail }}</td>
                    <td>{{ item.contrasea }}</td>
                    <td>{{ item.direccion }}</td>
                    <td>{{ item.ciudad }}</td>
                    <td>{{ item.provincia }}</td>
                </tr>
            </tbody>
        </table>
        <button>
            <router-link to="/">Añadir usuario</router-link>
        </button>
    </div>
</template>
  

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'TablaComponent',
    computed: {
        ...mapGetters('formulario', ['getFormData']),
    },
    methods: {
        ...mapActions('formulario', ['fetchFormData']),
    },
    mounted() {
        this.fetchFormData();
    },
};

</script>

<style>
button{
        margin: 10px;
    }
    a{
        text-decoration: none;
        color: black;
    }
    table{
        margin: auto;
    }
</style>