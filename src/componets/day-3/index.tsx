/* import { useEffect, useState } from "react";

const Day3ApiCall = () => {

    const [myData, setMyData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async () => {
        try {
            const response = await fetch('https://dummyjson.com/todos');
            console.log('response :: ', response)
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('data :: ', data);
            setMyData(data?.todos);
        } catch (error: any) {
            console.log('first :: ', error);
            setError(error?.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="row">
            {myData.map((item: any, index: number) => (
                <div key={index} className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={'https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.todo}</h5>
                            <a href="#" className={`btn btn-${item.completed ? 'success' : 'danger'}`}>{item.completed ? 'Completed' : 'Not Completed'}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Day3ApiCall; */

import { useEffect, useState } from "react";
import axios from "axios";

const Day3ApiCall = () => {

    const [myData, setMyData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = () => {
        axios.get('https://dummyjson.com/todos')
            .then(response => {
                console.log('response :: ', response);
                setMyData(response.data?.todos);
                setLoading(false);
            })
            .catch(error => {
                console.log('first :: ', error);
                setError(error?.message);
                setLoading(false);
            });
    }

    useEffect(() => {
        getData();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="row">
            {myData.map((item: any, index: number) => (
                <div key={index} className="col-md-3 mt-2">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src={'https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742_1280.jpg'} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.todo}</h5>
                            <a href="#" className={`btn btn-${item.completed ? 'success' : 'danger'}`}>{item.completed ? 'Completed' : 'Not Completed'}</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Day3ApiCall;