import GetAuth from '../../Facades/Auth/GetAuth'
import GetUser from '../../Facades/DataBase/Users/GetUser'


export const HandlerGetData = async obj => {

    const { setData, setLoading } = obj
    const user = await GetAuth()
    const data = await GetUser(user.uid)
    setData(data)
    setLoading(false)

}

export default HandlerGetData
