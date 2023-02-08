import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="dark:bg-gray-800 home-bg sm:h-full min-h-screen">
      <div className="relative py-16 font-poppins ">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto space-y-8 md:w-6/12 lg:w-6/12 xl:w-6/12">
            
            <div className="rounded-3xl  bg-white dark:bg-gray-900  shadow-2xl shadow-gray-600/10 backdrop-blur-2xl">
              <div className="p-8 py-12 sm:p-16">
                <h2 className="mb-8 text-2xl font-bold text-gray-800 dark:text-white">
                  Log in to your account
                </h2>
                <form action="" className="space-y-8">
                
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-gray-600 dark:text-gray-300">
                      Email
                    </label>
                    <input
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="username"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-gray-600 dark:text-gray-300">
                        Password
                      </label>
                      
                    </div>
                    <input
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="current-password"
                      className="focus:outline-none block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-transparent px-4 py-3 text-gray-600 transition duration-300 invalid:ring-2 invalid:ring-red-400 focus:ring-2 focus:ring-cyan-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="border-2 relative dark:bg-blue-400 rounded-md flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 "
                  >
                    <span className="relative text-base font-semibold text-dark dark:text-white">
                      Log in
                    </span>
                  </button>

                  <p className="border-t hover:text-blue-300 border-gray-100 dark:border-gray-700 pt-6 text-sm text-gray-500 dark:text-gray-400">
                    Don't have an account ? {" "}
                    <Link href={"/signup"} className="text-primary">
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login