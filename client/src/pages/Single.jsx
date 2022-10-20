import React from "react";
import { Link } from "react-router-dom";
import edit from "../assets/edit.svg";
import delet from "../assets/delete.svg";
import Menu from "../components/Menu";

function Single() {
  return (
    <div className="single">
      <div className="content">
        <img src="" alt="" />
        <div className="user">
          <img src="" alt="" />
          <div className="info">
            <span>Wendy</span>
            <p>date</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={edit} alt="" />
            </Link>
            <img src={delet} alt="" />
          </div>
        </div>
        <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet,
          doloremque aspernatur iure vel asperiores fuga esse itaque magnam
          deleniti facilis laudantium? Tenetur ipsa porro obcaecati odio
          eligendi itaque praesentium accusantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Ducimus nostrum repudiandae modi
          consequatur laudantium quisquam dolorum. Enim esse ut molestiae
          voluptas porro voluptate nihil amet, labore reprehenderit atque
          architecto laboriosam! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Corporis excepturi sint nisi atque labore
          laboriosam, cumque, maxime in minima ipsa magnam error corrupti
          quidem. Maxime odit minima deserunt ducimus et!
        </p>
      </div>
      <Menu />
    </div>
  );
}

export default Single;
