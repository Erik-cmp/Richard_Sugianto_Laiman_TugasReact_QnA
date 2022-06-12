import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:4000/portofolio")
        .then(res => {
            console.log(res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    }, [])

    const arr = data.map((data, index) => {
        return (
            <>
                <h3>Full Name: {data.name}</h3>
                <br />
                <h3>Nickname: {data.nick}</h3>
                <br />
                <h3>Date of Birth: {data.dob}</h3>
                <br />
                <h3>Major: {data.major}</h3>
                <br />
                <h3>Programming Language: {data.p_lang}</h3>
            </>
        )
    })

    return(
        <>
            <h1>This is about page</h1>
            {arr}
        </>
    )
};

export default About;
