/* eslint-disable @next/next/no-sync-scripts */
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Script from 'next/script'

const adminpanel = () => {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4000/adduser")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);
    console.log(data)
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" crossOrigin="anonymous" />

            </Head>
            <div>
                <div>
                    <input type="submit" value="Search" onClick={onClick} />
                    {showResults ? <div className="container">
                        <h2>Bootstrap Simple Table</h2>
                        <table className="table">
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>City</th>
                                <th>Phone Number</th>
                            </tr>

                            {data.sTudentData &&
                                data.sTudentData.map((item) => {
                                    return <>
                                        <tr key={item.id}>
                                            <td >{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.city}</td>
                                            <td>{item.phonenumber}</td>
                                        </tr>

                                    </>;
                                })}


                        </table>
                    </div> : null}
                </div>

                <Script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></Script>
                <Script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></Script>
            </div>
        </>
    )
}

export default adminpanel