

const MyCard = ({list}) => {
    const { Image,location,Tourist_spot_name,}=list;
    return (
        <div>
           <div>
            <img src={Image} alt=""  />
           </div>
           <div>
            <strong>location</strong><span>{location}</span>
           </div>
           <div></div>
        </div>
    );
};

export default MyCard;