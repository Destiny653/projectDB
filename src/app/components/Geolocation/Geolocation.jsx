import React, { useState } from 'react'

export default function Geolocation() {

    const [positions, setPositions] = useState([]);
    const [isWatching, setIsWatching] = useState(false);
    const [watchId, setWatchId] = useState(null);
    console.log(positions);
    

    const startTacking = () => {
        console.log(navigator.geolocation);

        const id = navigator.geolocation?.watchPosition((position) => {

            setPositions((prevPositions) => {
                const newPositions = [
                    ...prevPositions,
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        accuracy: position.coords.accuracy,
                        timestamp: position.timestamp
                    },
                ];

                if (newPositions.length > 3) {
                    newPositions.shift();
                }
                return newPositions;
            });
        }, (error) => {
             console.log("Error obtaining position:" , error);
             
        },
            {
                enableHighAccuracy: true,
                maximumAge: 0,
            }

        );
        setWatchId(id);
        setIsWatching(true)
    };

    const stopTracking = () => {
        if (isWatching) {
            navigator.geolocation.clearWatch(watchId);
            setIsWatching(false);
        }
    };
 
    return (
        <div>
            <h1>Find my location</h1>
            <button onClick={startTacking} disabled={isWatching} className='px-[30px] py-[8px] rounded-[30px] bg-[#b4ab2569]'>Start Tracking</button>
            <button onClick={stopTracking} disabled={!isWatching} className='px-[30px] py-[8px] rounded-[30px] bg-[#b4ab2569]'>Stop Tracking</button>
            {

                positions.length > 0 ?(
                    <ul>
                        {
                            positions.map((pos, index)=>(
                                <li key={index}>Update: 
                                    <strong>{index + 1}</strong> <br/>
                                    Latitude: {pos.latitude} <br/>
                                    Longditude: {pos.longitude} <br/>
                                    Accuracy: {pos.accuracy}m <br/>
                                    Timestamp: {
                                        new Date(pos.timestamp).toLocaleTimeString()
                                    }
                                </li>
                            ))
                        }
                    </ul>
                )
                : 
                (
                    <p>No position recorded yet.</p>
                )
            }
        </div>
    )
}
