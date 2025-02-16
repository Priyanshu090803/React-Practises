import { CDN_URL } from "../Utils/contants";

const RestaurantCard=(props)=>{

    
    const {ResData}=props;
    const {name,costForTwo,cuisines,cloudinaryImageId,avgRating}=ResData?.info;

    return(
        <div className="res-card">

        <img className="res-logo"
         src={CDN_URL+cloudinaryImageId}>
        </img>
        
        <h1>{name}</h1>
        <h4>{costForTwo}</h4>
        <h4>{cuisines}</h4>
        <h4>{avgRating}</h4>


        </div>
    )
}
export default RestaurantCard;