const PayloadRow = doc => {
    const data = doc.data()
    return { id: doc.id, ...data }
}

export default PayloadRow