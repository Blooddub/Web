<template>
    <select
      id="selector"
      ref="selector"
      v-model="selected"
      class="grey lighten-1"
    >
      <option disabled value="" > Select ... </option>
      <option 
        v-for="item in options" 
        :value="item.id"
        :key="item.id"
      >
        {{item.name}}
      </option>
    </select>

    <label for="selector" >
        Select
    </label>
</template>
  
  

<script>
   
export default {
  name: 'select-component',
  props: {
    options: { type: Array, required: true },
    modelValue: {required: true }},
  emits: ['update:modelValue'],
  setup() {},
  data () {
    return {
      selector: null, 
    }
  },
  mounted() {
    this.selector = window.M.FormSelect.init(this.$refs.selector);
  },
  computed: {
    selected: {
      get() {
        return this.modelValue;
      },
      set(selected) {
        this.$emit('update:modelValue', selected);
      }
    }
  },
  beforeUnmount(){
    if (this.options && this.selector.destroy){
        this.selector.destroy();
    }
  }
}
</script>
  
  