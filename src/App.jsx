import React from 'react';
import Body from './components/Body';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Body />
      <Footer />
    </div>
  );
}
