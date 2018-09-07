//Core
import React from 'react';
import {createPortal} from 'react-dom';

//instruments
import Styles from './styles.m.css';

export const Spinner = ({isSpinning}) => {
    const portal = document.getElementById('spinner');

    return createPortal(
        isSpinning ? <div className={Styles.spinner} /> : null,
        portal
    );
};