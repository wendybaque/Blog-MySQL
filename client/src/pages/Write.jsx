import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Helmet } from "react-helmet";

function Write() {
  const [value, setValue] = useState("");

  return (
    <div className="add">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Write</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="content">
        <input type="text" placeholder="Title" />
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
            // onChange={(e) => setFile(e.target.files[0])}
            className="file"
          />
          <label className="file" htmlFor="file">
            Upload Image
          </label>
          <div className="buttons">
            <button>Save as a draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="massecritique"
              id="massecritique"
            />
            <label htmlFor="massecritique">Masse Critique</label>
          </div>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="coupdecoeur"
              id="coupdecoeur"
            />
            <label htmlFor="coupdecoeur">Coup de coeur</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="feelgood" id="feelgood" />
            <label htmlFor="feelgood">Feel-Good</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="romance" id="romance" />
            <label htmlFor="romance">Romance</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="thriller" id="thriller" />
            <label htmlFor="thriller">Thriller</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="divers" id="divers" />
            <label htmlFor="divers">Divers</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Write;
