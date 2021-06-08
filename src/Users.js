export const USERS = [
  { phone: '3174760745', name: 'Yeison', code: '1234' },
  { phone: '3174760742', name: 'Andres', code: '4321' }
]

export const login = (phone) => {
  return USERS.find(item => item.phone === phone)
}

export const verifiedCode = (code) => {
  return USERS.find(item => item.code === code) 
}