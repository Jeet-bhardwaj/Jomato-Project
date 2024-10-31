const Card = (props) => {
    // let options = options;
    let priceOption = Object.keys(options);
    const handilAddInCart = () => {};

    return (
        <>
            <div
                className="card"
                style={{
                    width: "18rem",
                    maxHeight: "auto",
                    margin: "10px",
                }}
            >
                <img
                    src={props.foodItem.imgScr}
                    className="card-img-top "
                    alt="..."
                    style={{ height: "180px", objectFit: "fill" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text">{prodescription}</p>
                    <div className=" container w-100">
                        <select className="m-2 h-100  bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>
                                        {" "}
                                        {i + 1}
                                    </option>
                                );
                            })}
                        </select>
                        <select className="m-2 h-100  bg-success rounded">
                            {priceOption.map((data) => {
                                return (
                                    <option key={data} value={data}>
                                        {data}
                                    </option>
                                );
                            })}
                        </select>
                        <div className=" d-inline h-100 fs-5 ">Total price</div>
                    </div>
                    <hr />
                    <button
                        className={`btn btn-success justify-center ms-2`}
                        onClick={handilAddInCart}
                    >Add in cart</button>
                </div>
            </div>
        </>
    );
};

export default Card;
