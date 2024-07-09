"use client"
import ScrollToTop from "react-scroll-to-top";
import Script from "next/script";
import Head from "next/head";

const Footer = () => {
  return (
    <>
    <ScrollToTop smooth />
      <footer className="sticky-footer bg-white">
        <div className="container my-auto">
          <div className="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2021</span>
          </div>
        </div>
      </footer>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="/auth/logout">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>

     

      {/* <!-- Bootstrap core JavaScript--> */}
      <script src="/vendor/jquery/jquery.min.js"></script>
      <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      {/* <!-- Core plugin JavaScript--> */}
      <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>

      {/* <!-- Custom scripts for all pages--> */}
      <script src="/js/sb-admin-2.min.js"></script>

      {/* <!-- Page level plugins --> */}
      <script src="/vendor/datatables/jquery.dataTables.min.js"></script>
      <script src="/vendor/datatables/dataTables.bootstrap4.min.js"></script>

      {/* <!-- Page level custom scripts --> */}
      <script src="/js/demo/datatables-demo.js"></script>
     
    </>
  );
};

export default Footer;
