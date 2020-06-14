import {Request, Response} from 'express';
import knex from '../db/conn';

class UsersController {
    async index(request: Request, response: Response){
        const {id} = request.params;

        const users = await knex('users')
            .where('id',id)
            .select('users.*')
        return response.json({users});
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

