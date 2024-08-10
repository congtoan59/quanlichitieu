import LoginLeft from './Left/LoginLeft';
import LoginRight from './Right/LoginRight';

function FormLogin() {
    return (
        <>
            <div className=" flex justify-around items-center gap-4">
                <div>
                    <LoginLeft />
                </div>
                <LoginRight />
            </div>
        </>
    );
}

export default FormLogin;
