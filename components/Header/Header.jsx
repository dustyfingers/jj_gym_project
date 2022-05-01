import React, { useState, useEffect } from 'react';
import { 
    AppBar, 
    Container,
    Typography
} from '@mui/material';

import TopbarMenu from 'components/TOpbarMenu';
import TopbarMenuMobile from 'components/TopbarMenuMobile';

import useWindowDimensions from 'hooks/useWindowDimensions';

import styles from './Header.module.scss';

// if window width is less than 767px show the hamburger icon
const Header = ({ title }) => {

    const [dimensions, setDimensions] = useState(null);

    // useEffect(() => {
    //     const { height, width } = useWindowDimensions();

    //     setDimensions({ height, width })
    // }, [])

    return (
        <AppBar position="static" className={styles.topbar}>
            <Container>

                <div className={styles.topbar_content}>

                    <div>
                        <Typography variant="h6" className={styles.title}>
                            Renzo Gracie Colorado // Brazilian Jiu Jitsu Academy
                        </Typography>
                    </div>

                    <div>
                        {/* TODO: display topbar_menu or hamburger that opens mobile_topbar_menu */}
                        <TopbarMenu />
                        <TopbarMenuMobile />
                    </div>


                </div>

            </Container>
        </AppBar>
    );
}

export default Header;