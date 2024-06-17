import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Nav from './components/Ui/Nav';
import Header from './components/Home/Header';
import About from './components/Home/About';
import Services from './components/Home/Services';
import ChooseUs from './components/Home/ChooseUs';
import Blog from './components/Home/Blog';
import Blog4 from "/Images/Home/Blog4.jpg";
import Footer from './components/Ui/Footer';
import Testomonial from './components/Home/Testomonial';
import Form from './components/Home/Form';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    
      <Header />
      <About />
      <Services />
      <ChooseUs />
     <Blog></Blog>
    <Testomonial></Testomonial>
     <Form></Form>
    
    </>
  );
}

export default App;
