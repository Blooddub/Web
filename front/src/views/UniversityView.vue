<template>
  <div>
    <div class="page-title">
      <h3>Universites</h3>
    </div>

    <div class="section scrollspy">
      <table class="bordered">
        <thead>
          <tr>
              <th>id</th>
              <th>Name</th>
              <th class="right">Action</th>
          </tr>
        </thead>

        <tbody class="highlight responsive-table">
          <tr 
            v-for="items in listUniversities"
            :key="items.id"
          >
            <td>{{items.id}}</td>
            <td>{{items.name}}</td>
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
      <router-link class="btn-floating btn-large grey lighten-1" to="/adduniversity">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
    
  </div>
</template>



<script>
import universityService from '@/services/university.service';

export default {
  name: "university-view",
  data() {
    return {
      listUniversities: [],
      elems: null,
      instanc: null,
    }
  },
  mounted() {
    this.getUniversites();

  },
  methods: {
    getUniversites() {
      universityService.getUniversities().then(
        (response) => {
          this.listUniversities = response.data;      
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      );
    },
    deleteItems(id) {
      console.log("Delete",id);
      // universityService.deleteUniversitiy(id).then(
      //   () => {
      //     this.getUniversites();
      //   },
      //   (error) => {
      //     window.M.toast({html: error.toString()})
      //   }
      // );
    },
    editItems(id) {
      console.log("Edit", id);
    },
  },
}
</script>