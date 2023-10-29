import zod from 'zod'

export const createUserSchema = zod.object({
  body: zod
    .object({
      nickname: zod
        .string()
        .min(1, 'Поле обязательное для заполнения!')
        .max(20, 'Псевдоним не может содержать больше 20 символов!'),
      email: zod
        .string()
        .min(1, 'Поле обязательное для заполнения!')
        .email('Электронная почта имеет невалидное значение!'),
      password: zod
        .string()
        .min(8, 'Пароль должен содержать не менее 8 символов!')
        .max(32, 'Пароль не может иметь более 32 символов!'),
      confirmPassword: zod
        .string()
        .min(1, 'Поле проверки пароля не может быть пустым!'),
    })
    .refine(data => data.password === data.confirmPassword, {
      message: 'Пароли должны совпадать!',
      path: ['confirmPassword'],
    }),
})
export type TCreateUserSchema = zod.infer<typeof createUserSchema>['body']
