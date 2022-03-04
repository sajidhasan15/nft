import React from 'react';
import Header from './Header';
import Section2 from './bodySection/Section2';
import Section3 from './bodySection/Section3';
import Section4 from './bodySection/Section4';
import Section5 from './bodySection/Section5';
import Section6 from './bodySection/Section6';
import Footer from './Footer';

function Body() {
  return (
    <div>
        <Header />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />
    </div>
  )
}

export default Body