const Card = ({ foodItem,description, options, imgScr }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem", maxHeight: "360px" , margin: "10px" }}>
        <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{foodItem}</h5>
          <p className="card-text">{description}</p>
          <div className=" container w-100">
            <select className="m-2 h-100  bg-success rounded">
                {Array.from(Array(6), (e,i)=> {
                    return(<option key = {i+1} value={i+1}> {i+1}</option>)
                })}
            </select>
            <select className="m-2 h-100  bg-success rounded">
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