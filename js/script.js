const posters = document.getElementsByClassName('poster'); // Obtiene todos los elementos con la clase 'poster'

const btnBiblioteca = document.getElementById('btn_biblio');
const btnBomberos = document.getElementById('btn_bom');
const btnStock = document.getElementById('stock');

Array.from(posters).forEach(poster => { // Itera sobre cada elemento con la clase 'poster'
    const height = poster.clientHeight;
    const width = poster.clientWidth;

    poster.addEventListener('mousemove', (evt) => {
        const {layerX, layerY} = evt;

        const yRotation = (
            (layerX - width / 2) / width
        ) * 20;

        const xRotation = (
            (layerY - height / 2) / height
        ) * 20;

        const string = `
        perspective(500px)
        scale(1.1)
        rotateX(${xRotation}deg)
        rotateY(${yRotation}deg)`;

        poster.style.transform = string;
    });
});


btnBiblioteca.addEventListener('click', function() {
    window.open('https://github.com/Nahuelgnz96/gestor', '_blank');
});

btnBomberos.addEventListener('click', function() {
    window.open('https://github.com/Nahuelgnz96/bomberosCoronda', '_blank');
});

btnStock.addEventListener('click', function() {
    window.open('https://github.com/Nahuelgnz96/SistemaDeStock', '_blank');
});



const btnEnviar = document.getElementById('enviar');
btnEnviar.addEventListener('click', function() {
    const formulario = document.getElementById('formulario');
    const cargando = document.getElementById('cargando');
    /* const exito = document.getElementById('exito'); */
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("message").value;
    const asunto = document.getElementById("asunto").value;

    // Verificar si los campos están rellenados
    if (nombre === "" || email === "" || mensaje === "" || asunto === "") {
        alert("Por favor, completa todos los campos.");
        return;
    } 

    // Ocultar formulario y mostrar mensaje de carga
    formulario.style.display = 'none';
    cargando.style.display = 'block';

    // Simular envío de formulario
    setTimeout(function() {
        // Mostrar mensaje de éxito
        cargando.style.display = 'none';
        exito.style.display = 'block';

        // Restaurar formulario después de 3 segundos
        setTimeout(function() {
            exito.style.display = 'none';
            formulario.style.display = 'block';
        }, 3000);
    }, 2000); // Simulación de tiempo de envío del formulario
});

window.addEventListener('scroll', function() {
    const nahuel = document.getElementById('nahuel');
    const navbarBrand = document.getElementById('navegador');
    const espacio = document.getElementById('espacio');

    if (window.scrollY > 100) {
        espacio.style.display = "none";
        nahuel.style.display = "none";
        navbarBrand.style.display = 'inline-block';
    } else {
        nahuel.style.display = "inline-block";
        navbarBrand.style.display = 'none';
        espacio.style.display = "inline-block";
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section');
    const offset = 100; // Ajusta este valor según sea necesario
    function setActiveLink() {
        const scrollPosition = window.scrollY + offset;;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);

                links.forEach(link => link.classList.remove('active'));
                correspondingLink.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
});
