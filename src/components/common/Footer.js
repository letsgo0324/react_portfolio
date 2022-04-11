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
					<li>
						<a href='#'>COMPANY</a>
					</li>
					<li>
						<a href='#'>FAQs</a>
					</li>
					<li>
						<a href='#'>CONTACT US</a>
					</li>
					<li>
						<a href='#'>LEGAL</a>
					</li>
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
						<a href='#'>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
					</li>
					<li>
						<a href='#'>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
					</li>
					<li>
						<a href='#'>
							<FontAwesomeIcon icon={faFacebookF} />
						</a>
					</li>
					<li>
						<a href='#'>
							<FontAwesomeIcon icon={faYoutube} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
