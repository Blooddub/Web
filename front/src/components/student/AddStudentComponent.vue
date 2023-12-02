<template>
  <div>
    <form 
      class="card auth-card" 
      @submit.prevent="createStudent" 
    >
      <div class="card-content">
        <span class="card-title center">Add Student
          <router-link :to="'/students'" class="right">
            <i class="material-icons black-text">close</i>
          </router-link>
        </span>
        <br>

        <!-- First_name -->
        <div class="input-field">
          <input 
            id="first_name" 
            v-model.trim="student.first_name"
            type="text"
            autocomplete="name"
          >
            <label for="first_name">
              first_name 
              <span class="required">*</span>
            </label>
        </div>

        <!-- Surname -->
        <div class="input-field">
          <input 
            id="surname"
            v-model.trim="student.surname"
            type="text"
            autocomplete="name"
          >
          <label for="surname">
            surname 
            <span class="required">*</span>
          </label>
        </div>

        <!-- Patronymic -->
        <div class="input-field">
          <input 
            id="patronymic"
            v-model.trim="student.patronymic"
            type="text"
          >
          <label for="patronymic">
            patronymic 
          </label>
        </div>

        <!-- Birthday -->
        <div class="input-field disable">
          <input 
            id="birthday"
            v-model.trim="student.birthday"
            type="date"
          >
          <label for="birthday">
            birthday 
            <span class="required">*</span>
          </label>
        </div>

        <!-- Group -->
        <div class="input-field ">
          <SelectComponent
            v-if="list"
            :options= "list"
            v-model= 'student.group.id'
          />
        </div>

        <!-- Date_admission -->
        <div class="input-field">
          <input 
            id="date_admission"
            v-model.trim="student.date_admission"
            type="date"
          >
          <label for="date_admission">
            date_admission 
            <span class="required">*</span>
          </label>
        </div>

      </div>

      <!-- Button -->
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect grey"
              :class="{disabled: (student.first_name, student.surname, student.birthday, student.group.id, student.date_admission)  ? false : true}"
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
import studentService from '@/services/student.service'
import groupService from '@/services/group.service'

import SelectComponent from '../fields/SelectComponent.vue';


export default {
  name: 'add-student-component',
  data () {
    return {
      student: {
        first_name: null,
        surname: null,
        patronymic: null,
        birthday: null,
        group: {
          id: null,
        },
        date_admission: null,
      },
      list: null,
    }
  },
  mounted() {
    this.getgroups();
  },
  methods: {
    getgroups() {
      groupService.getGroups().then(
        (response) => {
          this.list = response.data;
        },
        (error) =>{
          window.M.toast({html: error.toString()})
        }
      )
    },
    createStudent() {
      studentService.createStudent(this.student).then(
        () => {
          this.$router.push("/students");
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

