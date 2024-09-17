import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutritionService } from '../services/CreateNutritionService';


export interface DataProps {
    name: string, 
    weight: string, 
    height: string, 
    age: string, 
    gender: string, 
    objective: string, 
    level: string
}

// Quando alguem chamar o controller
class CreateNutritionController {
    async handle(request: FastifyRequest, reply: FastifyReply) { // 1. recebe a requisicao
        const {name, weight, height, age, gender, objective, level} = request.body as DataProps; // pegar do corpo da req alguns dados

        const createNutrition = new CreateNutritionService(); // instanciando classe; 2. instancia o servico
        
        const nutrition = await createNutrition.execute({
            name,
            weight,
            height,
            age,
            gender,
            objective,
            level,
        }); // 3. e eexecuta o metodo execute dentro (que vai comunicar com a api db)
        
        reply.send(nutrition) // devolvendo para o usuario
    }
}

export { CreateNutritionController }