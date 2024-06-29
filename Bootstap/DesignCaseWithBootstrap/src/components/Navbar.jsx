import { navItems} from "../Constant/constant"
import hamburgerMenu from "../assets/images/hamburgerMenu.png"

const NavbarSection = () => {
    return (
        <header className="container-lg ">
            <nav className="navbar navbar-expand-lg py-3 py-lg-2">
                <a className="navbar-brand text-primary fs-2 fw-bolder" href="#">Collers</a>
                <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={hamburgerMenu} alt="" />
                </button>
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav d-flex align-items-center justify-content-end w-100 gap-3">
                        {
                            navItems.map(item => (
                                <li key={item.label} className="nav-item  ">
                                    <a className="nav-link fw-bold  text-primary fs-6" href={`#${item.href}`} >{item.label}</a>
                                </li>
                            ))
                        }
                        <li className="nav-item">
                            <a className="nav-link " href="#">
                                <button className="border-2 border-primary rounded-3 py-2 px-4 bg-transparent text-primary fs-6 fw-bold">
                                    Sign up now
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header >
    )
}


export default NavbarSection