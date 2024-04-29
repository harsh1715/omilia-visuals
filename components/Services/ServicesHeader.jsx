import Image from "next/image";
import Link from "next/link";

export const Service = () => {
  const buttonStyle = {
    width: '283px', // Assuming you want to use the width specified in the image
    height: '66px',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '75px',
    border: '1px solid rgba(255, 255, 255, 0.5)',
    boxShadow: '10px 10px 20px 0 rgba(69, 74, 124, 0.15), -10px -10px 20px 0 rgba(255, 255, 255, 0.3)',
    fontSize: '16px',
    lineHeight: '20px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <header className="relative font-caudex w-screen h-[100vh] z-10">
      <Image
        src="/images/blogbackground.png"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-center text-center space-y-4 bg-black bg-opacity-50 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-4xl font-bold text-white mx-auto sm:text-5xl" style={{
          fontWeight: '400',
          fontSize: '60px',
          lineHeight: "77.34px",
        }}>
          Blogs
        </h1>
        <p className="text-white mx-auto" style={{
          fontFamily: 'Helvetica Neue',
          fontWeight: '400',
          fontSize: '25px',
          lineHeight: '30px',
        }}>
            Whether you're here to learn, to be inspired, or simply to explore, we invite you 
            <br />
            to join us on this journey as we capture moments, create memories, and
            <br />
            inspire others through the power of photography.
        </p>
      </div>
    </header>
  );
}
