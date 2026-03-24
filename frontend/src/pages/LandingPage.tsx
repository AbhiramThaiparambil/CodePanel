import { SignInButton, SignInWithMetamaskButton } from "@clerk/react"
import Logo from "../components/Logo"

const LandingPage = () => {
    return (
        <div >
            <nav className="navbar bg-base-100/60 backdrop-blur-sm shadow-sm">
                <div className="flex-1">
                    <Logo />

                </div>
                <div className="flex-none">

                    <SignInWithMetamaskButton mode="modal" >


                        <button className="btn btn-primary">
                            Login



                        </button>

                    </SignInWithMetamaskButton>


                </div>
            </nav>


            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Code Panel</h1>
                <p className="text-lg">Code Panel is a code editor for the web.</p>
            </div>



        </div>
    )
}

export default LandingPage