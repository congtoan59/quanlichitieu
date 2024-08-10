import Header from './Header/Header';
import Left from './Sidebar/Left';
// import Right from './Sidebar/Right';
function DefaultLayout( { children }) {
    return (
        <>
            <div className="flex pt-4">
                <Left />

                <div className="w-full">
                    <Header />
                    <div className="content">
                        {children}
                    </div>
                </div>
            
            </div>
        </>
    );
}

export default DefaultLayout;
