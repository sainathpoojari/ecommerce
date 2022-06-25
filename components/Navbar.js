import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiOutlineShoppingCart,
  AiFillCloseSquare,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import {MdAccountCircle } from "react-icons/md";

const Navbar =({cart , addToCart,removeFromCart,clearCart,subTotal}) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md sticky top-0 bg-white z-10">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image src="/main2.png" width={200} height={90} alt="" />
          </a>
        </Link>
      </div>
      <div className="nav ">
        <ul className="flex space-x-8 font-bold md:text-l items-center">
          <Link href={"/tshirts"}>
            <a>
              <li>T-shirts</li>
            </a>
          </Link>
          <Link href={"/hoodies"}>
            <a>
              <li>Hoodies</li>
            </a>
          </Link>
          <Link href={"/mugs"}>
            <a>
              <li>Mugs</li>
            </a>
          </Link>
          <Link href={"/stickers"}>
            <a>
              <li>Stickers</li>
            </a>
          </Link>
        </ul>
      </div>
      <div
        className="cart absolute right-0 cursor-pointer flex top-4 mx-5">
    <Link href={'/login'}><a><MdAccountCircle className="text-2xl md:text-3xl mx-4 "/></a></Link>  <AiOutlineShoppingCart  onClick={toggleCart} className="text-2xl md:text-3xl" />
      </div>
      <div
        ref={ref}
        className={`sidecart w-72 h-[100vh] absolute bg-violet-400 top-0 right-0 px-8 py-10 transhtmlForm transition-transhtmlForm ${Object.keys(cart).length ==0?'translate-x-full':'translate-x-0'}`}>
        <h2 className="font-bold tetxt-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className=" absolute top-5 right-2 cursor-pointer text-2xl text-pink-900">
          <AiFillCloseSquare />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length===0 && <div className="my-4 text-center">
            Your Cart is Empty
          </div> }
         { Object.keys(cart).map((k)=>{return <li key={k}>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">{cart[k].name}</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiOutlineMinusCircle onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" cursor-pointer " />
                <span className="mx-2 text-sm">{cart[k].qty}</span>
                <AiOutlinePlusCircle onClick={()=>{addToCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}} className=" cursor-pointer " />
              </div>
            </div>
          </li>})}
          <div className='ml-2 my-2 total'>Total Price:{subTotal}</div>
        </ol>
        <div className="flex">
         <Link href={'/checkout'}><button className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button></Link> 
          <button onClick={clearCart} className="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
