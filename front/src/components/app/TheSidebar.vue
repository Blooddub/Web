<template>
  <ul class="sidenav app-sidenav" :class="{open: modelValue}">
    <router-link 
      v-for="link in links"
      :key="link.url"
      :to="link.url"
      v-slot: href
      >
      <li> 
        <a href="#" class="waves-effect waves-grey pointer">{{link.title}}</a>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'sidebar-conponent',
  props: { 
    'modelValue': Boolean, 
  },
  data () {
    return {
      links: [
        {title: 'Universites', url: '/universites'},
        {title: 'Groups', url: '/groups'},
        {title: 'Students', url: '/students'},
        // {title: 'Профиль', url: '/profile'},
      ]
    }
    
  }
}
</script>



