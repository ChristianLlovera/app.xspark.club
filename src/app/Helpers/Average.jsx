const averange = data => {

    const { physical, technical } = data

    let items = 0
    let value = 0
    let result = 0

    Object.keys(physical).map((element) => {
        value = value + parseInt(physical[element])
        items++
    })

    Object.keys(technical).map((element) => {
        value = value + parseInt(technical[element])
        items++
    })

    result = value / items

    return result
}

export default averange