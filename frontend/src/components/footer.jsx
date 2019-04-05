import React from 'react';
class Footer extends React.Component{
  render(){
    return(
      <footer className="footer">
        <div className="footer-container">
          <h2>Check us out!</h2>
          <a
            target="_blank"
            id='main-icon'
            className="link-tags"
            href="https://github.com/Brent1LT/P.A.R.C."
          >
            <i class="fa fa-github" />
          </a>
          <a
            target="_blank"
            id='portfolio-names'
            className="link-tags"
            href="https://brentbumann.dev"
          >
            Brent
            </a>
          <a
            target="_blank"
            id='portfolio-names'
            className="link-tags"
            href="https://samardrey.dev"
          >
            Sam
            </a>
          <a
            target="_blank"
            id='portfolio-names'
            className="link-tags"
            href="https://gflujan.com"
          >
            Gabe
            </a>
          <a
            target="_blank"
            id='portfolio-names'
            className="link-tags"
            href="https://vishavpreetsandhu.com"
          >
            Vishal
            </a>
        </div>
      </footer>
    );
  }
}

export default Footer;