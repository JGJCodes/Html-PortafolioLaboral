(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_hatpoOwUECb6DEoEizjhj');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        //this.contact_number.value = Math.random() * 100000 | 0;
       
        // these IDs from the previous steps
        emailjs.sendForm('service_mb71gzk', 'template_7my6js8', this)
            .then(function() {
                //console.log('SUCCESS!');
                prompt("Su mensaje ha sido enviado. ¡Gracias!");
            }, function(error) {
                prompt("Mensaje no enviado, ocurrio un error con el servicio.");
                //console.log('FAILED...', error);
            });
    });
}