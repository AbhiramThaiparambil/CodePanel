import { UserButton } from "@clerk/react"
import Logo from "./Logo"
import { useLocation, useNavigate } from "react-router"

const Navbar = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const navigatetoPath = (path: string) => navigate(path)
    const links = [{ name: "dashboard", url: "/dashboard" }, { name: "problems", url: "/problems" }]
    const activeTab = (path: string) => path === location.pathname;
    return (
        <nav className="navbar sticky top-0 z-50 bg-base-100/70 backdrop-blur-md border-b border-base-200 px-4 md:px-8">
            <div className="flex-1">
                <Logo url="/dashboard" />
            </div>

            <div className="flex-none flex items-center gap-2 md:gap-4">

                <div className="flex items-center gap-1">

                    {links.map((l) => {
                        return <button onClick={() => navigatetoPath(l.url)} className={`btn btn-ghost btn-sm md:btn-md capitalize font-medium ${activeTab(l.url) ? " text-primary" : ""}`}>
                            {l.name}
                        </button>
                    })}


                </div>

                <div className="divider divider-horizontal mx-0 h-8 self-center"></div>

                <div className="flex items-center justify-center">
                    <UserButton
                        appearance={{
                            elements: {
                                avatarBox: "size-9 hover:scale-105 transition-transform"
                            }
                        }}
                    />
                </div>
            </div>
        </nav>
    )
}

export default Navbar