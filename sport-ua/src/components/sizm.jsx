import { useEffect, useState } from 'react'
import { useWindowWidth } from '../context/windowWidthProvider';
import '../styles/first.css'
import axios from 'axios'

export default function Sizm() {
    const [data, setData] = useState([])

    const windowWidth = useWindowWidth();

    useEffect(() => {
        handler()
    }, [])

    const handler = async () => {
        try {
            const response = await axios.get('http://localhost:5000/sportsData/2')
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
