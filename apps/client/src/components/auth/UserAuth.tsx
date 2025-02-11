import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import auth from '../../assets/images/login/auth.jpg';
import { Header } from '../header';

export const UserAuth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (<>
        <Header />
        <div className="flex justify-center items-center w-screen h-screen bg-gray-100 p-4 ">
            <div className="flex bg-white shadow-lg rounded-xl overflow-hidden max-w-4xl w-full p-4">
                <div className="w-1/2 relative">
                    <img src={auth} alt="auth-image" className="w-full h-full object-cover rounded-lg" />
                    
                </div>
                <div className="w-1/2 p-8 flex flex-col justify-center">
                    <div className="text-2xl font-bold mb-6">{isLogin ? 
                    (<div className="flex flex-col items-center">
                        <h1 className="text-base font-semibold mb-4">Welcome Back</h1>
                        <p className="text-sm text-center text-slate-600 font-medium">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
                    </div>) : 
                    (<div className="flex flex-col items-center">
                        <h1 className="text-base font-semibold mb-4">Welcome Back</h1>
                        <p className="text-sm text-center text-slate-600 font-medium">Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
                    </div>)}</div>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                    <div className="text-center text-sm text-gray-600">
                        <button
                            onClick={toggleForm}
                            className="text-primary hover:underline"
                        >
                            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                        </button>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <span className="mx-4 text-gray-500">Or</span>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>
                        <div className="mt-6 flex justify-center space-x-4">
                            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img src="https://www.google.com/favicon.ico" alt="Google" className="h-5 w-5 mr-2" />
                                Sign in with Google
                            </button>
                            <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                <img src="https://www.facebook.com/favicon.ico" alt="Facebook" className="h-5 w-5 mr-2" />
                                Sign in with Facebook
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 text-center text-xs text-gray-500">
                        © 2025 ALL RIGHTS RESERVED
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};