import WalletHeader from './WalletHeader/WalletHeader';
import WalletCenter from './WalletContent/WalletCenter/WalletCenter';
import WalletLeft from './WalletContent/WalletLeft/WalletLeft';
import WalletRight from './WalletContent/WalletRight/WalletRight';

function Wallet() {
    return (
        <>
            <div className='pl-2 '>
                <WalletHeader />
                <div className="grid grid-cols-3 gap-4 pt-6">
                    <WalletLeft />
                    <WalletCenter />
                    <WalletRight />
                </div>
            </div>
        </>
    );
}

export default Wallet;
