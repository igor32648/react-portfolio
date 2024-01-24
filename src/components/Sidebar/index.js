import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoB from '../../assets/images/bird-svgrepo-com.png'
import LogoSubtitle from '../../assets/images/my-@igor32648.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoB} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='slobodan' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/igor-carlos-453101264/'>
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </li>
            <li>
                <a
                target='_blank'
                rel='noreferrer'
                href='https://github.com/igor32648'>
                    <FontAwesomeIcon icon={faGithub} />
                </a>
            </li>
            <li>
                <a
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/igor32648/'>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </li>
            <li>
                <a
                target='_blank'
                rel='noreferrer'
                href='https://www.youtube.com/channel/UC0pjUpOn-I1ZJyDc6WRfN7g'>
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar