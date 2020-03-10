onclick=document.getElementById('myimage')
onclick="myFunction()"
onclick="myFunction2()"
onclick="myFunction4()"
onclick="getElementById('demo3').innerHTML=Date()"
onclick=document.getElementById('myimage')
<script>
function myFunction() {
  document.getElementById("demo").style.color="red";
}
function myFunction2() {
  document.getElementById("demo2").style.backgroundColor="green"
}
function myFunction4() {
  document.getElementsByTagName("BODY")[0].style.backgroundColor = "blue";
}