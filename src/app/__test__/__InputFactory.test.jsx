import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import InputFactory from '../Views/_Partials/Factorys/InputFactory'
import { config } from './config'

const params = {
    container: null,
    beforeEach,
    afterEach,
    unmountComponentAtNode,
    document
}

config(params)
console.error = jest.fn()

describe('InputFactory', () => {

    it('test list', () => {

        const Arrange = props => {
            return (
                <InputFactory type='list' value='FUTBOL' prefix="info" input="academy" description='Selecciona una Opción' />
            )
        }
        act(() => { render(<Arrange />, params.container) })
        const elm = document.querySelector('[name="info-academy"]')
        expect(elm).not.toBe(undefined)

    })

})