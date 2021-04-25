import { Request, Response } from 'express';
import { IUserAttributes, User } from '../models/user';

export class UserController {

    constructor() { }

    readAll(req: Request, res: Response) {
        User.findAll()
            .then((users: IUserAttributes[]) => {
                res.json(users);
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    read(req: Request, res: Response) {
        User.findByPk(req.params.id)
            .then((user: IUserAttributes | null) => {
                if (user) {
                    res.json(user);
                } else {
                    res.status(204).send();
                }
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    create(req: Request, res: Response) {
        User.create(req.body)
            .then((user: IUserAttributes) => {
                res.json(user);
            })
            .catch((err: any) => {
                res.json(err);
            });
    }

    update(req: Request, res: Response) {
        User.update(req.body, {
            fields: ['age', 'lastname', 'name'], //Object.keys(req.body)
            where: { id: req.params.id }
        }).then((affectedRows: [number, IUserAttributes[]]) => {
            res.json({
                affectedRows: Number(affectedRows)
            });
        }).catch((err: any) => {
            res.json(err);
        })
    }

    delete(req: Request, res: Response) {
        User.destroy({
            where: { id: req.params.id }
        })
            .then((removedRows: number) => {
                res.json({
                    removedRows: removedRows
                });
            }).catch((err: any) => {
                res.json(err);
            })

    }
}