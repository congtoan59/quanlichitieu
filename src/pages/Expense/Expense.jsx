import HeaderEpenxe from './HeaderExpense/HeaderExpense';
import FormEpense from './FormExpense/FormExpense';

function Expense() {
    return (
        <>
            <HeaderEpenxe />
            <div className="pt-6">
                <FormEpense />
                <div className="pl-5"></div>
            </div>
        </>
    );
}

export default Expense;
