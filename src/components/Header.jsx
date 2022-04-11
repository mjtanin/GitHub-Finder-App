import { Link, NavLink } from 'react-router-dom';
import logo from '../images/logo.png';

export const Navbar = ({item}) => {
    let activeStyle = {
        borderWidth: '1px',
        borderRadius: '6px',
        borderColor: '#000',
        
      };
      
    return (
        <li>
            <NavLink className="px-2 py-1 mx-2 text-lg text-black" to={item.url} style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>{item.title}</NavLink>
        </li>
    )
}

const Header = () => {
    const navItem = [
        {
            title: 'Home',
            url: './'
        },
        {
            title: 'Users',
            url: './users'
        },
        {
            title: 'About',
            url: './about'
        },
        {
            title: 'Contact',
            url: './contact'
        },
    ]

  return (
    <header className="flex p-5 bg-[#faeade]">
        <div className="container mx-auto my-0 flex justify-between items-center">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <Link to={'/'}>
                    <img className="w-20 cursor-pointer" src={logo} alt="logo" />
                </Link>
            </div>

            <nav className='md:flex items-center'>
                <ul className="list-none flex flex-initial items-center">
                    {navItem.map((item, index) => (
                        <Navbar key={item + index} item={item} />
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header