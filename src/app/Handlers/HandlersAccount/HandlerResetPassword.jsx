import GetFormResetPassword, { rules as RulesResetPassword, customMessage as MessageResetPassword } from '../../Helpers/Forms/GetFormResetPassword'
import ResetEmail from '../../Facades/Auth/ResetEmail'
import ShowError from '../../Helpers/ShowError'
import Validator from 'validatorjs'


export const HandlerResetPassword = async obj => {

    const { setLoading, setErr, setSuccess } = obj

    const data = GetFormResetPassword()

    const validate = new Validator(data, RulesResetPassword, MessageResetPassword)
    if (validate.fails()) { ShowError(validate, setErr) }
    else {
        setErr('')
        setSuccess('')
        setLoading(true)

        try {
            await ResetEmail(data.email)
            setLoading(false)
            setSuccess(`Se a enviado un Correo a ${data.email} con un enlace para cambiar tu contraseña.`)
        }
        catch (err) {
            setLoading(false)
            if (err.code == 'auth/user-not-found') {
                setErr({ err: [`No hay registro de usuario correspondiente a ${data.email}`] })
            } else {
                setErr({ err: [`Ha ocurrido un error, vuelve a intentar`] })
            }
        }

    }

}

export default HandlerResetPassword