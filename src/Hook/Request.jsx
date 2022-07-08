
export const useRequest = () => {
  const Request = async ({ url, form, method = 'POST' }) => {
    return await fetch('https://zns-api.herokuapp.com' + url, {
      method: method,
      body: JSON.stringify(form)
    }).then((resposen) => {
      if (resposen.status === 200) {
        return resposen.json().then((res) => { return { result: res, status: true } });
      } else {
        return resposen.json().then((result) => {
          return { result, status: false }
        })
      }
    }).catch((error) => {
      return { status: false, result: { message: 'error network!' } }
    })

  }
  return { Request }
}

