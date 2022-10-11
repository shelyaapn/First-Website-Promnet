const tari = ["Bali", "Lombok", "Labuan Bajo"];
const sastri = ["Surabaya", "Bali", "Lombok"];
const destinationTogether = getSolution(tari, sastri);

function getSolution(array1, array2) {
  return array1.filter(function (item) {
    return array2.indexOf(item) !== -1;
  });
}
function getResults(params) {
  alert("Destination Tari dan Sastri: " + destinationTogether);
}