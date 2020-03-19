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


    setPlayer(structure)

}
