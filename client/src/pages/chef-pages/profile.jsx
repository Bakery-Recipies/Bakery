import React, { useState } from 'react';
import { ShoppingCart, Save, Mail, Phone, User, Info } from 'lucide-react';

const Chef_profile = () => {
    const [chefInfo, setChefInfo] = useState({
        name: "Sofia Bianchi",
        email: "sofia.bianchi@example.com",
        phone: "+1 (555) 123-4567",
        bio: "Passionate baker specializing in artisanal breads and pastries."
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setChefInfo(prevInfo => ({
            ...prevInfo,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        console.log("Updating chef information:", chefInfo);
        // Implement the update logic here
    };

    return (
        <div className="min-h-screen bg-[#f8e5e1]">
            {/* Hero Section */}
            <section className="h-screen bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}>
                {/* Chef Information Section */}
                <section className="py-16 px-8 md:px-24 bg-white/90 backdrop-blur-lg rounded-lg shadow-2xl">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">Chef Information</h2>
                        <div className="max-w-2xl mx-auto space-y-6">
                            {/* Name Input */}
                            <div className="relative mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <div className="flex items-center border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                                    <User className="text-[#c98d83] mr-2" size={20} />
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={chefInfo.name}
                                        onChange={handleInputChange}
                                        className="w-full focus:outline-none border-none focus:ring-0"
                                        placeholder="Enter chef name"
                                    />
                                </div>
                            </div>
                            {/* Email Input */}
                            <div className="relative mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="flex items-center border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                                    <Mail className="text-[#c98d83] mr-2" size={20} />
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={chefInfo.email}
                                        onChange={handleInputChange}
                                        className="w-full focus:outline-none border-none focus:ring-0"
                                        placeholder="Enter email address"
                                    />
                                </div>
                            </div>
                            {/* Phone Input */}
                            <div className="relative mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <div className="flex items-center border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                                    <Phone className="text-[#c98d83] mr-2" size={20} />
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={chefInfo.phone}
                                        onChange={handleInputChange}
                                        className="w-full focus:outline-none border-none focus:ring-0"
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                            {/* Bio Input */}
                            <div className="relative mb-4">
                                <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                                <div className="flex items-start border-2 border-[#c98d83] rounded-md shadow-sm px-3 py-2">
                                    <Info className="text-[#c98d83] mr-2 mt-1" size={20} />
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        rows="4"
                                        value={chefInfo.bio}
                                        onChange={handleInputChange}
                                        className="w-full focus:outline-none border-none focus:ring-0"
                                        placeholder="Enter chef bio"
                                    ></textarea>
                                </div>
                            </div>
                            {/* Update Button */}
                            <div className="mt-6">
                                <button
                                    onClick={handleUpdate}
                                    className="w-full bg-[#c98d83] text-white px-6 py-3 rounded-full hover:bg-[#b67c73] transition-colors duration-300 flex items-center justify-center"
                                >
                                    <Save className="mr-2" size={20} />
                                    Update Profile
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* Latest Recipes Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">Latest Recipes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Recipe cards */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/236x/57/79/64/577964bf52039b836f54702c2f446a76.jpg" alt="Sourdough Bread" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Artisan Sourdough Bread</h3>
                            <p className="mb-4 text-gray-600">A crusty, tangy sourdough with a perfect crumb. Crafted with care over 24 hours.</p>
                            <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">View Recipe</button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/736x/0d/77/0f/0d770f26a7e5bd07b70526cdaa888f9d.jpg" alt="Croissants" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Buttery Croissants</h3>
                            <p className="mb-4 text-gray-600">Flaky, golden croissants with a delicate texture. Perfect for breakfast or brunch.</p>
                            <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">View Recipe</button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/9d/f3/0b/9df30bcae481944aa5ce624715667497.jpg" alt="Cinnamon Rolls" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Gooey Cinnamon Rolls</h3>
                            <p className="mb-4 text-gray-600">Soft, sweet rolls with a cinnamon sugar swirl and cream cheese frosting.</p>
                            <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">View Recipe</button>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-[#c98d83] text-white px-6 py-2 rounded-full hover:bg-[#b17c73] transition duration-300">
                            View All Recipes
                        </button>
                    </div>
                </div>
            </section>

            {/* Latest Dishes Section */}
            <section className="bg-[#f0d8d3] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">Latest Dishes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Dish cards */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/3b/00/6c/3b006c67ee8011d489519971396da6dc.jpg" alt="Artisan Bread Basket" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Artisan Bread Basket</h3>
                            <p className="mb-4 text-gray-600">Assortment of freshly baked artisan breads, including sourdough, ciabatta, and whole grain.</p>
                            <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300 flex items-center justify-center w-full">
                                <ShoppingCart className="mr-2" />
                                View Details
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/31/53/39/315339551683fe82e933a3cf58a6fdb8.jpg" alt="Pastry Platter" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Gourmet Pastry Platter</h3>
                            <p className="mb-4 text-gray-600">Selection of finest pastries and viennoiseries, including croissants, danishes, and pain au chocolat.</p>
                            <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300 flex items-center justify-center w-full">
                                <ShoppingCart className="mr-2" />
                                View Details
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/ec/46/f2/ec46f23740e2cef9db88b8e346548fc6.jpg" alt="Dessert Tray" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Dessert Tray Deluxe</h3>
                            <p className="mb-4 text-gray-600">Assorted gourmet desserts and sweet treats, including tarts, éclairs, and macarons.</p>
                            <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300 flex items-center justify-center w-full">
                                <ShoppingCart className="mr-2" />
                                View Details
                            </button>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="bg-[#c98d83] text-white px-6 py-2 rounded-full hover:bg-[#b17c73] transition duration-300">
                            View All Dishes
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Chef_profile;