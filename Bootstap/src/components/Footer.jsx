import { FooterLinks } from "../Constant/constant"
import AppStore from "../assets/images/App-Store.png"
import GooglePlay from "../assets/images/Google-Play.png"
import World from "../assets/images/world.png"
const Footer = () => {
    return (
        <footer className="bg-secondary pt-80 ">
            <div className="container">
                <div className="row text-white text-center text-lg-start gap-5 gap-lg-0">
                    <div className="col-lg-3  ">
                        <ul className="p-0 w-full d-flex flex-column justify-between gap-4">
                            <h6 className="">Products</h6>
                            {FooterLinks.products.map(item => (
                                <li className=" mt-1 " key={item}><a href="" className="cursor-pointer text-info-emphasis ">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3  ">
                        <ul className="p-0 w-full d-flex flex-column justify-between gap-4">
                            <h6 className="">Solutions</h6>
                            {FooterLinks.solutions.map(item => (
                                <li className=" mt-1 " key={item}><a href="" className="cursor-pointer text-info-emphasis ">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 ">
                        <ul className="p-0 w-full d-flex flex-column justify-between gap-4">
                            <h6 className="">Support</h6>
                            {FooterLinks.support.map(item => (
                                <li className=" mt-1" key={item}><a href="" className="cursor-pointer text-info-emphasis">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="w-full d-flex flex-column justify-between gap-5">
                            <div className=" ">
                                <h6 className=""> Get the App</h6>
                                <div className="">
                                    <div className=""><img className="my-2" src={AppStore} alt="App-Store" /></div>
                                    <div className=""><img className="my-2" src={GooglePlay} alt="Google-Play-Store" /></div>
                                </div>
                            </div>
                            <div className="w-full d-flex flex-column justify-between gap-3">
                                <h6 className="">Follow Us</h6>
                                <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                                    {FooterLinks.followingLinks.map(item => (
                                        <div className="cursor-pointer text-info-emphasis" key={item}>
                                            <img src={item} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" text-info-emphasis d-flex flex-column flex-lg-row text-center text-lg-start justify-content-between border-top border-light-subtle mt-3 pt-4" >
                    <p className=" ">Collers @ 2023. All rights reserved.</p>
                    <ul className="p-0 d-flex justify-content-center align-items-center gap-4">
                        {FooterLinks.footerBottomNav.map(item => (
                            <li key={item}>{item}</li>

                        ))}
                        <li className=" text-info-emphasis d-flex align-items-center gap-2 ">
                            <img src={World} alt="world" />
                            <p className="m-0">EN</p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer