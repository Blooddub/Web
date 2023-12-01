<template>
  <div>
    <div class="page-title">
      <h3>Groups</h3>
    </div>

    <div class="section scrollspy">
      <table class="bordered">
        <thead>
          <tr>
              <th>id</th>
              <th>Name</th>
              <th>University</th>
              <th class="right">Action</th>
          </tr>
        </thead>

        <tbody class="highlight responsive-table">
          <tr 
            v-for="items in listGroups"
            :key="items.id"
          >
            <td>{{items.id}}</td>
            <td>{{items.name}}</td>
            <td>{{items.university.name}}</td>
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
      <router-link class="btn-floating btn-large grey lighten-1" to="/addgroup">
        <i class="large material-icons">add</i>
      </router-link>
    </div>

  </div>
</template>



<script>
import groupService from '@/services/group.service';

export default {
  name: 'groups-view',
  data() {
    return {
      listGroups: [],
    }
  },
  mounted() {
    this.openPage();
  },
  methods: {
    openPage() {
      groupService.getGroups().then(
        (response) => {
          this.listGroups = response.data;      
        },
        (error) => {
          window.M.toast({html: error.toString()})
        }
      );
    },
    deleteItems(id) {
      groupService.deleteGroup(id).then(
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
