import { JoinUs } from "../Constant/constant"
import check from '../assets/images/check.png'
import joinVideo from '../assets/images/join-video.png'
import joinVideoDecoration from '../assets/images/join-video-decoration.png'


const Section4 = () => {
    return (
        <section className="px-3 pt-3 pb-56 px-lg-80 py-lg-160 ">
            <div className="container-lg py-32 px-3 p-lg-80 d-flex flex-col flex-lg-row   rounded-5 gap-32 gap-lg-80 bg-white z-0 shadow ">
                <div className="row d-flex align-items-center justify-content-center gap-32 gap-md-0">
                    <div className="col-12 col-lg-6 d-flex flex-column  ">
                        <h1 className="text-center text-lg-start fw-bold fs-56" >Why join us</h1>
                        <ul className="p-0 ">
                            {
                                JoinUs.map(item => (
                                    <li key={item.id} className="d-flex align-items-start align-content-lg-center gap-2 ">
                                        <img src={check} alt="check" />
                                        <p className="m-0 fs-5">{item.listTitle}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <button className=" border-2 border-primary rounded-3 py-3 px-32 bg-transparent text-primary fs-4 fw-bold">Sign up now</button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 position-relative d-flex justify-content-center ">
                        <div className="position-relative z-2 ">
                            <img className="img-fluid" src={joinVideo} alt="" />
                        </div>
                        <div className="position-absolute top-0 start-0  z-1">
                            <img className="img-fluid " src={joinVideoDecoration} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4