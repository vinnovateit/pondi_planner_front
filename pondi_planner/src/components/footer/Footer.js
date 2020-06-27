import React, { Fragment } from "react";

// CSS
import "./Footer.css";
// IMAGES
import instagram from "../../assets/social_handles/instagram.png";
import facebook from "../../assets/social_handles/facebook.png";
import twitter from "../../assets/social_handles/twitter.png";
import github from "../../assets/social_handles/github.png";
import linkedin from "../../assets/social_handles/linkedin.png";
import youtube from "../../assets/social_handles/youtube.png";

// COMPONENT


// LINKED IN IMAGE AUTHOR
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// FACEBOOK IMAGE AUTHOR
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// GITHUB IMAGE AUTHOR
// Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// INSTAGRAM
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// YOUTUBE
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
// TWITTER
// Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

const MyFooter = () => {
    return (
        <Fragment>
            <div className="website_footer ">
                <div class="container">
                    <span className="bg_for_social_media_icons">
                        <img
                            className="social_media_icon"
                            src={instagram}
                            alt=""
                        />
                        <img
                            className="social_media_icon"
                            src={facebook}
                            alt=""
                        />
                        <img
                            className="social_media_icon"
                            src={twitter}
                            alt=""
                        />
                        <img
                            className="social_media_icon"
                            src={github}
                            alt=""
                        />
                        <img
                            className="social_media_icon"
                            src={linkedin}
                            alt=""
                        />
                        <img
                            className="social_media_icon"
                            src={youtube}
                            alt=""
                        />
                    </span>
                </div>
            </div>
        </Fragment>
    );
};

export default MyFooter;
