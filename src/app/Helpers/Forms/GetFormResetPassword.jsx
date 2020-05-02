import { getData } from '../../Layout/Input'

export const rules = {
    email: 'required|email',
}

export const customMessage = {
    'required.email': 'El campo Correo Electrónico es obligatorio',
    'email.email': 'Debes colocar un correo electrónico válido'
}

const GetFormResetPassword = () => {

    const data = getData()

    return {
        email: data['email']
    }
}

export default GetFormResetPassword