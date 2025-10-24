function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid justify-content-md-center gap-5">
                    <a className="navbar-brand" href="#"><img src="./icons_assets/Logo.svg"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse flex-grow-0" id="navbarNav">
                        <ul className="navbar-nav gap-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">MENU</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">RESERVATIONS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">ORDER ONLINE</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" href="#">LOGIN</a>
                            </li>                                    
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;