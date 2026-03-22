
import { Show, SignInButton, SignUpButton, UserButton, SignOutButton } from '@clerk/react'
import './App.css'

function App() {

  return (

    <>
      <Show when="signed-out">
        <SignInButton mode='modal' />
        <SignUpButton mode='modal' />
      </Show>
      <Show when="signed-in">
        <UserButton />
        <SignOutButton />
      </Show>    </>
  )
}

export default App
