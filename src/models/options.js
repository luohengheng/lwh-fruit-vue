import request from '../util/http'

export function loginOpt(params) {
    request({
        url: '/login',
        method: 'post',
        data: params
    })
}