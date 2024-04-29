import Link from "next/link";

const BlogOverview = () => {
    
    return (
        <div className="flex justify-center items-center flex-col md:flex-row bg-[#373633] text-[#FFFFFF] h-[777px] p-8">
            <div className="bg-white w-[580px] h-[300px] rounded-3xl"></div>
            <div className="max-w-2xl ml-12">
                <h1 className="text-5xl font-thin mb-6 font-caudex">All Blog Posts</h1>
                <div className="font-thin" style={{
                    fontFamily: 'Helvetica Neue',
                    fontWeight: '400',
                    fontSize: '25px',
                    lineHeight: '30px',
                }}>
                </div>
            </div>
        </div>
    )
}

export default BlogOverview;
