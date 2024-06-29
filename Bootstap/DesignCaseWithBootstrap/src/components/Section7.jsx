import webChart from '../assets/images/webChart.png'
import mobileWebChart from '../assets/images/mobileWebChart.png'
import mobileEllipses from '../assets/images/mobileEllipses.png'
import ellipses from '../assets/images/ellipses.png'
import coolShoes from '../assets/images/coolShoes.png'
const PageSection7 = () => {
    return (
        <section className="p-80 bg-primary text-white overflow-hidden">
            <div className="container ">
                <div className="position-relative z-1 d-flex justify-content-center align-items-center">
                    <div className="position-absolute z-2 d-flex flex-column justify-content-center align-items-center text-center">
                        <h1 className="fs-96 fw-bolder">11,658,467</h1>
                        <h2 className="fs-1 fw-bolder">Shoes Collected</h2>
                    </div>
                    <div className='position-relative d-none d-md-block '>
                        <img className='position-absolute top-17 start-17 translate-middle' src={coolShoes} alt="" />
                        <img src={webChart} alt="web-chart" />
                        <div className='position-absolute  top-48 start-54 translate-middle   '>
                            <img className='' src={ellipses} alt="" />

                        </div>
                    </div>
                    <div className='position-relative d-block  d-md-none w-full '>
                        <img className='position-absolute top-17 start-48 translate-middle' src={coolShoes} alt="" />
                        <img className='' src={mobileWebChart} alt="web-chart" />
                        <div className='position-absolute  top-48 start-77 translate-middle   '>
                            <img className='' src={mobileEllipses} alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageSection7