<template> 
    <form 
      class="card auth-card" 
      @submit.prevent="create" 
    >
      <div class="card-content">
        <span class="card-title center">Add Universites
          <router-link :to="'/universites'" class="right">
            <i class="material-icons black-text">close</i>
          </router-link>
          <br>
        </span>

        <!-- Name -->
        <div class="input-field">
          <input 
            id="name" 
            v-model.trim="name"
            type="text"
            autocomplete="name"
          >
            <label for="name">
              Name 
              <span class="required">*</span>
            </label>
        </div>
      </div>  

      <!-- Button -->
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect grey"
              :class="{disabled: name  ? false : true}"
              type="submit"
          >
            <i class="material-icons right">send</i>
            Create
          </button>
        </div>
      </div>
    </form>
</template>


<script>
import universityService from '@/services/university.service';

export default {
  name: 'add-university-component',
  data () {
    return {
      name: null,
    }
  },
  methods: {
    create() {
      universityService.createUniversity({name: this.name}).then(
        () => {
          this.$router.push("/universites");
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      )
    },
  },
}
</script>

