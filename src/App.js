import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

import Layout from './layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import FAQ from './components/pages/FAQ';
import NotFound from './components/pages/NotFound';
import MarketPlace from './components/pages/MarketPlace';
import SingleProperty from './components/pages/SingleProperty';
import './App.css';
import { config } from './config';

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="body-wrap">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/FAQ' element={<FAQ />}></Route>
                <Route path='/MarketPlace' element={<MarketPlace />}></Route>
                <Route path='/property/:id' element={<SingleProperty />}></Route>
                <Route path='*' element={<NotFound />} />
              </Routes>
            
            </Layout>
          </Router>
          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}

export default App;
