## Completar los siguientes campos es esencial para establecer la conexión con la base de datos PostgreSQL:

| Variables      |
|----------------|
| PORT           |
| DB_USER        |
| DB_PASSWORD    |
| DB_HOST        |
| DB_PORT        |
| DB_NAME        |


Por favor, asegúrate de proporcionar la información correcta en cada uno de estos campos para garantizar una conexión exitosa con la base de datos.


## Enpoints
Dentro de la carpeta "http" encontrarás los endpoints disponibles para su uso en la aplicación.


## Esquema de Base de Datos

Este es un esquema de base de datos representado en formato de diagrama entidad-relación (ER) para las tablas Driver, Order y Vehicle.

## Tabla Driver
    +------------------------+
    |        Driver          |
    +------------------------+
    | id (PK)                |
    | lastname               |
    | firstname              |
    | document               |
    | phone                  |
    | street                 |
    +------------------------+


## Tabla Order
    +------------------------+
    |       Order            |
    +------------------------+
    | id (PK)                |
    | type_order             |
    | street                 |
    | driver (FK)            | (1-n)
    +------------------------+

## Tabla Vehicle
    +------------------------+
    |       Vehicle          |
    +------------------------+
    | id (PK)                |
    | model                  |
    | plate                  |
    | capacity               |
    | driver (FK)            | (1-n)
    +------------------------+




## Relaciones
- La tabla Order tiene una relación muchos a uno con la tabla Driver a través de la columna driver.
- La tabla Vehicle tiene una relación muchos a uno con la tabla Driver a través de la columna driver.


## Comentarios
En esta situación, no se ha empleado la tabla de pedidos, ya que en la sección de "Descripción de requisitos" de documento pdf no se hace referencia a su uso y no se percibió como necesario su empleo.