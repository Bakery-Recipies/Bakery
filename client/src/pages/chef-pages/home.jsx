import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';



const ChefProfilePage = () => {
    const chefName = "Sofia Bianchi";

    return (
        <div className="min-h-screen bg-[#f8e5e1]">


            {/* Hero Section */}
            <section className="h-[92vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')" }}>
                <div className="container mx-auto px-4">
                    <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-2xl animate-fade-in-up">
                        <h2 className="text-5xl font-bold mb-4 text-[#c98d83]">Chef {chefName}</h2>
                        <p className="text-xl mb-8 text-[#c98d83]">
                            Crafting artisanal breads and pastries with passion and precision.
                            Experience the magic of freshly baked goods, handcrafted daily.
                        </p>
                    </div>
                </div>
            </section>

            {/* Chef's Recipes Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">{chefName}'s Recipes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Recipe cards */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/236x/57/79/64/577964bf52039b836f54702c2f446a76.jpg" alt="Sourdough Bread" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Artisan Sourdough Bread</h3>
                            <p className="mb-4 text-gray-600">A crusty, tangy sourdough with a perfect crumb. Crafted with care over 24 hours.</p>
                            <Link to="/recipe-dish-management" className="hover:text-rose-200 transition duration-300">
                                <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">View Recipe</button>
                            </Link>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/736x/0d/77/0f/0d770f26a7e5bd07b70526cdaa888f9d.jpg" alt="Croissants" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Buttery Croissants</h3>
                            <p className="mb-4 text-gray-600">Flaky, golden croissants with a delicate texture. Perfect for breakfast or brunch.</p>
                            <Link to="/recipe-dish-management" className="hover:text-rose-200 transition duration-300">
                                <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">View Recipe</button>
                            </Link>                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/9d/f3/0b/9df30bcae481944aa5ce624715667497.jpg" alt="Cinnamon Rolls" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Gooey Cinnamon Rolls</h3>
                            <p className="mb-4 text-gray-600">Soft, sweet rolls with a cinnamon sugar swirl and cream cheese frosting.</p>
                            <Link to="/recipe-dish-management" className="hover:text-rose-200 transition duration-300">
                                <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">View Recipe</button>
                            </Link>                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/chef-catalog" className="hover:text-rose-200 transition duration-300">
                            <button className="bg-[#c98d83] text-white px-6 py-2 rounded-full hover:bg-[#b17c73] transition duration-300">
                                View All Recipes
                            </button>
                        </Link>

                    </div>
                </div>
            </section>

            {/* Chef's Dishes Section */}
            <section className="bg-[#f0d8d3] py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">{chefName}'s Dishes</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Dish cards */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/3b/00/6c/3b006c67ee8011d489519971396da6dc.jpg" alt="Artisan Bread Basket" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Artisan Bread Basket</h3>
                            <p className="mb-4 text-gray-600">Assortment of freshly baked artisan breads, including sourdough, ciabatta, and whole grain.</p>
                            <Link to="/recipe-dish-management" className="hover:text-rose-200 transition duration-300">
                                <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300 flex items-center justify-center w-full">
                                    <ShoppingCart className="mr-2" />
                                    View Details
                                </button>
                            </Link>

                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/31/53/39/315339551683fe82e933a3cf58a6fdb8.jpg" alt="Pastry Platter" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Gourmet Pastry Platter</h3>
                            <p className="mb-4 text-gray-600">Selection of finest pastries and viennoiseries, including croissants, danishes, and pain au chocolat.</p>
                            <Link to="/recipe-dish-management" className="hover:text-rose-200 transition duration-300">
                                <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300 flex items-center justify-center w-full">
                                    <ShoppingCart className="mr-2" />
                                    View Details
                                </button>
                            </Link>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <img src="https://i.pinimg.com/564x/ec/46/f2/ec46f23740e2cef9db88b8e346548fc6.jpg" alt="Dessert Tray" className="w-full h-48 object-cover mb-4 rounded" />
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Dessert Tray Deluxe</h3>
                            <p className="mb-4 text-gray-600">Assorted gourmet desserts and sweet treats, including tarts, éclairs, and macarons.</p>
                            <Link to="/recipe-dish-management" className="hover:text-rose-200 transition duration-300">
                                <button className="bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300 flex items-center justify-center w-full">
                                    <ShoppingCart className="mr-2" />
                                    View Details
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link to="/chef-catalog" className="hover:text-rose-200 transition duration-300">
                            <button className="bg-[#c98d83] text-white px-6 py-2 rounded-full hover:bg-[#b17c73] transition duration-300">
                                View All Recipes
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Baking Tips Section */}
            <section className="py-16 animate-fade-in">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">Baking Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Perfect Proofing</h3>
                            <p>Learn the secrets to achieving the perfect rise in your bread dough.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Mastering Macarons</h3>
                            <p>Tips and tricks for creating beautiful and delicious French macarons.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Section (Replacing Baking Classes) */}
            <section className="bg-[#f0d8d3] py-16 animate-fade-in">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-[#c98d83]">Seasonal Specialties</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Summer Fruit Tarts</h3>
                            <p>Delicate pastry shells filled with fresh, seasonal fruits and light custard.</p>
                            <button className="mt-4 bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">
                                Learn More
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Autumn Spice Breads</h3>
                            <p>Warm, comforting breads infused with seasonal spices and nuts.</p>
                            <button className="mt-4 bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">
                                Learn More
                            </button>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-xl font-semibold mb-2 text-[#c98d83]">Holiday Cookie Boxes</h3>
                            <p>Assorted festive cookies, perfect for gifting or enjoying with family.</p>
                            <button className="mt-4 bg-[#c98d83] text-white px-4 py-2 rounded hover:bg-[#b17c73] transition duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ChefProfilePage;