import SliderComponent from "../components/slider/index"
import MainContent from "../components/MainContent"
import MobileMenu from "../components/mobileMenu"

export default function Index(){
  return(
    <>
        <MobileMenu />
        <SliderComponent />
        <MainContent />
    </>
  )
}