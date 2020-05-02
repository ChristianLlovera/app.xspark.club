import { getData } from '../../Layout/Input'

export const rules = {
    name: 'required',
    lastname: 'required',
    document: 'required',
    phone: 'required',
    emergency: 'required',
}

export const customMessage = {
    'required.name': 'El campo nombre no puede estar vacío',
    'required.lastname': 'El campo apellido no puede estar vacío',
    'required.document': 'El campo documento no puede estar vacío',
    'required.phone': 'El campo teléfono no puede estar vacío',
    'required.emergency': 'El campo teléfono de emergencia no puede estar vacío'
}

const GetFormUser = () => {
    const data = getData()
    return {
        name: data['name'],
        lastname: data['lastname'],
        document: data['document'],
        phone: data['phone'],
        emergency: data['emergency']
    }
}

export default GetFormUser