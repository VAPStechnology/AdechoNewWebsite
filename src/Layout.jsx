import { Outlet } from "react-router-dom";
import Nav from "./components/Ui/Nav";
import Footer from "./components/Ui/Footer";

function Layout(){
    return(
        <>
        <Nav></Nav>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}
export default Layout;