import { NavLink } from 'react-router-dom';
function SideBarAdmin() {
    return (
        <>
            <div className="bg-slate-500 w-[20%] h-screen flex flex-col gap-4 text-white font-sans text-lg ">
                <div className="flex justify-center">
                    <img
                        className="w-[50%]"
                        src="https://png.pngtree.com/png-vector/20230316/ourmid/pngtree-admin-and-customer-service-job-vacancies-vector-png-image_6650726.png"
                        alt=""
                    />
                </div>
                <NavLink to="/" className="flex gap-4 items-center pl-4 pt-2">
                    <i className="fa-solid fa-house"></i>
                    <p>Trang Chủ </p>
                </NavLink>
                <NavLink className="flex gap-4 items-center pl-4 pt-2">
                    <i className="fa-solid fa-user"></i>
                    <p>Người dùng</p>
                </NavLink>
            </div>
        </>
    );
}

export default SideBarAdmin;
