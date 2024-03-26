import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react'

function Login() {
  const {push} = useRouter();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    console.log(e.target.email.value); 
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: "/dashboard"
      })
      if(!res?.error) push("/dashboard")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex justify-center w-full h-screen">
        <div className="place-self-center">
            <div className="flex flex-col w-full border-2 bg-[white] rounded-xl mt-8 py-10 px-8">
                <div className="flex flex-col justify-center text-center">
                    <img className="w-24 place-self-center" src="logo.svg" alt="" />
                    <h4 className="place-self-center font-bold text-[32px] text-black mt-5">
                        Login
                    </h4>
                </div>
                <form className="max-w-sm mx-auto mt-6 lg:w-[363px]" onSubmit={(e)=> handleSubmit(e)}>
                    <div className="mb-5">
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#DBE7C9] focus:border-[#789461] block w-full p-2.5" required placeholder="username" />
                    </div>
                    <div className="mb-5">
                        <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#DBE7C9] focus:border-[#789461] block w-full p-2.5" placeholder="password" required />
                    </div>
                    <button type="submit" className="text-white bg-teal-500 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-[#DBE7C9] font-medium rounded-lg text-sm w-full sm:w-auto lg:w-full px-5 py-2.5 text-center">Submit</button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Lupa password? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Hubungi admin</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login