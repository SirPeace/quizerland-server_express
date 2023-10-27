import { Router } from 'express'
import router from '.'

const user = Router()

router.post('/api/user', (req, res) => res.sendStatus(200))

export default user
