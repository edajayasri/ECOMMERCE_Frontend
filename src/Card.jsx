function Card(item) {
  return (
   <div className="card">

            <img src={item.image}
                alt={item.title}
                style={{
                height: "180px",
                width: "100%",
                objectFit: "cover"
                }}
            />
            <div className="card-content">
        
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>

          <h3 style={{ margin: 0 }}>{item.title}</h3>
          <p className="price">₹{item.cost}</p>
        </div>

        <p style={{ margin: "6px 0", fontSize: "14px" }}>{item.place}</p>

        <button id="btn">Order Now</button>
      </div>
    </div>
  )
}

export default Card