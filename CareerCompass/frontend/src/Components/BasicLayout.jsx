import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Layout';

const BasicLayout = () => {
    return (
        <>
            <Header />
            <div style={{paddingTop: '64px'}} >
                <Outlet/>
            </div>
        </>
    );
};

export default BasicLayout;
