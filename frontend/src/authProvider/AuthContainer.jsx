import React, { createContext, useState } from 'react'
export const AuthContextData=createContext();
function AuthContainer({children}) {
    const [checkout,setcheckout]=useState(false)
    const[titles,setTitles]=useState("")
    console.log(titles)
    const [obj, setObj] = useState("user");
  return (
    <AuthContextData.Provider value={{checkout,setcheckout,obj, setObj,titles,setTitles}}>
      {children}
    </AuthContextData.Provider>
  )
}

export default AuthContainer
