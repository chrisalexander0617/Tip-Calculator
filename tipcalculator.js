document.getElementById('button').onclick = function total(){
  const billTotal = document.getElementById('total').value;  

  var rten = (Number(billTotal) + (Number(billTotal) * .1));
  var rfifteen = (Number(billTotal) + (Number(billTotal) * .15));
  var rtwenty = (Number(billTotal) + (Number(billTotal) * .2));
  
  var ten = document.getElementById('ten').innerHTML = rten.toFixed(2);
  var fifteen = document.getElementById('fifteen').innerHTML = rfifteen.toFixed(2);
  var twenty = document.getElementById('twenty').innerHTML = rtwenty.toFixed(2);
}




