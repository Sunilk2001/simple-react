import { cardList } from "./data"

const Card = () => {

    return (
        <div>
            <div className="row mt-4">
                {cardList.map((item) => {
                    return (
                        <div className="col-md-3 mt-2">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={item.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.cardTitle}</h5>
                                    <p className="card-text">{item.cardBodyText}</p>
                                    <a href="#" className={`btn btn-${item.buttonClass}`}>{item.buttonLable}</a>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 2</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 3</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 4</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 5</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 6</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 7</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title 8</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Card