import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Controle Domótica",
      version: "1.0.0",
      description: "Documentação da API para gerenciar casas, cômodos, dispositivos e cenas",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
  },
  apis: ["./src/routes/*.js"], // arquivos onde você vai colocar os comentários
};

const specs = swaggerJsdoc(options);

export { swaggerUi, specs };