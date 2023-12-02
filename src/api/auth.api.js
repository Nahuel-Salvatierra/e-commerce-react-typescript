import axios from './axios.config'



export async function signUp(data) {

  const dataSend = JSON.stringify(data)
  const res = await axios.post('/auth/signup', dataSend,
    {
      headers: { 'Content-Type': 'application/json' },
    })

  return {
    res: {
      data: res.data,
      status: res.status
    }
  }
}

export async function login(data) {
  const dataSend = JSON.stringify(data)
  const res = await axios.post('/auth/login', dataSend, {
    headers: { 'Content-Type': 'application/json' }
  })

  const response = {
    accessToken: res.data.accessToken,
    userData: res.data.user,
    status: res.status
  }

  return response

}