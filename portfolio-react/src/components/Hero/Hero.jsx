import '../Hero/Hero.css';
import ProfileImage from '../../assets/Profile_Image.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={ProfileImage} alt="Photo" />
      <h1><span>Hi, I'm Vinay Kumar,</span> full stack python developer from India.</h1>
      <p>
        I'm a passionate developer with a love for building creative and impactful web applications. I enjoy solving problems, learning new technologies, and turning ideas into reality through code.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href={'#contact'}>Connect with me</AnchorLink></div>
        <div className="hero-resume"><a href="https://drive.google.com/file/d/1sX7XDhW235qEvBLLf-u0VzsPVQfDdMnZ/view?usp=drive_link" target='_blank'>Resume</a></div>
      </div>
    </div>
  )
}

export default Hero
