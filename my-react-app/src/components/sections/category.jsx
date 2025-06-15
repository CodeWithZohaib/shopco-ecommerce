"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../category/Breadcrumb";
import CategoryHeader from "../category/CategoryHeader";
import FilterSidebar from "../category/FilterSidebar";
import ProductGrid from "./hero/ProductGrid";
import Pagination from "../category/Pagination";
import Newsletter from "../category/Newsletter";
import { categoryProducts } from "../../lib/data";

const CategoryPage = () => {
  const { style } = useParams(); 
  const [filters, setFilters] = useState(null);
  const [sortBy, setSortBy] = useState("Most Popular");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const productsPerPage = 9;

  useEffect(() => {
    if (style) {
      setFilters({
        category: style,
        priceRange: [50, 500],
        colors: [],
        sizes: [],
        dressStyle: ""
      });
    }
  }, [style]);

  useEffect(() => {
    if (!filters) return;

    let filtered = categoryProducts.filter(product => {
      // Category match
      if (filters.category && product.category !== filters.category) return false;

      // Price Range
      const [min, max] = filters.priceRange;
      if (product.price < min || product.price > max) return false;

      // Colors
      if (filters.colors.length > 0) {
        const hasColor = product.colors.some(color => filters.colors.includes(color.value));
        if (!hasColor) return false;
      }

      // Sizes
      if (filters.sizes.length > 0) {
        const hasSize = product.sizes.some(size => filters.sizes.includes(size));
        if (!hasSize) return false;
      }

      return true;
    });

    // Sort logic
    switch (sortBy) {
      case "Price: Low to High":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "Price: High to Low":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "Best Rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "Newest":
        filtered.sort((a, b) => b.id - a.id);
        break;
      default:
        filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [filters, sortBy]);

  if (!filters) return null; 

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const getCurrentPageProducts = () => {
    const start = (currentPage - 1) * productsPerPage;
    return filteredProducts.slice(start, start + productsPerPage);
  };

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleSortChange = (newSort) => {
    setSortBy(newSort);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProductClick = (product) => {
    console.log("Clicked:", product);
    // Navigate logic (React Router or custom)
  };

  const breadcrumbItems = [
    { label: "Home", href: "/", current: false },
    { label: style.charAt(0).toUpperCase() + style.slice(1), href: `/category/${style}`, current: true }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="flex gap-8">
          <div className="hidden lg:block flex-shrink-0">
            <div className="sticky top-8">
              <FilterSidebar
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="flex-1">
         <CategoryHeader
  categoryName={style.charAt(0).toUpperCase() + style.slice(1)}
  totalProducts={filteredProducts.length}
  currentPage={currentPage}
  totalPages={totalPages}
  sortBy={sortBy}
  onSortChange={handleSortChange}
  filters={filters}                            
  onFilterChange={handleFilterChange}          
/>

            <ProductGrid
              products={getCurrentPageProducts()}
              onProductClick={handleProductClick}
            />

            {totalPages > 1 && (
              <div className="mt-16">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
};

export default CategoryPage;
