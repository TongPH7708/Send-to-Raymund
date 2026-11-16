import React from "react";

const name = "Nicholas";
const element = (
  <div className="my-div" style={{ paddingTop: 10 }}>
    <h1 id="my-heading">My first XML Element</h1>
    <h2>Hi {name}</h2>
  </div>
);

//XML behaves like HTML, but if you want to use multiline, you have to use multibrackets
//ID can be declared normally, others are different
//You do not use class, you use classname
//style becomes style = {{styleKey: value}}
//Above is an example
//You can also add variables into your XML by just using {} curly brackets
//Another reason why we use XML, is because we can recylce the elements

const secundoElement = <div>{element}</div>;

const AboutMe = () => {
  return (
    <div>
      <h2> About Me</h2>
      <p>Hello, my name is {name} and I'm a web developer. </p>
    </div>
  );
};

export default AboutMe;


























































































































































































