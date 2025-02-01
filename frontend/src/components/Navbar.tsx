import { BrowserRouter as Router, Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <Router>
            <nav className='bg-blue-500 p-4'>       
                <ul className='flex justify-center space-x-4'> 
                    <li> <Link className='' to="/study">study</Link></li>
                    <li> <Link className='' to="/contact">Contact</Link> </li>
                </ul>
            </nav>
        </Router>
    );
}










