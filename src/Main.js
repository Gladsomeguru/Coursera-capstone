function Main() {
    return (
        <>
            <main className="hero-bg">
                <div className="container p-4 h-100">
                    <div className="row justify-content-center gap-0">
                        <div className="col-md-4">
                            <h1 className="text-markazi secondary-yellow mb-0">Little Lemon</h1>
                            <h3 className="text-markazi text-white m-0">Chicago</h3>
                            <p className="text-white">
                                We are family owned<br />
                                Meditteranaen restaurant,<br />
                                focused on traditional<br />
                                receipes served with a modern<br />
                                twist.<br />
                            </p>
                            <button className="rounded-4 all-none yellow-btn fw-medium p-2 px-4">Reserve a Table</button>
                        </div>
                        <div className="col-md-4">
                            <div className="image-container rounded-3 my-3 w-100">
                                <img src="./icons_assets/restaurantfood.jpg" alt="restaurant food" className="w-100"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Main;