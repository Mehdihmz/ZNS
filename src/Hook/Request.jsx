export const useRequest = () => { 
  const Request = async ({ url, form, method = 'POST' }) => { 
   const body = {...form,re_password:form.password } 
   console.log(body) 
    return await fetch('https://verifybymail-cors.herokuapp.com/auth/users/', { 
      method: method, 
      body: body 
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