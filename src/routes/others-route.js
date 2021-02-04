import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import AboutOne from '../components/pages/others/about-1';
import ContactOne from '../components/pages/others/contact-1';
import FAQ from '../components/pages/others/faq';
import ComingSoon from '../components/pages/others/coming-soon';
import Login from '../components/pages/others/login';
import ErrorPage from '../components/pages/others/404';

export default function OthersRoute() {
    return (
        <Switch>
            <Route exact path={ `${process.env.PUBLIC_URL}/pages/coming-soon` } component={ ComingSoon } />

            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/about` } component={ AboutOne } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/contact` } component={ ContactOne } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/login` } component={ Login } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/faq` } component={ FAQ } />
                <Route exact path={ `${process.env.PUBLIC_URL}/pages/404` } component={ ErrorPage } />
            </Layout>
        </Switch>
    );
}