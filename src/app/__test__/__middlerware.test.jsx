import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import Middlerware from '../Middlewares'
import { config } from './config'

const params = {
    beforeEach,
    afterEach,
    unmountComponentAtNode,
    document,
    container: null
}

config(params)


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: 'asdfasdoiu23r4wesdfwsdf' })
}))

console.error = jest.fn()

describe('testing middlerware component', () => {

    it('test midddleware empty', async () => {

        const Arrange = props => {
            return (
                <Middlerware >
                    <div className="testing" />
                </Middlerware >
            )
        }

        await act(async () => {
            render(<Arrange />, params.container)
        })

        const elm = document.querySelector('.testing')
        expect(elm).not.toBe(undefined)
        expect(console.error).toHaveBeenCalledTimes(0)
    })

    it('test middleware not register', async () => {
        const Arrange = props => {
            return (
                <Middlerware actions={['is-none']}>
                    <div className="testing" />
                </Middlerware >
            )
        }

        await act(async () => {
            render(<Arrange />, params.container)
        })

        const elm = document.querySelector('.testing')
        expect(elm).not.toBe(undefined)
        expect(console.error).toHaveBeenCalledTimes(1)
    })

    it('testing reject in windows object', async () => {
        const Arrange = props => {
            return (
                <Middlerware actions={['is-not-auth']}>
                    <div className="testing" />
                </Middlerware >
            )
        }

        await act(async () => { render(<Arrange />, params.container) })
        expect(window.reject).not.toBe(undefined)
    })



})