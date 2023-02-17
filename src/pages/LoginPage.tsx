import React from 'react'

const LoginPage = ({setIsLoggedIn}: any) => {
  return (
    <div>
        you are logged out, please login to see protected routes
      Click the <button onClick={()=>setIsLoggedIn(true)}>Button</button> to login
    </div>
  )
}

export default LoginPage
