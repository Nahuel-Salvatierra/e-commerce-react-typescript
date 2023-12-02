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
  let res
  let response
  try {
    const res = await axios.post('/auth/login', dataSend, {
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.log(error)
    throw error
  } finally {
    response = {
      accessToken: res.data.accessToken,
      userData: res.data.user,
      status: res.status,
      statusCode: res.response.data.statusCode
    }
  }
  return response
}