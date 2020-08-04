import Axios from '@/plugins/axios'
import Qs from 'qs';

// 获取验证码
export const getVerifyCode = () => {
    return Axios({
      url: '/user/getVerifyCode',
      method: 'get'
    })
}