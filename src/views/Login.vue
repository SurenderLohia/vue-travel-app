<template>
  <div class="login">
    <h1>Login</h1>
    <div class="form">
      <label for="username">Username</label>
      <input v-model="username" type="text" id="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="password" id="password" class="input" />
      <button @click="onLogin" class="btn">Login</button>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {
      username: null,
      password: null
    };
  },
  methods: {
    onLogin() {
      store.user = this.username;
      this.$router.push("/user");
    }
  }
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
