import React from 'react';
import HeroText from './hero/HeroText';
import HeroImage from './hero/HeroImage';
import BrandBar from './hero/BrandBar';
import NewArrivals from './hero/NewArrivals';
import TopSelling from './hero/TopSelling';
import DressStyleBrowse from './hero/DressStyleBrowse';
import CustomerReviews from './hero/CustomerReviews';
import Newsletter from './hero/Newsletter';
import ProductGrid from './hero/ProductGrid'
// import { Products } from '../../lib/data';

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
<section className="container mx-auto px-4 py-12 lg:py-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
    <div className="flex flex-col justify-center space-y-6 max-w-xl">
      <HeroText />
    </div>
    <div className="flex justify-center items-center">
      <HeroImage />
    </div>
  </div>
</section>
<BrandBar/>
      {/* Other Sections */}
      <NewArrivals />
      <TopSelling />
      <ProductGrid/>
      <DressStyleBrowse />
      <CustomerReviews />
      <Newsletter />
    </div>
  );
}