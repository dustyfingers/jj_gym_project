import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './TopbarMenuMobile.module.scss';

const TopbarMenuMobile = () => {
    return (
        <div className={styles.topbar_menu_mobile}>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
        </div>
    );
}

export default TopbarMenuMobile;