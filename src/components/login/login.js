import { useContext, useRef } from "react"
import { AuthContext } from "../../context/auth-context"

export const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const {setToken} = useContext(AuthContext)

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const email = emailRef.current.value
    const password = passwordRef.current.value

    if(email.trim() && password.trim()) {
      const res = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      if(res.ok) {
        const data = await res.json()
        localStorage.setItem('token', data.token)
        setToken(data.token)
      }

    }
  }

  return <form action="#" method="POST" onSubmit={handleFormSubmit}>
    <input ref={emailRef} type="email" placeholder="Email" />
    <input ref={passwordRef} type="password" placeholder="Password" />
    <button type="submit">submit</button>
  </form>
}
