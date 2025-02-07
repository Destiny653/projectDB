 'use client'
import React, { useState, useEffect } from 'react';
import {
  Baby,
  Shirt,
  ShoppingBag,
  Moon,
  Footprints,
  Bath as BathIcon,
  Package,
  Filter,
  Milk,
  DollarSign,
  ChevronLeft,
  Loader
} from "lucide-react";
import { Bath, Cloths, Diaper, Feeding, Toy, Valies } from '../components/Content/Content';
import Slider from '../../../components/ui/Slider';
import Badge from '../../../components/ui/Badge';
import  Button  from '../../../components/ui/Button';

export default function Page() {
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0]);
  const [selectedAges, setSelectedAges] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState('valies');
  const [contentV, setContentV] = useState(null);

  // Navigation categories with purple theme
  const navigationCategories = [
    {
      id: 'bath',
      name: 'Bath',
      icon: <BathIcon className="w-5 h-5 text-purple-500" />,
      component: Bath
    },
    {
      id: 'clothing',
      name: 'Clothes',
      icon: <Shirt className="w-5 h-5 text-purple-500" />,
      component: Cloths
    },
    {
      id: 'diaper',
      name: 'Diaper',
      icon: <Baby className="w-5 h-5 text-purple-500" />,
      component: Diaper
    },
    {
      id: 'feeding',
      name: 'Feeding',
      icon: <Milk className="w-5 h-5 text-purple-500" />,
      component: Feeding
    },
    {
      id: 'toy',
      name: 'Toys',
      icon: <Package className="w-5 h-5 text-purple-500" />,
      component: Toy
    },
    {
      id: 'valies',
      name: 'Valies',
      icon: <ShoppingBag className="w-5 h-5 text-purple-500" />,
      component: Valies
    }
  ];

  const ageGroups = [
    { id: '0-12 months', label: 'Newborn (0-12m)' },
    { id: '3-24 months', label: 'Infant (3-24m)' },
    { id: '6-36 months', label: 'Toddler (6-36m)' },
    { id: '12-48 months', label: 'Preschool (12-48m)' },
    { id: 'all ages', label: 'All Ages' }
  ];

  const categoryFilters = {
    bath: [
      { id: 'Organic', label: 'Organic' },
      { id: 'Natural', label: 'Natural' },
      { id: 'Sensitive Care', label: 'Sensitive Care' }
    ],
    clothing: [
      { id: 'Essentials', label: 'Essentials' },
      { id: 'Sleepwear', label: 'Sleepwear' },
      { id: 'Special Occasion', label: 'Special Occasion' },
      { id: 'Active Wear', label: 'Active Wear' }
    ],
    diaper: [
      { id: 'Overnight Protection', label: 'Overnight' },
      { id: 'Sustainable', label: 'Eco-Friendly' },
      { id: 'Active Wear', label: 'Active' },
      { id: 'Sensitive Care', label: 'Sensitive' }
    ],
    feeding: [
      { id: 'Bottles', label: 'Bottles' },
      { id: 'Utensils', label: 'Utensils' },
      { id: 'Storage', label: 'Storage' },
      { id: 'Accessories', label: 'Accessories' }
    ],
    toy: [
      { id: 'Learning Toys', label: 'Learning' },
      { id: 'Sensory Toys', label: 'Sensory' },
      { id: 'Musical Toys', label: 'Musical' },
      { id: 'Bath Toys', label: 'Bath' }
    ],
    valies: [
      { id: 'Machine Washable', label: 'Washable' },
      { id: 'Breathable', label: 'Breathable' },
      { id: '100% Cotton', label: 'Cotton' }
    ]
  };

  const handleCategoryChange = (category) => {
    setIsLoading(true);
    const ComponentToRender = navigationCategories.find(cat => cat.id === category)?.component;
    if (ComponentToRender) {
      const currentFilters = {
        priceRange: priceRange[0],
        selectedAges,
        selectedCategories
      };

      setContentV(
        <ComponentToRender filters={currentFilters} />
      );
      setActiveCategory(category);
      setSelectedCategories([]);
    }
    // Simulate loading delay
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleAgeFilter = (ageId) => {
    setIsLoading(true);
    setSelectedAges(prev => {
      const newAges = prev.includes(ageId)
        ? prev.filter(age => age !== ageId)
        : [...prev, ageId];
      
      updateContentWithFilters(newAges, selectedCategories);
      return newAges;
    });
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCategoryFilter = (categoryId) => {
    setIsLoading(true);
    setSelectedCategories(prev => {
      const newCategories = prev.includes(categoryId)
        ? prev.filter(cat => cat !== categoryId)
        : [...prev, categoryId];
      
      updateContentWithFilters(selectedAges, newCategories);
      return newCategories;
    });
    setTimeout(() => setIsLoading(false), 500);
  };

  const updateContentWithFilters = (ages, categories) => {
    const ComponentToRender = navigationCategories.find(cat => cat.id === activeCategory)?.component;
    if (ComponentToRender) {
      const currentFilters = {
        priceRange: priceRange[0],
        selectedAges: ages,
        selectedCategories: categories
      };

      setContentV(
        <ComponentToRender filters={currentFilters} />
      );
    }
  };

  // Initial load
  useEffect(() => {
    const ComponentToRender = navigationCategories.find(cat => cat.id === 'valies')?.component;
    if (ComponentToRender) {
      setContentV(
        <ComponentToRender
          filters={{
            priceRange: 0,
            selectedAges: [],
            selectedCategories: [],
          }}
        />
      );
    }
    // Simulate initial loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Update content when price range changes
  useEffect(() => {
    setIsLoading(true);
    updateContentWithFilters(selectedAges, selectedCategories);
    setTimeout(() => setIsLoading(false), 500);
  }, [priceRange]);

  // Loading Screen
  if (!contentV) {
    return (
      <div className="flex justify-center items-center bg-purple-50 min-h-screen">
        <div className="text-center">
          <Loader className="mx-auto mb-4 w-12 h-12 text-purple-600 animate-spin" />
          <p className="font-medium text-purple-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex bg-purple-50 min-h-screen'>
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-white border-r border-purple-100`}>
        <div className="p-4">
          <div className="mb-6">
            <h3 className="flex items-center mb-2 font-semibold text-lg text-purple-900">
              <DollarSign className="mr-2 w-4 h-4 text-purple-600" />
              Price Range
            </h3>
            <Slider
              defaultValue={[0]}
              max={1000}
              step={10}
              value={priceRange}
              onValueChange={setPriceRange}
              className="text-purple-600"
            />
            <div className="mt-2 text-purple-600 text-sm">
              Max: ${priceRange[0]}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-lg text-purple-900">Age Groups</h3>
            <div className="space-y-2">
              {ageGroups.map(age => (
                <Badge
                  key={age.id}
                  variant={selectedAges.includes(age.id) ? "default" : "outline"}
                  className={`mr-2 mb-2 cursor-pointer ${
                    selectedAges.includes(age.id) 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'text-purple-600 border-purple-200 hover:border-purple-600'
                  }`}
                  onClick={() => handleAgeFilter(age.id)}
                >
                  {age.label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 font-semibold text-lg text-purple-900">Categories</h3>
            <div className="space-y-2">
              {categoryFilters[activeCategory]?.map(category => (
                <Badge
                  key={category.id}
                  variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                  className={`mr-2 mb-2 cursor-pointer ${
                    selectedCategories.includes(category.id) 
                      ? 'bg-purple-600 hover:bg-purple-700' 
                      : 'text-purple-600 border-purple-200 hover:border-purple-600'
                  }`}
                  onClick={() => handleCategoryFilter(category.id)}
                >
                  {category.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          {!isSidebarOpen && (
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(true)}
              className="border-purple-200 hover:border-purple-600 text-purple-600"
            >
              <Filter className="mr-2 w-4 h-4" />
              Filters
            </Button>
          )}
          
          <h1 className="font-bold text-2xl text-purple-900">
            {navigationCategories.find(cat => cat.id === activeCategory)?.name}
          </h1>

          {isSidebarOpen && (
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(false)}
              className="border-purple-200 hover:border-purple-600 text-purple-600"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
          )}
        </div>

        {/* Navigation Categories */}
        <div className="flex gap-4 mb-6 pb-2 overflow-x-auto">
          {navigationCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`flex items-center gap-2 ${
                activeCategory === category.id 
                  ? 'bg-purple-600 hover:bg-purple-700' 
                  : 'text-purple-600 border-purple-200 hover:border-purple-600'
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Content Area with Loading State */}
        <div className="relative">
          {isLoading && (
            <div className="z-10 absolute inset-0 flex justify-center items-center bg-purple-50/80">
              <div className="text-center">
                <Loader className="mx-auto mb-2 w-8 h-8 text-purple-600 animate-spin" />
                <p className="text-purple-600 text-sm">Loading...</p>
              </div>
            </div>
          )}
          {contentV}
        </div>
      </div>
    </div>
  );
}