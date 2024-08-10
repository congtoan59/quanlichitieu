import User from './User/User';
import Notification from './Notification/Notification';

const HeaderRight = () => {
    return (
        <>
            <div className="fixed right-2 flex items-center">
                <Notification />
                <User />
            </div>
        </>
    );
};

export default HeaderRight;
