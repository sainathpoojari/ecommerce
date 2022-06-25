import React from 'react'
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import Link from "next/link";



const CheckOut = ({cart,addToCart,removeFromCart,subTotal}) => {
  return (
    <div className='container px-2 sm:m-auto' >
<h1 className="font-bold text-3xl my-8 text-center">checkout</h1>
<h2 className='font-semibold'> 1. Delivery Detals</h2>
<div className="mx-auto font-semibold flex my-2">
  <div className='px-2 w-1/2'>
  <div className="mb-4">
        <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
        <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  </div>
  <div className='px-2 w-1/2'>
  <div className="mb-4">
        <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  </div>
</div>
<div className='px-2 font-semibold w-full'>
  <div className="mb-4">
        <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
        <textarea name="address" id="address" cols="30" rows="2"  className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" ></textarea>
      </div>
  </div>
  <div className="mx-auto font-semibold flex my-2">
  <div className='px-2 w-1/2'>
  <div className="mb-4">
        <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
        <input type="number" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  </div>
  <div className='px-2 w-1/2'>
  <div className="mb-4">
        <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
        <input type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  </div>
  </div>
  <div className="mx-auto font-semibold flex my-2">
  <div className='px-2 w-1/2'>
  <div className="mb-4">
        <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
        <input type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  </div>
  <div className='px-2 w-1/2'>
  <div className="mb-4">
        <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
        <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
  </div>
  </div>
  <div>
  <h2 className='"font-semibold'>2.Review the Cart</h2>
  <div
        className="sidecart bg-violet-400 m-2 p-6">
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length===0 && <div className="my-4 font-semibold">Your Cart is Empty</div> }
         {Object.keys(cart).map((k)=>{return <li key={k}>
            <div className="item flex my-5">
              <div className="font-semibold">{cart[k].name}</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" cursor-pointer " />
                <span className="mx-2 text-sm">{cart[k].qty}</span>
                <AiOutlinePlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" cursor-pointer " /> </div>
            </div>
          </li>})}
        </ol>
                <span className='total ml-2 '>Total Price:₹{subTotal}</span>
  </div>
       <Link href={'/order'}>
        <button className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-xl"> <BsFillBagCheckFill className='mt-1'/>Pay Now ₹{subTotal} </button>
       </Link>
  
 </div>
</div>

  )
}

export default CheckOut