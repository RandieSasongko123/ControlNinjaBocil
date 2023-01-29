import React from "react";
import './RecomComp.css';
import Logo from "../../image/Logo.jpeg";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

const RecomComp = (props) => {

    const {id} =useParams()
    const [ninja , setNinja] = useState({
        skill1: '',
        skill2: '',
        skill3: '',
        skill4: '',
        skill5: '',
        summon1: '',
        summon2: '',
        summon3: '',
        tailed1: '',
        tailed2: ''
    })

    useEffect(() => {
        console.log("params", id)
        axios.get(`https://publicapininjaheroes.vercel.app/ninja/${id}`)
        .then(res => {
            setNinja({
                nama : res.data[0].nama,
                skill1 : res.data[0].skill[0],
                skill2 : res.data[0].skill[1],
                skill3 : res.data[0].skill[2],
                skill4 : res.data[0].skill[3],
                skill5 : res.data[0].skill[4],
                summon1 : res.data[0].summon[0],
                summon2 : res.data[0].summon[1],
                summon3 : res.data[0].summon[2],
                tailed1 : res.data[0].tailed[0],
                tailed2 : res.data[0].tailed[1]
            })
        }).catch(err => {
            console.log(err)
        })
    },[id])

    return(
        <div className="container-recom">

            <div className="recom-skill">
                <h3 className="sub-judul">Skill Recommended</h3>
                <img src={ninja.skill1} alt="" />
                <img src={ninja.skill2} alt="" />
                <img src={ninja.skill3} alt="" />
                <img src={ninja.skill4} alt="" />
                <img src={ninja.skill5} alt="" />
            </div>

            <div className="recom-summon">
                <h3 className="sub-judul">Summon Recommended</h3>
                <img src={ninja.summon1} alt="" />
                <img src={ninja.summon2} alt="" />
                <img src={ninja.summon3} alt="" />
            </div>

            <div className="recom-tailed">
                <h3 className="sub-judul">Tailed Beast Recommended</h3>
                <img src={ninja.tailed1} alt="" />
                <img src={ninja.tailed2} alt="" />
            </div>

        </div>
    )
}

RecomComp.defaultProps = {
    skill1: Logo,
    skill2: Logo,
    skill3: Logo,
    skill4: Logo,
    skill5: Logo,
    summon1: Logo,
    summon2: Logo,
    summon3: Logo,
    tailed1: Logo,
    tailed2: Logo
}

export default RecomComp;