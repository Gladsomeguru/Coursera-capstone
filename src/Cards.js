

function Cards() {
    const cardItems = [
        {
            url: "icons_assets/greek salad.jpg",
            title: "Greek Salad",
            price: "12.99"
        },
        {
            url: "icons_assets/bruchetta.svg",
            title: "Bruchetta",
            price: "5.99"
        },
        {
            url: "icons_assets/lemon dessert.jpg",
            title: "Lemon Dessert",
            price: "5.00"
        }
    ]

    return (
        <>{
            cardItems.map((item, index) => (
                <div className="col-md-4 mb-md-0 mb-3" key={index}>
                    <div className="card">
                        <img src={item.url} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-start mb-3">
                                <h4 className="card-title text-markazi mb-0">{item.title}</h4>
                                <span className="text-success fw-medium price">${item.price}</span>
                            </div>  
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            <a href="#" className="all-none fw-medium fs-6 cursor-pointer green-btn">Order to delivery <i className="bi bi-bag-heart text-success ps-1 fs-6"></i></a>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    );
}

export default Cards;