import { Request, Response } from 'express';
import knex from '../db/conn';

class PointsController {
    async index(request: Request, response: Response) {
        const { star } = request.query;

        const parsedstars = String(star)
            .split(',')
            .map(start => Number(start.trim()))

        const points = await knex('points')
            .join('point_stars', 'points.id', '=', 'point_stars.point_id')
            .whereIn('points_stars.star_id', parsedstars)
            .distinct()
            .select('points.*')


        return response.json({ points });
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point) {
            return response.status(400).json({ message: 'Point not found' });
        }

        const starts = await knex('stars')
            .join('points_stars', 'starts.id', '=', 'points_stars.start_id')
            .where('points_stars.point_id', id)
            .select('starts.star');

        return response.json({ point, starts });
    }

    async create(request: Request, response: Response) {
        const {
            name,
            latitude,
            longitude,
            star
        } = request.body;


        const trx = await knex.transaction();

        const insertedIds = await trx('points').insert({
            name,
            latitude,
            longitude,
            star
        });

        const point_id = insertedIds[0];

        const pointStars = star.map((star_id: number) => {
            return {
                star_id,
                point_id

            }
        })

        await trx('point_stars').insert(pointStars);

        await trx.commit();

        return response.json({ success: true });
    }
}

export default PointsController;