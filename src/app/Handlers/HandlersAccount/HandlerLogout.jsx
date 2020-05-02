import SingOut from '../../Facades/Auth/SingOut'

export const HandlerLogout = async obj => {

    const { history, setIsLogin, setIsAdmin } = obj

    await SingOut()
    setIsLogin(false)
    setIsAdmin(false)
    history.push('/account/login')

}

export default HandlerLogout