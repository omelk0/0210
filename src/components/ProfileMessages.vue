<template>
  <div class="profile-messages">
    <div
      class="profile-messages__message"
      v-for="item in messagesList"
      :key="item.id"
    >
      <div class="profile-messages__message-title">
        <h4 class="profile-messages__message-name">{{ item.name }}</h4>
        <span class="profile-messages__message-date">{{ item.date }}</span>
      </div>
      <div class="profile-messages__message-text">
        <span class="profile-messages__triangle"></span>
        <span>{{ item.message }}</span>
      </div>
    </div>
    <ProfileSend @newReview="updateReviewsList" />
  </div>
</template>

<script>
import ProfileSend from "./ProfileSend.vue";
import { mapState } from "vuex";

export default {
  name: "ProfileMessages",
  components: {
    ProfileSend,
  },
  data() {
    return {};
  },
  computed: mapState(["messagesList"]),
  methods: {
    updateReviewsList(text) {
      this.$store.dispatch("getCurrentDate");
      this.$store.dispatch("updateReviewsList", text);
    },
  },
};
</script>