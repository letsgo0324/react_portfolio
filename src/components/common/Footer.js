import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
	return (
		<footer>
			<div className='inner'>
				<ul className='txt'>
					<li>COMPANY</li>
					<li>FAQs</li>
					<li>CONTACT US</li>
					<li>LEGAL</li>
				</ul>
				<div className='search'>
					<button>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
					<label className='hidden'>SEARCH</label>
					<input type='search' name='search' id='search' placeholder='Search' />
				</div>

				<p>2022 Guccio Gucci S.P.A. All rights reserved.</p>
				<ul className='util'>
					<li>
						<FontAwesomeIcon icon={faTwitter} />
					</li>
					<li>
						<FontAwesomeIcon icon={faInstagram} />
					</li>
					<li>
						<FontAwesomeIcon icon={faFacebookF} />
					</li>
					<li>
						<FontAwesomeIcon icon={faYoutube} />
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
