window.onload = initAll;

var xyz;
function initAll(){
  xyz=document.getElementById('loading');
  xyz.onclick = AddCart;

}
function AddCart(){
    var xhttp = new XMLHttpRequest();
    var url  = "home2"
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("loading").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
  // alert(url)
}