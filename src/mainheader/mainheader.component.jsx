import "./mainheader.component.css";
// import iconlogo from '../assets/images/iconlogo.png';
// import img1 from '../assets/images/img1.jpg';
// import img2 from '../assets/images/img2.jpg';
// import img3 from '../assets/images/img3.jpg';
// import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';


export function MainheaderComponent() {
    return (
        <div>
        
            <div class="header">
                <a  class="logo" style={{textDecoration:"none"}}><img src={img5} width="40" alt=""></img>
                    &nbsp; Bayanno Diagnostic Center</a>
                <div class="header-right">
                    <a  href="/home">HOME</a>
                    <a href="/department">DEPARTMENTS </a>
                    <a href="/doctors">DOCTORS</a>
                    <a href="/aboutus">ABOUT US</a>
                    <a href="/appointments">APPOINTMENT</a>
                    <a href="/blog">BLOG</a>
                    <a href="/contactus">CONTACT</a>
                    <a href="/login">LOGIN</a>
                </div>
            </div>
        </div>
    )
}