import React from 'react';
import useWindowDimensions from 'hooks/useWindowDimensions';

import styles from './Header.module.scss';

// if window width is less than 767px show the hamburger icon
const Header = ({ title }) => {

    const { height, width } = useWindowDimensions();

    return (<div className={styles.test}>{title}</div>);
}

export default Header;