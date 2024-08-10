import { useState } from 'react';
import { ListExpense } from '../expense';
import { postData } from '../../../service/ApiService';
import { toast } from 'react-toastify';

function FormEpense() {
    const [selectOptions, setSelectOptions] = useState();

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [type, setType] = useState('House');

    const handleSubmitExpense = async (e) => {
        e.preventDefault();
        try {
            const currentDate = new Date().toISOString();

            const reponse = await postData(
                'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Expense.json',
                {
                    date: currentDate,
                    name,
                    quantity,
                    type,
                },
                toast.success('Expense submitted successfully!'),

                setName(''),
                setQuantity(''),
               
            );
        } catch (error) {
            toast.error('Expense submitted failed!'),

            console.log(error);
        }
    };

    return (
        <>
            <form
                action=""
                onSubmit={handleSubmitExpense}
                className="max-w[80%]"
            >
                <div className="flex justify-center gap-4">
                    <div className="flex flex-col  w-[41%] mb-2">
                        <label htmlFor="" className="mb-2 text-gray-600 ">
                            Expense Name
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
                <div className="flex justify-center gap-4">
                    <div className="flex flex-col  w-[41%] mb-2">
                        <label htmlFor="" className="mb-2 text-gray-600 ">
                            Quantity
                        </label>
                        <input
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            className="bg-gray-200 border border-black p-2 rounded"
                            type="text"
                            required
                            placeholder="Quantity..."
                        />
                    </div>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 pt-10">
                    {ListExpense.map((item, index) => (
                        <li
                            key={index}
                            className="relative inline-block w-[10%]  rounded-2xl shadow-xl"
                        >
                            <img
                                className="rounded-2xl bg-cover"
                                src={item.img}
                                alt="Descriptive Alt Text"
                            />
                            <input
                                value={item.name}
                                type="radio"
                                checked={selectOptions === item.name}
                                onChange={(e) => {
                                    setSelectOptions(item.name);
                                    setType(e.target.value);
                                }}
                                required
                                className="absolute top-0 right-0 mt-2 mr-2"
                            />
                        </li>
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                    <button
                        type="submit"
                        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded  "
                    >
                        Add Expense
                    </button>
                </div>
            </form>
        </>
    );
}

export default FormEpense;
