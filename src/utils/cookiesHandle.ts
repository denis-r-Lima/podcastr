class Cookie {
  private CookieStringToObject() {
    const cookieString = decodeURIComponent(document.cookie)

    if (cookieString) {
      const cookiesArray = cookieString.split(';')

      let cookieObj = {}

      cookiesArray.map(cookie => {
        const [key, value] = cookie.trim().split('=')

        cookieObj[key] = value
      })

      return cookieObj
    }

    return false
  }

  CreateCookie(cookieName: string, cookieValue: any, expireDays?: number) {
    let expires = ''

    if (expireDays) {
      let currentDate = new Date()
      currentDate.setTime(
        currentDate.getTime() + expireDays * 24 * 60 * 60 * 1000
      )
      expires = `expires=${currentDate.toUTCString()}`
    }

    document.cookie = `${cookieName}=${JSON.stringify(cookieValue)};${expires}`
  }

  GetCookie(cookieName: string): any | boolean {
    const cookie = this.CookieStringToObject()[cookieName]

    if (!cookie) return false

    return JSON.parse(cookie)
  }

  DeleteCookie(cookieName: string) {
    this.CreateCookie(cookieName, '', -10)
  }
}

export default new Cookie()
