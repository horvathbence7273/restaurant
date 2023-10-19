function createBill() {


    var name = document.getElementById('name');
    var address = document.getElementById('address');
    var email = document.getElementById('address');
    var mobile = document.getElementById('postcode');
  
    if (name.value == "") {
      alert("A 'Teljes név' mezőt ne hagyd üresen!");
      return false;
    }
  
    if (address.value == "") {
      alert("A 'Cím' mezőt ne hagyd üresen!");
      return false;
    }
    if (email.value == "") {
      alert("Az 'E-mail' mezőt ne hagyd üresen!");
      return false;
    }
    if (mobile.value == "") {
      alert("A 'Telefonszám' mezőt ne hagyd üresen!");
      return false;
    }
}
