import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./api/firebase";
import Head from "next/head";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useRouter } from "next/router";
function Dashboard() {
    const [showResults, setShowResults] = useState(false)
    const onClick = () => setShowResults(true)
    const [data, setData] = useState(null);
    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const router = useRouter();
    const fetchUserName = async () => {
        if (loading) return;
        if (!user) return router.push("/");
    };

    useEffect(() => {
        fetchUserName();
    });
    useEffect(() => {
        fetch("http://localhost:5000/adduser")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [data]);
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" crossOrigin="anonymous" />

            </Head>
     
            <div>
                <input type="submit" className="dashboard__btn" value="Button" onClick={onClick} />
                {showResults ? <div className="container">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Phone Number</th>
                        </tr>
                       </thead>
                        {data.sTudentData &&
                            data.sTudentData.map((item) => {
                                return <>
                                    <tbody>
                                    <tr key={item.id}>
                                        <td >{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.city}</td>
                                        <td>{item.phonenumber}</td>
                                        </tr>
                                        </tbody>

                                </>;
                            })}


                    </table>
                </div> : null}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div>
                Logged in as
                <div>{name}</div>
                <div>{user?.email}</div>
                <button className="dashboard__btn" onClick={logout}>
                    Logout
                </button>
            </div>
           
            </>
    );
}
export default Dashboard;