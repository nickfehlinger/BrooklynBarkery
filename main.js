var $form = $('form#contact'),
    url = 'https://script.google.com/macros/s/AKfycbxi5trGmw7gjYUKsojBcfkQWymA5GDJNeFs1S9PEC3urZ6-q3k/exec',
    required = $("#required")[0];
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$('#submitForm').on('click', function(e) {
  e.preventDefault();
  var email = $("#email")[0].value;
  if(validateEmail(email)){
    var jqxhr = $.ajax({
      url: url,
      method: "GET",
      dataType: "json",
      data: $form.serializeObject()
    })
  $form[0].style.display = "none";
  $('#thankYou')[0].classList.add("success");
  }else{
    required.classList.add("empty");
  }
})