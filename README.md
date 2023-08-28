# aquino_alejandro-trabajo_practico_1-backend

# CRUD de Temática Usuario-Post-Comentario

Este proyecto implementa un CRUD (Crear, Leer, Actualizar, Borrar) que gestiona usuarios, posts y comentarios utilizando las tecnologías Node.js, Express, Sequelize y una base de datos SQL. No incluye vistas, por lo que todas las interacciones se realizan a través de herramientas como Postman o ThunderClient. El objetivo principal es proporcionar una implementación básica de gestión de usuarios, posts y comentarios.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado Node.js en tu máquina.


## Instalación
1. Clona este repositorio en tu máquina local:


git clone https://github.com/aquinogonzalo/aquino_alejandro-trabajo_practico_1-backend.git


2. Navega hasta el directorio del proyecto.


3. Instala las dependencias utilizando npm (Node Package Manager):
npm install


4. Crea un archivo `.env` en la raíz del proyecto con la siguiente configuración(los valores son a modo de ejemplo):
PORT=3000
DB_NAME=tu_nombre_de_base_de_datos
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_HOST=tu_host
DB_PORT=tu_puerto
DB_DIALECT=sequelize_dialect


5. Inicia el servidor utilizando Nodemon para que se reinicie automáticamente con los cambios:
npm run dev


## Uso

### Usuarios

- `POST api/usuarios`: Crea un nuevo usuario. Envía un JSON en el cuerpo de la solicitud con los datos del usuario.

### Posts

- `GET api/posts`: Obtiene todos los posts.
- `GET api/posts/:id`: Obtiene un post específico por su ID.
- `POST api/posts`: Crea un nuevo post. Envía un JSON en el cuerpo de la solicitud con los datos del post.
- `PUT api/posts/:id`: Actualiza un post existente por su ID. Envía un JSON en el cuerpo de la solicitud con los datos actualizados.
- `DELETE api/posts/:id`: Borra un post existente por su ID.

### Comentarios

- `POST api/posts/:id/comentarios`: Crea un nuevo comentario en un post específico. Envía un JSON en el cuerpo de la solicitud con los datos del comentario.
- `DELETE api/comentarios/:id`: Borra un comentario existente por su ID.
