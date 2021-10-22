import React from 'react';
import { ResetCSS } from './global/resetCSS';
import Layout from './components/layout';
import Profile from './components/profile';


function App() {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile></Profile>
      </Layout>
    </main>
  );
}

export default App;
