import { useParams } from "react-router-dom"
import { useStore } from '../Store/useStore'


export const isProfile = redirect => {

    const { getProfile } = useStore()
    const { id } = useParams()
    const profile = getProfile(id)

    if (!profile) {
        redirect.url = '/profile/list'
    }


}
