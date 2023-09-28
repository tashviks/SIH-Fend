import React from 'react'
import '../../css/Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Footer">
                <a id="Footer"></a>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Project</span>iON</h3>
                            <p>Explore a dynamic hub of student projects, where creativity meets innovation, showcasing a world of learning and collaboration.</p>
                            <div className="footer-icons">
                                <i class="fa-brands fa-facebook"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">About Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Contact</h5>
                            <p><i class="fa-solid fa-phone-volume"></i> +91 9081976273</p>
                            <p><i class="fa-solid fa-envelope"></i> projection@gmail.com</p>
                            <p><i class="fa-solid fa-paper-plane"></i> Punjab, India.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Design By Project-iON</p>
            </div>
        </>
    )
}

export default Footer