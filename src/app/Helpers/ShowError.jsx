const ShowError = (validate, setErr) => {
    const err = validate.errors.all()
    setErr(err)//set del estado de error
    Object.keys(err).map((element) => {//coloca los campos erroneos en rojo
        const component = document.querySelector(`[name=${element}]`)
        if (component) {
            component.parentNode.dataset.error = true
        }
    })
}

export default ShowError