import React, { useState } from 'react';
import Image from  'next/image';
import { 
    AppBar, 
    Container,
    Typography
} from '@mui/material';

import TopbarMenu from 'components/TOpbarMenu';
import TopbarMenuMobile from 'components/TopbarMenuMobile';

import styles from './Header.module.scss';

const Header = ({ title }) => {

    return (
        <AppBar position="static" className={styles.header}>
            <Container>

                <div className={styles.header_content}>

                    <div className={styles.header_lead_container}>
                        <div className={styles.logo_wrapper}>
                            <Image src="/images/renzo-gracie-logo-white.png" height={'32px'} width={'32px'} />
                        </div>
                        <div className={styles.title_container}>
                            <Typography variant="h5" className={styles.title}>
                                Renzo Gracie Colorado BJJ Academy
                            </Typography>
                            <Typography variant="p" className={styles.title}>
                                
                            </Typography>
                        </div>

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