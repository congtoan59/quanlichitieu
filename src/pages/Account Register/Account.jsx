import FormRegister from './Register/FormRegister';

function Account() {
    return (
        <>
            <div className="flex justify-center items-center h-screen  ">
                <div className=" rounded-3xl shadow-2xl w-2/3 h-[600px] object-cover">
                    <FormRegister />
                </div>
            </div>
        </>
    );
}

export default Account;
