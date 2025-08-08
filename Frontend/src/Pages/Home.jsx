import React from 'react';
import { assets } from '../assets/assets';
import Header from '../components/Header';
import Middle from '../components/Middle';
import Circle from '../ui/Circle';
import Bgslider from '../components/Bgslider';
import Footer from '../components/Footer'

function Home() {
  return (
  <div>
     <Header/>
     <Middle/>
     <Circle/>
     <Bgslider/>
  </div>

  );
}

export default Home;
