import Wallet from '../Wallet/Wallet';
import Statistics from '../Statistics/Statistics';
function Home() {
    return (
        <>
            <div className=" justify-center items-center">
                <Wallet />
                <div className="pt-6 shadow-xl flex">
                    <Statistics />
                </div>
            </div>
        </>
    );
}

export default Home;
