import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { useForm, useFormState, Controller, SubmitHandler } from 'react-hook-form'
import css from './ReactHookForm.module.css'
import { loginValidation, passwordValidation } from './validation'


interface ISignInForm {
    login: string
    password: string
}

const ReactHookForm: React.FC = () => {

    const { handleSubmit, control } = useForm<ISignInForm>()
    const { errors } = useFormState({ control })
    const [formState, setFormState] = useState({ login: '', password: '' })

    const onSubmit: SubmitHandler<ISignInForm> = data => setFormState(data)

    return (
        <div className={css.reactHookForm}>
            <h1>Form</h1>
            <span>(библиотека React Hook Form)</span>
            <div>
                <form className={css.reactHookForm__form} onSubmit={handleSubmit(onSubmit)} >
                    <Controller
                        control={control}
                        name='login'
                        rules={loginValidation}
                        render={({ field }) => (
                            <TextField
                                label='Логин'
                                size='small'
                                className={css.inputForm}
                                margin='normal'
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={!!errors.login?.message}
                                helperText={errors.login?.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name='password'
                        rules={passwordValidation}
                        render={({ field }) => (
                            <TextField
                                label='Пароль'
                                type='password'
                                size='small'
                                className={css.inputForm}
                                margin='normal'
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={!!errors.password?.message}
                                helperText={errors.password?.message}
                            />
                        )}
                    />
                    <Button
                        type='submit'
                        variant='contained'
                        sx={{ marginTop: 2 }}
                    >
                        Войти
                    </Button>
                </form>
                <div className={css.reactHookForm__result}>
                    <span>{formState.login !== '' ? `Логин: ${formState.login}` : ''}</span>
                    <span>{formState.password !== '' ? `Пароль: ${formState.password}` : ''}</span>
                </div>
            </div>
        </div >
    )
}

export default ReactHookForm