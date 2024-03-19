const menu = document.getElementById("btn-abrir-menu");
        menu.addEventListener('click', () => {
        console.log('Clic en el botón'); 
        document.getElementById('contenedor-menu').classList.toggle('active');
        });