
$('#button').click(function calculate(){
  console.log('creating variable for user input for text')
  let bill = $("input[type='text']").val();
  console.log(Number(bill));

  function getSelectedValue()
  {
  let selectedValue = $("#dropdown").val();
  let int = parseInt(selectedValue);

  console.log(int);
  console.log('creating total');

  var total = Number(bill) * (Number(int) / 100) + Number(bill);

  console.log("The total is " + total);

  $('#result').text('$'+ total.toFixed(2));
  }
  getSelectedValue();
});
