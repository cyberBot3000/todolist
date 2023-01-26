import { useEffect, useRef, useState } from 'react';

const useInputEdittor = (initVal, onSave) => {
	const [isEditting, setIsEditting] = useState(false);
	const editElemRef = useRef();
	useEffect(() => {
		if (!editElemRef.current) {
			return;
		}
		editElemRef.current.focus();
		editElemRef.current.value = editElemRef.current.value
			? editElemRef.current.value
			: initVal;
	}, [isEditting]);

	const editBtnClickHandler = () => {
		if (isEditting) {
			onSave();
		}
		setIsEditting((currIsEdditing) => !currIsEdditing);
	};
	return { isEditting, editElemRef, editBtnClickHandler };
};

export default useInputEdittor;
