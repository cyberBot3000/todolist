import React, { useContext } from 'react';
import Context from '../../context/Context';
import { getSimpleLocales } from '../../lib/locales';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import Container from '../layouts/Container/Container';
import './Header.css';

const Header = () => {
	const { language } = useContext(Context);
	return (
		<header className='header'>
			<Container className='header__container'>
				<div className='header__left'>
					<div className='header__label'>
						{getSimpleLocales('label', language)}
					</div>
				</div>
				<div className='header__right'>
					<div className='header__options'>
						<div className='header__option'>
							<div className='header__option-label'>
								{getSimpleLocales('language', language)}
							</div>
							<div className='header__option-input'>
								<LanguageSelect />
							</div>
						</div>
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
