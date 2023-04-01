<template>
  <div class="profile-services">
    <h2>Services</h2>
    <div class="profile-services__statistics">
      <div class="profile-services__statistics-item">
        <div class="profile-services__statistics-name">
          <span
            class="profile-services__statistics-line profile-services__statistics-line--1"
          >
            <p class="profile-services__statistics-title">
              Manual tour booking
            </p>
          </span>
        </div>
        <div class="profile-services__statistics-value">
          <span class="profile-services__statistics-number">{{
            this.manualTourBookingAmount
          }}</span>
        </div>
      </div>
      <div class="profile-services__statistics-item">
        <div class="profile-services__statistics-name">
          <span
            class="profile-services__statistics-line profile-services__statistics-line--2"
          >
            <p class="profile-services__statistics-title">Package tours</p>
          </span>
        </div>
        <div class="profile-services__statistics-value">
          <span class="profile-services__statistics-number">{{
            this.packageToursAmount
          }}</span>
        </div>
      </div>
      <div class="profile-services__statistics-item">
        <div class="profile-services__statistics-name">
          <span
            class="profile-services__statistics-line profile-services__statistics-line--3"
          >
            <p class="profile-services__statistics-title">Hotels</p>
          </span>
        </div>
        <div class="profile-services__statistics-value">
          <span class="profile-services__statistics-number">{{
            this.hotelsAmount
          }}</span>
        </div>
      </div>
    </div>
    <div class="profile-services__total">
      <span class="profile-services__total-title">Total</span>
      <span class="profile-services__total-number">{{ totalAmount }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileServices",
  data() {
    return {
      manualTourBookingAmount: 11,
      packageToursAmount: 3,
      hotelsAmount: 1,
      packageToursPercentage: "",
      hotelsAmountPercentage: "",
    };
  },
  computed: {
    totalAmount() {
      return (
        this.manualTourBookingAmount +
        this.packageToursAmount +
        this.hotelsAmount
      );
    },
  },
  methods: {
    calculatePercentage(baseNum, percentageNum) {
      return (percentageNum / baseNum) * 100;
    },
  },
  mounted() {
    let firstStatisticLine = document.querySelector(
      ".profile-services__statistics-line--1"
    );

    let secondStatisticLine = document.querySelector(
      ".profile-services__statistics-line--2"
    );
    let thirdStatisticLine = document.querySelector(
      ".profile-services__statistics-line--3"
    );

    let biggestAmount = Math.max(
      this.manualTourBookingAmount,
      this.packageToursAmount,
      this.hotelsAmount
    );

    switch (true) {
      case biggestAmount === this.manualTourBookingAmount:
        firstStatisticLine.style.width = "100%";
        firstStatisticLine.style.backgroundColor = "#B1E19B";
        secondStatisticLine.style.width = `${
          (this.packageToursAmount / biggestAmount) * 100
        }%`;
        thirdStatisticLine.style.width = `${
          (this.hotelsAmount / biggestAmount) * 100
        }%`;
        break;
      case biggestAmount === this.packageToursAmount:
        secondStatisticLine.style.width = "100%";
        secondStatisticLine.style.backgroundColor = "#B1E19B";
        firstStatisticLine.style.width = `${
          (this.manualTourBookingAmount / biggestAmount) * 100
        }%`;
        thirdStatisticLine.style.width = `${
          (this.hotelsAmount / biggestAmount) * 100
        }%`;
        break;
      case biggestAmount === this.hotelsAmount:
        thirdStatisticLine.style.width = "100%";
        thirdStatisticLine.style.backgroundColor = "#B1E19B";
        firstStatisticLine.style.width = `${
          (this.manualTourBookingAmount / biggestAmount) * 100
        }%`;
        secondStatisticLine.style.width = `${
          (this.packageToursAmount / biggestAmount) * 100
        }%`;
        break;
      default:
      // handle unexpected values
    }
  },
};
</script>