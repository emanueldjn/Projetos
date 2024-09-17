// criando backand para consumir a api rest com fastify
import Fastify from "fastify";
import cors from '@fastify/cors';
import dotenv from 'dotenv';
import { routes } from './routes'

const app = Fastify({ logger: true }) // inicializando o fastify
dotenv.config(); // inicializar se tiver uma variavel de ambiente


// caso tenha erro na API = funcao anomima para mostrar erro, request da requisição se quiser acessar e reply devolver pro front
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message }) // erro 400 e devolvendo mensagem de erro
})

// incializando servidor
const start = async () => {
    app.register(cors); // qualquer url para pode fazer requisição 
    app.register(routes);

    try {
        await app.listen({ port: 3333, host: "0.0.0.0" })
        console.log(`servidor rodando no http://localhost:3333`)
    } catch (err) {
        console.log(err);
    }
}

start();