import Nav from '../Common/Nav';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="lg:max-w-[calc(100vw-256px)] lg:ml-[256px] mx-auto">
                <div className="min-h-screen">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Root;