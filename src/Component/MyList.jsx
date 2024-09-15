import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Contex/AuthProvider";
import MyCard from "./MyCard";

const MyList = () => {
    const allTouristSpot = useLoaderData();
    const [myList, setMyList] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(user);
    console.log(allTouristSpot);

    useEffect(() => {
        if (allTouristSpot && user) {
            const list = allTouristSpot.filter(item => item.user_Email === user.email);
            setMyList(list);
        }
    }, [allTouristSpot, user]);  // Add dependencies to ensure the effect runs when data changes

    return (
        <div>
            {myList.map(list=><MyCard list={list} key={list._id}></MyCard>)}
        </div>
    );
};

export default MyList;
