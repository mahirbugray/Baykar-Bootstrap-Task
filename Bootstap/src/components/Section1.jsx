import watchdemo from "../assets/images/watchdemo.png"
import mainShoe from "../assets/images/main-shoe.png"
import mobileMainTriangle from '../assets/images/mobile-main-triangle.png'
const Section1 = () => {
    return (
        <section className="position-relative z-1 container-lg py-80 d-flex align-items-center gap-32 gap-lg-80  ">
            <div className=" row d-flex justify-between ">
                <div className="col-lg-7 d-flex align-items-center ">
                    <div className="d-flex flex-column gap-3">
                        <h1 className="fs-72 fw-bolder text-center text-lg-start ">Collectible Sneakers</h1>
                        <p className="text-center text-lg-start">Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
                        <div className="d-flex align-items-center justify-content-center justify-content-lg-start  gap-4">
                            <button className="py-2 px-4 bg-transparent border-2 border-primary text-primary rounded-2 fs-5  fw-bold">
                                Sign up now
                            </button>
                            <div className="d-flex align-items-center gap-1">
                                <div><img src={watchdemo} alt="watch-demo" className="w-6 h-6" /></div>
                                <button className="px-2 bg-transparent border-0 text-primary fs-6 fw-bold">Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-center align-items-center mb-lg-4">
                    <img className="img-fluid" src={mainShoe} alt="" />

                </div>
            </div>
            <div className="position-absolute z-n1 bottom-0 start-0 d-block d-lg-none">
                <img className="vw-100" src={mobileMainTriangle} alt="mobile-main-triangle" />
            </div>

        </section>
    )
}

export default Section1 