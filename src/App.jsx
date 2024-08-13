import React, { useState } from 'react';
import SwiperSliderHeroSection from "./Components/SwiperSliderHeroSection";
import SideBar from './Components/Sidebar';
import ProductData from './Components/ProductDataMain';
import OnlineOrderSection from './Components/OnlineOrderSection';
import SaveAndSubscribeImageSection from './Components/SaveAndSubscribeImagesSection';
import SpecialPromotionSection from './Components/SpecialPromotionSection';
import NavbarSection from './Components/NavbarSection';
import CopyrightSignSection from './Components/CopyrightSigImg';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-950">
      <div className="relative h-screen">
        <div>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <SwiperSliderHeroSection />
      </div>
      <div  id='products'>
        <ProductData />
      </div>
      <div>
        <OnlineOrderSection />
      </div>
      {isOpen && (
        <div>
          <SaveAndSubscribeImageSection />
        </div>
      )}
      <div id='special-promotion'>
        <SpecialPromotionSection />
      </div>

      <div id='navbar'>
        <NavbarSection />
      </div>

      <div>
        <CopyrightSignSection />
      </div>
    </div>
  );
}

export default App;
