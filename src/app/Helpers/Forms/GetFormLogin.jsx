import { getData } from '../../Layout/Input'

export const rules = {
    email: 'required|email',
    password: 'required',
}

export const customMessage = {
    'required.email': 'El campo Correo Electrónico es obligatorio',
    'email.email': 'Debes colocar un correo electrónico válido',
    'required.password': 'Debes colocar una contraseña'
}


const GetFormLogin = () => {

    const data = getData()

    return {
        email: data['email'],
        password: data['password'],
    }
}

export default GetFormLogin