import { Routes, Route, NavLink } from 'react-router-dom';

const Top = () => {
    return (
        <>
            <div className="container pl-6 pt-4 ">
                <div className="">
                    <ul className="pl-6">
                        <div className="img w-1/2 ">
                            <NavLink to="/">
                                <img
                                    className="w-full h-auto shadow-lg rounded-xl"
                                    src="https://media.istockphoto.com/id/1220378000/vi/vec-to/bi%E1%BB%83u-t%C6%B0%E1%BB%A3ng-vector-chi-ti%C3%AAu-ng%C3%A2n-s%C3%A1ch.jpg?s=1024x1024&w=is&k=20&c=QqwC38xBwfQoOVMIxsYtw7aDSwypEwU8KyF6w4vgrfU="
                                    alt=""
                                />
                            </NavLink>
                        </div>
                        <nav>
                            <ul className="navbar">
                                <li className="hover-left pt-6">
                                    <i className="w-[10%] fa-solid fa-house"></i> 
                                    <NavLink
                                        className="pl-2 w-max-[100px]"
                                        to="/"
                                        activeClassName="active"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="hover-left pt-6 ">
                                    <i className="w-[10%] fa-solid fa-clipboard "></i>

                                    <NavLink
                                        className="pl-2 w-max-[100px] "
                                        to="/expense"
                                        activeClassName="active"
                                    >
                                        Expense
                                    </NavLink>
                                </li>

                                <li className="hover-left pt-6">
                                    <i class="w-[10%] fa-regular fa-clipboard"></i>
                                    <NavLink
                                        className="pl-2 w-max-[100px] "
                                        to="/revenue"
                                        activeClassName="active"
                                    >
                                        Revenue
                                    </NavLink>
                                </li>
                                <li className="hover-left pt-6">
                                    <i className="w-[10%] fa-solid fa-wallet"></i>
                                    <NavLink
                                        className="pl-2 w-max-[100px]"
                                        to="/wallet"
                                        activeClassName="active"
                                    >
                                        Wallet
                                    </NavLink>
                                </li>

                                <li className="hover-left pt-6">
                                    <i class="w-[10%] fa-solid fa-chart-simple"></i>
                                    <NavLink
                                        className="pl-2 w-max-[100px]"
                                        to="/statistics"
                                        activeClassName="active"
                                    >
                                        Statistics
                                    </NavLink>
                                </li>

                                <li className="hover-left pt-6 flex items-center">
                                    <i className="w-[10%] fa-solid fa-flag"></i>
                                    <a className="pl-2 w-max-[100px]" href="">
                                        Reports
                                    </a>
                                </li>
                                <li className="hover-left pt-6 flex items-center">
                                    <i className="w-[10%] fa-solid fa-chart-simple"></i>
                                    <a className="pl-2 w-max-[100px]" href="">
                                        Investments
                                    </a>
                                </li>
                                <li className="hover-left pt-6 flex items-center">
                                    <i className="w-[10%] fa-solid fa-bullseye"></i>
                                    <a className="pl-2 w-max-[100px]" href="">
                                        Goals
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Top;
