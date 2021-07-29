<template>
  <div class="skills">
    <div class="holder">

<h1>My Skills List</h1>
<ValidationObserver v-slot="{ handleSubmit }">
  <form @submit.prevent="handleSubmit(addSkill)">
    <ValidationProvider rules="required|min:2|max:20" name="skill" v-slot="{ errors }" @keyup.enter.native.="checkEnter">
        <input type="text" placeholder="Enter a skill you have.." v-model="skill">
            <p>{{ errors[0] }}</p>
              </ValidationProvider>
  </form>
</ValidationObserver>

<h2>Added skills</h2>

      <ul>
      <transition-group name="bounce">
        <li v-for="(data, index) in skills" :key='index'>{{ data.skill }}
        <a @click="remove(index)"><font-awesome-icon icon="minus-circle" /></a>
        </li>
      </transition-group>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skill: '',
      skills: [
        { "skill": "Vue.js"},
        { "skill": "Testing"},
      ]
    }
  },
  methods: {
    addSkill() {
      this.skills.push({skill: this.skill})
      this.skill = '';
    },
    remove(id) {
      this.skills.splice(id,1);
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css";

  .holder {
    background: #fff;
    text-align: center;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3rem;
    background-color: #E0EDF4;
    border-left: 5px solid #3EB3F6;
    margin-bottom: 2px;
    color: #3E5252;
  }

  h1 {
    padding: 50px 20px 20px;
    text-transform: uppercase;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: gray;
  }

  .container {
    box-shadow: 0px 0px 40px lightgray;
  }

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #323333;
    color: #687F7F;
  }

  input, input[placeholder] {
    text-align: center;
  }

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

li a {
  float: right;
  cursor: pointer;
}

</style>
