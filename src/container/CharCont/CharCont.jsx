import React from "react";
import { Component } from "react";
import "./CharCont.css";
import CardCharComp from "../../component/CharComp/CardCharComp";
import axios from "axios";

class CharCont extends Component {
  state = {
    post: [],
    formNinja: {
      fotohero: "",
      fotodetail: "",
      background: "",
      quality: "",
      _id: "",
      nama: "",
      chakra: "",
      point: "",
      grade: "",
      skill: [],
      // skill: [
      //   {
      //     skill1: "",
      //     skill2: "",
      //     skill3: "",
      //     skill4: "",
      //     skill5: ""
      //   }
      // ],
      summon: [],
      tailed: [],
      // skill: [{
      //   skill1: '',
      //   skill2: '',
      //   skill3: '',
      //   skill4: '',
      //   skill5: ''
      // }]
    },
    isUpdate: false,
  };

  getPostAPI = () => {
    axios
      .get("https://publicapininjaheroes.vercel.app/ninja")
      .then((result) => {
        this.setState({
          post: result.data,
        });
      });
  };

  postDataToAPI = () => {
    axios
      .post(
        "https://publicapininjaheroes.vercel.app/ninja",
        this.state.formNinja
      )
      .then(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log("error : ", err);
        }
      );
  };

  putDataToAPI = () => {
    axios
      .put(
        `https://publicapininjaheroes.vercel.app/ninja/${this.state.formNinja._id}`,
        this.state.formNinja
      )
      .then((res) => {
        console.log(res);
        this.getPostAPI();
        this.setState({
          isUpdate: false,
          formNinja: {
            fotohero: "",
            fotodetail: "",
            background: "",
            quality: "",
            _id: "",
            nama: "",
            chakra: "",
            point: "",
            grade: "",
            skill: [],
            summon: [],
            tailed: []
          },
        });
      });
  };

  handleRemove = (id) => {
    // console.log(id);
    axios
      .delete(`https://publicapininjaheroes.vercel.app/ninja/${id}`)
      .then(() => this.getPostAPI());
  };

  handleUpdate = (data) => {
    // console.log(data);
    this.setState({
      formNinja: data,
      isUpdate: true,
    });
  };

  handleReset = () => {
    this.setState({
      isUpdate: false,
      formNinja: {
        fotohero: "",
        fotodetail: "",
        background: "",
        quality: "",
        _id: "",
        nama: "",
        chakra: "",
        point: "",
        grade: "",
        skill: ["", "", "", "", ""],
        summon: ["", "", ""],
        tailed: ["", ""]
      }
    })
  }

  handleFormChange = (event) => {
    // Unik ID
    let timestamp = new Date().getTime();

    // Target Data
    let formNinjaNew = { ...this.state.formNinja };

    if (!this.state.isUpdate) {
      formNinjaNew["_id"] = timestamp;
    }

    formNinjaNew[event.target.name] = event.target.value;

    // console.log(event.target.value);

    this.setState(
      {
        formNinja: formNinjaNew,
      },
      () => {}
    );
  };

  handleSubmit = () => {
    if (this.state.isUpdate) {
      this.putDataToAPI();
    } else {
      this.postDataToAPI();
    }
  };

  componentDidMount() {
    this.getPostAPI();
  }

  searchChanged = (event) => {
    this.setState({ nama: event.target.value });
  };

  render() {
    return (
      <div className="container-char">
        
        <div className="container-detail-char">
          <h1>Character Control Panel</h1>
          <input
            type="text"
            className="search-char"
            onChange={this.searchChanged}
            value={this.state.nama}
            placeholder="Search..."
          />

          <div className="control-data-char">
            {this.state.post
              .filter((post) => {
                if (post.nama.toLowerCase().includes(this.state.nama)) {
                  return post;
                } else if (this.state.nama == null) {
                  return (
                    <CardCharComp
                      data={post}
                      key={post._id}
                      remove={this.handleRemove}
                      update={this.handleUpdate}
                    />
                  );
                }
              })
              .map((item) => (
                <CardCharComp
                  data={item}
                  key={item._id}
                  remove={this.handleRemove}
                  update={this.handleUpdate}
                />
              ))}
          </div>
        </div>

        <div className="from-add-post">
          <center><h1>Form Character</h1></center>
          <table>
            <tbody>
              <tr>
                <td>Foto Hero</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.fotohero}
                    type="text"
                    name="fotohero"
                    placeholder="Add Foto Hero"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Foto Detail</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.fotodetail}
                    type="text"
                    name="fotodetail"
                    placeholder="Add Foto Detail"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Background</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.background}
                    type="text"
                    name="background"
                    placeholder="Add Background"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Nama</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.nama}
                    type="text"
                    name="nama"
                    placeholder="Add Nama"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Grade</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.grade}
                    type="text"
                    name="grade"
                    placeholder="Add Grade"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Quality</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.quality}
                    type="text"
                    name="quality"
                    placeholder="Add Quality"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Grade Point</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.point}
                    type="text"
                    name="point"
                    placeholder="Add Grade Point"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Chakra</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.chakra}
                    type="text"
                    name="chakra"
                    placeholder="Add Chakra"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.skill[0]}
                    type="text"
                    name="skill[0]"
                    placeholder="Add Skill 1"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Skill 2</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.skill[1]}
                    type="text"
                    name="skill1"
                    placeholder="Add Skill 2"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Skill 3</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.skill[2]}
                    type="text"
                    name="skill[2]"
                    placeholder="Add Skill 3"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Skill 4</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.skill[3]}
                    type="text"
                    name="skill[3]"
                    placeholder="Add Skill 4"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Skill 5</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.skill[4]}
                    type="text"
                    name="skill[4]"
                    placeholder="Add Skill 5"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Summon 1</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.summon[0]}
                    type="text"
                    name="summon[0]"
                    placeholder="Add Summon 1"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Summon 2</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.summon[1]}
                    type="text"
                    name="summon[1]"
                    placeholder="Add Summon 2"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Summon 3</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.summon[2]}
                    type="text"
                    name="summon[3]"
                    placeholder="Add Summon 3"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Tailed 1</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.tailed[0]}
                    type="text"
                    name="tailed[0]"
                    placeholder="Add Tailed 1"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>Tailed 2</td>
                <td>:</td>
                <td>
                  <input
                    value={this.state.formNinja.tailed[1]}
                    type="text"
                    name="tailed[1]"
                    placeholder="Add Tailed 2"
                    onChange={this.handleFormChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button className="btn-submit" onClick={this.handleSubmit}>
                    Tambah Data
                  </button>
                </td>
                <td>

                </td>
                <td><button className="btn-reset" onClick={this.handleReset}>Reset</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default CharCont;
