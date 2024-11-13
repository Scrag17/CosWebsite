import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import { products } from '../data/products';
import ProductHeader from '../components/products/ProductHeader';
import ProductGrid from '../components/products/ProductGrid';
import ProductSidebar from '../components/products/ProductSidebar';
import ProductTestimonials from '../components/products/ProductTestimonials';
import ProductCTA from '../components/products/ProductCTA';
import ProductFAQ from '../components/products/ProductFAQ';

interface ProductsPageProps {
  onAddToCart: (product: Product) => void;
  onAddToWishlist: (product: Product) => void;
  wishlist: Product[];
}

export default function ProductsPage({ onAddToCart, onAddToWishlist, wishlist }: ProductsPageProps) {
  const [filters, setFilters] = useState({
    category: '',
    priceRange: [0, 200],
    searchQuery: '',
  });

  const categories = useMemo(() => 
    Array.from(new Set(products.map(p => p.category))),
    []
  );

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesCategory = !filters.category || product.category === filters.category;
      const matchesPrice = product.price <= filters.priceRange[1];
      const matchesSearch = product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
      
      return matchesCategory && matchesPrice && matchesSearch;
    });
  }, [filters]);

  return (
    <main className="pt-24">
      <ProductHeader />
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <ProductSidebar
              filters={filters}
              onFilterChange={setFilters}
              categories={categories}
            />
          </div>
          
          <div className="col-span-9">
            <ProductGrid
              products={filteredProducts}
              onAddToCart={onAddToCart}
              onAddToWishlist={onAddToWishlist}
              wishlist={wishlist}
            />
          </div>
        </div>
      </section>

      <ProductTestimonials />
      <ProductFAQ />
      <ProductCTA />
    </main>
  );
}