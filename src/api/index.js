import reqest from 'axios'

export const getInfo = (data) => {
    return reqest({
        method: 'get',
        url: '/api/topology/' + data.id,
        data: {}
    })
}