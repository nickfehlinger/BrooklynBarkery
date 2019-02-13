var $form = $('form#contact'),
    url = 'https://script.google.com/macros/s/AKfycbxi5trGmw7gjYUKsojBcfkQWymA5GDJNeFs1S9PEC3urZ6-q3k/exec'

$('#submitForm').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})