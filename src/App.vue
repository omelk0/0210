<template>
  <div id="app">
    <div class="page">
      <ProfileHeader />
      <ProfileServices />
      <ProfileReviews />
      <ProfileMessages />
    </div>
  </div>
</template>

<script>
import ProfileHeader from "./components/ProfileHeader.vue";
import ProfileServices from "./components/ProfileServices.vue";
import ProfileReviews from "./components/ProfileReviews.vue";
import ProfileMessages from "./components/ProfileMessages.vue";

export default {
  name: "App",
  components: {
    ProfileHeader,
    ProfileServices,
    ProfileReviews,
    ProfileMessages,
  },
};
</script>
