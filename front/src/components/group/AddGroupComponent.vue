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
        <div class="input-field ">
            <select
              id="select"
              ref="select"
              v-model.trim="selected"
            >
              <option disabled value=""> Select university </option>
              <option 
                data-target = "dropdownOptions"
                v-for="item in list" 
                :value="item.id"
                :key="item.id"
              >
                {{item.name}}
              </option>

            </select>
            <label for="select" >
              Select
              <span class="required">*</span>
            </label>
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

export default {
  name: 'add-group-component',
  data () {
    return {
      name: null,
      selected: null,
      select: null,
      list: null,
    }
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.select);
  },
  methods: {
    getList() {
      universityService.getUniversities().then(
        (response) => {
          console.log(response.data);
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
          id: 2, // Вернуть как заработает селектор this.selected
        }
      };
      console.log(newGroup)
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
}
</script>


