import Header from "@/components/auth/Header"   
import Footer from "@/components/auth/Footer"

const layout = ({children}) => {
  return (
    <>
    <Header title={"SB Admin 2 - Login"}/>
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default layout