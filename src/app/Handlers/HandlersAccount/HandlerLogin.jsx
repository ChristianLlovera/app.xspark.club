import GetFormLogin, { rules as RulesLogin, customMessage as MessageLogin } from '../../Helpers/Forms/GetFormLogin'
import SingIn from '../../Facades/Auth/SingIn'
import ShowError from '../../Helpers/ShowError'
import Validator from 'validatorjs'

export const HandlerLogin = obj => {

    const { setErr, setData, setLoading, history, setIsLogin } = obj
    const data = GetFormLogin()

    setData({ email: data.email })

    const UserSingIn = async () => {
        setLoading(true)
        try {
            await SingIn(data.email, data.password)
            setIsLogin(true)
            history.push('/profile/list')
        }
        catch (err) {
            console.error(err)
            setIsLogin(false)
            setLoading(false)
            setErr({ success: ["Usuario o contraseña invalido"] })
        }
    }

    const validate = new Validator(data, RulesLogin, MessageLogin)
    validate.fails() ? ShowError(validate, setErr) : UserSingIn()

}

export default HandlerLogin