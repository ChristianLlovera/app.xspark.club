import dataBase from '../DataBase'

describe('test database', () => {

    const db = dataBase()

    it('set collection', () => {

        db
            .setCollection('profiles')

        expect(db.collection).toEqual('profiles')

    })

    it('set orderBy', () => {
        db
            .orderBy({ field: 'name', type: 'asc' })

        expect(db.sort.field).toEqual('name')
        expect(db.sort.type).toEqual('asc')
    })

    it('orderBy Reset', () => {
        db
            .orderByReset()

        expect(db.sort.field).toEqual('')
        expect(db.sort.type).toEqual('')
    })

    it('set limit', () => {
        db
            .limit({ limit: 'change', last: 'change' })

        expect(db.lazy.limit).toEqual('change')
        expect(db.lazy.last).toEqual('change')

    })

    it('limit Reset', () => {
        db
            .limitReset()

        expect(db.lazy.limit).toEqual('')
        expect(db.lazy.last).toEqual('')

    })

    // it('testing list', async () => {
    //     const list = await db
    //         .setCollection('profiles')
    //         .orderBy({ field: 'name', type: 'asc' })
    //         .list()
    // })

    // it('testing get', async () => {
    //     const result = await db
    //         .setCollection('profiles')
    //         .orderBy({ field: 'name', type: 'asc' })
    //         .get('O006uXbaPghKM8X3akSB')
    // })

})