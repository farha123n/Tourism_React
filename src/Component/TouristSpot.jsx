import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";
import { useState } from "react";
import { FaAngleDown, FaChevronUp } from "react-icons/fa";

const TouristSpot = () => {
    const AllTouristSpot = useLoaderData();
    const [isOpen, setOpen] = useState(false);
    const [short, setShort] = useState([]);  // State for sorted spots
    const [shorted, setSorted] = useState(false);  // State to check if sorted
    
    // Function to sort the spots by average cost
    const sort_by_cost = () => {
      // Sort the tourist spots by average cost in descending order
      const sortedSpots = [...AllTouristSpot].sort((a, b) => parseInt(b.average_cost) - parseInt(a.average_cost));
      
      // Update the state with the sorted spots
      setShort(sortedSpots);
      setSorted(true);  // Set to true indicating sorting is done
    };
    
    return (
        <div>
            <button onClick={() => setOpen((prev) => !prev)} className="w-full text h-14 text-4xl bg-gradient-to-r from-sky-500 to-purple-800 flex justify-center items-center text-white">
              Dropdown
              {isOpen ? <FaChevronUp className="mt-2 mx-2" /> : <FaAngleDown className="mt-3 mx-2" />}
            </button>
          
            <button className="w-full">
              {isOpen ? (
                <p onClick={sort_by_cost} className="text-2xl h-16 text-white text-center p-3 bg-slate-500">
                  Sort by cost
                </p>
              ) : (
                <div></div>
              )}
            </button>
    
            {/* Display sorted spots */}
            <div >
            {shorted ? (
              <div className="grid lg:grid-cols-3 gap-10">
                {short.map((tourist) => (
                  <TouristSpotCard key={tourist._id} tourist={tourist}></TouristSpotCard>
                ))}
              </div>
            ) : (
              <div className="grid lg:grid-cols-3 gap-10">
                {AllTouristSpot.map((tourist) => (
                  <TouristSpotCard key={tourist._id} tourist={tourist}></TouristSpotCard>
                ))}
              </div>
            )}
            </div>
        </div>
    );
};

export default TouristSpot;
