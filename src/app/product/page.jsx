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
} from "lucide-react";
import { Bath, Cloths, Diaper, Feeding, Toy, Valies } from '../components/Content/Content';
import Slider from '../../../components/ui/Slider';
import Badge from '../../../components/ui/Badge';
import Button from '../../../components/ui/Button';

export default function Page() {
    // State declarations
    const [priceRange, setPriceRange] = useState([0]);
    const [selectedAges, setSelectedAges] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeCategory, setActiveCategory] = useState('valies');
    const [contentV, setContentV] = useState(
        <Valies 
            filters={{
                priceRange: 0,
                selectedAges: [],
                selectedCategories: [],
            }}
        />
    );

    // Updated navigation categories to match API models
    const navigationCategories = [
        {
            id: 'bath',
            name: 'Bath',
            icon: <BathIcon className="w-5 h-5 text-blue-500" />,
            component: Bath
        },
        {
            id: 'clothing',
            name: 'Clothes',
            icon: <Shirt className="w-5 h-5 text-pink-500" />,
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
            icon: <Milk className="w-5 h-5 text-green-500" />,
            component: Feeding
        },
        {
            id: 'toy',
            name: 'Toys',
            icon: <Package className="w-5 h-5 text-indigo-500" />,
            component: Toy
        },
        {
            id: 'valies',
            name: 'Valies',
            icon: <ShoppingBag className="w-5 h-5 text-red-500" />,
            component: Valies
        }
    ];

    // Updated age groups to match API data
    const ageGroups = [
        { id: '0-12 months', label: 'Newborn (0-12m)' },
        { id: '3-24 months', label: 'Infant (3-24m)' },
        { id: '6-36 months', label: 'Toddler (6-36m)' },
        { id: '12-48 months', label: 'Preschool (12-48m)' },
        { id: 'all ages', label: 'All Ages' }
    ];

    // Updated category filters to match API subCategories
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
            // Reset category filters when changing main category
            setSelectedCategories([]);
        }
    };

    const handleAgeFilter = (ageId) => {
        setSelectedAges(prev => {
            const newAges = prev.includes(ageId)
                ? prev.filter(age => age !== ageId)
                : [...prev, ageId];
            
            updateContentWithFilters(newAges, selectedCategories);
            return newAges;
        });
    };

    const handleCategoryFilter = (categoryId) => {
        setSelectedCategories(prev => {
            const newCategories = prev.includes(categoryId)
                ? prev.filter(cat => cat !== categoryId)
                : [...prev, categoryId];
            
            updateContentWithFilters(selectedAges, newCategories);
            return newCategories;
        });
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

    // Effect to update content when price range changes
    useEffect(() => {
        updateContentWithFilters(selectedAges, selectedCategories);
    }, [priceRange]);

    return (
        <div className='flex bg-white min-h-screen'>
            {/* Sidebar */}
            <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-gray-50 border-r`}>
                <div className="p-4">
                    <div className="mb-6">
                        <h3 className="flex items-center mb-2 font-semibold text-lg">
                            <DollarSign className="mr-2 w-4 h-4" />
                            Price Range
                        </h3>
                        <Slider
                            defaultValue={[0]}
                            max={1000}
                            step={10}
                            value={priceRange}
                            onValueChange={setPriceRange}
                        />
                        <div className="mt-2 text-gray-600 text-sm">
                            Max: ${priceRange[0]}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="mb-2 font-semibold text-lg">Age Groups</h3>
                        <div className="space-y-2">
                            {ageGroups.map(age => (
                                <Badge
                                    key={age.id}
                                    variant={selectedAges.includes(age.id) ? "default" : "outline"}
                                    className="mr-2 mb-2 cursor-pointer"
                                    onClick={() => handleAgeFilter(age.id)}
                                >
                                    {age.label}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="mb-6">
                        <h3 className="mb-2 font-semibold text-lg">Categories</h3>
                        <div className="space-y-2">
                            {categoryFilters[activeCategory]?.map(category => (
                                <Badge
                                    key={category.id}
                                    variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                                    className="mr-2 mb-2 cursor-pointer"
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
                            className="text-gray-700"
                        >
                            <Filter className="mr-2 w-4 h-4" />
                            Filters
                        </Button>
                    )}
                    
                    <h1 className="font-bold text-2xl text-gray-900">
                        {navigationCategories.find(cat => cat.id === activeCategory)?.name}
                    </h1>

                    {isSidebarOpen && (
                        <Button
                            variant="outline"
                            onClick={() => setSidebarOpen(false)}
                            className="text-gray-700"
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
                            className="flex items-center gap-2"
                            onClick={() => handleCategoryChange(category.id)}
                        >
                            {category.icon}
                            {category.name}
                        </Button>
                    ))}
                </div>

                {/* Content Area */}
                {contentV}
            </div>
        </div>
    );
}
