import Top from './Left/Top';
import Bottom from './Left/Bottom';
function Left() {
    return (
        <>
            <div className="w-3/12 border-2  shadow-2xl bg-white rounded-lg ">
                <Top />
                <Bottom />
            </div>
        </>
    );
}

export default Left;
