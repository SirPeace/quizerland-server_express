import { Request, Response } from 'express'
import { TCreateUserSchema } from '../schema/user.schema'

export async function createUserHandler(
  req: Request<{}, {}, TCreateUserSchema>,
  res: Response,
) {
  const body = req.body
}
