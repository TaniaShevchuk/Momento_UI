<template>
  <v-app>
    <v-main>
      <v-container class="fill-height" justify="center" fluid>
        <v-window>
          <v-img :aspect-ratio="3 / 1" src="../assets/images/login.jpg" />

          <h2 class="text-center mt-6">
            {{ signUp ? "Create an account" : "Welcome back :)" }}
          </h2>

          <v-form>
            <v-text-field
              v-if="signUp"
              label="First Name"
              name="firstName"
              type="text"
            />
            <v-text-field
              v-if="signUp"
              label="Last Name"
              name="lastName"
              type="text"
            />
            <v-text-field
              label="Email"
              name="email"
              append-icon="mdi-email"
              type="text"
            />
            <v-text-field
              label="Password"
              name="password"
              append-icon="mdi-lock"
              type="password"
            />
            <v-text-field
              v-if="signUp"
              label="Confirm Password"
              name="confirmPassword"
              append-icon="mdi-lock"
              type="password"
            />

            <v-btn
              v-if="!signUp"
              class="mb-5"
              rounded
              color="#beb8fa"
              @click="onSignIn"
            >
              Sign in
            </v-btn>
            <v-btn
              v-else
              rounded
              class="mb-5"
              color="#beb8fa"
              @click="onSignUp"
            >
              Sign Up
            </v-btn>
          </v-form>

          <div v-if="!signUp">
            <h5 class="text-center my-2">
              Forgot Your Password?
            </h5>
            <h5 class="text-center mb-9">
              Don't have an account?
              <span color="#9852c1" @click="signUp = true">Sign Up</span>
            </h5>
          </div>
          <h5
            v-else
            class="mb-9"
            align="center"
            color="#9852c1"
            @click="signUp = false"
          >
            Sign In
          </h5>
        </v-window>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { AUTH_USER } from "@/store/actionTypes";
import "@/styles/Login.scss";

export default {
  name: "Login",
  data() {
    return { signUp: false };
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo;
    },
  },
  methods: {
    onSignIn() {
      const result = this.$store
        .dispatch(AUTH_USER, {
          email: "dsad",
          password: "dfsf",
        })
        .then(() => {
          if (result) {
            this.$router.push("Dialogs");
          }
        });
      console.log(this.userInfo);
    },
    onSignUp() {},
    onForgotPassword() {},
  },
};
</script>
