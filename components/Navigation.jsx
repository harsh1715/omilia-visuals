export const Navigation = () => {
    return (
      <div className={`bg-[#D9D9D9] font-caudex text-[#373633]`}>
          <ul className="flex flex-col sm:flex-row sm:justify-between items-center sm:px-10 lg:px-60 py-8 text-xl lg:text-2xl space-y-8 sm:space-y-0">
              <li className="flex flex-col items-center space-y-2">
                  <h3>01</h3>
                  <h3>ABOUT US</h3>
              </li>
              <li className="flex flex-col items-center space-y-2">
                  <h3>02</h3>
                  <h3>CLIENT GALLERY</h3>
              </li>
              <li className="flex flex-col items-center space-y-2">
                  <h3>03</h3>
                  <h3>SERVICES</h3>
              </li>
          </ul>
      </div>
    )
  }
  