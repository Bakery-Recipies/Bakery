import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Users, FileText, MessageSquare, ShoppingCart, Activity } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('home');

  const mockData = [
    { name: 'Jan', users: 400, sales: 2400 },
    { name: 'Feb', users: 300, sales: 1398 },
    { name: 'Mar', users: 200, sales: 9800 },
    { name: 'Apr', users: 278, sales: 3908 },
    { name: 'May', users: 189, sales: 4800 },
    { name: 'Jun', users: 239, sales: 3800 },
  ];

  const TabButton = ({ icon: Icon, label, tabName }) => (
    <button
      className={`flex items-center space-x-2 p-2 rounded-lg ${
        activeTab === tabName ? 'bg-blue-600 text-white' : 'hover:bg-gray-200'
      }`}
      onClick={() => setActiveTab(tabName)}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );

  const Home = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Total Users</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Total Recipes</h3>
          <p className="text-3xl font-bold">567</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Total Sales</h3>
          <p className="text-3xl font-bold">$12,345</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-lg">Pending Reviews</h3>
          <p className="text-3xl font-bold">89</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">User Activity and Sales</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="users" fill="#8884d8" name="New Users" />
            <Bar yAxisId="right" dataKey="sales" fill="#82ca9d" name="Sales ($)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const RecipeReviewManagement = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Recipe Review Management</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Pending Reviews</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipe</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">Chocolate Cake</td>
              <td className="px-6 py-4 whitespace-nowrap">4.5</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-green-600 hover:text-green-900 mr-2">Approve</button>
                <button className="text-red-600 hover:text-red-900">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const UserManagement = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">User Management</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Registered Users</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
              <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
              <td className="px-6 py-4 whitespace-nowrap">User</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-900 mr-2">Edit Role</button>
                <button className="text-red-600 hover:text-red-900">Deactivate</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const ContactMessages = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Manage Contact Messages</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Incoming Messages</h3>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Alice Johnson</td>
              <td className="px-6 py-4 whitespace-nowrap">Question about recipe</td>
              <td className="px-6 py-4 whitespace-nowrap">2023-09-01</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-blue-600 hover:text-blue-900">Respond</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white p-4 shadow">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        <nav className="space-y-2">
          <TabButton icon={Activity} label="Home" tabName="home" />
          <TabButton icon={FileText} label="Review Management" tabName="reviews" />
          <TabButton icon={Users} label="User Management" tabName="users" />
          <TabButton icon={MessageSquare} label="Contact Messages" tabName="messages" />
          <TabButton icon={ShoppingCart} label="Marketplace" tabName="marketplace" />
        </nav>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'home' && <Home />}
        {activeTab === 'reviews' && <RecipeReviewManagement />}
        {activeTab === 'users' && <UserManagement />}
        {activeTab === 'messages' && <ContactMessages />}
        {activeTab === 'marketplace' && <div>Marketplace Management (To be implemented)</div>}
      </main>
    </div>
  );
};

export default AdminDashboard;