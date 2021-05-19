(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init('user_hatpoOwUECb6DEoEizjhj');
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
       
        // these IDs from the previous steps
        emailjs.sendForm('service_mb71gzk', 'template_7my6js8', this)
            .then(function() {
                //console.log('SUCCESS!');
                alert("Su mensaje ha sido enviado. ¡Gracias!");
            }, function(error) {
                alert("Mensaje no enviado, ocurrio un error con el servicio.");
                //console.log('FAILED...', error);
            });
    });
}