import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { Helmet } from "react-helmet";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState(state?.cat || "");

  const navigate = useNavigate();

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="add">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Write</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="content">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status :</b> Draft
          </span>
          <span>
            <b>Visibility :</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            name=""
            onChange={(e) => setFile(e.target.files[0])}
            className="file"
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button onClick={handleClick}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "massecritique"}
              name="cat"
              value="massecritique"
              id="massecritique"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="massecritique">Masse Critique</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "coupdecoeur"}
              name="cat"
              value="coupdecoeur"
              id="coupdecoeur"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="coupdecoeur">Coup de coeur</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "feelgood"}
              name="cat"
              value="feelgood"
              id="feelgood"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="feelgood">Feel-Good</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "romance"}
              name="cat"
              value="romance"
              id="romance"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="romance">Romance</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "thriller"}
              name="cat"
              value="thriller"
              id="thriller"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="thriller">Thriller</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              checked={cat === "divers"}
              name="cat"
              value="divers"
              id="divers"
              onChange={(e) => setCat(e.target.value)}
            />
            <label htmlFor="divers">Divers</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
