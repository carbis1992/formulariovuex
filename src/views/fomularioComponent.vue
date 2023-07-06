<template>
    <div>
        <h1>Formulario</h1>
        <!-- mostrar el loading cuando sea true -->
        <div v-if="getLoading">Loading...</div>
        <form action="" @submit.prevent="submitHandler">
            <label for="mail">Mail:</label>
            <input type="text" name="mail" id="mail" v-model="mail">
            <label for="contrasea">Contraseña:</label>
            <input type="text" name="contrasea" id="contrasea" v-model="contrasea">
            <label for="direccion">Direccion:</label>
            <input type="text" name="direccion" id="direccion" v-model="direccion">
            <label for="ciudad">Ciudad:</label>
            <input type="text" name="ciudad" id="ciudad" v-model="ciudad">
            <label for="provincia">Provincia:</label>
            <input type="text" name="provincia" id="provincia" v-model="provincia">
            <button>Enviar</button>
        </form>
        <button>
            <router-link to="/tabla">Ver usuarios</router-link>
        </button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FormularioComponent',
  data() {
    return {
      mail: '',
      contrasea: '',
      direccion: '',
      ciudad: '',
      provincia: '',
    };
  },
  computed: {
    ...mapGetters('formulario', ['getLoading']),
  },
  methods: {
    ...mapActions('formulario', ['saveFormData']),
    submitHandler() {
      const formData = {
        mail: this.mail,
        contrasea: this.contrasea,
        direccion: this.direccion,
        ciudad: this.ciudad,
        provincia: this.provincia,
      };
      this.saveFormData(formData)
      .then(() => {
        // Limpiar los datos del formulario
        this.mail = '';
        this.contrasea = '';
        this.direccion = '';
        this.ciudad = '';
        this.provincia = '';
      })
      .catch(error => {
        console.error('Error:', error);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
}

button {
    margin-top: 10px;
    place-self: center;
}

a{
    text-decoration: none;
    color: black;
}
</style>