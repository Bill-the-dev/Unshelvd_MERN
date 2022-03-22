import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/fontawesome-free-brands'
import {faLinkedin} from '@fortawesome/fontawesome-free-brands'
import { Link } from "react-router-dom";

function TeamShow() {
  // const bill = 
  return (
    <div className="team-container">
      <h1>Meet the team behind Unshelvd</h1>
      <div className="team-body">
        <div className="team-bill">
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
          <img src="./emily.jpg"/>
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