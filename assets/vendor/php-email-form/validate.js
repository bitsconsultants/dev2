jQuery(document).ready(function($) {
  "use strict";

  //Contact
  $('form.php-email-form').submit(function() {

    document.getElementById("name").value = "\n  " + 
    "name = " + document.getElementById("name").value + "\n  " + 
    "subject = " + document.getElementById("subject").value + "\n  " + 
    "message = " + document.getElementById("message").value + "\n  " ;
    
    var contactform =  document.getElementById('myform');
    contactform.action ="https://formspree.io/f/xnqoovdd";
  });
  //Subscribe
  $('form.php-subscribe-form').submit(function() {    
    var contactform =  document.getElementById('subscribe');
    contactform.action ="https://formspree.io/f/xnqoovdd";
  });
});



  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("vat").href = "#vat2";   //change url
    document.getElementById("vat").target = "#vat2";     //change target
    
    document.getElementById("audit").href = "#audit2";   //change url
    document.getElementById("audit").target = "#audit2";     //change target
   
    document.getElementById("financials").href = "#financials2";   //change url
    document.getElementById("financials").target = "#financials2";     //change target
    
    document.getElementById("payroll").href = "#payroll2";   //change url
    document.getElementById("payroll").target = "#payroll2";     //change target
   
    document.getElementById("internal").href = "#internal2";   //change url
    document.getElementById("internal").target = "#internal2";     //change target
    
    document.getElementById("pro").href = "#pro2";   //change url
    document.getElementById("pro").target = "#pro2";     //change target
   
    document.getElementById("business").href = "#business2";   //change url
    document.getElementById("business").target = "#business2";     //change target
        
    document.getElementById("software").href = "#software2";   //change url
    document.getElementById("software").target = "#software2";     //change target
   
    document.getElementById("others").href = "#others2";   //change url
    document.getElementById("others").target = "#others2";     //change target    
}