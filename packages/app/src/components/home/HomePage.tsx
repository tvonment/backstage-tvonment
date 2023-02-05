import React from 'react';
import Grid from '@material-ui/core/Grid';
import { HomePageCompanyLogo } from '@backstage/plugin-home';

export const HomePage = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <HomePageCompanyLogo />
                <h2>Welcome to Backstage!</h2>
            </Grid>
        </Grid>
    );
};