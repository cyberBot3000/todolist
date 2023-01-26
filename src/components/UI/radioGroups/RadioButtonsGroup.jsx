import React from 'react';
import ButtonTextRounded from '../buttons/ButtonTextRounded';
import './radioGroups.css';

const RadioButtonsGroup = ({ buttonsPropsArr, className, name }) => (
	<div className={`radio-group ${className}`}>
		{buttonsPropsArr.map((btnProps) => (
			<div key={btnProps.id} className="radio-group__button">
				<input
					className="radio-group__radio-input radio-group__radio-input_hidden"
					id={btnProps.id}
					name={name}
					type="radio"
				/>

				<ButtonTextRounded
					className={`radio-group__radio-button ${btnProps.className}`}
					onClick={btnProps.onClick}
				>
					<label className="radio-group__radio-label" htmlFor={btnProps.id}>
						{btnProps.children}
					</label>
				</ButtonTextRounded>
			</div>
		))}
	</div>
);

export default RadioButtonsGroup;
