import { Router } from 'express'
import router from '.'
import validateResource from '../middleware/validateResource'
import { createUserSchema } from '../schema/user.schema'
import { createUserHandler } from '../controllers/user.controller'

const user = Router()

router.post('/api/user', validateResource(createUserSchema), createUserHandler)

export default user
