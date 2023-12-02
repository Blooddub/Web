<template>
  <div>
    <form 
      class="card auth-card" 
      @submit.prevent="createStudent" 
    >
      <div class="card-content">
        <span class="card-title center">Student
          <router-link :to="'/students'" class="right">
            <i class="material-icons black-text">close</i>
          </router-link>
        </span>
        <br>

        <!-- First_name -->
        <div class="input-field">
          <label for="first_name">
            first_name 
            <span class="required">*</span>
          </label>
          <input 
            id="first_name" 
            v-model="student.first_name"
            type="text"
            autocomplete="name"
          >
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
            v-model= 'student.group.name'
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
            Update
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
  name: 'student-component',
  data () {
    return {
      student: {
        id: null,
        first_name: null,
        surname: null,
        patronymic: null,
        birthday: null,
        group: {
          id: null,
          name: null,
        },
        date_admission: null,
      },
      list: null,
      selected: null,
    }
  },
  mounted() {
    this.getgroups(); 
    this.student.id = this.$route.params.id;
    this.getStudent(this.$route.params.id);
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
    getStudent(id) {
      studentService.getStudent(id).then(
        (response) => {
          this.student.first_name = response.data.first_name;
          this.student.surname = response.data.surname;
          this.student.patronymic = response.data.patronymic;
          this.student.birthday = response.data.birthday.slice(0,10);
          this.student.group.id = (response.data.group) ? response.data.group.id : null;
          this.student.group.name = (response.data.group) ? response.data.group.name : null;
          this.student.date_admission = response.data.date_admission.slice(0,10);
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      )
    },
    updateStudent() {
      studentService.updateStudent(this.student).then(
        (response) => {
          if (response.data.id) {
            this.$router.push("/students");
          }
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      )
    },
    dateFormat(date) {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }
      return Intl.DateTimeFormat('ru-Ru', options).format(date)
    }
  },
  components: {
    SelectComponent
  },
}
</script>


