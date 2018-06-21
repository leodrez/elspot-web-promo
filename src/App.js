import React, { Component } from "react";
import "./App.css";

import img1 from "./static/images/pic1.png";
import img2 from "./static/images/pic2.png";
import img3 from "./static/images/pic3.png";
import graphic from "./static/svg/triangles.svg";
import pattern from "./static/svg/pattern.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  _handleInput = e => {
    this.setState({ input: e.target.value });
  };

  _handleSubmit = () => {
    console.log(this.state.input);
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <p>EL SPOT</p>
        </div>
        <div className="welcome-pic">
          <img src={img1} id="pic1" />
        </div>
        <div
          className="pattern"
          style={{
            backgroundImage: `url(${pattern})`
          }}
        >
          <div className="inner-pattern">
            <a href="#what">what?</a>
            <a href="#win">win!</a>
          </div>
        </div>
        <div className="inputs">
          <img src={graphic} className="graphic" />
          <div>
          <div className="inner-input">
            <link
              href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
              rel="stylesheet"
              type="text/css"
            />
            <div id="mc_embed_signup" >
              <form
                action="https://app.us18.list-manage.com/subscribe/post?u=5b4704449c4a1c5d5604c9d95&amp;id=5ae901c72b"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                novalidate
              >
                <div id="mc_embed_signup_scroll">
                  <input
                    type="email"
                    value={this.state.input}
                    name="EMAIL"
                    onChange={(e) => this._handleInput(e)}
                    className="input-field"
                    id="mce-EMAIL"
                    placeholder="email address"
                    required
                  />
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_5b4704449c4a1c5d5604c9d95_5ae901c72b"
                      tabindex="-1"
                      value=""
                    />
                  </div>
                  <div class="clear">
                    <input
                      type="submit"
                      value="Submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="submit-button"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          </div>
          <div className="body" id="what">
            <div className="what-inner">
              <p style={{ fontSize: "24px" }}>What is el Spot</p>
              <p>
                El Spot is an app where you can find, create and share skate
                spots with few taps on your phone. One of its big purposes is to
                support the skate scene in Puerto Rico and around the world.
                Built with the latest technology and skate experience to bring
                you a seemless experience so you can spend more time doing what
                you love.
              </p>
            </div>
            <div className="what-pic">
              <div
                className="pattern-two"
                style={{
                  backgroundImage: `url(${pattern})`
                }}
              >
                <img src={img2} id="pic2"/>
              </div>
            </div>
            <div className="what-inner-second" id="win">
              <p style={{ fontSize: "20px" }}>Win a FREE skate deck</p>
              <p>
                By subscribing you're automatically participating on a random
                skate giveaway by the release of the app in July 13. <br /> *Ask
                for the inaguration (free-beers)*.
              </p>
            </div>
            <div className="what-pic-end">
              <img src={img3} id="pic3" />
            </div>
          </div>
        </div>
        <div className="footer">
          <a
            href="http://www.leonardocalderon.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#bbb", fontSize: "12px" }}
          >
            @leodrezz
          </a>
        </div>
      </div>
    );
  }
}

export default App;
