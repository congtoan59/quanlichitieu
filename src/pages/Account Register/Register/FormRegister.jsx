import RegisterLeft from './Left/RegisterLeft';
import RegisterRight from './Right/RegisterRight';

function FormRegister() {
    return (
        <div className=" flex justify-around items-center gap-4">
            <RegisterLeft />

            <RegisterRight />
        </div>
    );
}

export default FormRegister;
