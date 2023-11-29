import { useEffect, useState } from 'react';
import { useWindowWidth } from '../context/windowWidthProvider';
import axios from 'axios';
import '../styles/first.css'


export default function First() {

    const [data, setData] = useState([])

    const windowWidth = useWindowWidth();

    useEffect(() => {
        handler()
    }, [])

    const handler = async () => {
        try {
            const response = await axios.get('http://localhost:5000/sportsData/1')
                .then(response => {
                    setData(response.data)
                })
                .catch(error => {
                    console.log(error)
                })

        } catch (error) {
            console.log('error')
        }
    }
    return (
        <div className="main-first">
            <div className={windowWidth > 1300 ? "main" : "main-small"}>
                <h3>
                    {data.title}
                </h3>
                {data.data}
            </div>
        </div>
    );
}