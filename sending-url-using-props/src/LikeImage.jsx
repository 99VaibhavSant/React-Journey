
import { useState } from "react";

export default function LikeImage({imageUrl}) {
    const styles = {
        backgroundImage: `url('${imageUrl}')`, // <-- use the prop here
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "400px",
    height: "400px",
    color: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
  };
  let redcolor = {
        color:"red",
        fontSize: 100
  }
  let [islike, setIslike] = useState(false);
  let [count , setCount] = useState(0)

  let toggleButton = () => {
    setIslike(!islike);
    setCount(count+1)
  };

  return (
    <div>
        
      <h1  style={styles} onClick={toggleButton}>
        {count}
        {islike ? (
          <i className="fa-solid fa-heart" style={redcolor}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
    </div>
  );
}
