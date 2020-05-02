import GetAuth from '../../Facades/Auth/GetAuth'
import GetCredential from '../../Facades/Auth/GetCredential'
import SetUser from '../../Facades/DataBase/Users/SetUser'
import GetFormSetEmail, { rules as RulesSetEmail, customMessage as MessageSetEmail } from '../../Helpers/Forms/GetFormSetEmail'
import Validator from 'validatorjs'
import ShowError from '../../Helpers/ShowError'


export const HandlerSetEmail = async obj => {

    const { setLoading, setErr, setData, history } = obj

    const data = GetFormSetEmail()

    setData({ email: data['email'] })

    const validate = new Validator(data, RulesSetEmail, MessageSetEmail)
    if (validate.fails()) { ShowError(validate, setErr) }
    else {
        setErr('')
        setLoading(true)
        const user = await GetAuth()
        const credential = GetCredential(user.email, data['password'])

        try {
            const isUser = await user.reauthenticateWithCredential(credential)

            if (isUser) {
                await SetUser(user.uid, { email: data['email'] })
                await user.updateEmail(data['email'])
                const newCredential = GetCredential(data['email'], data['password'])
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

export default HandlerSetEmail