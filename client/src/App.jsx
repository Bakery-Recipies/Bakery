import React from "react";

import CheckoutComponent from "./components/checkout";


import { Routes, Route } from "react-router-dom";
import "./pages/chef-pages/animations.css"

import Header_chef from "./pages/chef-pages/header";
import Footer_chef from "./pages/chef-pages/footer";
import Chef_home_page from "./pages/chef-pages/home";
import Recipe_dish_creation from "./pages/chef-pages/recpie-dish";
import Recipe_dish_management from "./pages/chef-pages/recpie-dish-management";
import Catalog_chef from "./pages/chef-pages/catalog";
import Chef_profile from "./pages/chef-pages/profile";
import Contactus_chef from "./pages/chef-pages/chef-contact";


function App() {
  return (
    <>

      <Header_chef></Header_chef>
      <Routes>
        <Route path="/chef-home" element={<Chef_home_page></Chef_home_page>} />
        <Route path="/recipe-dish-create" element={<Recipe_dish_creation></Recipe_dish_creation>} />
        <Route path="/recipe-dish-management" element={<Recipe_dish_management></Recipe_dish_management>} />
        <Route path="/chef-catalog" element={<Catalog_chef></Catalog_chef>} />
        <Route path="/chef-profile" element={<Chef_profile></Chef_profile>} />
        <Route path="/chef-contact" element={<Contactus_chef></Contactus_chef>} />
      </Routes>
      <Footer_chef></Footer_chef>
      
      
      
      
      


    </>
  );
}

export default App;
