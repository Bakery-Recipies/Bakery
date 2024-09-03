import React from 'react';
import { CreditCard, Plus } from 'lucide-react';

const CheckoutComponent = () => {
  return (
    <div className="bg-pink-100 p-4">
      <div className="mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold">Frozen-Cookie</h1>
          <div className="text-sm">
            <span className="text-gray-400">Your Cart</span> &gt; <span className="font-semibold">Check Out</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2 ">Express Checkout</h2>
              <div className="flex gap-2 ">
                <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:scale-110">Shop Pay</button>
                <button className="bg-white border border-gray-300 px-4 py-2 rounded hover:scale-110">
                  <img src="https://lh3.googleusercontent.com/CBDhGDth7rqSnLcRPjOdfw_HwgKS8Gu-KMIJKQQIXym3J32lqSrrBFTFRjIbKcFR7LNli8O-ChWEzL_Jz94G64jayZIgv5C2Bq3G" alt="Google Pay" className="h-9" />
                </button>
                <button className="bg-yellow-300 px-1 py-1 rounded hover:scale-110">
                  <img src="https://pbs.twimg.com/profile_images/1214220012979920898/N4tFtfjN_400x400.png" alt="Amazon Pay" className="h-8" />
                </button>
                <button className="bg-blue-500 text-white px-2 py-2 rounded hover:scale-110">
                    <img src="https://tap2pay.me/wp-content/uploads/2018/12/PayPal-Header-720x480-1.jpg" alt="paypal" className='h-6' />
                </button>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              <input type="email" placeholder="Email" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
              <label className="flex items-center mb-4">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Send me email and transaction SMS updates about my order. Msg & data rates may apply.</span>
              </label>
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <select className="w-full border border-gray-300 rounded px-3 py-2 mb-4">
                <option>Amman</option>
                <option>AL-Zarqa</option>
                <option>Homs</option>
              </select>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="First Name" className="border border-gray-300 rounded px-3 py-2" />
                <input type="text" placeholder="Last Name" className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <input type="text" placeholder="Company (Optional)" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
              <input type="text" placeholder="Address" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input type="text" placeholder="City" className="border border-gray-300 rounded px-3 py-2" />
                <input type="text" placeholder="Postal Code (Optional)" className="border border-gray-300 rounded px-3 py-2" />
              </div>
              <input type="text" placeholder="Phone" className="w-full border border-gray-300 rounded px-3 py-2 mb-4" />
            </div>

            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
              <div className="flex gap-4 mb-4 accent-pink-400">
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-3  " />
                  <span>Net Banking</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-3  " checked />
                  <span>Credit/Debit card</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="payment" className="mr-3 " />
                  <span>Cash on delivery</span>
                </label>
              </div>
              <div className="flex gap-4 shadow-black">
                <div className="bg-pink-100 p-4 rounded flex-grow shadow-xl w-20">
                  <img src="https://assets.weforum.org/organization/image/3aFMaJ3kyTD0580Nggta402aOQDX-KxPmM_GWtl2YNU.jpeg" alt="Visa" className="mb-2 h-8" />
                  <div className="text-sm">**** **** **** 0981</div>
                  <div className="text-xs text-gray-500">Expires 10/19</div>
                </div>
                <div className="bg-pink-100 p-4 rounded flex-grow shadow-xl w-20">
                  <img src="https://cdn.punchng.com/wp-content/uploads/2016/09/09143426/mastercard-e1473428077657.gif" alt="Mastercard" className="mb-2 h-8" />
                  <div className="text-sm">**** **** **** 2564</div>
                  <div className="text-xs text-gray-500">Expires 10/19</div>
                </div>
                <div className="bg-pink-100 p-4 rounded flex-grow flex items-center justify-center shadow-xl w-20 h-36">
                  <Plus size={24} />
                  <span className="ml-2">Add New Card</span>
                </div>
              </div>
            </div>

            <button className="ml-4 bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full w-52 border-black outline hover:bg-amber-300 hover:scale-95">
              Pay Now
            </button>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-pink-100 p-6 rounded">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="flex items-center mb-4">
                <img src="https://highkey.com/cdn/shop/products/Large_PNG-MC-CCHIP-2_25oz-051021-AMZ-PDP-3pack-Keto_1_1024x1024.png?v=1658768319" alt="Vegan Double Chocolate Cookie Dough" className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <div className="font-semibold">Vegan Double Chocolate Cookie Dough</div>
                  <div className="text-sm text-gray-600">$12.99</div>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <img src="https://www.proteincookiebutter.com/cdn/shop/products/9bac75c2-533a-59ce-a373-626e3de0b2e0_x265@2x.png?v=1604347618" alt="Vegan Peanut Butter Cookie Dough" className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <div className="font-semibold">Vegan Peanut Butter Cookie Dough</div>
                  <div className="text-sm text-gray-600">$22.10</div>
                </div>
              </div>
              <div className="flex mb-4">
                <input type="text" placeholder="Discount Code" className="flex-grow border border-gray-300 rounded-l px-3 py-2" />
                <button className="bg-yellow-400 text-black font-semibold px-4 py-2 rounded-r hover:bg-yellow-300">Apply</button>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>$35.09</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$10.99</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax</span>
                  <span>$6.99</span>
                </div>
                <div className="flex justify-between font-semibold text-lg mt-4">
                  <span>Total</span>
                  <span>$53.07</span>
                </div>
              </div>
            </div>
            <button className="mt-4 text-pink-800 font-semibold hover:text-pink-500">&lt; Return to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;