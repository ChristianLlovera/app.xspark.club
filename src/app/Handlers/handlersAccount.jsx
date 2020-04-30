import { getData } from '../Layout/Input'
import { singUp, singIn, singOut, getAuth, getCredential, resetEmail, RecaptchaResponse } from '../Auth'
import dataBase from '../DataBase'
import Validator from 'validatorjs'

const structureGetData = () => {
    const data = getData()
    return {
        name: data['name'],
        lastname: data['lastname'],
        document: data['document'],
        phone: data['phone'],
        emergency: data['emergency']
    }
}

const handlerShowError = (validate, setErr) => {
    const err = validate.errors.all()
    setErr(err)//set del estado de error
    Object.keys(err).map((element) => {//coloca los campos erroneos en rojo
        const component = document.querySelector(`[name=${element}]`)
        if (component) {
            component.parentNode.dataset.error = true
        }
    })
}

export const handlerGetData = async obj => {

    const db = dataBase()
    const { setData, setLoading } = obj
    const user = await getAuth()
    const data = await db.setCollection('users').get(user.uid)
    setData(data.payload)
    setLoading(false)

}

export const handlerSetData = obj => {

    const db = dataBase()
    const { setErr, setData, setSaving, setChanges } = obj
    const structure = structureGetData()

    setData(structure)

    const rules = {
        name: 'required',
        lastname: 'required',
        document: 'required',
        phone: 'required',
        emergency: 'required',
    }

    const customMessage = {
        'required.name': 'El campo nombre no puede estar vacío',
        'required.lastname': 'El campo apellido no puede estar vacío',
        'required.document': 'El campo documento no puede estar vacío',
        'required.phone': 'El campo teléfono no puede estar vacío',
        'required.emergency': 'El campo teléfono de emergencia no puede estar vacío'
    }

    const handlerSave = async () => {
        setSaving(true)
        const user = await getAuth()
        await user.updateProfile({ displayName: `${structure.name} ${structure.lastname}` })
        await db.setCollection('users').update(user.uid, structure)
        setChanges('')
        setSaving(false)
    }

    const validate = new Validator(structure, rules, customMessage)
    if (validate.fails()) { handlerShowError(validate, setErr) }
    else { handlerSave() }

}

export const handlerSetPassword = async obj => {
    const { setLoading, setErr, history } = obj
    const data = getData()

    const structure = {
        oldPassword: data['old-password'],
        newPassword: data['new-password'],
        newPassword_confirmation: data['confirm-password']
    }

    const rules = {
        oldPassword: 'required',
        newPassword: 'required|confirmed',
    }

    const customMessage = {
        'required.oldPassword': 'El campo contraseña actual es obligatorio',
        'required.newPassword': 'El campo nueva constraseña es obligatorio',
        'confirmed.newPassword': 'Debes confirmar la nueva contraseña'
    }

    const validate = new Validator(structure, rules, customMessage)
    if (validate.fails()) { handlerShowError(validate, setErr) }
    else {
        setErr('')
        setLoading(true)
        const user = await getAuth()
        const credential = getCredential(user.email, data['old-password'])

        try {
            const isUser = await user.reauthenticateWithCredential(credential)

            if (isUser) {
                await user.updatePassword(data['new-password'])
                const newCredential = getCredential(user.email, data['new-password'])
                await user.reauthenticateWithCredential(newCredential)
                setLoading(false)
                history.push('/account/set/info')
            }

        }
        catch  {
            setLoading(false)
            setErr({ err: ['La contraseña actual es incorrecta'] })
        }


    }


}

export const handlerSetEmail = async obj => {

    const { setLoading, setErr, setData, history } = obj

    const data = getData()
    setData({ email: data['email'] })

    const structure = {
        password: data['password'],
        email: data['email']
    }

    const rules = {
        password: 'required',
        email: 'required|email',
    }

    const customMessage = {
        'required.email': 'El campo Correo Electrónico es obligatorio',
        'email.email': 'Debes colocar un correo electrónico válido',
        'required.password': 'El campo contraseña actual es obligatorio',
    }

    const validate = new Validator(structure, rules, customMessage)
    if (validate.fails()) { handlerShowError(validate, setErr) }
    else {
        setErr('')
        setLoading(true)
        const user = await getAuth()
        const credential = getCredential(user.email, data['password'])

        try {
            const isUser = await user.reauthenticateWithCredential(credential)

            if (isUser) {
                await user.updateEmail(data['email'])
                const newCredential = getCredential(data['email'], data['password'])
                await user.reauthenticateWithCredential(newCredential)
                setLoading(false)
                history.push('/account/set/info')
            }

        }

        catch  {
            setLoading(false)
            setErr({ err: ['La contraseña actual es incorrecta'] })
        }

    }

}

