import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import Layout from '../common/Layout';

function Join() {
	const path = process.env.PUBLIC_URL;

	const initVal = {
		userid: '',
		pwd1: '',
		pwd2: '',
		email: '',
		gender: null,
		interests: null,
		route: '',
		comments: '',
	};

	const [val, setVal] = useState(initVal);
	const [err, setErr] = useState({});
	const [success, setSuccess] = useState(false);
	const [isSubmit, setIsSubmit] = useState(false);

	const check = (val) => {
		const errs = {};
		const eng = /[a-zA-z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+]/;

		if (val.userid.length < 5) {
			errs.userid = 'Please write at least 5 characters';
		}
		if (
			val.pwd1 < 5 ||
			!eng.test(val.pwd1) ||
			!num.test(val.pwd1) ||
			!spc.test(val.pwd1)
		) {
			errs.pwd1 =
				'Enter a password of 5 characters, English, numbers, special characters';
		}
		if (val.pwd1 !== val.pwd2 || !val.pwd2) {
			errs.pwd2 = 'Enter both passwords the same';
		}
		if (val.email.length < 10 || !/@/.test(val.email)) {
			errs.email =
				'Please enter your email address including @ at least 10 characters';
		}
		if (!val.gender) {
			errs.gender = 'Please select your gender';
		}
		if (!val.interests) {
			errs.interests = 'Please check one or more items';
		}
		if (val.route === '') {
			errs.route = 'Please select a reason to join';
		}
		if (val.comments.length < 10) {
			errs.comments = 'Please write at least 10 characters';
		}

		return errs;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...val, [name]: value });
	};
	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...val, [name]: isCheck });
	};
	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});
		setVal({ ...val, [name]: isCheck });
	};
	const handleSelect = (e) => {
		const { name } = e.target;
		const isSelected = e.target.options[e.target.selectedIndex].value;
		setVal({ ...val, [name]: isSelected });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErr(check(val));
	};
	const handleReset = () => {
		setVal(initVal);
		setErr({});
	};

	useEffect(() => {
		const len = Object.keys(err).length;

		if (len === 0 && isSubmit) {
			setSuccess(true);
		} else {
			setSuccess(false);
		}
	}, [err]);

	useEffect(() => {
		handleReset();
	}, [success]);

	return (
		<Layout
			name={'join'}
			subName1={'Privacy'}
			subName2={'Account'}
			subVisual={'figure6'}>
			<div className='privacy'>
				<h1>PRiVACY</h1>
				<div className='wrap'>
					<article>
						<h2>TERMS</h2>
						<p>
							Updated to September 2021. Welcome to vault.gucci.com website
							(hereinafter the “Website”).Use of the Website and of the Services
							implies the full acceptance of these Terms of Use and all
							guidelines and rules.
						</p>
						<span>
							<FontAwesomeIcon icon={faAngleRight} />
						</span>
					</article>
					<article>
						<h2>CONDITIONS</h2>
						<p>
							This Website may contain links to other websites. Gucci has no
							control over such websites and will not be responsible or liable
							for any accessibility of third-party websites or for their
							content.
						</p>
						<span>
							<FontAwesomeIcon icon={faAngleRight} />
						</span>
					</article>
					<article>
						<h2>PRIVACY</h2>
						<p>
							This privacy policy covers situations where we, Gucci, access,
							collect, store process, use, disclose or transfer your personal
							information in paper or electronic form. It also covers
							situations.
						</p>
						<span>
							<FontAwesomeIcon icon={faAngleRight} />
						</span>
					</article>
					<article>
						<h2>COOKIE POLICY</h2>
						<p>
							We, Gucci, act as the “data controller”, which means that we
							determine “why” and “how” your personal information is collected
							and used. We are a Italian corporation.
						</p>
						<span>
							<FontAwesomeIcon icon={faAngleRight} />
						</span>
					</article>
				</div>
			</div>

			<div className='account'>
				<h1>ACCOUNT</h1>
				<div className='wrap'>
					<div className='pic'>
						{success ? (
							<div className='successTxt'>
								<h3>THANK YOU FOR JOIN US</h3>
								<img src={`${path}/img/join_img2.jpg`} />
							</div>
						) : null}
						<img src={`${path}/img/join_img1.jpg`} />
					</div>
					<div className='form_wrap'>
						<h2>CREATE ACCOUNT</h2>
						<form onSubmit={handleSubmit}>
							<fieldset>
								<legend className='hidden'>CREATE ACCOUNT FORM</legend>
								<table>
									<caption className='hidden'>
										CREATE ACCOUNT FORM TABLE
									</caption>
									<tbody>
										<tr>
											<th>
												<label htmlFor='userid'>USER ID</label>
											</th>
											<td>
												<input
													type='text'
													name='userid'
													id='userid'
													placeholder='ID'
													value={val.userid}
													onChange={handleChange}
												/>
												<span className='err'>{err.userid}</span>
											</td>
										</tr>
										<tr>
											<th>
												<label htmlFor='pwd1'>PASSWORD</label>
											</th>
											<td>
												<input
													type='password'
													name='pwd1'
													id='pwd1'
													placeholder='Password'
													value={val.pwd1}
													onChange={handleChange}
												/>
												<span className='err'>{err.pwd1}</span>
											</td>
										</tr>
										<tr>
											<th>
												<label htmlFor='pwd2'>RE-PASSWORD</label>
											</th>
											<td>
												<input
													type='password'
													name='pwd2'
													id='pwd2'
													placeholder='Re-Password'
													value={val.pwd2}
													onChange={handleChange}
												/>
												<span className='err'>{err.pwd2}</span>
											</td>
										</tr>
										<tr>
											<th>
												<label htmlFor='email'>E-MAIL</label>
											</th>
											<td>
												<input
													type='text'
													name='email'
													id='email'
													placeholder='E-Mail'
													value={val.email}
													onChange={handleChange}
												/>
												<span className='err'>{err.email}</span>
											</td>
										</tr>
										<tr>
											<th>GENDER</th>
											<td>
												<label htmlFor='male'>
													<input
														type='radio'
														name='gender'
														id='male'
														onChange={handleRadio}
													/>
													MALE
												</label>
												<label htmlFor='female'>
													<input
														type='radio'
														name='gender'
														id='female'
														onChange={handleRadio}
													/>
													FEMALE
												</label>
												<span className='err'>{err.gender}</span>
											</td>
										</tr>
										<tr>
											<th>INTERESTS</th>
											<td>
												<label htmlFor='clothes'>
													<input
														type='checkbox'
														name='interests'
														id='clothes'
														onChange={handleCheck}
													/>
													CLOTHES
												</label>
												<label htmlFor='bag'>
													<input
														type='checkbox'
														name='interests'
														id='bag'
														onChange={handleCheck}
													/>
													BAG
												</label>
												<label htmlFor='jewelry'>
													<input
														type='checkbox'
														name='interests'
														id='jewelry'
														onChange={handleCheck}
													/>
													JEWELRY
												</label>
												<label htmlFor='shoes'>
													<input
														type='checkbox'
														name='interests'
														id='shoes'
														onChange={handleCheck}
													/>
													SHOES
												</label>
												<label htmlFor='beauty'>
													<input
														type='checkbox'
														name='interests'
														id='beauty'
														onChange={handleCheck}
													/>
													BEAUTY
												</label>
												<label htmlFor='deco'>
													<input
														type='checkbox'
														name='interests'
														id='deco'
														onChange={handleCheck}
													/>
													DECO
												</label>
												<span className='err'>{err.interests}</span>
											</td>
										</tr>
										<tr>
											<th>
												<label htmlFor='route'>JOIN ROUTE</label>
											</th>
											<td>
												<select name='route' id='route' onChange={handleSelect}>
													<option value=''>Choose One</option>
													<option value='routeSearch'>SEARCH</option>
													<option value='routeSns'>SNS</option>
													<option value='routeTv'>TV</option>
													<option value='routeFriend'>FRIEDN</option>
													<option value='routeStore'>STORE</option>
													<option value='routeEtc'>ETC</option>
												</select>
												<span className='err'>{err.route}</span>
											</td>
										</tr>
										<tr>
											<th>
												<label htmlFor='comments'>COMMENTS</label>
											</th>
											<td>
												<textarea
													name='comments'
													id='comments'
													cols='30'
													rows='10'
													spellCheck='false'
													placeholder='Write Your Message'
													value={val.comments}
													onChange={handleChange}></textarea>
												<span className='err'>{err.comments}</span>
											</td>
										</tr>
										<tr>
											<th colSpan='2'>
												<input
													type='reset'
													value='CANCEL'
													onClick={handleReset}
												/>
												<input
													type='submit'
													value='SEND'
													onClick={() => {
														setIsSubmit(true);
													}}
												/>
											</th>
										</tr>
									</tbody>
								</table>
							</fieldset>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export default Join;
