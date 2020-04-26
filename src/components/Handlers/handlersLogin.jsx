import { singIn, singOut } from '../Auth'
import Validator from 'validatorjs'

export const handlerLogin = obj => {

    const { getData, setErr, setData, setLoading, history, setIsLogin } = obj
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

    const { history, setIsLogin } = obj

    singOut()
        .then(res => {
            setIsLogin(false)
            history.push('/')
        })


}