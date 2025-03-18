"use client"
import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-l from-white to-sky-800">
            {/* Left Side - Full-Screen Image */}
            <div className="hidden md:block w-1/2 h-screen">
                <Image
                    src="/loginPage-removebg-preview.png"
                    alt="Login Page Image"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 md:px-16">
                <h1 className="text-2xl font-bold mb-2">Welcome back!</h1>
                <p className="text-gray-600 mb-6">Please login into your account</p>

                {/* Form */}
                <form className="w-full max-w-sm">
                    <div className="mb-4">
                        {/* <label className="block text-sm font-medium text-gray-700">Email address</label> */}
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border  rounded-full "
                        />
                    </div>

                    <div className="mb-4">
                        {/* <label className="block text-sm font-medium text-gray-700">Password</label> */}
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border rounded-full"
                        />
                        <div className="text-right mt-1">
                            <a href="#" className="text-sky-800 text-sm">Forgot password?</a>
                        </div>
                    </div>

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="rememberMe" className="mr-2" />
                        <label htmlFor="rememberMe" className="text-sm text-gray-800">Remember for 30 days</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-800 text-white py-2 rounded-full cursor-pointer"
                    >
                        Login
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="mt-4 text-gray-600 text-sm">
                    Don't have an account? <Link href="/register" className="text-sky-800">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
export default LoginPage;
