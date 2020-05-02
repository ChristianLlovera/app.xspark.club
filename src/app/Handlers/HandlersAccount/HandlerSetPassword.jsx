import GetAuth from '../../Facades/Auth/GetAuth'
import GetFormSetPassword, { rules as RulesSetPassword, customMessage as MessageSetPassword } from '../../Helpers/Forms/GetFormSetPassword'
import GetCredential from '../../Facades/Auth/GetCredential'
import Validator from 'validatorjs'
import ShowError from '../../Helpers/ShowError'

export const HandlerSetPassword = async obj => {
    const { setLoading, setErr, history } = obj

    const data = GetFormSetPassword()

    const validate = new Validator(data, RulesSetPassword, MessageSetPassword)

    if (validate.fails()) { ShowError(validate, setErr) }
    else {
        setErr('')
        setLoading(true)
        const user = await GetAuth()
        const credential = GetCredential(user.email, data.oldPassword)

        try {
            const isUser = await user.reauthenticateWithCredential(credential)

            if (isUser) {
                await user.updatePassword(data.newPassword)
                const newCredential = GetCredential(user.email, data.newPassword)
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

export default HandlerSetPassword