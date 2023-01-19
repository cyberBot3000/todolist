import React from "react";
import ButtonTextRounded from "../buttons/ButtonTextRounded";
import "./radioGroups.css";

const RadioButtonsGroup = ({ buttonsPropsArr, className, name }) => {
	return (
		<div className={`radio-group ${className}`}>
			{buttonsPropsArr.map(btnProps => (
				<div className="radio-group__button">
					<input
						type="radio"
						name={name}
						id={btnProps.id}
						className="radio-group__radio-input radio-group__radio-input_hidden"
					/>
					<label htmlFor={btnProps.id} className="radio-group__radio-label">
						<ButtonTextRounded
							className={`radio-group__radio-button ${btnProps.className}`}
							{...btnProps}
						>
							{btnProps.children}
						</ButtonTextRounded>
					</label>
				</div>
			))}
		</div>
	);
};

export default RadioButtonsGroup;
