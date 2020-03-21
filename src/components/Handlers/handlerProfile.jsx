import { inputValue } from '../Layout/Input'


export const handlerAddProfile = (addPlayer, history) => {

    const structure = {
        info: {
            name: inputValue('info-name') ? inputValue('info-name') : '',
            lastname: inputValue('info-lastname') ? inputValue('info-lastname') : '',
            birthdate: inputValue('info-birthdate') ? inputValue('info-birthdate') : '',
            document: inputValue('info-document') ? inputValue('info-document') : '',
            academy: inputValue('info-academy') ? inputValue('info-academy') : '',
            number: inputValue('info-number') ? inputValue('info-number') : '',
            director: inputValue('info-director') ? inputValue('info-director') : '',
            coach: inputValue('info-coach') ? inputValue('info-coach') : ''
        },
        physical: {
            speed: inputValue('physical-speed') ? parseInt(inputValue('physical-speed')) : '',
            agility: inputValue('physical-agility') ? parseInt(inputValue('physical-agility')) : '',
            strength: inputValue('physical-strength') ? parseInt(inputValue('physical-strength')) : '',
            resistance: inputValue('physical-resistance') ? parseInt(inputValue('physical-resistance')) : '',
            coordination: inputValue('physical-coordination') ? parseInt(inputValue('physical-coordination')) : ''
        },
        technical: {
            driving: inputValue('technical-driving') ? parseInt(inputValue('technical-driving')) : '',
            dodge: inputValue('technical-dodge') ? parseInt(inputValue('technical-dodge')) : '',
            shot: inputValue('technical-shot') ? parseInt(inputValue('technical-shot')) : '',
            pass: inputValue('technical-pass') ? parseInt(inputValue('technical-pass')) : '',
            control: inputValue('technical-control') ? parseInt(inputValue('technical-control')) : ''
        },
        observation: inputValue('observation') ? inputValue('observation') : '',
        insurance: {
            company: inputValue('insurance-company') ? inputValue('insurance-company') : '',
            number: inputValue('insurance-number') ? inputValue('insurance-number') : '',
        },
        attender: {
            name: inputValue('attender-name') ? inputValue('attender-name') : '',
            document: inputValue('attender-document') ? inputValue('attender-document') : '',
            mail: inputValue('atterder-mail') ? inputValue('atterder-mail') : '',
            phone: inputValue('attender-phone') ? inputValue('attender-phone') : '',
            emergency: inputValue('attender-emergency') ? inputValue('attender-emergency') : ''
        }
    }


    const id = addPlayer(structure)
    history.push(`/profile/show/${id}`)

}


export const handlerSaveProfile = (id, setPlayer, profile) => {

    const structure = {
        info: {
            name: inputValue('info-name'),
            lastname: inputValue('info-lastname'),
            birthdate: inputValue('info-birthdate'),
            document: inputValue('info-document'),
            academy: inputValue('info-academy'),
            number: inputValue('info-number'),
            director: inputValue('info-director'),
            coach: inputValue('info-coach')
        },
        physical: {
            speed: parseInt(inputValue('physical-speed')),
            agility: parseInt(inputValue('physical-agility')),
            strength: parseInt(inputValue('physical-strength')),
            resistance: parseInt(inputValue('physical-resistance')),
            coordination: parseInt(inputValue('physical-coordination'))
        },
        technical: {
            driving: parseInt(inputValue('technical-driving')),
            dodge: parseInt(inputValue('technical-dodge')),
            shot: parseInt(inputValue('technical-shot')),
            pass: parseInt(inputValue('technical-pass')),
            control: parseInt(inputValue('technical-control'))
        },
        observation: inputValue('observation') ? inputValue('observation') : profile.observation,
        insurance: {
            company: inputValue('insurance-company'),
            number: inputValue('insurance-number'),
        },
        attender: {
            name: inputValue('attender-name'),
            document: inputValue('attender-document'),
            mail: inputValue('atterder-mail') ? inputValue('atterder-mail') : profile.attender.mail,
            phone: inputValue('attender-phone'),
            emergency: inputValue('attender-emergency')
        }
    }


    setPlayer(id, structure)
}
