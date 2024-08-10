const HeaderLeft = () => {
    return (
        <>
            <div className="flex items-center bg-white border-2 border-gray-400 rounded-full w-72 h-10 pl-4">
                <input
                    type="search"
                    className="w-full h-full bg-transparent outline-none"
                    placeholder=" Search or type command..."
                />
            </div>
        </>
    );
};

export default HeaderLeft;
