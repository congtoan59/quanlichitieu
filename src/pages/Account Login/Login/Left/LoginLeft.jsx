import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import axios from 'axios';
import { setUser } from '../../../../redux/userSlice';
function LoginLeft() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(
                'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Account.json',
            );
            const accounts = response.data;

            let isAuthenticated = false;
            let loggedInUser = null;
            for (const key in accounts) {
                if (
                    accounts[key].email === email &&
                    accounts[key].password === password
                ) {
                    isAuthenticated = true;
                    loggedInUser = accounts[key]; // lưu thông tin người dùng
                    break;
                }
            }
            if (isAuthenticated) {
                setSuccess('Đăng nhập thành công!');
                toast.success('Đăng nhập thành công!');
                setError('');
                dispatch(setUser(loggedInUser));
                navigate('/');
            } else {
                setSuccess('');
                toast.error('Email hoặc mật khẩu không đúng.');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
            setSuccess('');
            toast.error('Login Fail!');
        }
    };

    return (
        <>
            <div className="h-[600px] leading-10 pl-16 pt-20 text-black ">
                <div className="back">
                    <a href="/">
                        <i className="fa-solid fa-arrow-left-long"></i>
                    </a>
                </div>
                <h2 className="text-3xl font-bold uppercase text-center">
                    Member Login{' '}
                </h2>

                <div className="flex gap-2 pt-6"></div>

                <form action="" onSubmit={handleSubmit} className="w-full">
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <div className="flex gap-3 max-w-[100%]  ">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email..."
                            className="w-[70%] rounded-3xl pl-2 flex-1 text-black bg-gray-300 focus:outline-dashed focus:ring-1 focus:ring-dashed focus:ring-grey "
                        />
                    </div>
                    <div className="flex gap-3 max-w-[100%] pt-4  ">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-[70%] rounded-3xl pl-2 flex-1 text-black bg-gray-300 focus:outline-dashed focus:ring-1 focus:ring-dashed focus:ring-grey "
                        />
                    </div>

                    <div className="flex gap-4 justify-center pt-6">
                        <button
                            type="submit"
                            className="bg-green-600 rounded-3xl text-white w-[45%] uppercase"
                        >
                            Login{' '}
                        </button>
                    </div>
                </form>

                <div className="flex gap-2">
                    <p className="text-gray-400">Forgot</p>
                    <a href="" className="text-gray-600 font-bold">
                        UserName /{' '}
                    </a>
                    <a href="" className="text-gray-600 font-bold">
                        PassWord?{' '}
                    </a>
                </div>
                <div className="text-gray-600  ">
                    <a
                        href="/register"
                        className="flex gap-3 items-center justify-center pt-20"
                    >
                        <h2>Create your Account ? </h2>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>
            </div>
        </>
    );
}

export default LoginLeft;
