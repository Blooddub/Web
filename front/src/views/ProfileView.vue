<template>
  <div v-if="curentUser">
    <div class="page-title">
      <h3>Profile</h3>
    </div>

    <form 
      class="form"
      @submit="updateUser"
    >
      <div class="input-field">
        <label class="active">Login</label>
        <input
            id="login"
            type="text"
            v-model= "curentUser.login"
            readonly
        > 
      </div>
      <div class="input-field">
        <label :class="{active: nameNotEmpty}">Name</label>
        <input
            id="name"
            type="text"
            autocomplete = "name" 
            v-model= "curentUser.name"
        > 
      </div>
      <button 
        class="btn waves-effect grey lighten-1" 
        type="submit"
      >
        Update
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>


<script>
import UserService from "../services/user.service";

export default {
  name: 'profile-view',
  data() {
    return {
      curentUser: null,
      nameNotEmpty: false,
    }
  },
  mounted() {
    this.getUser();
  },
  methods: {
    getUser() {
      UserService.getUserInfo().then(
        (response) => {
          this.curentUser = response.data; 
          this.nameNotEmpty = response.data.name ? true : false;     
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      );
    },

    updateUser() {
      const data_user = {
        name: this.curentUser.name,
      }

      UserService.updateUserInfo(data_user).then(
        () => {
          this.getUser();
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      );
    }

  },
}
</script>
 