import { getData } from '../../Layout/Input'

export const rules = {
    oldPassword: 'required',
    newPassword: 'required|confirmed',
}

export const customMessage = {
    'required.oldPassword': 'El campo contraseña actual es obligatorio',
    'required.newPassword': 'El campo nueva constraseña es obligatorio',
    'confirmed.newPassword': 'Debes confirmar la nueva contraseña'
}

const GetFormSetPassword = () => {

    const data = getData()

    return {
        oldPassword: data['old-password'],
        newPassword: data['new-password'],
        newPassword_confirmation: data['confirm-password']
    }
}

export default GetFormSetPassword