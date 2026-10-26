
# Panel de Administración de Alumnos

## Descripción del proyecto

Este proyecto consiste en una interfaz web que permite visualizar los registros de alumnos almacenados en una base de datos MySQL mediante una API REST desarrollada con Node.js y Express.

La información se presenta en una tabla y en una gráfica que muestra la cantidad de alumnos registrados por carrera.

## Objetivo

Desarrollar una interfaz web que consuma una API REST para consultar y representar información almacenada en una base de datos.

## Tecnologías utilizadas

- HTML5: estructura de la interfaz.
- CSS3: diseño y presentación visual.
- JavaScript: consultas a la API REST mediante fetch().
- Chart.js: generación de gráficas.
- Node.js y Express: desarrollo de la API REST.
- MySQL: almacenamiento de los registros.

## Funcionamiento

1. El usuario abre el panel web.
2. JavaScript realiza una petición GET a la API REST.
3. La API consulta los registros almacenados en MySQL.
4. Los datos recibidos se muestran en una tabla.
5. Chart.js genera una gráfica con la cantidad de alumnos por carrera.

## Ejecución del proyecto

1. Iniciar MySQL.
2. Ejecutar el servidor backend en el puerto 3000.
3. Abrir la carpeta cliente-frontend en Visual Studio Code.
4. Ejecutar index.html mediante Live Server.
5. Verificar que se visualicen los alumnos y la gráfica.

## Endpoint utilizado

GET http://localhost:3000/api/recursos

## Repositorios

Frontend:
https://github.com/Frankc-git/cliente-frontend

## Resultados

Se logró establecer la comunicación entre el frontend y la API REST, permitiendo visualizar los registros de alumnos y generar una gráfica de distribución por carrera.
