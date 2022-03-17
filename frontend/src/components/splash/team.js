import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/fontawesome-free-brands'
import {faLinkedin} from '@fortawesome/fontawesome-free-brands'
import { Link } from "react-router-dom";

function TeamShow() {
  return (
    <div className="team-container">
      <h1>Meet the team behind Unshelvd</h1>
      <div className="team-body">
        <div className="team-bill">
          <p>Bill Camarco</p>
          <Link to='https://github.com/Bill-the-dev' className="link">
            <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link to='https://www.linkedin.com/in/bill-camarco'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
        <div className="team-emily">
          <p>Emily Lichtenberg</p>
          <Link to='https://github.com/emilylichtenberg' className="link">
            <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link to='https://www.linkedin.com/in/emilylichtenberg/'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
        <div className="team-ethan">
          <p>Ethan Lam</p>
          <Link to='https://github.com/EthanLam17' className="link">
            <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link to=''>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
        <div className="team-kirby">
          <p>Kirby Neaton</p>
          <Link to='https://github.com/kirbyneaton' className="link">
            <FontAwesomeIcon icon={faGithub}/>
          </Link>
          <Link to='https://www.linkedin.com/in/kirbyneaton'>
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TeamShow