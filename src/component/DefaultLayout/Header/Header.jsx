import HeaderLeft from './Header-Left/Header-Left';
import HeaderRight from './Header-Right/Header-Right';
function Header() {
    return (
        <div className="flex pl-4 h-[60px]">
            <HeaderLeft />
            <HeaderRight />
        </div>
    );
}
export default Header;
