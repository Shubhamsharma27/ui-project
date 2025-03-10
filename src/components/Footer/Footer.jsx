import BSI from "../../assets/FooterImg/bsi.png";
import BSI2 from "../../assets/FooterImg/bsi2.png";
import BSI3 from "../../assets/FooterImg/bsi3.png";
import Clip from "../../assets/FooterImg/Clip.png";
import GDPR from "../../assets/FooterImg/gdpr.png";
import ReadImg from "../../assets/FooterImg/Read.png";
import Linkedin from "../../assets/FooterImg/Linkedin.png";
import Facebook from "../../assets/FooterImg/Facebook.png";
import Instagram from "../../assets/FooterImg/Instagram.png";
import X from "../../assets/FooterImg/X.png";

const Footer = () => {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div>
            <h2 className="font-bold mb-4">Product</h2>
            <ul>
              <li className="mb-2">Webinar+</li>
              <li className="mb-2">Media+</li>
              <li className="mb-2">
                Generate Interest <span>👀</span>
              </li>
              <li className="mb-2">
                Capture Intent <span>🤔</span>
              </li>
              <li className="mb-2">
                Prove Impact <span>✴️</span>
              </li>
              <li className="mb-2">
                Repurpose Content <span>🏴</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Who are you</h2>
            <ul>
              <li className="mb-2">Demand Gen Marketer</li>
              <li className="mb-2">Content Marketer</li>
              <li className="mb-2">Event Marketer</li>
              <li className="mb-2">Field Marketer</li>
              <li className="mb-2">Marketing Op</li>
              <li className="mb-2">CMO</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">Resources</h2>
            <ul>
              <li className="mb-2">People who love us</li>
              <li className="mb-2">People who hate us</li>
              <li className="mb-2">Our Webinars</li>
              <li className="mb-2">Our Thoughts</li>
              <li className="mb-2">Help!</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-4">About Us</h2>
            <ul>
              <li className="mb-2">Mission + Values</li>
              <li className="mb-2">The Head Honchos</li>
              <li className="mb-2">The Gossip</li>
              <li className="mb-2">Our Contact Deets</li>
              <li className="mb-2">Join the team!</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-bold mb-4">Contact us</h2>
            <p className="mb-4">
              to see what Webinar+ can do for your business
            </p>
            <div className="flex items-center border rounded p-2 mb-4">
              <input
                className="flex-grow p-2 outline-none"
                placeholder="Enter your email"
                type="email"
              />
              <button className="p-2">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="mb-4">
              <img
                alt="G2 logo with text 'Read our reviews on G2.com'"
                className="mx-auto"
                height="800"
                src={ReadImg}
                width="800"
              />
              <div className="flex items-center justify-center m-4 gap-2 ">
                <img src={Linkedin} />
                <img src={Facebook} />
                <img src={Instagram} />
                <img src={X} />
              </div>
            </div>
            <div className="flex justify-around">
              <a href="#">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t mt-6 pt-6 justify-between">
          <div className="flex justify-center space-x-4 mb-4">
            <img alt="BSI logo 1" height="50" src={BSI} width="50" />
            <img alt="BSI logo 2" height="50" src={BSI2} width="50" />
            <img alt="BSI logo 3" height="50" src={BSI3} width="50" />
            <img alt="GDPR Ready logo" height="50" src={Clip} width="50" />
            <img alt="CCPA Ready logo" height="50" src={GDPR} width="50" />
          </div>
          <p className=" text-sm mb-4 ">© 2022 Hubilo. All rights reserved</p>
          <div className="flex justify-end space-x-4 text-sm gap-4 mb-15 ">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Security and Compliance</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
