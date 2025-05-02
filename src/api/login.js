import request from '@/utils/request'

export const GetPidCode = () => {
  return request.get('/captcha/image')
}

export const GetMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.get('/captcha/sendSmsCaptcha',
    {
      form: {
        captchaCode,
        captchaKey,
        mobile
      }
    }
  )
}

export const codeLogin = (mobile, smsCode) => {
  return request.post('/passport/login', {
    form: {
      isParty: false,
      mobile,
      partyData: {},
      smsCode
    }
  })
}
