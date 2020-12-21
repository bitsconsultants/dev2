jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.php-email-form').submit(function() {

    document.getElementById("message").value += "\n" + 
    "name = " + document.getElementById("name").value + "\n" + 
    "subject = " + document.getElementById("subject").value + "\n" + 
    "message = " + document.getElementById("message").value + "\n" ;
    
    var contactform =  document.getElementById('myform');
    contactform.action ="//formspree.io/bitsconsultantsco@gmail.com";
  });
  //Subscribe
  $('form.php-subscribe-form').submit(function() {    
    var contactform =  document.getElementById('subscribe');
    contactform.action ="//formspree.io/bitsconsultantsco@gmail.com";
  });

});
