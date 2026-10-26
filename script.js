
const API_URL = 'http://localhost:3000/api/recursos';

// Función para consultar los alumnos desde la API REST
async function obtenerAlumnos() {
    const tabla = document.getElementById('tabla-alumnos');

    try {
        // Realizar petición GET al servidor
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // Convertir la respuesta a formato JSON
        const alumnos = await respuesta.json();

        // Limpiar el contenido de la tabla
        tabla.innerHTML = '';

        // Comprobar si existen alumnos registrados
        if (alumnos.length === 0) {
            tabla.innerHTML = `
                <tr>
                    <td colspan="3">No hay alumnos registrados</td>
                </tr>
            `;
            return;
        }

        // Mostrar los alumnos en la tabla
        alumnos.forEach(alumno => {
            const fila = document.createElement('tr');

            [alumno.id, alumno.nombre, alumno.carrera].forEach(valor => {
                const celda = document.createElement('td');
                celda.textContent = valor;
                fila.appendChild(celda);
            });

            tabla.appendChild(fila);
        });

        console.log('Alumnos obtenidos correctamente:', alumnos);

        generarGrafica(alumnos);

    } catch (error) {
        console.error('Error al consultar la API:', error);

        tabla.innerHTML = `
            <tr>
                <td colspan="3">Error al cargar los alumnos</td>
            </tr>
        `;
    }
}

// Ejecutar la consulta al cargar la página
obtenerAlumnos();


function generarGrafica(alumnos) {
    const conteoCarreras = {};

    alumnos.forEach(alumno => {
        const carrera = alumno.carrera;
        conteoCarreras[carrera] = (conteoCarreras[carrera] || 0) + 1;
    });

    const carreras = Object.keys(conteoCarreras);
    const cantidades = Object.values(conteoCarreras);

    const canvas = document.getElementById('grafica-alumnos');

    new Chart(canvas, {
        type: 'bar',
        data: {
            labels: carreras,
            datasets: [{
                label: 'Cantidad de alumnos',
                data: cantidades,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                }
            }
        }
    });
}
