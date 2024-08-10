import LineChart from './LineChart/LineChart';
import DoughnutChart from './Doughnut/Doughnut';
function Statistics() {
    return (
        <>
            <div className="flex gap-10 w-[100%] justify-center">
                <div className="w-[30%] pl-6 shadow-lg shadow-gray-300 border-r-2 ">
                    <DoughnutChart />
                </div>
                <div className="w-[50%] shadow-lg shadow-gray-300 justify-center items-center">
                    <LineChart />
                </div>
            </div>
        </>
    );
}

export default Statistics;
