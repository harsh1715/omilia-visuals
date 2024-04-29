import { Service } from "@/components/Services/ServicesHeader";
import { NavBar } from "@/components/NavBar";
import BlogOverview from "@/components/Services/ServicesBlog";
import "../app/globals.css";


export default function Services() {
  return (
  <div className="w-screen">
    <NavBar className='sticky' />
    <Service/>
    <BlogOverview/>
  </div>
    
  );
}


