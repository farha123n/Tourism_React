import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const View = () => {
  const { id } = useParams(); // Capture the id from URL
  const AllTouristSpot = useLoaderData();
  const [viewDetails, setViewDetails] = useState(null); // Initial state as null
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Only update element when AllTouristSpot has been fetched
    if (AllTouristSpot && AllTouristSpot.length > 0) {
      const touristSpot = AllTouristSpot.find((item) => ((':'+item._id) === (id)))
      if(touristSpot) {
        setViewDetails(touristSpot); // Set only if a match is found
      }
      setLoading(false); // Data is loaded
    }
  }, [AllTouristSpot, id]);

  // Show a loading spinner while data is being fetched
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"></div>
        <p>Loading...</p>
      </div>
    );
  }

  // If no details are found after loading
  if (!viewDetails) {
    return <div>No tourist spot details found.</div>;
  }

  // Destructure viewDetails after it's confirmed to have data
  const {
    Image,
    location,
    Tourist_spot_name,
    Country_name,
    average_cost,
    travel_time,
    total_Visitor_Per_Year,
    seasonality,
    user_Name,
    user_Email,
  } = viewDetails;

  return (
    <div className="flex justify-center items-center my-10">
      <div className=" w-1/2 flex rounded overflow-hidden shadow-lg bg-white border border-gray-200">
        {/* Image */}
        <div>
        <img className="w-full h-full  object-cover" src={Image} alt={Tourist_spot_name} />

        </div>
        {/* Card content */}
        <div className="px-6 py-4">
          {/* Tourist spot name */}
          <div className="font-bold text-xl mb-2">{Tourist_spot_name}</div>

          {/* Country and Location */}
          <p className="text-gray-700 text-xl mb-2">
            <strong>Country:</strong> {Country_name}
          </p>
          <p className="text-gray-700 text-xl mb-2">
            <strong>Location:</strong> {location}
          </p>

          {/* Average Cost */}
          <p className="text-gray-700 text-xl mb-2">
            <strong>Average Cost:</strong> ${average_cost}
          </p>

          {/* Seasonality */}
          <p className="text-gray-700 text-xl mb-2">
            <strong>Best Season:</strong> {seasonality}
          </p>

          {/* Travel Time */}
          <p className="text-gray-700 text-xl mb-2">
            <strong>Travel Time:</strong> {travel_time}hour
          </p>

          {/* Total Visitors Per Year */}
          <p className="text-gray-700 text-xl mb-2">
            <strong>Visitors Per Year:</strong> {total_Visitor_Per_Year}
          </p>
        </div>

        {/* User Information */}
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-700 text-base mb-1">
            <strong>User Name:</strong> {user_Name}
          </p>
          <p className="text-gray-700 text-base mb-1">
            <strong>User Email:</strong> {user_Email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default View;
