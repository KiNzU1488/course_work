import { useEffect, useState } from 'react'
import { useWindowWidth } from '../context/windowWidthProvider';
import axios from 'axios'

export default function News() {

    const [data, setData] = useState([])
    const windowWidth = useWindowWidth();


    useEffect(() => {
        handler()
    }, [])

    const handler = async () => {
        try {
            const response = await axios.get('http://localhost:5000/news')
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
                {data.map((data) => {
                    return (
                        <div key={data.id}>
                            <h3>
                                {data.title}
                            </h3>
                            <p>
                                {data.data}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}