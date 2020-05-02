import { getData } from '../../Layout/Input'

export const rules = {
    password: 'required',
    email: 'required|email',
}

export const customMessage = {
    'required.email': 'El campo Correo Electrónico es obligatorio',
    'email.email': 'Debes colocar un correo electrónico válido',
    'required.password': 'El campo contraseña actual es obligatorio',
}

const GetFormSetEmail = () => {

    const data = getData()

    return {
        password: data['password'],
        email: data['email']
    }
}

export default GetFormSetEmail