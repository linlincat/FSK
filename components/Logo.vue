<template>
  <div class="VueToNuxtLogo">
    <p>hello world</p>
    <em>ddd</em>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: 'Hello World!'
      }
    },
    head () {
      return {
        title: this.title,
        meta: [
          { hid: 'description', name: 'description', content: 'My custom description' },
          { hid: 'description', name: 'keybordy', content: 'My custom keyboordy' }
        ]
      }
    }
  }
</script>
<style lang="scss">
.VueToNuxtLogo {
  width: 200px;
  height: 300px;
  background: red;

  p {
    color: #fff;
  }

  em {
    color: gray;
  }
}


</style>
