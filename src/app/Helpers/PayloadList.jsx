const PayloadList = arr => {
    const result = []
    arr.forEach(doc => {
        const data = doc.data()
        const obj = { id: doc.id, ...data }
        result.push(obj)
    })
    return result
}

export default PayloadList