export const hideEmail = (email: string) => {
  if (!email) return
  return email.split('@')[0].slice(0, 2) + '**' + '@**.'
    + email.split('.')[email.split('.').length - 1]
}

export const hidePhone = (phone: string) => {
  if (!phone) return
  return phone.slice(0, 3) + '******'
}
