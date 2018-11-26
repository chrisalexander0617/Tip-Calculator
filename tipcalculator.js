document.getElementById('button').onclick = function total(){
  const billTotal = document.getElementById('total').value;  

  var ten = document.getElementById('ten').innerHTML = '$' + (Number(billTotal) + (Number(billTotal) * .1));
  var fifteen = document.getElementById('fifteen').innerHTML = '$' + (Number(billTotal) + (Number(billTotal) * .15));
  var twenty = document.getElementById('twenty').innerHTML = '$' + (Number(billTotal) + (Number(billTotal) * .2));
}
