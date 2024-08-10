import SideBarAdmin from './SideBarAdmin/SideBarAdmin';
function AdminLayout({ children }) {
    return (
        <>
            <div className="flex justify-items-start">
                <SideBarAdmin />
                <div className="w-[100%] pt-10">{children}</div>
            </div>
        </>
    );
}

export default AdminLayout;
