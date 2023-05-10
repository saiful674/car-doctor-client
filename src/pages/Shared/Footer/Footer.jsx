import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-white.png'
const Footer = () => {
    return (
    <section className='bg-neutral text-neutral-content mt-20'>
            <footer className="max-w-7xl mx-auto footer p-5 md:p-10 ">
        <div>
        <Link to='/'>
          <img src={logo} alt="" />
          </Link>
             <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
        </div> 
        <div>
          <span className="footer-title">Services</span> 
          <a className="link link-hover">Branding</a> 
          <a className="link link-hover">Design</a> 
          <a className="link link-hover">Marketing</a> 
          <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
          <span className="footer-title">Company</span> 
          <a className="link link-hover">About us</a> 
          <a className="link link-hover">Contact</a> 
          <a className="link link-hover">Jobs</a> 
          <a className="link link-hover">Press kit</a>
        </div> 
        <div>
          <span className="footer-title">Legal</span> 
          <a className="link link-hover">Terms of use</a> 
          <a className="link link-hover">Privacy policy</a> 
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </section>
    );
};

export default Footer;