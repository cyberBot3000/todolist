import React, { useContext } from 'react';
import Select from 'react-select';
import Context from '../../context/Context';

const LanguageSelect = () => {
	const { setLanguage } = useContext(Context);
	const options = [
		{ value: 'ru', label: 'Русский' },
		{ value: 'en', label: 'English' },
	];
	return (
		<Select
			options={options}
			defaultValue={options[0]}
			onChange={(e) => {
				setLanguage(e.value);
			}}
		/>
	);
};

export default LanguageSelect;
