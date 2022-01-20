const formDom = document.querySelector('.form-section')
const usernameDom = document.querySelector('.name-field')
const passwordDom = document.querySelector('.password-field')
const errordDom = document.querySelector('.error-contant')

const resultDOM = document.querySelector('.data')
const btnDOM = document.querySelector('#btndata')
const tokenDOM = document.querySelector('.token')

formDom.addEventListener('submit', async (e) => {
  errordDom.classList.remove('success')
  tokenDOM.classList.remove('success')

  e.preventDefault()

  const username = usernameDom.value
  const password = passwordDom.value
  // console.log(username, password)

  try {
    const { data } = await axios.post('/api/v1/login', { username, password })

    // formDom.style.display = 'block'
    errordDom.textContent = data.msg

    errordDom.classList.add('success')
    usernameDom.value = ''
    passwordDom.value = ''

    localStorage.setItem('token', data.token)
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('success')

    setTimeout(() => {
      errordDom.style.display = 'none'
    }, 2000)
  } catch (error) {
    errordDom.style.display = 'block'
    errordDom.textContent = error.response.data.msg
    localStorage.removeItem('token')
    resultDOM.innerHTML = ''
    tokenDOM.textContent = 'no token present'
    tokenDOM.classList.remove('success')
  }
  setTimeout(() => {
    errordDom.style.display = 'none'
  }, 2000)
})

btnDOM.addEventListener('click', async () => {
  const token = localStorage.getItem('token')
  try {
    const { data } = await axios.get('/api/v1/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    resultDOM.innerHTML = `<h5>${data.msg}</h5><p>${data.secret}</p>`

    data.secret
  } catch (error) {
    localStorage.removeItem('token')
    resultDOM.innerHTML = `<p>${error.response.data.msg}</p>`
  }
})

const checkToken = () => {
  tokenDOM.classList.remove('success')

  const token = localStorage.getItem('token')
  if (token) {
    tokenDOM.textContent = 'token present'
    tokenDOM.classList.add('success')
  }
}
checkToken()
