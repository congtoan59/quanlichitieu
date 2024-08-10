import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function HomeAdmin() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Account.json',
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                console.log(jsonData);
                // const dataArray = Object.values(jsonData);
                const dataArray = Object.entries(jsonData).map(
                    ([id, values]) => ({ id, ...values }),
                );
                setData(dataArray);

                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    const handleDelete = async (id) => {
        try {
            await fetch(
                `https://assmreact-default-rtdb.asia-southeast1.firebasedatabase.app/Account/${id}.json`,
                {
                    method: 'DELETE',
                },
            );
            setData((prevData) => prevData.filter((item) => item.id !== id));
            toast.success('Delete Successful')
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    if (loading) {
        return (
            <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
                <div className="text-center">
                    <div className="animate-pulse">
                        <div className="h-4 bg-gray-300 rounded w-48 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-32 mb-4"></div>
                        <div className="h-4 bg-gray-300 rounded w-40 mb-4"></div>
                    </div>
                    <p className="text-gray-500 mt-4">Loading...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <div className="text-center text-2xl font-bold shadow-xl  shadow-gray-300 h-[100px] tracking-wider ">
                <h1 className="pt-6 italic ">Thông Tin User</h1>
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-4">
                <thead className="bg-gray-50">
                    <tr>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            UserName
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Phone Number
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Email
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                            Address
                        </th>
                        <th
                            scope="col"
                            className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-left"
                        >
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item) => (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.username}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.phonenumber}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {item.adrress}
                            </td>

                            <td className="px-6 py-4 whitespace-nowrap flex gap-4">
                                <button>
                                    <i className="fa-solid fa-eye"></i>
                                </button>
                                <button onClick={() => handleDelete(item.id)}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default HomeAdmin;
