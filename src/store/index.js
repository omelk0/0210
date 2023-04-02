import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUserName: "Oleksandr Melnychek",
    currentDate: "",
    messagesList: [
      {
        name: "Samuel Jackson",
        date: "13 Apr 2022",
        message: "Hey Eva! You're cool. Nice pic!",
        id: 0,
      },
      {
        name: "Angela Deimon",
        date: "10 Apr 2022",
        message:
          "Thanks for your services! We really liked the ocean view room. We hope to cooperate in the near future. We are sure you will do everything to make our next holiday fantastic.",
        id: 1,
      },
      {
        name: "Ronald Harris",
        date: "8 Apr 2022",
        message:
          "Eva, hello! There is such a question: How can I contact you if I am abroad in roaming?",
        id: 2,
      },
    ],
  },
  mutations: {
    addReview(state, newReview) {
      state.messagesList.push(newReview);
    },
    getDate(state) {
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
      state.currentDate = `${day} ${month} ${year}`;
    }
  },
  actions: {
    getCurrentDate({ commit }) {
      commit('getDate');
    },
    updateReviewsList({ commit, state }, text) {
      if (!text || text.length === 0) {
        return;
      }
      let newMessage = {
        name: state.currentUserName,
        date: state.currentDate,
        message: text,
        id: state.messagesList.length,
      };
      commit('addReview', newMessage);
    }
  },
})
