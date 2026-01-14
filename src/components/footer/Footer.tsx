import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div
            className="flex flex-col space-y-10 justify-center m-10 border-t border-[var(--red)] pt-10">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
                <Link className="hover:text-gray-900" to="#">Home</Link>
                <Link className="hover:text-gray-900" to="#">Action</Link>
                <Link className="hover:text-gray-900" to="#">Puzzle</Link>
                <Link className="hover:text-gray-900" to="#">Racing</Link>
                <Link className="hover:text-gray-900" to="#">Sports</Link>
            </nav>

            <div className="flex justify-center space-x-5">
                <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </Link>
                <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </Link>
                <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </Link>
                <Link to="https://messenger.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </Link>
                <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </Link>
            </div>
            <p className="text-center text-gray-700 font-medium">&copy; 2022 Company Ltd. All rights reservered.</p>
        </div>
    )
}

export default Footer
