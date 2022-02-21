import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { useAuth } from '../auth/AuthProvider'

export const Login = () => {
  const { login, error } = useAuth()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          login({
            email: e.target.elements.email.value,
            password: e.target.elements.password.value,
          })
        }}
      >
        <TextField id="email" label="Email" variant="outlined" type={'email'} />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type={'password'}
        />
        <Button type={'submit'}>Submit</Button>
      </form>
      {error && <p>{error}</p>}
    </div>
  )
}
