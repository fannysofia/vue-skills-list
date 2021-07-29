<template>
    <div class="about">
        <h1>Hello {{ their_name }}, this is the about page</h1>
        <p>Lorem ipsum</p>
    </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>