export const handlerRegister = async obj => {

    const { setLoading, setErr, setData, history, setIsLogin } = obj

    const data = getData()
    setData({ email: data['email'] })

    const structure = {
        password: data['password'],
        password_confirmation: data['password_confirmation'],
        email: data['email']
    }

    const rules = {
        recaptcha: 'required',
        email: 'required|email',
        password: 'required|confirmed',
    }

    const customMessage = {
        'required.recaptcha': 'Debes validar que no eres un robot',
        'required.email': 'El campo Correo Electrónico es obligatorio',
        'email.email': 'Debes colocar un correo electrónico válido',
        'required.password': 'El campo contraseña es obligatorio',
        'confirmed.password': 'Debes confirmar la contraseña'
    }

    const recaptcha = await RecaptchaResponse()
    structure.recaptcha = recaptcha

    const validate = new Validator(structure, rules, customMessage)
    if (validate.fails()) { handlerShowError(validate, setErr) }
    else {
        setErr('')
        setLoading(true)

        try {
            const test = await singUp([structure.email, structure.password])
            setIsLogin(true)
            history.push('/account/set/info')
        }
        catch (err) {
            setLoading(false)
            if (err.code == 'auth/weak-password') {
                setErr({ error: ['La contraseña debe tener al menos 6 caracteres'] })
            } else if (err.code == 'auth/email-already-in-use') {
                setErr({ error: ['La dirección de correo electrónico ya está en uso por otra cuenta.'] })
            } else {
                setErr({ error: ['Ha ocurrido un error, vuelve a intentarlo'] })
            }
        }

    }

}

export const handlerResetPassword = async obj => {

    const { setLoading, setErr, setSuccess } = obj

    const data = getData()

    const structure = {
        email: data['email']
    }

    const rules = {
        email: 'required|email',
    }

    const customMessage = {
        'required.email': 'El campo Correo Electrónico es obligatorio',
        'email.email': 'Debes colocar un correo electrónico válido'
    }

    const validate = new Validator(structure, rules, customMessage)
    if (validate.fails()) { handlerShowError(validate, setErr) }
    else {
        setErr('')
        setSuccess('')
        setLoading(true)

        try {
            await resetEmail(structure.email)
            setLoading(false)
            setSuccess(`Se a enviado un Correo a ${structure.email} con un enlace para cambiar tu contraseña.`)

        }
        catch (err) {
            setLoading(false)
            if (err.code == 'auth/user-not-found') {
                setErr({ err: [`No hay registro de usuario correspondiente a ${structure.email}`] })
            } else {
                setErr({ err: [`Ha ocurrido un error, vuelve a intentar`] })
            }
        }

    }

}

export const handlerLogin = obj => {

    const { setErr, setData, setLoading, history, setIsLogin } = obj
    const data = getData()

    setData({ email: data.email })

    const rules = {
        email: 'required|email',
        password: 'required',
    }

    const customMessage = {
        'required.email': 'El campo Correo Electrónico es obligatorio',
        'email.email': 'Debes colocar un correo electrónico válido',
        'required.password': 'Debes colocar una contraseña'
    }


    const handlerShowError = () => {
        const err = validate.errors.all()
        setErr(err)//set del estado de error
        Object.keys(err).map((element) => {//coloca los campos erroneos en rojo
            const component = document.querySelector(`[name=${element}]`)
            if (component) {
                component.parentNode.dataset.error = true
            }
        })
    }


    const handlerSingIn = () => {
        setLoading(true)

        singIn([data.email, data.password])
            .then(res => {
                setIsLogin(true)
                history.push('/profile/list')
            })
            .catch(err => {
                console.error(err)
                setIsLogin(false)
                setLoading(false)
                setErr({ success: ["Usuario o contraseña invalido"] })
            })

    }


    const validate = new Validator(data, rules, customMessage)
    if (validate.fails()) { handlerShowError(validate) }
    else { handlerSingIn() }

}

export const handlerLogout = obj => {

    const { history, setIsLogin, setIsAdmin } = obj

    singOut()
        .then(res => {
            setIsLogin(false)
            setIsAdmin(false)
            history.push('/account/login')
        })


}