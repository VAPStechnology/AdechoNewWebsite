import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ServiceOptionMob from './components/Home/ServiceOptionMob.jsx';
import LeadGenration from './components/Services/LeadGenration.jsx';
import Layout from './Layout.jsx';
import SocialMediaMarketing from './components/Services/SocialMediaMarketing.jsx';
import ContentMarketing from './components/Services/ContentMarketing.jsx';
import AboutUs from './components/AboutUs/AboutUS.jsx';
import SeoBacklinking from './components/Services/SeoBacklinking.jsx';
import Contact from './components/ContactUs/Contact.jsx'
import MobileAppDevelopment from './components/Services/MobileAppDevelopment.jsx';
import WebDesignAdnDevelopment from './components/Services/WebDesignAdnDevelopment.jsx';
import BlogOne from './components/Blog/BlogOne.jsx';
import BlogTwo from './components/Blog/BlogTwo.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
         <Route path='/' element={<Layout />} >
            <Route path='' element={<App />} />
            <Route path='/LeadGenration' element={<LeadGenration></LeadGenration>} />
            <Route path='/SocailMediaMarketing' element={<SocialMediaMarketing />}/>
            <Route path='/ContentMarketing' element={<ContentMarketing/>} />
            <Route path='/AboutUs' element={<AboutUs />} />
            <Route path='/SeoBacklinking' element={<SeoBacklinking></SeoBacklinking>} />
            <Route path='/Contact' element={<Contact></Contact>} />
            <Route path='/MobileAppDevelopment' element={<MobileAppDevelopment />} />
            <Route path='/WebDesign' element={<WebDesignAdnDevelopment></WebDesignAdnDevelopment>} />
            <Route path='/blog1' element={<BlogOne />} />
            <Route path='/blog2' element={<BlogTwo />} />
         </Route>
      </Routes>
    </Router>
      
  </React.StrictMode>,
)
