import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/fontawesome-free-brands'
import {faLinkedin} from '@fortawesome/fontawesome-free-brands'
import { Link } from "react-router-dom";

function TeamShow() {
  const emily = 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/splash-format/frontend/src/components/splash/emily.jpg'
  const bill = 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/splash-format/frontend/src/components/splash/bill.jpg'
  const ethan = 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/splash-format/frontend/src/components/splash/ethan.jpg'
  const kirby = 'https://raw.githubusercontent.com/Bill-the-dev/Unshelvd_MERN/splash-format/frontend/src/components/splash/kirby.jpg'
  return (
    <div className="team-container">
      <h1>Meet the team behind Unshelvd</h1>
      <div className="team-body">
        <div className="team-bill">
          <img src={bill} className='team-photo'/>
          <p>Bill Camarco</p>
          <button>
            <a href="https://github.com/Bill-the-dev" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faGithub} size='2x'/>
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/bill-camarco" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/>
            </a>
          </button>
        </div>
        <div className="team-emily">
          <img src={emily} className='team-photo'/>
          <p>Emily Lichtenberg</p>
          <button>
            <a href="https://github.com/emilylichtenberg" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faGithub} size='2x'/>
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/emilylichtenberg/" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/>
            </a>
          </button>
        </div>
        <div className="team-ethan">
          <img src={ethan} className='team-photo'/>
          <p>Ethan Lam</p>
          <button>
            <a href="https://github.com/EthanLam17" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faGithub} size='2x'/>
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/ethanlam0123/" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/>
            </a>
          </button>
        </div>
        <div className="team-kirby">
          <img src={kirby} className='team-photo'/>
          <p>Kirby Neaton</p>
          <button>
            <a href="https://github.com/kirbyneaton" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faGithub} size='2x'/>
            </a>
          </button>
          <button>
            <a href="https://www.linkedin.com/in/kirbyneaton" target='_blank'>
              <FontAwesomeIcon className='icon' icon={faLinkedin} size='2x'/>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TeamShow