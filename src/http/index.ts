import http from './init_axios'

export interface IResponse {
  status: boolean
  code: number
  msg: string
  data: any
  count: number
}

export const sendHttp = (params: { method?: string; url: string; data: any }) => {
  const { method, url, data } = params

  return new Promise((resolve: (res: IResponse) => void, reject: (res: IResponse) => void) => {
    const axiosConfig = {
      method: '',
      url: url,
    }
    axiosConfig.method = method || 'POST'

    if (axiosConfig.method === 'POST') {
      axiosConfig['data'] = data || {}
    }
    if (axiosConfig.method === 'GET') {
      axiosConfig['params'] = data || {}
    }

    http(axiosConfig).then((res) => {
      resolve(res.data)
    })
  })
}
