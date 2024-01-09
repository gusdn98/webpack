import _ from "lodash";
import "./style.css";
import Dog from "./dog.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";
import toml from "./data.toml";
import yaml from "./data.yaml";
import json from "./data.json5";

console.log(`toml: ${toml.title}, ${toml.owner.name}`);
console.log(`yaml: ${yaml.title}, ${yaml.owner.name}`);
console.log(`json: ${json.title}, ${json.owner.name}`);

function component() {
  const element = document.createElement("div");

  // lodash
  element.innerHTML = _.join(["Hi", "My name is HyunWoo"], " ");

  //css추가
  element.classList.add("hello");

  //배경이미지 추가
  const exDog = new Image();
  exDog.src = Dog;

  element.appendChild(exDog);

  console.log(Data);
  console.log(`Notes: ${Notes}`);

  return element;
}

document.body.appendChild(component());
