import { Request, Response } from 'express'
import { TCreateUserSchema } from '../schema/user.schema'
import { createUser } from '../services/user.service'

export async function createUserHandler(
  req: Request<{}, {}, TCreateUserSchema>,
  res: Response,
) {
  const body = req.body

  try {
    const user = await createUser(body)

    return res.send('Пользователь успешно создан')
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).send('Учетная запись уже существует')
    }

    return res.status(500).send(error)
  }
}
