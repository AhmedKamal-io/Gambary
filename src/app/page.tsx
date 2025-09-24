import Contact from "@/Components/Contact";
import Home from "@/Components/Home";
import Locations from "@/Components/Locations";
import Menu from "@/Components/Menu";
import NavBar from "@/Components/NavBar";
import Story from "@/Components/Story";
import Testimonials from "@/Components/Testimonials";
export default function page() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <Story />
      <Menu />
      <Locations />
      <Testimonials />
      <Contact />
    </div>
  );
}
