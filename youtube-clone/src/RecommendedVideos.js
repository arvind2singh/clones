import React, {useEffect} from 'react';
import axios from 'axios';
import "./RecommendedVideos.css";

function RecommendedVideos() {

    useEffect(() => {
        async function getData(){
            const res= await axios.get('AIzaSyBAmD4YSRjew6YUIz225C82Rvw7mYYUQjM');
            console.log(res);
        }
        getData();
    });
 
    return (
        <div className="recommendedvideos">
            <h2>i am Recommended Videos</h2>
        </div>
    )
}

export default RecommendedVideos
