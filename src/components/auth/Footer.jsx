"use client"
import Script from "next/script";
import ScrollToTop from "react-scroll-to-top";

const Footer = () => {
  return (
    <>
    <ScrollToTop smooth />
      <script src="vendor/jquery/jquery.min.js"></script>
      <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <Script src="/vendor/jquery-easing/jquery.easing.min.js"></Script>

      {/* <!-- Custom Scripts for all pages--> */}
      <Script src="/js/sb-admin-2.min.js"></Script>

      {/* <!-- SweetAlert2 --> */}
      <Script src="https://code.jquery.com/jquery-3.3.1.min.js"></Script>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert2/11.11.0/sweetalert2.min.js"
        integrity="sha512-Wi5Ms24b10EBwWI9JxF03xaAXdwg9nF51qFUDND/Vhibyqbelri3QqLL+cXCgNYGEgokr+GA2zaoYaypaSDHLg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></Script>
    </>
  );
};

export default Footer;
