//alert("Vui lòng chọn loại xe");

// function getQuerrySelector(element){
//     return document.querySelector(element);
// }

// var arrTaxi = [];

document.querySelector("#btnTinhTien").onclick = function () {
  var taxi = new Taxi();
  taxi.soKM = document.querySelector("#soKM").value;
  var soKM = Number(taxi.soKM);
  taxi.thoiGianCho = document.querySelector("#thoiGianCho").value;
  var thoiGianCho = Number(taxi.thoiGianCho);
  var type = taxi.typeTaxi();
  var price = 0;
  switch (type) {
    case "uberX":
      {
        taxi.moneyWait = waitX;
        console.log(type);
        if (soKM <= 1) {
          price = thoiGianCho * waitX + km1X;
        } else if (soKM > 1 && soKM <= 20) {
          price = thoiGianCho * waitX + km1X + (soKM - 1) * km1_20X;
        } else if (soKM >= 21) {
          price =
            thoiGianCho * waitX + km1X + 19 * km1_20X + (soKM - 20) * km21X;
        }
      }
      break;
    case "uberSUV":
      {
        taxi.moneyWait = waitSUV;
        console.log(type);
        if (soKM <= 1) {
          price = thoiGianCho * waitSUV + km1SUV;
        } else if (soKM > 1 && soKM <= 20) {
          price = thoiGianCho * waitSUV + km1SUV + (soKM - 1) * km1_20SUV;
        } else if (soKM >= 21) {
          price =
            thoiGianCho * waitSUV +
            km1SUV +
            19 * km1_20SUV +
            (soKM - 20) * km21SUV;
        }
      }
      break;
    case "uberBlack":
      {
        taxi.moneyWait = waitB;
        console.log(type);
        if (soKM <= 1) {
          price = thoiGianCho * waitB + km1B;
        } else if (soKM > 1 && soKM <= 20) {
          price = thoiGianCho * waitB + km1B + (soKM - 1) * km1_20B;
        } else if (soKM >= 21) {
          price =
            thoiGianCho * waitB + km1B + 19 * km1_20B + (soKM - 20) * km21B;
        }
      }
      break;
    default: {
      alert("Vui lòng chọn loại xe");
      return;
    }
  }
  taxi.price = price;
  var divThanhTien = document.querySelector("#divThanhTien");
  var xuatTien = document.querySelector("#xuatTien");
  divThanhTien.style.display = "block";
  xuatTien.innerHTML = taxi.price;

  
  renderInvoice(taxi);
};

