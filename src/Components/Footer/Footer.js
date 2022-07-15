import './Footer.css';
import ig from './Images/ig.png'
import etsy from './Images/etsy.png'

function Footer() {
    return (
        <footer>
            <div> 
                <h3 class="title"> ABOUT </h3>
                <p class="footer-text">© 2022 Wena Designs All Rights Reserved</p>
            </div>
            <div>
                <h3 class="title"> CONTACT </h3>
                <p class="footer-text">Wenadesigns@gmail.com</p>
            </div>
            <div>
                <h3 class="title"> SOCIAL </h3>
                <ul> 
                    <li className="footer-text"><a href = "https://glowforge.us/f/OFTNMNBB">Save $500 on Glowforge</a></li>
                    <br/>
                    <li><a href ="https://instagram.com/wenadesigns?igshid=NWRhNmQxMjQ=">
                    <img
                    src={ig}
                    alt="Instagram"
                    className="icon"
                    />
                    </a>
                    </li>
                    <li><a href="https://www.etsy.com/shop/WenaDesigns">
                    <img
                    src={etsy}
                    alt="Etsy"
                    className="icon"
                    />
                    </a>
                    </li>
                </ul>
            </div>
        </footer> 
    );
}

export default Footer; 
// about
// contact
// social 
