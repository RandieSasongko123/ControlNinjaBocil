import React from "react";
import './DetailComp.css';
import Logo from "../../image/Logo.jpeg";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

const DetailComp = () => {

    const {id} =useParams()
    const [ninja , setNinja] = useState({
        background:'',
        chakra:'',
        fotohero:'',
        fotodetail:'',
        quality:'',
        point:'',
        nama : '',
        grade: ''
    })

    useEffect(() => {
        console.log("params", id)
        axios.get(`https://publicapininjaheroes.vercel.app/ninja/${id}`)
        .then(res => {
            setNinja({
                nama : res.data[0].nama,
                grade : res.data[0].grade,
                fotohero: res.data[0].fotohero,
                fotodetail : res.data[0].fotodetail,
                quality: res.data[0].quality,
                point : res.data[0].point,
                chakra : res.data[0].chakra
            })
        }).catch(err => {
            console.log(err)
        })
    },[id])

    return(
        <div className="container-detail-character">
            <div className="content-character">
                {/* <pre>{JSON.stringify(ninja, null, 2)}</pre> */}
                <div className="content-kiri-character">
                    <center><a href="
                    "><img className="logoChar" src={ninja.fotohero} alt="" /></a></center>
                    <br />
                </div>
                
                <div className="content-kanan-character">
                    <h1>{ninja.nama}</h1>
                    <div className="detail-character">
                        <ul>
                            <li>Grade :<br /> {ninja.grade} </li>
                            <li>Quality :<br /> {ninja.quality} </li>
                            <li>G. Point :<br /> {ninja.point} </li>
                            <li>Chakra :<br /> {ninja.chakra} </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

DetailComp.defaultProps = {
    logoChar: Logo,
    namaChar: 'Coming Soon',
    grade: 'Coming Soon',
    quality: 'Coming Soon',
    point: 'Coming Soon',
    chakra: 'Coming Soon'
}

export default DetailComp;