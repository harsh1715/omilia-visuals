import Image from "next/image";
import Link from "next/link";

export const Header = () => {
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
        src="/images/background.png"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover"
        }} />
      <div className="absolute top-0 right-0 w-full h-full flex flex-col justify-center items-end text-right space-y-4 bg-black bg-opacity-50 px-4 sm:px-8 md:px-16 lg:px-32">
        <h1 className="text-4xl font-bold text-white mx-auto sm:text-5xl sm:mr-24" style={{
          fontWeight: '400',
          fontSize: '60px',
          lineHeight: "77.34px",
        }}>
          Photography and
          <br />
          Videography Services
        </h1>
        <p className="text-white sm:mr-24" style={{
          fontFamily: 'Helvetica Neue',
          fontWeight: '400',
          fontSize: '25px',
          lineHeight: '30px',
        }}>
          We capture everything from graduation photos, music video occasions,
          <br />
          and intimate moments through lenses.
        </p>
        <Link href="#" style={buttonStyle} className=" mr-24 mt-6">
          <h3 style={buttonStyle}>BROWSE OUR SERVICES</h3>
        </Link>
      </div>
    </header>
  );
}
