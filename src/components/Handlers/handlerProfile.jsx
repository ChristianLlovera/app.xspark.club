import { inputValue, getData } from '../Layout/Input'
import db from '../DataBase'
import jsonexport from 'jsonexport'

export const handlerListProfile = arr => {

    const [setData, setLoading] = arr
    const obj = { unregister: '' }

    db.profiles
        .orderBy({ field: 'info.name', type: 'asc' })
        .list()
        .then(res => {

            res.snapshot((payload, unregister) => {
                obj.unregister = unregister
                setData(payload)
                setLoading(false)
            })
        })

    return obj
}

export const handlerGetProfile = arr => {

    const [id, setData, setLoading] = arr
    const obj = { unregister: '' }

    db.profiles.get(id).then(res => {

        res.snapshot((payload, unregister) => {
            obj.unregister = unregister
            setData(payload)
            setLoading(false)
        })

    })

    return obj

}

export const handlerGetProfileEdit = arr => {

    const [id, setData, setLoading] = arr

    db.profiles.get(id).then(res => {
        setData(res.payload)
        setLoading(false)
    })


}

export const handlerDelProfile = arr => {

    const [id, setDeleting] = arr

    db.profiles.delete(id).then(res => {
        if (setDeleting) {
            setDeleting(false)
        }
    })

}

const structureGetData = () => {

    const data = getData()

    const structure = {
        info: {
            name: data['info-name'],
            lastname: data['info-lastname'],
            birthdate: data['info-birthdate'],
            document: data['info-document'],
            academy: data['info-academy'],
            number: data['info-number'],
            director: data['info-director'],
            coach: data['info-coach']
        },
        physical: {
            speed: Number(data['physical-speed']),
            agility: Number(data['physical-agility']),
            strength: Number(data['physical-strength']),
            resistance: Number(data['physical-resistance']),
            coordination: Number(data['physical-coordination'])
        },
        technical: {
            driving: Number(data['technical-driving']),
            dodge: Number(data['technical-dodge']),
            shot: Number(data['technical-shot']),
            pass: Number(data['technical-pass']),
            control: Number(data['technical-control'])
        },
        observation: data['observation'],
        insurance: {
            company: data['insurance-company'],
            number: data['insurance-number'],
        },
        attender: {
            name: data['attender-name'],
            document: data['attender-document'],
            mail: data['atterder-mail'] ? data['atterder-mail'] : '',
            phone: data['attender-phone'],
            emergency: data['attender-emergency']
        }
    }

    return structure
}

export const handlerAddProfile = history => {

    const structure = structureGetData()

    db.profiles
        .create(structure)
        .then(res => {
            history.push(`/profile/show/${res.id}`)
        })

}


export const handlerSaveProfile = (id, setSaving) => {

    const structure = structureGetData()

    db.profiles
        .update(id, structure)
        .then(res => {
            setSaving(false)
        })

}

export const handlerDownload = obj => {

    const { setDownloading } = obj
    const dowloadLink = document.querySelector('#download')

    const formatData = data => {
        data.map(elem => {
            delete elem.id

            if (elem.createAt) {
                elem.createDate = moment(elem.createAt.toDate()).format("DD/MM/YYYY")
                delete elem.createAt
            }

        })

        return data
    }

    const exportData = data => jsonexport(data, (err, csv) => {
        if (err) return console.log(err)
        let csvContent = "data:text/csv;charset=utf-8," + csv
        let encodedUri = encodeURI(csvContent)
        dowloadLink.setAttribute("href", encodedUri)
        dowloadLink.click()
    })

    setDownloading(true)

    db.profiles
        .orderBy({ field: 'info.name', type: 'asc' })
        .list()
        .then(res => {
            setDownloading(false)
            const data = formatData(res.payload)
            exportData(data)
        })

}