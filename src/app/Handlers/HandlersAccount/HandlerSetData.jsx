import GetAuth from '../../Facades/Auth/GetAuth'
import GetFormUser, { rules as RulesUser, customMessage as MessageUser } from '../../Helpers/Forms/GetFormUser'
import SetUser from '../../Facades/DataBase/Users/SetUser'
import Validator from 'validatorjs'
import ShowError from '../../Helpers/ShowError'

export const HandlerSetData = obj => {

    const { setErr, setData, setSaving, setChanges } = obj
    const data = GetFormUser()

    setData(data)

    const Save = async () => {
        setSaving(true)
        const user = await GetAuth()
        await user.updateProfile({ displayName: `${data.name} ${data.lastname}` })
        await SetUser(user.uid, data)
        setChanges('')
        setSaving(false)
    }

    const validate = new Validator(data, RulesUser, MessageUser)
    validate.fails() ? ShowError(validate, setErr) : Save()

}

export default HandlerSetData