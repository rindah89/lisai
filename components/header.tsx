"use client";

import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import Form from "next/form";
import { PackageIcon, TrolleyIcon } from "@sanity/icons";

const Header = () => {
  const { user } = useUser();

   /*const createClerkPasskey = async () => {
    try{
    await user?.createPasskey();
   } catch (error) {
    console.log(error);
   }*/


  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex items-center w-full flex-wrap justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-blue-400 hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Lisai
        </Link>
        <Form
          action="/search"
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </Form>

        <div className="flex items-center space-x-4 mt-4 sm:mt-0 flex-1 sm:flex-none">
            <Link href="/basket" 
            className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                <TrolleyIcon className="h-6 w-6" />
            <span>My Basket</span>
            </Link>

            <ClerkLoaded>
                {user &&  (
                    <Link href="/orders" className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <PackageIcon className="h-6 w-6" />
                        <span>My Orders</span>
                    </Link>
                )
            }

            {user? (
                <div className='flex items-center space-x-2'>
                    <UserButton />

                    <div className="hidden sm:block text-xs">
                        <p className=" text-gray-400">Welcome Back</p>
                        <p className=" font-bold">{user.firstName}</p>
                    </div>
                </div>
            ) : (
                <SignInButton mode="modal"/>
            )}
            {/* <button onClick={createClerkPasskey}
                className="flex-1 relative flex justify-center sm:justify-start sm:flex-none items-center border-blue-300 bg-white hover:bg-blue-700 text-blue-500 font-bold py-2 px-4 rounded"
                >
                    Create Passkey
                </button> */}
            </ClerkLoaded>
        </div>
      </div>
    </header>
  );
};

export default Header;
