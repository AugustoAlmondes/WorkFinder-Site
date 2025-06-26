import './footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-row">
                    <div className="footer-col">
                        <h4>Info</h4>
                        <ul className="links">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Compressions</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Collection</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Explore</h4>
                        <ul className="links">
                            <li><a href="#">Free Designs</a></li>
                            <li><a href="#">Latest Designs</a></li>
                            <li><a href="#">Themes</a></li>
                            <li><a href="#">Popular Designs</a></li>
                            <li><a href="#">Art Skills</a></li>
                            <li><a href="#">New Uploads</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul className="links">
                            <li><a href="#">Customer Agreement</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">GDPR</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Media Kit</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Newsletter</h4>
                        <p>
                            Subscribe to our newsletter for a weekly dose
                            of news, updates, helpful tips, and
                            exclusive offers.
                        </p>
                        <form action="#">
                            <input type="text" placeholder="Your email" required />
                            <button 
                            style={
                                {
                                    color: 'black',
                                    height:'100%',
                                    fontSize:'15px',
                                    backgroundColor:'rgb(255 255 255/ 40%)'
                                }
                            }
                            type="submit">SUBSCRIBE</button>
                        </form>
                        <div className="icons">
                            <i className="fa-brands fa-facebook-f"></i>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-github"></i>
                        </div>
                    </div>
                </div>

            <span style={{
                display:'block',
                textAlign: 'center',
                backgroundColor: '#2f2010',
                color: 'white'
            }}>

                Copyright &copy; 2024 WorkFinder All Rights Reserved
            </span>
            </footer>
            {/* <span style="text-align: center; background: #2f2010; color: white"> */}
        </>
    );
}