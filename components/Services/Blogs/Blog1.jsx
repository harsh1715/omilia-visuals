import React from 'react';

const BlogPage = () => {
  return (
    <div className="bg-[#373633] text-white py-24 md:py-32 lg:py-40"> {/* Change background color here */} 
      <div className="max-w-6xl mx-auto px-10">
        <div className="blog-post">
          <img src="/images/bestshot.png" alt="Blog Photo Top" width="1200" height="600" className="mb-8 rounded-lg" />

          <div className="written-parts">
            <h1 className="invitation-heading text-4xl font-semibold mb-8">
              In the heart of spring, love blooms anew as [Couple's Names] embark on their journey to forever.
            </h1>
            <p className="invitation-text">
              Join us in celebrating the union of two souls, as they exchange vows of eternal devotion on [Wedding Date]. Set against the backdrop of [Venue], a picturesque oasis of romance, this promises to be a day etched in the annals of time.
            </p>
            <p className="invitation-text">
              The enchantment begins with a whimsical ceremony, where vows woven with heartfelt promises will intertwine, sealing their love amidst the gentle rustle of leaves and the tender embrace of nature. As the sun casts its golden hues upon the gathering, witness the exchange of rings, symbolizing a bond that knows no bounds.
            </p>
            <p className="invitation-text">
              Following the ceremony, guests will be swept away into a world of elegance and grace as they enter the reception hall adorned with delicate blooms and twinkling lights. Indulge in a culinary journey fit for royalty, where every bite tells a story of passion and flavor, curated to tantalize the senses and leave a lasting impression.
            </p>
            <p className="invitation-text">
              Raise a glass to the newlyweds as heartfelt toasts resonate through the air, celebrating not only the love shared between [Couple's Names], but also the journey that lies ahead. Dance the night away under a canopy of stars, as melodies of joy fill the air, creating an atmosphere of pure enchantment and bliss.
            </p>
            <p className="invitation-text">
              As the evening draws to a close, bid farewell to the happy couple as they embark on their new chapter, hand in hand, surrounded by the love and well-wishes of their cherished friends and family. May their love continue to flourish and grow, forever and always.
            </p>
            <p className="invitation-text">
              Join us in witnessing a love story unfold, as [Couple's Names] begin their happily ever after amidst the beauty and magic of their dream wedding.
            </p>
          </div>

          <img src="/images/blogbackground.png" alt="Blog Photo Bottom" width="800" height="611" style={{ maxWidth: '100%' }} className="mt-8 rounded-lg" />
        </div>
      </div>
    </div>
  );
};
export default BlogPage;
