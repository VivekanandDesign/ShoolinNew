import { defineEventHandler, parseCookies, setCookie } from 'h3'

export default defineEventHandler((event) => {
  const cookies = parseCookies(event)
  
  // If no cookie consent, set it with secure attributes
  if (!cookies['cookie-consent']) {
    setCookie(event, 'cookie-consent', 'pending', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 365 // 1 year
    })
  }
})
