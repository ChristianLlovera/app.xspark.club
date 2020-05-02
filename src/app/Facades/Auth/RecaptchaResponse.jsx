import firebase from '../../Config/Firebase'

const RecaptchaResponse = async () => {

    if (window.recaptchaWidgetId != undefined) {
        const recaptcha = await grecaptcha.getResponse(window.recaptchaWidgetId)
        return recaptcha
    }

}

export default RecaptchaResponse