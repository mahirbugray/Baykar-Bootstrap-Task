import { BestProducts } from "../Constant/constant"
import bestBackground from '../assets/images/best-background.png'
import mobileBestBackground from '../assets/images/mobile-best-background.png'
import shoppingCard from '../assets/images/shopping-cart.png'

const Section3 = () => {
    return (
        <section className="bg-secondary overflow-hidden">
            <div className="position-relative container-lg py-lg-80 py-5 px-3 bg-secondary text-white">
                <div className="  d-flex flex-column gap-lg-80 gap-32">
                    <div className="d-flex align-items-center justify-content-md-center justify-content-lg-between flex-column flex-sm-column  flex-lg-row gap-32 gap-sm-32   ">
                        <h1 className="text-md-center fw-bolder fs-56 ">The best of the best</h1>
                        <div className="d-flex align-items-center justify-content-md-center ">
                            <button className=" border  border-white rounded-3 py-3 px-5 bg-transparent text-white fs-4 fw-bold">
                                Sign up now
                            </button>
                        </div>
                    </div>
                    <div className="row px-0 px-sm-4 px-lg-0 position-relative z-1">
                        {
                            BestProducts.map(item => (
                                <div key={item.id} className="col-lg-4 col-md-12 my-3 my-sm-3 ">
                                    <div className=" rounded-3 bg-secondary shadow-lg m-2 ">
                                        <div >
                                            <img className="w-100 rounded-3" src={item.source} alt="" />
                                        </div>
                                        <div className="px-32 pt-32 d-flex flex-column gap-1">
                                            <h3>{item.title}</h3>
                                            <p>{item.text}</p>
                                        </div>
                                        <div className="p-32">
                                            <button className="w-100 border  rounded-3 p-3 bg-transparent text-white d-flex justify-content-center gap-2">
                                                <div> <img src={shoppingCard} alt="" /></div>
                                                Sign up now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="position-absolute z-n1 top-50 start-50  translate-middle d-none d-lg-block ">
                            <img className=" img-fluid" src={bestBackground} alt="best-background" />
                        </div>
                        <div className="position-absolute z-n1  top-0 start-0  d-block d-lg-none ">
                            <img className="img-fluid" src={mobileBestBackground} alt="mobile-best-background" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section3