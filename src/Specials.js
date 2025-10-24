import Cards from "./Cards.js";

function Specials() {
    return (
        <>
            <section >
                <div className="container p-3 h-100">
                    <div className="row justify-content-center gap-0">
                        <div className="col-md-8 d-flex flex-row align-items-center flex-wrap">
                            <h1 className="text-markazi mb-md-0">This weeks specials!</h1>
                            <button className="rounded-4 all-none yellow-btn fw-medium p-2 px-4 ms-md-auto ">Online Menu</button>
                        </div>
                        <div className="col-md-8 position-relative mt-3">
                            <div className="container p-3 px-0 h-100">
                                <div className="row justify-content-center gap-0">
                                    <Cards />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Specials;