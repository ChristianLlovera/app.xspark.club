import dataBase from '../DataBase'
import GetFormProfile from '../Helpers/GetFormProfile'
import DownloadCSV from '../Helpers/DownloadCSV'
import FormatToProfilesDownload from '../Helpers/FormatToProfilesDownload'


export const handlerListProfile = async arr => {

    const db = dataBase()
    const [setData, setLoading] = arr
    const res = await db.setCollection('profiles')
        .orderBy({ field: 'info.name', type: 'asc' })
        .list()

    setData(res.payload)
    setLoading(false)

}

export const handlerGetProfile = async obj => {

    const db = dataBase()
    const { id, setProfile, setLoading } = obj
    const res = await db.setCollection('profiles').get(id)
    setProfile(res.payload)
    setLoading(false)

}

export const handlerDelProfile = async obj => {
    const { id, setDeleting, setExist } = obj
    setDeleting(true)
    const db = dataBase()
    await db.setCollection('profiles').delete(id)
    setExist(false)
}


export const handlerAddProfile = async obj => {

    const { changes, setChanges, setCreate, history } = obj
    const structure = GetFormProfile()
    const db = dataBase()

    if (changes == 'active') {
        setChanges('')
        setCreate(true)
        const res = await db.setCollection('profiles').create(structure)
        history.push(`/profile/show/${res.id}`)
    }

}


export const handlerSaveProfile = async obj => {

    const { id, setSaving, changes, setChanges } = obj
    const db = dataBase()
    const structure = GetFormProfile()

    if (changes == 'active') {
        setChanges('')
        setSaving(true)
        await db.setCollection('profiles').update(id, structure)
        setSaving(false)
    }

}

export const handlerDownload = async obj => {

    const { setDownloading } = obj

    setDownloading(true)

    const db = dataBase()
    const res = await db.setCollection('profiles')
        .orderBy({ field: 'info.name', type: 'asc' })
        .list()

    setDownloading(false)

    const format = FormatToProfilesDownload(res.payload)
    DownloadCSV(format)

}