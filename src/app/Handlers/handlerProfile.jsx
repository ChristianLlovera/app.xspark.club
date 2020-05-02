import GetFormProfile from '../Helpers/Forms/GetFormProfile'
import AddProfile from '../Facades/DataBase/Profiles/AddProfile'
import GetProfileList from '../Facades/DataBase/Profiles/GetProfileList'
import GetProfile from '../Facades/DataBase/Profiles/GetProfile'
import SetProfile from '../Facades/DataBase/Profiles/SetProfile'
import DelProfile from '../Facades/DataBase/Profiles/DelProfile'
import DownloadCSV from '../Helpers/DownloadCSV'
import FormatToProfilesDownload from '../Helpers/FormatToProfilesDownload'

export const handlerListProfile = async obj => {
    const { setData, setLoading } = obj
    const list = await GetProfileList()
    setData(list)
    setLoading(false)
}

export const handlerGetProfile = async obj => {
    const { id, setProfile, setLoading } = obj
    const profile = await GetProfile(id)
    setProfile(profile)
    setLoading(false)
}

export const handlerDelProfile = async obj => {
    const { id, setDeleting, setExist } = obj
    setDeleting(true)
    await DelProfile(id)
    setExist(false)
}

export const handlerAddProfile = async obj => {
    const { changes, setChanges, setCreate, history } = obj
    const data = GetFormProfile()
    if (changes == 'active') {
        setChanges('')
        setCreate(true)
        const profileId = await AddProfile(data)
        history.push(`/profile/show/${profileId}`)
    }
}

export const handlerSaveProfile = async obj => {
    const { id, setSaving, changes, setChanges } = obj
    const structure = GetFormProfile()
    if (changes == 'active') {
        setChanges('')
        setSaving(true)
        await SetProfile(id, structure)
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