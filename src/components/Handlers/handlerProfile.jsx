import { inputValue } from '../Layout/Input'
import db from '../DataBase'

export const handlerListProfile = (setData, setLoading) => {

    db.profiles.list().then(res => {
        setData(res.payload)
        res.snapshot(setData)
        setLoading(false)
    })


}

export const handlerGetProfile = (id, setData, setLoading) => {

    db.profiles.get(id).then(res => {
        setData(res.payload)
        res.snapshot(setData)
        setLoading(false)
    })

}

export const handlerDelProfile = id => {
    db.profiles.delete(id).then(res => {
        console.log('fue borrado')
    })
}

export const handlerAddProfile = history => {

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

    db.profiles.create(structure).then(res => {
        history.push(`/profile/show/${res.id}`)
    })

}


export const handlerSaveProfile = (id, data, setSaving) => {

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
        observation: inputValue('observation') ? inputValue('observation') : data.observation,
        insurance: {
            company: inputValue('insurance-company'),
            number: inputValue('insurance-number'),
        },
        attender: {
            name: inputValue('attender-name'),
            document: inputValue('attender-document'),
            mail: inputValue('atterder-mail') ? inputValue('atterder-mail') : data.attender.mail,
            phone: inputValue('attender-phone'),
            emergency: inputValue('attender-emergency')
        }
    }

    db.profiles.update(id, structure).then(res => {
        setSaving(false)
    })

}
