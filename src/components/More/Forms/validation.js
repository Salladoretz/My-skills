const EMPTY_FIELD = 'Обязательно для заполнения'
const KIRILICA = 'Не может содержать кирилицу'

export const loginValidation = {
    required: EMPTY_FIELD,
    validate: (value) => {
        if (value.match(/[а-яА-Я]/)) {
            return KIRILICA
        }
        return true
    }
}

export const passwordValidation = {
    required: EMPTY_FIELD,
    validate: (value) => {
        if (value.length < 6) {
            return 'Пароль должен быть больше 5 символов'
        }
        if (value.match(/[а-яА-Я]/)) {
            return KIRILICA
        }
        return true
    }
}