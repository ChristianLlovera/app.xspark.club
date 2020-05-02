import firebase from '../../Config/Firebase'

const Recaptcha = async elementId => {
    const recaptchaVerifier = new firebase.auth.RecaptchaVerifier(elementId)
    const widgetId = await recaptchaVerifier.render()
    window.recaptchaWidgetId = widgetId
}

export default Recaptcha