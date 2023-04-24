import "../styles/card.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Card({ topic, slink, jlink ,index   }) {
    
    const location = useLocation();
  let path = location.pathname.split("/")[2];
  let path1 = location.pathname.split("/")[1];
  console.log("🚀 ~ file: Card.js:10 ~ Card ~ path1:", path1)
  
  
  
    
  return (
    <div className="product">
      <div
        className="product__info mt-2 "
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{ fontWeight: "bold", fontSize: "20px", marginBottom: "4px" }}
          className="info__name "
        >
          {topic}
          <br />
         
        </p>

        {/* <p style={{ fontSize: "15px" }} className="info__description ">
          {info}
        </p> */}

        {/* <Link to={`/product/{id}`} className="info__button"> */}

       

        {path1 === "teacher" ? (
          <Link
            to={`/tjoin/${index}`}
            className="info__button"
            target="_blank"
          >
            start Meeting
          </Link>
        ) : path1 === "student" ? (
          <Link
            to={`/sjoin/${path + "" + index}`}
            className="info__button"
            target="_blank"
          >
            join Meeting
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Card;
