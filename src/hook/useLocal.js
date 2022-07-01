import React, { useContext } from 'react';
import { GlobalContext } from '@context/context';
import en from '@components/helper/en';
import mm from '@components/helper/mm';

export const useLocal = () => {
	const { lang } = useContext(GlobalContext);

	if (lang === 'en') {
		return en;
	} else {
		return mm;
	}
}

