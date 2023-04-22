import { GlobalStyle } from '../GlobalStyle';
import { Layout } from 'components/Layout';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Navigation  from '../Navigation'




const SharedLayout = () => (
    <Layout>
        <div>
            <Navigation />
        </div>
        
    
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
        </Suspense>
        <GlobalStyle />
    </Layout>
);

export default SharedLayout;