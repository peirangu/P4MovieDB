<template>
  <footer class="footer bg-dark text-white pt-5 pb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-4 mb-4 mb-md-0">
          <h5 class="mb-4 d-flex align-items-center">
            <img
              src="/assets/images/logo.svg"
              class="logo_icon me-2"
              width="30px"
              height="30"
              alt="MovieDB Logo"
            />
            MovieDB
          </h5>
          <p>
            The ultimate destination for movie lovers to rate, review and
            discover films from around the world.
          </p>
          <div class="social-icons mb-4 d-flex align-items-center">
            <a href="#" class="text-white me-3"
              ><i class="fab fa-facebook-f"></i
            ></a>
            <a href="#" class="text-white me-3"
              ><i class="fab fa-twitter"></i
            ></a>
            <a href="#" class="text-white me-3"
              ><i class="fab fa-instagram"></i
            ></a>
            <a href="#" class="text-white"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="col-md-2 mb-4 mb-md-0">
          <h5 class="mb-4">Explore</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white">Movies</a></li>
            <li class="mb-2"><a href="#" class="text-white">TV Shows</a></li>
            <li class="mb-2"><a href="#" class="text-white">Top Rated</a></li>
            <li class="mb-2"><a href="#" class="text-white">Coming Soon</a></li>
          </ul>
        </div>

        <div class="col-md-2 mb-4 mb-md-0">
          <h5 class="mb-4">Genres</h5>
          <ul class="list-unstyled">
            <li class="mb-2"><a href="#" class="text-white">Action</a></li>
            <li class="mb-2"><a href="#" class="text-white">Comedy</a></li>
            <li class="mb-2"><a href="#" class="text-white">Drama</a></li>
            <li class="mb-2"><a href="#" class="text-white">Sci-Fi</a></li>
          </ul>
        </div>

        <div class="col-md-4">
          <h5 class="mb-4">Newsletter</h5>
          <p>
            Subscribe to our newsletter for the latest movie news and
            recommendations.
          </p>
          <div class="mb-3">
            <!-- Name input field -->
            <input
              type="text"
              class="form-control mb-2"
              :class="{ 'focus-border': isNameTyping }"
              placeholder="Your name"
              v-model="name"
              @input="checkName"
              @blur="stopNameTyping"
            />
          </div>
          <div class="mb-3">
            <!-- Email input field -->
            <input
              type="email"
              class="form-control"
              :class="{ 'focus-border': isTyping }"
              placeholder="Your email"
              v-model="email"
              @blur="validateEmail"
              @input="checkEmail"
              @change="validateEmail"
            />
          </div>
          <button
            class="btn btn-primary"
            type="button"
            style="
              background: linear-gradient(to right, #f59e0b, #ec4899);
              border: none;
            "
            @click="validateForm"
          >
            Subscribe
          </button>
          <p v-if="nameError" class="text-danger">{{ nameError }}</p>
          <p v-if="emailError" class="text-danger">{{ emailError }}</p>
          <p v-if="emailChecklist" class="text-success">{{ emailChecklist }}</p>
        </div>
      </div>
    </div>

    <hr class="mt-5 mb-4" />

    <div class="row">
      <div class="col-md-6 text-center text-md-start">
        <p class="mb-0">&copy; 2025 MovieDB. All rights reserved.</p>
      </div>
      <div
        class="col-md-6 text-center text-md-end d-flex justify-content-center justify-content-md-end"
      >
        <a href="#" class="text-white me-3">Privacy Policy</a>
        <a href="#" class="text-white me-3">Terms of Service</a>
        <a href="#" class="text-white">Contact Us</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const email = ref("");
const nameError = ref("");
const emailError = ref("");
const emailChecklist = ref("");
const isTyping = ref(false);
const isNameTyping = ref(false);

const validateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = "Please enter a valid email address.";
    emailChecklist.value = "";
  } else {
    emailError.value = "";
    emailChecklist.value = "✔ Email format looks good!";
  }
  isTyping.value = false;
};

const checkEmail = () => {
  if (email.value) {
    emailChecklist.value = "✔ Typing...";
    emailError.value = ""; // Clear email error while typing
    isTyping.value = true; // Set typing state
  } else {
    emailChecklist.value = "";
    isTyping.value = false; // Reset typing state
  }
};

const checkName = () => {
  if (name.value) {
    nameError.value = ""; // Clear name error while typing
    isNameTyping.value = true; // Set typing state for name
  } else {
    isNameTyping.value = false; // Reset typing state for name
  }
};

const stopNameTyping = () => {
  isNameTyping.value = false; // Stop typing state for name on blur
};

const validateForm = () => {
  nameError.value = name.value.trim() === "" ? "Name cannot be empty." : "";
  validateEmail();
};
</script>

<style scoped>
.footer a {
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

.text-danger {
  padding-top: 1rem;
  color: #dc3545;
}

.text-success {
  padding-top: 1rem;
  color: #28a745;
}

.focus-border {
  border: 3px solid #f59e0b !important;
  box-shadow: 0 0 5px rgba(245, 158, 11, 0.5);
  outline: none;
}
</style>
