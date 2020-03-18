import { inputValue } from '../Layout/Input'


export const handlerSaveProfile = (setPlayer, profile) => {

    const structure = {
        info: {
            name: inputValue('info-name'),
            lastname: inputValue('info-lastname'),
            birthdate: inputValue('info-birthdate'),
            document: inputValue('info-document'),
            academy: inputValue('info-academy'),
            number: inputValue('info-number'),
            director: inputValue('info-director'),
            coach: inputValue('info-coach'),
            ranking: inputValue('info-ranking')
        },
        physical: {
            speed: inputValue('physical-speed'),
            agility: inputValue('physical-agility'),
            strength: inputValue('physical-strength'),
            resistance: inputValue('physical-resistance'),
            coordination: inputValue('physical-coordination')
        },
        technical: {
            driving: inputValue('technical-driving'),
            dodge: inputValue('technical-dodge'),
            shot: inputValue('technical-shot'),
            pass: inputValue('technical-pass'),
            control: inputValue('technical-control')
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

    setPlayer(structure)

}
