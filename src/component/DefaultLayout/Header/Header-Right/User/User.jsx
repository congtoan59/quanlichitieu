import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const User = () => {
    const user = useSelector((state) => state.user.user); // lấy thông tin ng dùng từ store
    return (
        <>
            <div className="flex gap-2 items-center">
                {user ? (
                    <div className="flex gap-2 items-center">
                        <p>Hello, {user.username}</p>{' '}
                       
                    </div>
                ) : (
                    <>
                        <div>
                            <NavLink to="/login">Login /</NavLink>
                        </div>
                        <div className="flex gap-1">
                            <NavLink to="/register">Register</NavLink>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default User;
