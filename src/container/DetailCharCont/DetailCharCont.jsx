import React from "react";
import { Component } from "react";
import "./DetailCharCont.css";
import RecomComp from "../../component/DetailCharComp/RecomComp";
import DetailComp from "../../component/DetailCharComp/DetailComp";

class DetailCharCont extends Component {

  render() {
    return (
      <div className="container-detail-char">
        
        <div className="content-atas-char">
        <DetailComp />
        </div>
        
        <div className="content-bawah-char">
          <RecomComp />
        </div>
      </div>
    );
  }
}

export default DetailCharCont;

