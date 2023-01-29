import React from "react";
import "./CardCharComp.css";
import { Link } from "react-router-dom";

const CardCharComp = (props) => {
  return (
    <div className="container-card-char">
      <div>
        <img src={props.data.fotohero} alt="" />
        <br />
        <img src={props.data.fotodetail} alt="" />
        <br />
        <img src={props.data.background} alt="" />
      </div>

      <div className="detail-card-char">
        <table>
          <tbody>
            <tr>
              <td>Nama</td>
              <td>:</td>
              <td>{props.data.nama}</td>
            </tr>
            <tr>
              <td>Grade</td>
              <td>:</td>
              <td>{props.data.grade}</td>
            </tr>
            <tr>
              <td>Chakra</td>
              <td>:</td>
              <td>{props.data.chakra}</td>
            </tr>
            <tr>
              <td>Grade Point</td>
              <td>:</td>
              <td>{props.data.point}</td>
            </tr>
          </tbody>
        </table>
        <div className="container-skill-char">
          <p>Skill</p>
          <img src={props.data.skill[0]} alt="" />
          <img src={props.data.skill[1]} alt="" />
          <img src={props.data.skill[2]} alt="" />
          <img src={props.data.skill[3]} alt="" />
          <img src={props.data.skill[4]} alt="" />
        </div>
        <div className="container-summon-char">
          <p>Summon</p>
          <img src={props.data.summon[0]} alt="" />
          <img src={props.data.summon[1]} alt="" />
          <img src={props.data.summon[2]} alt="" />
        </div>
        <div className="container-tailed-char">
          <p>Tailed</p>
          <img src={props.data.tailed[0]} alt="" />
          <img src={props.data.tailed[1]} alt="" />
        </div>
        <div className="button-card-char">
          <center>
            <button
              className="delete"
              onClick={() => props.remove(props.data._id)}
            >
              Delete
            </button>
            <button className="update" onClick={() => props.update(props.data)}>
              Update
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

CardCharComp.defaultProps = {
  nama: "Randie",
  grade: "SSS",
  point: "1000",
  chakra: "Wind",
};

export default CardCharComp;
