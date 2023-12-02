<template>
  <div>
    <form 
      class="card auth-card" 
      @submit.prevent="create" 
    >
      <div class="card-content">
        <span class="card-title center">Add Group
          <router-link :to="'/groups'" class="right">
            <i class="material-icons black-text">close</i>
          </router-link>
        </span>
        <br>

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

        <!-- University -->
        <div class="input-field">
          <SelectComponent
            v-if="list"
            :options= "list"
            v-model= 'selected'
          />
        </div>
      </div>   

      <!-- Button -->
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect grey"
              :class="{disabled: (name)  ? false : true}"
              type="submit"
          >
            <i class="material-icons right">send</i>
            Create
          </button>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import universityService from '@/services/university.service';
import groupService from '@/services/group.service';

import SelectComponent from '../fields/SelectComponent.vue';


export default {
  name: 'add-group-component',
  data () {
    return {
      name: null,
      selected: null,
      list: null,
    }
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      universityService.getUniversities().then(
        (response) => {
          this.list = response.data;
        },
        (error) =>{
          window.M.toast({html: error.toString()})
        }
      )
    },
    create() {
      const newGroup = {
        name: this.name,
        university: {
          id: this.selected,
        }
      };
      groupService.createGroup(newGroup).then(
        () => {
          this.$router.push("/groups");
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      )
    },
  },
  components: {
    SelectComponent
  },
}
</script>


