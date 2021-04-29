import SliderComponent from "../components/slider/index";
import Footer from "../components/footer";
import Header from "../components/header";
import MainContent from "../components/MainContent";

export default function Index(){
  return(
    <>
      <Header />
      <SliderComponent />
      <MainContent />
      <Footer />
    </>
  )
}