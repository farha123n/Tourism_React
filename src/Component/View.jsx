import { useParams } from "react-router-dom";


const View = () => {
    const { id } = useParams();  // Capture the id from URL
    return (
      <div>
        <h1>Tourist Spot Details for {id}</h1>
        {/* Fetch and render the details using this id */}
      </div>
    );
  };

export default View;