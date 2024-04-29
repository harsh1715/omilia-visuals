import Link from "next/link";

const Overview = () => {
    const buttonStyle = {
        width: '197px', // Adjusted to 197px width
        height: '66px', // Adjusted to 66px height
        backgroundColor: 'rgba(255, 255, 255, 0.75)', // 75% opacity white
        color: '#593419', // Text color
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '75px', // Adjusted to 75px border radius for full pill shape
        border: '1px solid rgba(255, 255, 255, 0.5)', // Border with gradient and 50% opacity
        boxShadow: '10px 10px 20px 0 rgba(255, 255, 255, 0.15)', // Drop shadow as specified
        fontSize: '16px', // Adjust font size as needed
        lineHeight: '20px', // Adjust line height as needed
        textTransform: 'uppercase', // Text in uppercase
        textDecoration: 'none', // Removes underline from links
        fontWeight: 'bold', // Bold font weight for the button text
    };

    return (
        <div className="flex justify-center items-center flex-col md:flex-row bg-[#373633] text-[#FFFFFF] h-[777px] p-8">
            <div className="bg-white w-[360px] h-[580px] rounded-3xl"></div>
            <div className="max-w-2xl ml-12">
                <h1 className="text-5xl font-thin mb-6 font-caudex">We specialize in Digital Visual Media</h1>
                <div className="font-thin" style={{
                    fontFamily: 'Helvetica Neue',
                    fontWeight: '400',
                    fontSize: '25px',
                    lineHeight: '30px',
                }}>
                    <p className="text-lg mb-6">
                        For over 10 years, we&apos;ve created magic through lenses as hobbyists and volunteers. We now bring these years of
                        experience and expertise to our clients; understanding their story, taking in their emotions, aligning with
                        their essence & vision; then leveraging storytelling to captivate hearts and invoke expressions.
                    </p>
                    <p className="text-lg mb-6">We get to know you to show you off, giving life to your imagination.</p>
                    <Link className="font-caudex font-thin text-2xl" href="#">
                        <h2 style={buttonStyle}>About us</h2>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Overview;
