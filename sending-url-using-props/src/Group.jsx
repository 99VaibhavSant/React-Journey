import LikeImage from "./LikeImage";
import "./Group.css"

function Group() {
  return (
    <div className="Group">
      <LikeImage imageUrl="https://wallpapercave.com/wp/wp3324202.jpg" />
      <LikeImage imageUrl="https://wallpapercave.com/uwp/uwp4914237.jpeg" />
      <LikeImage imageUrl={"https://wallpapercave.com/uwp/uwp4913470.jpeg"} />
      <LikeImage imageUrl={"https://wallpapercave.com/uwp/uwp4913198.jpeg"} />
      <LikeImage imageUrl={"https://wallpapercave.com/wp/wp14297104.jpg"} />
      <LikeImage imageUrl={"https://wallpapercave.com/wp/wp13394535.jpg"} />
    </div>
  );
}

export default Group