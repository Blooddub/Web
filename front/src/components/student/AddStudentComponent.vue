<template>
  <div>
    <form 
      class="card auth-card" 
      @submit.prevent="createStudent" 
    >
      <div class="card-content">
        <span class="card-title center">Add student
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
          <!-- <small class="helper-text invalid">
          </small> -->
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
           <!-- <small class="helper-text invalid">
          </small> -->
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
           <!-- <small class="helper-text invalid">
          </small> -->
        </div>

        <!-- Birthday -->
        <div class="input-field">
          <input 
            id="birthday"
            v-model.trim="student.birthday"
            type="date"
          >
            <label for="birthday">
              birthday 
              <span class="required">*</span>
            </label>
           <!-- <small class="helper-text invalid">
          </small> -->
        </div>

        <!-- Group -->
        <div class="input-field ">
            <select
              id="selectGroup"
              ref="selectGroup"
              v-model.trim="student.group"
            >
              <option disabled value=""> Select group </option>
              <option 
                data-target = "dropdownOptions"
                v-for="item in groupsList" 
                :value="item.id"
                :key="item.id"
              >
                {{item.name}}
              </option>

            </select>
            <label for="selectGroup" >
              Groups Select
              <span class="required">*</span>
            </label>
            <br/>
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
           <!-- <small class="helper-text invalid">
          </small> -->
        </div>
      </div>

      <!-- Button -->
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect grey"
              :class="{disabled: (student.first_name, student.surname, student.birthday, student.group, student.date_admission)  ? false : true}"
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


export default {
  name: 'add-student-component',
  data () {
    return {
      student: {
        first_name: null,
        surname: null,
        patronymic: null,
        birthday: null,
        group: null,
        date_admission: null,
      },
      groupsList: null,
      selectGroup: null, 
    }
  },
  beforeRouteView() {
    this.getgroups();
  },
  mounted() {
    window.M.FormSelect.init(this.$refs.selectGroup);
  },
  methods: {
    getgroups() {
      groupService.getGroups().then(
        (response) => {
          console.log(response.data);
          this.groupsList = response.data;
        },
        (error) =>{
          window.M.toast({html: error.toString()})
        }
      )
    },
    createStudent() {
      const newStudent = {
        first_name: this.student.first_name,
        surname: this.student.surname,
        patronymic: this.student.patronymic,
        birthday: this.student.birthday,
        group: {
          id: 7
        },
        date_admission: this.student.date_admission,
      }
      studentService.createStudent(newStudent).then(
        () => {
          this.$router.push("/students");
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      )
    },
    beforeUnmount() {
      if (this.selectGroup && this.selectGroup.destroy){
        this.selectGroup.destroy();
      }
    }
  },
}
</script>

