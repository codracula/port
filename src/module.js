import React from "react";
var havelink = false;

function Module(prop) {
  return (
    <div className="module">
      <img className="module-img" src={prop.img} alt="project_image" />
      <div>
        <h4 className="module-title">{prop.name}</h4>
        <p className="module-description">{prop.def}</p>
        {link(prop)}
      </div>
    </div>
  );
}

function link(prop) {
  console.log(prop.link);
  if (prop.link == "") {
    return <p>none</p>;
  } else {
    return <a href = {prop.link}>click here</a>;
  }
}

export default Module;
