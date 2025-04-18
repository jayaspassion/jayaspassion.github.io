// import React, { Component } from "react";
// import Typical from "react-typical";


// class Header extends Component {
//   titles = [];

//   constructor() {
//     super();
//     this.state = { checked: false };
//     this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
//   }

//   onThemeSwitchChange(checked) {
//     this.setState({ checked });
//     this.setTheme();
//   }

//   setTheme() {
//     var dataThemeAttribute = "data-theme";
//     var body = document.body;
//     var newTheme =
//       body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
//     body.setAttribute(dataThemeAttribute, newTheme);
//   }

//   render() {
//     if (this.props.sharedData) {
//       var name = this.props.sharedData.name;
//       this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
//     }

//     const HeaderTitleTypeAnimation = React.memo( () => {
//       return <Typical className="title-styles" steps={this.titles} loop={50} />
//     }, (props, prevProp) => true);

//     return (
//       <header id="home" style={{ height: window.innerHeight, display: 'block' }}>
//         <div className="row aligner" style={{height: '100%'}}>
//           <div className="col-md-12">
//             <div>
//               <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
//               <br/>
//               <h1 className="mb-0">
//                 <Typical steps={[name]} wrapper="p" />
//               </h1>
//               <div className="title-container">
//                 <HeaderTitleTypeAnimation />
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//     );
//   }
// }

// export default Header;

//**********Functional Component instead of class*********/

import React from "react";
import Typical from "react-typical";
// import { useState } from "react";

function Header(props) {
  var titles = [];
//   const [state, setState] = useState({ checked: false });

  if (props.resumeData) {
    var name = props.resumeData.name;
    titles = props.resumeData.titles.map((x) => [x.toUpperCase(), 1500]).flat();
  }

  const HeaderTitleTypeAnimation = () => {
    return <Typical className="title-styles" steps={titles} loop={50} />;
  };

  return (
    <header id="home" style={{ height: window.innerHeight, display: "block" }}>
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <Typical className="text-white" steps={[name]} wrapper="p" />
            </h1>
            <div className="title-container text-white">
              <HeaderTitleTypeAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="scroll-down-arrow">
    <span
      className="iconify"
      data-icon="bi:chevron-double-down"
      data-inline="false"
      style={{ fontSize: "4rem", color: "#ffffff" }}
      // onClick={() => {
      //   const section = document.getElementById("about");
      //   section && section.scrollIntoView({ behavior: "smooth" });
      // }}
    ></span>
  </div>
    </header>
  );
}

export default Header;

