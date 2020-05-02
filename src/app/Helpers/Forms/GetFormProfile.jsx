import { getData } from '../../Layout/Input'

const GetFormProfile = () => {

    const data = getData()

    return {
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
}

export default GetFormProfile