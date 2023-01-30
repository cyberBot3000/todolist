import React, { useEffect, useState } from 'react';
import Context from '../../context/Context';
import Home from '../../pages/Home/Home';
import Header from '../Header/Header';

const App = () => {
	const [language, setLanguage] = useState('ru');
	const [contextVal, setContextVal] = useState({
		language,
		setLanguage,
	});
	useEffect(() => {
		setContextVal({ ...contextVal, language });
	}, [language]);

	return (
		<Context.Provider value={contextVal}>
			<div className='App'>
				<Header />
				<Home />
			</div>
		</Context.Provider>
	);
};

export default App;
