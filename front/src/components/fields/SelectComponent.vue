<template>
  <div class="input-field">
    <select
    id="select"
    ref="select"
    v-model.trim="selected"
    >
      <option disabled value=""> Select ... </option>
      <option 
          data-target = "dropdownOptions"
          v-for="item in options" 
          :value="item.id"
          :key="item.id"
      >
          {{item.name}}
      </option>
    </select>
    <label for="select" >
        Select
    </label>
  </div>
</template>
  
  
  
  <script>
   
  export default {
    name: 'add-student-component',
    data () {
      return {
        select: null, 
        selected: "",
        options: null,
      }
    },
    mounted() {
      window.M.FormSelect.init(this.$refs.select);
    },
    methods: {

    },
  }
  </script>
  
  