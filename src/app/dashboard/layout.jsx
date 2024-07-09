import Sidebar from "@/components/dashboard/Sidebar";
import Nav from "@/components/dashboard/Nav";
import Footer from "@/components/dashboard/Footer";
import '../../assets/vendor/fontawesome-free/css/all.css';

const dashLayout = ({ children }) => {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Nav />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default dashLayout;
