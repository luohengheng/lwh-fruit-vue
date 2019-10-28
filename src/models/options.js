import request from '../util/http'
import {showMsg} from  '@/util/type-msg'

export const loginOpt = async (params) => {

    try {
        const res = await request({
            url: '/login',
            method: 'post',
            data: params
        })
        return res

    }catch (e) {
        showMsg(e, 'error')
    }

}