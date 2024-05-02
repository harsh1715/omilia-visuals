import BlogPost from "@/components/Services/Blogs/Blog1";
import { NavBar } from "@/components/NavBar";
import "../app/globals.css";


export default function blog1() {
  return (
  <div className="w-screen">
    <NavBar className='sticky' />
    <BlogPost/>
  </div>
    
  );
}


