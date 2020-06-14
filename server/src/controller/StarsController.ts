import {Request, Response} from 'express';
import knex from '../db/conn';

class StarsController {
    async index(request:Request, response:Response){
        const stars = await knex('stars').select('*');
    
        const serializedItems = stars.map(star => {
           return { 
                id: star.id,
                start: star.star
           };
        });
        return response.json(serializedItems);
    }
}

export default StarsController;