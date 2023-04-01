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
    return {
      currentUserName: "Oleksandr Melnychek",
      currentDate: "",
    };
  },
  computed: mapState(["messagesList"]),
  methods: {
    getCurrentDate() {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const date = new Date();
      const day = date.getDate();
      const month = months[date.getMonth()];
      const year = date.getFullYear();
      this.currentDate = `${day} ${month} ${year}`;
    },
    updateReviewsList(text) {
      this.getCurrentDate();
      this.$store.dispatch("updateReviewsList", text);
    },
  },
};
</script>