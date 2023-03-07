import { Request, Response } from "express";
import { createUser } from "../service/user.service";


export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        return res.send(user);
      } catch (e: any) {
        console.error(e);
        return res.status(503).send(e.message);
      }
}