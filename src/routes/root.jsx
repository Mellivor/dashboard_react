import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { Outlet } from 'react-router-dom';


export default function Root() {
    return (
        <div className="App">
            <Header />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
}
