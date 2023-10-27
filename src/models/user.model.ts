import {
  Severity,
  getModelForClass,
  modelOptions,
  prop,
  pre,
  DocumentType,
} from '@typegoose/typegoose'
import argon2 from 'argon2'
import { nanoid } from 'nanoid'
import log from '../utilities/logger'

@pre<User>('save', async function () {
  if (!this.isModified('password')) {
    return
  }

  const hashPassword = await argon2.hash(this.password)

  this.password = hashPassword

  return
})
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
export class User {
  @prop({ lowercase: true, required: true, unique: true })
  email: string

  @prop({ required: true, unique: true })
  nickname: string

  @prop({ required: true })
  password: string

  @prop()
  passwordResetCode: string | null

  @prop({ required: true, default: () => nanoid() })
  verificationCode: string

  @prop({ default: false })
  verified: boolean

  async validatePassword(this: DocumentType<User>, candidatePassword: string) {
    try {
      return await argon2.verify(this.password, candidatePassword)
    } catch (error) {
      log.error(error, 'Не удалось подтвердить пароль')
      return false
    }
  }
}

const UserModel = getModelForClass(User)

export default UserModel
