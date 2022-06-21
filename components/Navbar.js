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

const Navbar = () => {
  
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
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-md">
      <div className="logo mx-5">
        <Link href={"/"}>
          <a>
            <Image src="/main2.jpg" width={200} height={90} alt="" />
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
        onClick={toggleCart}
        className="cart absolute right-0 cursor-pointer top-4 mx-5">
        <AiOutlineShoppingCart className="text-xl md:text-2xl" />
      </div>
      <div
        ref={ref}
        className="sidecart w-72 h-full absolute bg-violet-400 top-0 right-0 px-8 py-10 transform transition-transform translate-x-full">
        <h2 className="font-bold tetxt-xl text-center">Shopping Cart</h2>
        <span
          onClick={toggleCart}
          className=" absolute top-5 right-2 cursor-pointer text-2xl text-pink-900">
          <AiFillCloseSquare />
        </span>
        <ol className="list-decimal font-semibold">
          <li>
            <div className="item flex my-3">
              <div className="w-2/3 font-semibold">tshirts-wear the code</div>
              <div className="w-1/3 flex font-semibold items-center justify-center text-lg">
                <AiOutlineMinusCircle className=" cursor-pointer " />
                <span className="mx-2 text-sm">1</span>
                <AiOutlinePlusCircle className=" cursor-pointer " />
              </div>
            </div>
          </li>
        </ol>
        <div className="flex">
          <button class="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          <button class="flex mx-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
