import React from 'react';
import { ResetCSS } from './global/resetCSS';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import GithubProvider from './providers/github-provider';


function App() {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile>
            
          </Profile>
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
