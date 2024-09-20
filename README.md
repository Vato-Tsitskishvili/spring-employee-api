# Employee API Project

In this project I created basic fullstack application for employee management
using Spring Boot and React.

## Used Dependencies
- Spring Boot:
   - Lombock
   - Spring Web
   - Spring Data JPA
   - MySQL Driver
   - Validation
- React
  - Axios
  - React Router DOM
  - Tailwind CSS
  - PostCSS

## How to Build

First you need to set up MySQL container with command

```
docker compose up -d
```
then you need to run

```
mvn spring-boot:run
```

to start the backend and 

```
npm start
```

to start the frontend