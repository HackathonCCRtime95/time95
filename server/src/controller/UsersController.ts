import {Request, Response} from 'express';
import knex from '../db/conn';

class UsersController {
    async index(request: Request, response: Response){
        const users = await knex('users').select('*');
    
        const serializedItems = users.map(user => {
           return { 
                id: user.id,
                name: user.name,
                phone: user.phone
           };
        });
        return response.json(serializedItems);
    }


    async create(request:Request, response:Response) {
        const {
            name,
            phone
        } = request.body;


        const trx = await knex.transaction();

        const insertedIds = await trx('users').insert({
            name,
            phone,
        });

        await trx.commit();

        return response.json({ success: true });
    }
}

export default UsersController;

