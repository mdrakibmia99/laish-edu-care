
import { CustomLink } from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
 
    return ( <nav className='nav-container text-center'>
            <div className={`flex mx-auto`}>
            <CustomLink to={"/home"}> Home</CustomLink>
            <CustomLink to={"/about"}> About</CustomLink>
            <CustomLink to={"/analytics"}> Analytics</CustomLink>
            <CustomLink to={"/reviews"}> Reviews</CustomLink>
            <CustomLink to={"/question"}> Question</CustomLink>

            </div>
        </nav>

    );
};

export default Header;