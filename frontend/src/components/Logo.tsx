import { Link } from 'react-router'

const Logo = ({ url = '/' }: { url?: string }) => {
    return (
        <Link to={url} className="btn btn-ghost text-xl">Code Panel</Link>
    )
}

export default Logo