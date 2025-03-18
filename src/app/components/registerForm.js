'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import registerUser from '../service/api'; 
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

const SignUp = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
      });

      console.log(userData)
    const [error, setError] = useState(null);
    const [success,setSuccess] =useState(null)
    const [submit, setSubmit] = useState(false)
    const router = useRouter()

    const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

    const handleSubmit = async(e) => {
        e.preventDefault();
        // setSubmit(true); 
        setError(null)
        setSubmit(true)

        try{
            console.log("user data:",userData)
            const data = await  registerUser(userData)
            alert("User registered successfully,please login..")
            router.push("/login");
        }catch(err){
            setError(err.message || "register failed")
        }finally{
            setSubmit(false)
        }
    };

    // useEffect(() => {
    //     if (submit) {
    //         const register = async () => {
    //             setError(null);
    //             setSuccess(null);
    //             try {
    //                 const response = await registerUser(userData);
    //                 setSuccess(response.message || 'Registration successful!');
    //                 // console.log("res data:",response)
    //             } catch (err) {
    //                 setError(err.error || 'Registration failed');
    //             } finally {
    //                 setSubmit(false);  // Reset submit state after API call
    //             }
    //         };
    //         register();
    //     }
    // }, [submit]); // Runs when 'submit' state changes

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-white to-orange-300">
            <div className="flex w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-lg">
                <div className="w-1/2 p-10">
                    <h2 className="mb-6 text-2xl font-bold text-gray-900">Sign Up</h2>
                    
                    {/* Error & Success Messages */}
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="relative flex items-center rounded-3xl bg-white p-2 shadow-md">
                            <FaEnvelope className="ml-2 text-pink-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={userData.email}
                                className="w-full border-none bg-transparent p-2 focus:outline-none text-pink-400"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="relative flex items-center rounded-3xl bg-white p-2 shadow-md">
                            <FaLock className="ml-2 text-pink-400" />
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={userData.password}
                                className="w-full border-none bg-transparent p-2 focus:outline-none text-pink-400"
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full rounded-full bg-gradient-to-r from-orange-400 to-pink-500 py-2 font-bold text-white shadow-md hover:opacity-90 cursor-pointer"
                            disabled={submit}  // Disable button when submitting
                        >
                            {submit ? 'Creating Account...' : 'Create Account'}
                        </button>
                        <p className="text-center text-sm text-gray-600">
                            Already have an account? <Link href="/login" className="text-orange-500">Sign in</Link>
                        </p>
                    </form>
                </div>
                <div className="flex w-1/2 items-center justify-center bg-gradient-to-b from-orange-400 to-pink-500 text-white">
                    <div className="p-10 text-center">
                        <h2 className="mb-4 text-2xl font-bold">Welcome!!</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
