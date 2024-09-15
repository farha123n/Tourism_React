
import Swal from 'sweetalert2';
const AddtouristSpot = () => {

   const handle_Add_tourist_spot=(e)=>{
          e.preventDefault();
          const form=e.target;
          const Image=form.image.value;
          console.log(Image);
          const location=form.Location.value;
          const Tourist_spot_name=form.spot_Name.value;
          const Country_name   =form.Country_name.value;
          const short_Description  =form.short_Description.value;
          const average_cost  =form.average_cost.value;
          const seasonality  =form.seasonality.value;
          const travel_time  =form.travel_time.value;
          const total_Visitor_Per_Year  =form.total_Visitor_Per_Year.value;
          const user_Name  =form.user_Name.value;
          const user_Email =form.user_Email.value;
          const new_Tourist_spot={Image,location,Tourist_spot_name,Country_name,short_Description,average_cost,seasonality,
                travel_time,total_Visitor_Per_Year,user_Name,user_Email  
          };
          fetch('http://localhost:5000/add_tourist_spot',{
          method:'POST',
          headers:{
           'content-type':'application/json',
          },
          body:JSON.stringify(new_Tourist_spot),
   
   
          })
          .then(res=>res.json())
          .then(data=>{console.log(data);

                if(data.insertedId){
                        Swal.fire({
                                title: 'Success!',
                                text: 'Tourist Spot added successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                              })
                }

          })
          

   }
    return (
        <div className='mt-20'>
                <h1 className='text-red-500 text-purple-500 font-bold text-5xl text-center '>Add Tourist Spot</h1>
        <div className="bg-green-200 m-16">
          
            <form onSubmit={handle_Add_tourist_spot} method="post">
            <div className="grid lg:grid-cols-2   p-10 lg:gap-8">
                <div className="bg-green-950 p-10">
                    
                        <p className="text-4xl text-center text-blue-600">Image</p>
                        <input type="text" className="text-2xl p-4" name="image" id="" />
                   
                </div>
                <div className="bg-green-950 p-10">
                   
                        <p className="text-4xl text-center text-blue-600 my-6">Location</p>
                        <input type="text" className="text-xl p-4  w-full rounded-lg" name="Location" id="" />
                    
                </div>
                <div className="bg-green-950 p-10">
                
                        <p className="text-4xl text-center text-blue-600">Tourist spot name</p>
                        <input type="text" className="text-2xl p-4" name="spot_Name" id="" />
                    
                </div>
                <div className="bg-green-950 p-10">
                
                        <p className="text-4xl text-center text-blue-600">Country Name</p>
                        <input type="text" className="text-2xl p-4" name="Country_name" id="" />
                
                </div>
                <div className="bg-green-950 p-10">
                    
                        <p className="text-4xl text-center text-blue-600">Short description</p>
                        <input type="text" className="text-2xl p-4" name="short_Description" id="" />
            
                </div>
                <div className="bg-green-950 p-10">
                    
                        <p className="text-4xl text-center text-blue-600">Average Cost</p>
                        <input type="text" className="text-2xl p-4" name="average_cost" id="" />
                    
                </div>
                
                <div className="bg-green-950 w-1/2 mx-auto p-10 flex ">
                    
                       
                  <div className="  mx-auto" >
                  <p className="text-4xl text-center text-blue-600">Seasonality</p>
                  <input type="text" className="text-2xl p-4" name="seasonality" id="" />
                  </div>
                       
                    
                </div>
                <div className="bg-green-950 p-10">
                    
                    <p className="text-4xl text-center text-blue-600">Travel Time</p>
                    <input type="text" className="text-2xl p-4" name="travel_time" id="" />
                
            </div>
            <div className="bg-green-950 p-10">
                    
                    <p className="text-4xl text-center text-blue-600">Total Visitor Per Year</p>
                    <input type="text" className="text-2xl p-4" name="total_Visitor_Per_Year" id="" />
                
            </div>
            <div className="bg-green-950 p-10">
                    
                    <p className="text-4xl text-center text-blue-600">User Name</p>
                    <input type="text" className="text-2xl p-4" name="user_Name" id="" />
                
            </div>
            <div className="bg-green-950 p-10">
                    
                    <p className="text-4xl text-center text-blue-600">User Email </p>
                    <input type="text" className="text-2xl p-4" name="user_Email" id="" />
                
            </div>
                </div>
            
              
                
                <input className="w-full text-white bg-slate-800 p-4" type="submit" value="Add" />
                </form>
            </div>
        </div>

    );
};

export default AddtouristSpot;