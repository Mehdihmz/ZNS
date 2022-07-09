const BASEURL = 'https://zns-api.herokuapp.com/';
export const useRequest = () => {
  const Request = async ({ url, form, method = 'POST' }) => {
    return await fetch(BASEURL + url, {
      headers: {
        "Content-type": "application/json",
      },
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

