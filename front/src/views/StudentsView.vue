<template>
  <div>
    <div class="page-title">
      <h3 @click.prevent="students">Students</h3>
    </div>

    <div class="section scrollspy">
      <table class="bordered">
        <thead>
          <tr>
              <th>id</th>
              <th>first_name</th>
              <th>surname</th>
              <th>patronymic</th>
              <th>birthday</th>
              <th>group</th>
              <th>date_admission</th>
              <th class="right">Action</th>
          </tr>
        </thead>

        <tbody class="highlight responsive-table">
          <tr 
            v-for="items in listStudents"
            :key="items.id"
          >
            <td>{{items.id}}</td>
            <td>{{items.first_name}}</td>
            <td>{{items.surname}}</td>
            <td>{{items.patronymic ? items.patronymic : "-"}}</td>
            <td>{{items.birthday}}</td>
            <td>{{items.group ? items.group.name : "-"}}</td>
            <td>{{items.date_admission}}</td>
            <td class="right">
              <ul style="display: flex">
                <li>    
                  <a href="" @click.prevent="editItems(items.id)">      
                    <i class="material-icons Small black-text">
                    create
                    </i>
                  </a>  
                </li>
                <li>
                  <a href="" @click.prevent="deleteItems(items.id)">      
                    <i class="material-icons Small black-text">
                      delete_forever
                    </i>
                  </a> 
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large grey lighten-1" to="/addstudent">
        <i class="large material-icons">add</i>
      </router-link>
    </div>

  </div>
</template>



<script>
import studentService from '@/services/student.service';

export default {
  name: 'students-view',
  data() {
    return {
      listStudents: [],
    }
  },
  mounted() {
    this.openPage();
  },
  methods: {
    openPage() {
      studentService.getStudents().then(
        (response) => {
          this.listStudents = response.data;      
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      );
    },
    deleteItems(id) {
      studentService.deleteStudent(id).then(
        () => {
          this.openPage();
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      );
    },
  }
}
</script>
