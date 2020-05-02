import { getData } from '../../Layout/Input'

export const rules = {
    recaptcha: 'required',
    email: 'required|email',
    password: 'required|confirmed',
}

export const customMessage = {
    'required.recaptcha': 'Debes validar que no eres un robot',
    'required.email': 'El campo Correo Electrónico es obligatorio',
    'email.email': 'Debes colocar un correo electrónico válido',
    'required.password': 'El campo contraseña es obligatorio',
    'confirmed.password': 'Debes confirmar la contraseña'
}

const GetFormUserRegister = () => {

    const data = getData()

    return {
        password: data['password'],
        password_confirmation: data['password_confirmation'],
        email: data['email']
    }
}

export default GetFormUserRegister