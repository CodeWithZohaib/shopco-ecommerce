import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { categories, priceRanges, colors, sizes, dressStyles } from '../../lib/data';

const FilterSidebar = ({ filters, onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    colors: true,
    size: true,
    dressStyle: true
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    onFilterChange('priceRange', [0, value]);
  };

  const handleColorSelect = (color) => {
    const currentColors = filters.colors || [];
    const newColors = currentColors.includes(color.value)
      ? currentColors.filter(c => c !== color.value)
      : [...currentColors, color.value];
    onFilterChange('colors', newColors);
  };

  const handleSizeSelect = (size) => {
    const currentSizes = filters.sizes || [];
    const newSizes = currentSizes.includes(size.value)
      ? currentSizes.filter(s => s !== size.value)
      : [...currentSizes, size.value];
    onFilterChange('sizes', newSizes);
  };

  const handleStyleSelect = (style) => {
    onFilterChange('dressStyle', style.name);
  };

  const SectionHeader = ({ title, section, children }) => (
    <div className="border-b border-gray-200 pb-4 mb-4">
      <button
        onClick={() => toggleSection(section)}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-4"
      >
        {title}
        {expandedSections[section] ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {expandedSections[section] && children}
    </div>
  );

  return (
    <div className="w-full max-w-[295px] bg-white">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="opacity-40">
          <path d="M8.33333 15L15 8.33333L8.33333 1.66667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Categories Filter */}
      <SectionHeader title="Categories" section="categories">
        <div className="space-y-3">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="category"
                value={category.slug}
                checked={filters.category === category.slug}
                onChange={(e) => onFilterChange('category', e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center justify-between w-full">
                <span className={`text-sm ${filters.category === category.slug ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                  {category.name}
                </span>
                <span className="text-sm text-gray-400">({category.count})</span>
              </div>
            </label>
          ))}
        </div>
      </SectionHeader>
{/* Price Filter */}
<SectionHeader title="Price" section="price">
  <div className="space-y-4">
    <div className="px-3">
      <input
        type="range"
        min="50"
        max="500"
        value={filters.priceRange?.[1] || 500}
        onChange={handlePriceChange}
        className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer transition-all duration-200 ease-in-out
                   [&::-webkit-slider-thumb]:appearance-none
                   [&::-webkit-slider-thumb]:w-4
                   [&::-webkit-slider-thumb]:h-4
                   [&::-webkit-slider-thumb]:rounded-full
                   [&::-webkit-slider-thumb]:bg-black
                   [&::-webkit-slider-thumb]:transition-all
                   [&::-webkit-slider-thumb]:duration-200
                   [&::-webkit-slider-thumb]:ease-in-out"
      />
      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>${filters.priceRange?.[0] || 50}</span>
        <span>${filters.priceRange?.[1] || 500}</span>
      </div>
    </div>
  </div>
</SectionHeader>

      {/* Colors Filter */}
      <SectionHeader title="Colors" section="colors">
        <div className="grid grid-cols-5 gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorSelect(color)}
              className={`w-9 h-9 rounded-full border-2 ${
                filters.colors?.includes(color.value)
                  ? 'border-gray-900 ring-2 ring-gray-200'
                  : 'border-gray-300'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </SectionHeader>

      {/* Size Filter */}
      <SectionHeader title="Size" section="size">
        <div className="grid grid-cols-3 gap-2">
          {sizes.slice(0, 9).map((size) => (
            <button
              key={size.id}
              onClick={() => handleSizeSelect(size)}
              className={`px-4 py-2 text-sm font-medium rounded-full border ${
                filters.sizes?.includes(size.value)
                  ? 'bg-black text-white border-black'
                  : 'bg-gray-100 text-gray-700 border-gray-300 hover:border-gray-400'
              }`}
            >
              {size.value}
            </button>
          ))}
        </div>
      </SectionHeader>

      {/* Dress Style Filter */}
      <SectionHeader title="Dress Style" section="dressStyle">
        <div className="space-y-3">
          {dressStyles.map((style) => (
            <label key={style.id} className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="dressStyle"
                value={style.name}
                checked={filters.dressStyle === style.name}
                onChange={(e) => onFilterChange('dressStyle', e.target.value)}
                className="sr-only"
              />
              <div className="flex items-center justify-between w-full">
                <span className={`text-sm ${filters.dressStyle === style.name ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>
                  {style.name}
                </span>
                <span className="text-sm text-gray-400">({style.count})</span>
              </div>
            </label>
          ))}
        </div>
      </SectionHeader>

      {/* Apply Filter Button */}
      <button className="w-full bg-black text-white py-3 px-6 rounded-full font-medium text-sm hover:bg-gray-800 transition-colors">
        Apply Filter
      </button>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #000;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
};

export default FilterSidebar;