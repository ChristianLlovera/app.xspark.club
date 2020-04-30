const FormatToProfilesDownload = data => {
    data.map(elem => {
        delete elem.id

        if (elem.createAt) {
            elem.createDate = moment(elem.createAt.toDate()).format("DD/MM/YYYY")
            delete elem.createAt
        }

    })

    return data
}

export default FormatToProfilesDownload