import { Link } from "react-router-dom";


const TouristSpotCard = ({tourist}) => 
    {
      const  {_id,Image,location,Tourist_spot_name,Country_name,short_Description,average_cost,travel_time,
        total_Visitor_Per_Year,seasonality
      }=tourist;
    
    return (
        <div>
             <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={Image}  />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{Tourist_spot_name}</div>
                <div className="text-gray-700 text-base"><strong>Average Cost:</strong> ${average_cost}</div>
                <div className="text-gray-700 text-base"><strong>Total Visitors per Year:</strong> {total_Visitor_Per_Year}</div>
                <div className="text-gray-700 text-base"><strong>Travel Time:</strong> {travel_time} hours</div>
                <div className="text-gray-700 text-base"><strong>Seasonality:</strong> {seasonality}</div>
            </div>
            <div className="px-6 py-4">
                <Link to={`/view/:${_id}`}
                   className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View Details
                </Link>
            </div>
        </div>
        </div>
    );
};

export default TouristSpotCard;