import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { collectionTabs } from '../Constant/constant';
import rightArrow from "../assets/images/rightArrow.png"
import tripleImage from "../assets/images/tripleImage.png"
import webTripleImage from "../assets/images/webTripleImage.png"
import bgWaves from "../assets/images/bgWaves.png"

const PageSection6 = () => {
    return (
        <section className="position-relative z-1 overflow-hidden">
            <div className=" container-lg d-flex flex-column justify-content-center align-content-center pt-5 pt-lg-80  pb-96 pb-lg-128 gap-32  ">
                <div className="position-relative z-1 d-flex flex-column gap-32">
                    <h1 className="text-56 text-center text-lg-start fw-bolder">Grow your collection</h1>
                    <p className="text-center text-lg-start">Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus.
                        Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
                </div>
                <div className="position-relative z-1 row d-flex justify-content-between   ">
                    <div className='col-12 col-lg-3 p-0 mx-3 '>
                        <ul className='d-none d-lg-flex flex-lg-column p-0 gap-3'>
                            {
                                collectionTabs.slice(0, 1).map(item => (
                                    <li key={item.id} className=' d-flex align-items-center  w-75 gap-2 bg-white p-3 rounded-2 border shadow-sm'>
                                        <div> <img src={item.tabLogo} alt={item.title} /></div>
                                        <p className='m-0'>{item.title}</p>
                                        <div className='ms-4'><img src={rightArrow} alt="" /></div>
                                    </li>
                                ))
                            }
                            {
                                collectionTabs.slice(1).map(item => (
                                    <li key={item.id} className='d-flex align-items-center gap-3 p-3 rounded-2 w-100'>
                                        <div> <img src={item.tabLogo} alt={item.title} /></div>
                                        <p className='m-0'>{item.title}</p>
                                    </li>
                                ))
                            }
                        </ul>
                        <ScrollingCarousel className='gap-56 w-100 '>
                            <div className='pb-4 d-flex d-lg-none align-items-center'>
                                {
                                    collectionTabs.slice(0, 1).map(item => (
                                        <div key={item.id} className='d-flex align-items-center gap-2 ms-2 me-5 bg-white shadow p-3 px-4 rounded-2 ' >
                                            <div> <img src={item.tabLogo} alt={item.title} /></div>
                                            <p className='m-0'>{item.title}</p>
                                        </div>
                                    ))
                                }
                                {
                                    collectionTabs.slice(1).map(item => (
                                        <div key={item.id} className='d-flex align-items-center gap-2 me-5'>
                                            <div> <img src={item.tabLogo} alt={item.title} /></div>
                                            <p className='m-0'>{item.title}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </ScrollingCarousel>
                    </div>
                    <div className='col-12  col-lg-8 bg-transparent d-flex justify-content-center align-items-center '>
                        <div className='d-block d-lg-none '><img className='img-fluid' src={tripleImage} alt="" /></div>
                        <div className='d-none d-lg-block '><img className='img-fluid' src={webTripleImage} alt="" /></div>
                    </div>
                </div>

            </div>
            <div className='position-absolute bottom-0  start-0 z-n1 d-block d-lg-none '>
                <img className='w-full' src={bgWaves} alt="" />
            </div>
        </section>
    )
}

export default PageSection6