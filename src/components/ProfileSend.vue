  <template>
  <div class="profile-send">
    <div class="profile-send__content">
      <input class="profile-send__input" v-model="userMessage" type="text" />
      <button class="profile-send__button" @click="addReview">
        Send a message
      </button>
    </div>
  </div>
</template>

  <script>
export default {
  name: "ProfileSend",
  userMessage: "",
  data() {
    return {
      userMessage: "",
    };
  },

  methods: {
    addReview() {
      this.$emit("newReview", this.userMessage);
      this.userMessage = "";
    },
    handleKeyDown(event) {
      if (event.ctrlKey && event.key === "Enter") {
        this.addReview();
      }
    },
  },
  mounted() {
    document.addEventListener("keydown", this.handleKeyDown);
  },
  beforeUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  },
};
</script>