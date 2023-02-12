
import Header from "../header/header";
import Main from "../main/main";
import Footer from "../footer/footer";

const Template = ({children}) => {

  return (
    <>
      <Header/>
        <Main>
          {children}
        </Main>
      <Footer/>
    </>
  );

}

export default Template;