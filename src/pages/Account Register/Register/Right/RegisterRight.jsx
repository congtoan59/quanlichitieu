import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import { toast } from 'react-toastify';

import { postData } from '../../../../service/ApiService';
function RegisterRight() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const reponse = await postData(
                'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Account.json',
                {
                    username,
                    email,
                    password: hashedPassword,
                },
            );
            setSuccess('Registration successful!');
            toast.success('Registration successful!');
            setError('');
            navigate('/login');
        } catch (error) {
            setError('Registration failed. Please try again.');
            toast.error('Registration Failed. Please try again!');

            setSuccess('');
        }
    };
    return (
        <>
            <div className="h-[600px] w-2/3 leading-10 pl-36 pt-20 text-black  ">
                <h2 className="text-3xl font-bold uppercase pl-[20%] ">
                    Register{' '}
                </h2>
                <div className="flex gap-2 pt-6"></div>

                <form action="" onSubmit={handleSubmit} className="w-full  ">
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <div className="flex gap-3 max-w-[70%] pt-4  ">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="w-[70%] rounded-3xl pl-2 flex-1 text-black bg-gray-300 focus:outline-dashed focus:ring-1 focus:ring-dashed focus:ring-grey "
                        />
                    </div>
                    <div className="flex gap-3 max-w-[70%] pt-4  ">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email..."
                            className="w-[70%] rounded-3xl pl-2 flex-1 text-black bg-gray-300 focus:outline-dashed focus:ring-1 focus:ring-dashed focus:ring-grey "
                        />
                    </div>
                    <div className="flex gap-3 max-w-[70%] pt-4  ">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="w-[70%] rounded-3xl pl-2 flex-1 text-black bg-gray-300 focus:outline-dashed focus:ring-1 focus:ring-dashed focus:ring-grey "
                        />
                    </div>

                    <div className="flex gap-4 justify-center pt-6 max-w-[70%]">
                        <button
                            type="submit"
                            className="bg-green-600 rounded-3xl text-white w-[45%] uppercase "
                        >
                            Register{' '}
                        </button>
                    </div>
                </form>

                <div className="text-gray-600  ">
                    <a
                        href="/login"
                        className="flex gap-3 items-center  pt-20 pl-[15%]"
                    >
                        <h2>Do you have an account? </h2>
                        <p className="text-blue-600">Log in</p>
                    </a>
                </div>
            </div>
        </>
    );
}

export default RegisterRight;
