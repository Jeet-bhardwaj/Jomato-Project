const Card = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem", maxHeight: "360px" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Food discriptin</p>
          <div className=" container w-100">
            <select className="m-2 h-100  bg-succes rounded">
                {Array.from(Array(6), (e,i)=> {
                    return(<option key = {i+1} value={i+1}> {i+1}</option>)
                })}
            </select>
            <select className="m-2 h-100  bg-succes rounded">
               <option value="half">Half</option>
               <option value="full">Full</option>
               <option value="quater">Quater</option>
            </select>
            <div className=" d-inline h-100 fs-5 ">
                Total price
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Card;
