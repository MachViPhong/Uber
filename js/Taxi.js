//constant value
const km1X = 8000;
const km1SUV = 9000;
const km1B = 10000;

const km1_20X = 12000;
const km1_20SUV = 14000;
const km1_20B = 16000;

const km21X = 10000;
const km21SUV = 12000;
const km21B = 14000;

const waitX = 2000;
const waitSUV = 3000;
const waitB = 4000;

function Taxi() {
  this.soKM = 0,
    this.thoiGianCho = 0,
    this.price = 0,
    this.moneyType = 0,
    this.moneyWait = 0,
    this.typeTaxi = function () {
      var type;
      var uberX = document.querySelector("#uberX").checked;
      var uberSUV = document.querySelector("#uberSUV").checked;
      var uberBlack = document.querySelector("#uberBlack").checked;
      if (uberX) {
        type = "uberX";
      } else if (uberSUV) {
        type = "uberSUV";
      } else if (uberBlack) {
        type = "uberBlack";
      }
      return type;
    };

//   this.getPriceEachType = function () {
//     var type = this.typeTaxi();
//     var soKM = this.soKM;
//     if (type === "uberX") {
//       if (soKM <= 1) {
//         return km1X;
//       } else if (soKM > 1 && soKM <= 20) {
//         return km1_20X;
//       } else if (soKM >= 21) {
//         return km21X;
//       }
//     }
//     else if (type === "uberSUV") {
//       if (soKM <= 1) {
//         return km1SUV;
//       } else if (soKM > 1 && soKM <= 20) {
//         return km1_20SUV;
//       } else if (soKM >= 21) {
//         return km21SUV;
//       }
//     }
//     else if (type === "uberB") {
//       if (soKM <= 1) {
//         return km1B;
//       } else if (soKM > 1 && soKM <= 20) {
//         return km1_20B;
//       } else if (soKM >= 21) {
//         return km21B;
//       }
//     }
//   };
}
