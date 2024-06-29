import { useEffect, useState } from "react";
import { threeRows } from "../Constant/constant"

const Section2 = () => {
  const [isWideScreen, setIsWideScreen] = useState(true);

  const handleResize = () => {
    const isWideScreen = window.innerWidth >= 992;
    setIsWideScreen(isWideScreen);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="container-lg py-80  d-flex justify-content-center align-items-center "
      style={{
        backgroundColor: isWideScreen ? "transparent" : "#FEF3C7",
      }}>

      <div className="row w-full gap-y-5">
        {threeRows.map(eachRow => (
          <div key={eachRow.title} className="col-lg-4 col-md-4 text-center text-lg-start">
            <div className="position-relative">
              <img className="position-relative" src={eachRow.source} alt={eachRow.title} />
              <div className="position-absolute w-100 ps-4 top-0 end-0">
                <img src={eachRow.bgimage} alt={eachRow.title} />
              </div>
            </div>
            <h2 className="">{eachRow.title}</h2>
            <p className="me-lg-80">{eachRow.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section2