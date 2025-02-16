// import ResList from "../Utils/mockData";
import RestaurantCard from "./RestaurantCars";
import { useEffect, useState } from "react";

const Body =()=>{   
    const [ListOfRes,SetListOfRes] = useState([])
    

    let change= async()=>{
        let data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.87960&lng=78.07620&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        let json = await data.json();
        
        SetListOfRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    useEffect(()=>{
        change()
    },[])



    return(
    <div className="body">

    <button className=" h-10 border text-2xl mt-3 ml-10 rounded-2xl w-24 bg-fuchsia-100 cursor-pointer hover:bg-amber-100"
    
         onClick={()=>{
            let changeVal=ListOfRes.filter(
                (i)=>i.info.avgRating>4.3,
                console.log(ListOfRes)
            )
        SetListOfRes(changeVal)

    }}
    >Filter</button>
    
        <div className="res-container">
        

            {/* <RestaurantCard ResData={ResList[0]}/>
            <RestaurantCard ResData={ResList[1]}/>
            <RestaurantCard ResData={ResList[2]}/>
            <RestaurantCard ResData={ResList[3]}/>  */}
            {/* THIS IS NOT DYNAMIC WEBSITE SO WE WILL MAKE IT DYNAMIC */}


           {

            ListOfRes?.map((value)=>(
                    <RestaurantCard key={value.id} ResData={value} />
                )
                )
         }

        </div>
    </div>
    )

}
export default Body;