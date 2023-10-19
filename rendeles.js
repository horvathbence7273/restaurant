
function calculateTotalPrice() {
  const gomolysajt = parseFloat(document.getElementById("gomolysajt").value) * 2790;
  const jercemell = parseFloat(document.getElementById("jercemell").value) * 3190;
  const borjupaprikas = parseFloat(document.getElementById("borjupaprikas").value) * 4590;
  const libamajaspulykamell = parseFloat(document.getElementById("libamajaspulykamell").value) * 4690;
  const sultoldalas = parseFloat(document.getElementById("sultoldalas").value) * 4190;
  const zoldsegesozragu = parseFloat(document.getElementById("zoldsegesozragu").value) * 5590;

  const totalPrice = gomolysajt + jercemell + borjupaprikas + libamajaspulykamell + sultoldalas + zoldsegesozragu;

  document.getElementById("totalPrice").textContent = totalPrice;
}


const inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach(function (input) {
  input.addEventListener("input", calculateTotalPrice);
});
calculateTotalPrice();

function rendel(){
  
    alert("Köszönjük a rendelést!");
  
}
