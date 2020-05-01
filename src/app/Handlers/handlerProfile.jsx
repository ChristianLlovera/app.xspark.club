import dataBase from '../DataBase'
import GetFormProfile from '../Helpers/GetFormProfile'
import CreateProfile from '../Helpers/CreateProfile'
import GetProfileList from '../Helpers/GetProfileList'
import GetProfileId from '../Helpers/GetProfileId'
import SetProfileId from '../Helpers/SetProfileId'
import DelProfileId from '../Helpers/DelProfileId'
import DownloadCSV from '../Helpers/DownloadCSV'
import FormatToProfilesDownload from '../Helpers/FormatToProfilesDownload'

export const handlerListProfile = async arr => {
    const [setData, setLoading] = arr
    const list = await GetProfileList()
    setData(list)
    setLoading(false)
}

export const handlerGetProfile = async obj => {
    const { id, setProfile, setLoading } = obj
    const profile = await GetProfileId(id)
    setProfile(profile)
    setLoading(false)
}

export const handlerDelProfile = async obj => {
    const { id, setDeleting, setExist } = obj
    setDeleting(true)
    await DelProfileId(id)
    setExist(false)
}

export const handlerAddProfile = async obj => {
    const { changes, setChanges, setCreate, history } = obj
    const structure = GetFormProfile()
    if (changes == 'active') {
        setChanges('')
        setCreate(true)
        const profileId = await CreateProfile(structure)
        history.push(`/profile/show/${profileId}`)
    }
}

export const handlerSaveProfile = async obj => {
    const { id, setSaving, changes, setChanges } = obj
    const structure = GetFormProfile()
    if (changes == 'active') {
        setChanges('')
        setSaving(true)
        await SetProfileId(id, structure)
        setSaving(false)
    }
}

export const handlerDownload = async obj => {
    const { setDownloading } = obj
    setDownloading(true)
    const list = await GetProfileList()
    setDownloading(false)
    const format = FormatToProfilesDownload(list)
    DownloadCSV(format)
}