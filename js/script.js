function showSection(id) {
    document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));

    const section = document.getElementById(id);
    section.classList.remove('hidden');

    // Limpiar todos los inputs y resultados dentro de la sección
    section.querySelectorAll('input').forEach(input => input.value = '');
    section.querySelectorAll('p').forEach(p => p.innerText = '');
}


// Problema 1
function calcularEntrada() {
    const edad = parseInt(document.getElementById('edad').value);
    if (isNaN(edad) || edad < 0 || edad > 110) {
        document.getElementById('resultado1').innerText = "Ingresa una edad válida (0-110)";
        return;
    }

    let costo;
    if (edad >= 1 && edad < 4) costo = 0;
    else if (edad >= 4 && edad <= 8) costo = 2;
    else if (edad >= 9 && edad <= 16) costo = 5;
    else if (edad >= 17 && edad <= 35) costo = 7;
    else if (edad > 35) costo = 10;

    document.getElementById('resultado1').innerText = `Costo de la entrada: ${costo === 0 ? 'Gratis' : '$' + costo}`;
}

// Problema 2
function categoriaEmpleado() {
    const codigo = document.getElementById('codigo').value;
    if (codigo.length !== 3 || isNaN(codigo)) {
        document.getElementById('resultado2').innerText = 'Código inválido';
        return;
    }
    const digitos = codigo.split('').map(Number);
    const pares = digitos.filter(d => d % 2 === 0).length;

    let categoria;
    if (pares === 3) categoria = "Director General";
    else if (pares === 2) categoria = "Directivo";
    else if (pares === 1) categoria = "Staff";
    else categoria = "Seguridad";

    document.getElementById('resultado2').innerText = `Categoría: ${categoria}`;
}

// Problema 3
function calcularPendiente() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    if (isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
        document.getElementById('resultado3').innerText = "Ingresa todos los valores";
        return;
    }

    if (x2 - x1 === 0) {
        document.getElementById('resultado3').innerText = 'La pendiente es indefinida (recta vertical)';
    } else {
        const m = (y2 - y1) / (x2 - x1);
        document.getElementById('resultado3').innerText = `Pendiente de la recta: ${m}`;
    }
}

// Problema 4
function estadoClima() {
    const temp = parseFloat(document.getElementById('temperatura').value);
    const hum = parseFloat(document.getElementById('humedad').value);

    if (isNaN(temp) || isNaN(hum)) {
        document.getElementById('resultado4').innerText = "Ingresa temperatura y humedad válidas";
        return;
    }

    let mensaje = '';
    if (temp < 10) mensaje = "Clima frío";
    else if (temp >= 10 && temp <= 25) mensaje = (hum < 60) ? "Clima templado y seco" : "Clima templado y húmedo";
    else if (temp >= 26 && temp <= 35) mensaje = "Clima cálido";
    else if (temp > 35) mensaje = "Clima caluroso extremo, mantente hidratado";
    else mensaje = "Valores fuera de rango, verifica los datos";

    document.getElementById('resultado4').innerText = mensaje;
}

// Cargar navbar
function cargarNavbar() {
    fetch('navbar.html')
        .then(res => res.ok ? res.text() : Promise.reject(`Error: ${res.status}`))
        .then(data => document.getElementById("navbar-container").innerHTML = data)
        .catch(err => console.error("Error al cargar el navbar:", err));
}

window.addEventListener('DOMContentLoaded', () => {
    cargarNavbar();
    showSection('problema1'); // mostrar Problema 1 al inicio
});
