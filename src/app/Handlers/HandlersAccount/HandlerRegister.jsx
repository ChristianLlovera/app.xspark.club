import RecaptchaResponse from '../../Facades/Auth/RecaptchaResponse'
import SingUp from '../../Facades/Auth/SingUp'
import AddUser from '../../Facades/DataBase/Users/AddUser'
import GetFormUserRegister, { rules as RulesUserRegister, customMessage as MessageUserRegister } from '../../Helpers/Forms/GetFormUserRegister'
import ShowError from '../../Helpers/ShowError'
import Validator from 'validatorjs'

export const HandlerRegister = async obj => {

    const { setLoading, setErr, setData, history, setIsLogin } = obj

    const data = GetFormUserRegister()

    setData({ email: data['email'] })

    const recaptcha = await RecaptchaResponse()
    data.recaptcha = recaptcha

    const validate = new Validator(data, RulesUserRegister, MessageUserRegister)
    if (validate.fails()) { ShowError(validate, setErr) }
    else {
        setErr('')
        setLoading(true)

        try {
            const uid = await SingUp(data.email, data.password)
            await AddUser(uid, { email: data.email })
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
                console.log(err)
                setErr({ error: ['Ha ocurrido un error, vuelve a intentarlo'] })
            }
        }
    }
}

export default HandlerRegister