function renderInvoice(taxi) {
  var contentHTML = "";
  // var priceType = taxi.getPriceEachType();
  var price = taxi.price;
  var moneyWait = taxi.moneyWait;
  var type = taxi.typeTaxi();
  var soKM = taxi.soKM;
  var thoiGianCho = taxi.thoiGianCho;
  switch(type){
    case "uberX" :{
      if (soKM <= 1) {
        contentHTML += `
                        <tr>
                          <td>${type}</td>
                          <td>${soKM} km</td>
                          <td>${km1X}</td>
                          <td>${km1X}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${thoiGianCho}</td>
                          <td>${moneyWait}</td>
                          <td>${moneyWait * thoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${price}</td>
                        </tr>
                      `;
      } else if (taxi.soKM <= 20) {
        contentHTML += `
                  <tr>
                      <td>${type}</td>
                      <td>1 km</td>
                      <td>${km1X}</td>
                      <td>${km1X}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>${soKM - 1} km</td>
                      <td>${km1_20X}</td>
                      <td>${km1_20X*(soKM - 1)}</td>
                  </tr>
                  <tr>
                      <td>Thời gian chờ</td>
                      <td>${thoiGianCho}</td>
                      <td>${moneyWait}</td>
                      <td>${moneyWait * thoiGianCho}</td>
                  </tr>
                  <tr class="bg-success">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>${price}</td>
                  </tr>
              `;
      } else {
        contentHTML += `
                  <tr>
                      <td>${type}</td>
                      <td>1 km</td>
                      <td>${km1X}</td>
                      <td>${km1X}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>19 km</td>
                      <td>${km1_20X}</td>
                      <td>${km1_20X*19}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>${soKM - 20} km</td>
                      <td>${km21X}</td>
                      <td>${km21X*(soKM - 20)}</td>
                  </tr>
                  <tr>
                      <td>Thời gian chờ</td>
                      <td>${thoiGianCho}</td>
                      <td>${moneyWait}</td>
                      <td>${moneyWait * thoiGianCho}</td>
                  </tr>
                  <tr class="bg-success">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>${price}</td>
                  </tr>
              `;
      }
    }break;

    case "uberSUV" :{
      if (soKM <= 1) {
        contentHTML += `
                        <tr>
                          <td>${type}</td>
                          <td>${soKM} km</td>
                          <td>${km1SUV}</td>
                          <td>${km1SUV}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${thoiGianCho}</td>
                          <td>${moneyWait}</td>
                          <td>${moneyWait * thoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${price}</td>
                        </tr>
                      `;
      } else if (taxi.soKM <= 20) {
        contentHTML += `
                  <tr>
                      <td>${type}</td>
                      <td>1 km</td>
                      <td>${km1SUV}</td>
                      <td>${km1SUV}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>${soKM - 1} km</td>
                      <td>${km1_20SUV}</td>
                      <td>${km1_20SUV*(soKM - 1)}</td>
                  </tr>
                  <tr>
                      <td>Thời gian chờ</td>
                      <td>${thoiGianCho}</td>
                      <td>${moneyWait}</td>
                      <td>${moneyWait * thoiGianCho}</td>
                  </tr>
                  <tr class="bg-success">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>${price}</td>
                  </tr>
              `;
      } else {
        contentHTML += `
                  <tr>
                      <td>${type}</td>
                      <td>1 km</td>
                      <td>${km1SUV}</td>
                      <td>${km1SUV}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>19 km</td>
                      <td>${km1_20SUV}</td>
                      <td>${km1_20SUV*19}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>${soKM - 20} km</td>
                      <td>${km21SUV}</td>
                      <td>${km21SUV*(soKM - 20)}</td>
                  </tr>
                  <tr>
                      <td>Thời gian chờ</td>
                      <td>${thoiGianCho}</td>
                      <td>${moneyWait}</td>
                      <td>${moneyWait * thoiGianCho}</td>
                  </tr>
                  <tr class="bg-success">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>${price}</td>
                  </tr>
              `;
      }
    }break;

    case "uberBlack" :{
      if (soKM <= 1) {
        contentHTML += `
                        <tr>
                          <td>${type}</td>
                          <td>${soKM} km</td>
                          <td>${km1B}</td>
                          <td>${km1B}</td>
                        </tr>
                        <tr>
                          <td>Thời gian chờ</td>
                          <td>${thoiGianCho}</td>
                          <td>${moneyWait}</td>
                          <td>${moneyWait * thoiGianCho}</td>
                        </tr>
                        <tr class="bg-success">
                          <td>Total</td>
                          <td></td>
                          <td></td>
                          <td>${price}</td>
                        </tr>
                      `;
      } else if (taxi.soKM <= 20) {
        contentHTML += `
                  <tr>
                      <td>${type}</td>
                      <td>1 km</td>
                      <td>${km1B}</td>
                      <td>${km1B}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>${soKM - 1} km</td>
                      <td>${km1_20B}</td>
                      <td>${km1_20B*(soKM - 1)}</td>
                  </tr>
                  <tr>
                      <td>Thời gian chờ</td>
                      <td>${thoiGianCho}</td>
                      <td>${moneyWait}</td>
                      <td>${moneyWait * thoiGianCho}</td>
                  </tr>
                  <tr class="bg-success">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>${price}</td>
                  </tr>
              `;
      } else {
        contentHTML += `
                  <tr>
                      <td>${type}</td>
                      <td>1 km</td>
                      <td>${km1B}</td>
                      <td>${km1B}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>19 km</td>
                      <td>${km1_20B}</td>
                      <td>${km1_20B*19}</td>
                  </tr>
                  <tr>
                      <td>${type}</td>
                      <td>${soKM - 20} km</td>
                      <td>${km21B}</td>
                      <td>${km21B*(soKM - 20)}</td>
                  </tr>
                  <tr>
                      <td>Thời gian chờ</td>
                      <td>${thoiGianCho}</td>
                      <td>${moneyWait}</td>
                      <td>${moneyWait * thoiGianCho}</td>
                  </tr>
                  <tr class="bg-success">
                      <td>Total</td>
                      <td></td>
                      <td></td>
                      <td>${price}</td>
                  </tr>
              `;
      }
    }break;
  }
  console.log(contentHTML);
  document.getElementById("tbodyInvoice").innerHTML = contentHTML;
}
