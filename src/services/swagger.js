const swaggerAutogen = require('swagger-autogen')('pt-BR')

const doc = {
    info: {
        version: "1.0.0",
        title: "API HORUS ALUNOS",
        description: "Documentação da API HORUS ALUNOS "
    },
    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile = './src/docs/swagger.yaml';
const endpointFiles = ['./src/routes/aluno.js'];

swaggerAutogen(outputFile, endpointFiles, doc);