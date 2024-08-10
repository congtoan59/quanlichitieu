import { useState } from 'react';
import momo from '../../../../public/image/Momo.jpg';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { postData } from '../../../service/ApiService';

function FormRevenue() {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const navigate = useNavigate();

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const submitForm = async (e) => {
        e.preventDefault();
        console.log('formSubmit');

        if (step === 2) {
            if (!isSubmitted) {
                try {
                    const currentDate = new Date().toISOString();
                    const reponse = await postData(
                        'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Revenue.json',
                        { date: currentDate, name, quantity },
                    );
                    console.log(reponse);
                    navigate('/')
                    toast.success('Depostit Succesful!')
                } catch (error) {
                    console.log(error);
                }
            }
        } else {
            nextStep();
        }
    };

    return (
        <>
            <h1 className="text-center font-bold text-3xl ">Revenue</h1>

            <div className="mb-4 flex justify-center gap-4 pt-4">
                <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                        step === 1
                            ? 'border-black bg-black text-white'
                            : 'bg-gray-300'
                    }`}
                >
                    1
                </div>
                <div
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                        step === 2
                            ? 'border-black bg-black text-white'
                            : 'bg-gray-300'
                    }`}
                >
                    2
                </div>
            </div>

            <form onSubmit={submitForm}>
                {step === 1 && (
                    <>
                        <div className="flex justify-center  gap-4">
                            <div className="flex flex-col  w-[41%] mb-2">
                                <label
                                    htmlFor=""
                                    className="mb-2 text-gray-600 "
                                >
                                    Revenue Name
                                </label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="bg-gray-200 border border-black p-2 rounded"
                                    type="text"
                                    required
                                    placeholder="Expense Name..."
                                />
                            </div>
                        </div>
                        <div className="flex justify-center  gap-4">
                            <div className="flex flex-col  w-[41%] mb-2">
                                <label
                                    htmlFor=""
                                    className="mb-2 text-gray-600 "
                                >
                                    Quantity
                                </label>
                                <input
                                    value={quantity}
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                    className="bg-gray-200 border border-black p-2 rounded"
                                    type="text"
                                    required
                                    placeholder="Quantity..."
                                />
                            </div>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="text-center">
                            <h2 className="text-lg font-bold">
                                Deposit money into wallet.
                            </h2>
                            <div className="flex justify-center pt-4">
                                <div className="w-[25%] flex justify-center object-cover">
                                    <img className="w-full" src={momo} alt="" />
                                </div>
                            </div>
                        </div>
                    </>
                )}

                <div className="flex justify-center gap-4 mt-4">
                    {step > 1 && step < 2 && (
                        <button
                            type="button"
                            onClick={prevStep}
                            className="bg-gray-300 p-2 rounded"
                        >
                            Back
                        </button>
                    )}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        {step === 2 ? 'Submit' : 'Next'}
                    </button>
                </div>
            </form>
        </>
    );
}

export default FormRevenue;
