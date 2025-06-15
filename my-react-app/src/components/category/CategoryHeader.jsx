import React, { useState } from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import FilterSidebar from './FilterSidebar'; 
import { createPortal } from 'react-dom'; 

const CategoryHeader = ({
  categoryName = "Casual",
  totalProducts = 145,
  currentPage = 1,
  totalPages = 10,
  sortBy = "Most Popular",
  onSortChange,
  filters,
  onFilterChange
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const startProduct = (currentPage - 1) * 9 + 1;
  const endProduct = Math.min(currentPage * 9, totalProducts);

  const sortOptions = [
    "Most Popular",
    "Newest",
    "Price: Low to High",
    "Price: High to Low",
    "Best Rating"
  ];

  return (
    <div className="flex flex-col gap-4 mb-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">{categoryName}</h1>
        <p className="text-gray-600 text-sm hidden md:block">
          Showing {startProduct}-{endProduct} of {totalProducts} Products
        </p>
      </div>

      {/* Sort + Filter Row */}
      <div className="flex items-center justify-between">
        <p className="text-gray-600 text-sm">
          Sort by: <span className="font-medium text-gray-900">{sortBy}</span>
        </p>

        {/* Sort Dropdown */}
        <div className="relative">
          <select
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent cursor-pointer"
            value={sortBy}
            onChange={(e) => onSortChange && onSortChange(e.target.value)}
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
        </div>
      </div>

      {/* Mobile Filter Button */}
      <button
        onClick={() => setShowFilters(true)}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:border-gray-400 md:hidden"
      >
        <SlidersHorizontal className="w-4 h-4" />
        Filters
      </button>

      {/* Mobile Filter Drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 bg-white p-4 overflow-y-auto transition-transform duration-300 transform translate-x-0 md:hidden">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Filters</h2>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-800 text-sm"
            >
              Close
            </button>
          </div>
          <FilterSidebar filters={filters} onFilterChange={onFilterChange} />
        </div>
      )}
    </div>
  );
};

export default CategoryHeader;
