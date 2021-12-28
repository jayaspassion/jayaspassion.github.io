import React, { Component } from "react";
import { Button } from "react-bootstrap";


class About extends Component {
  render() {
    
      // var profilepic = "images/" + this.props.resumeBasicInfo.image;
    
    if (this.props.resumeBasicInfo) {
      var profilepic = "images/" + this.props.resumeBasicInfo.image;
      var sectionName = this.props.resumeBasicInfo.section_name.about;
      var hello = this.props.resumeBasicInfo.description_header;
      var about1 = this.props.resumeBasicInfo.description;
      var about2 = this.props.resumeBasicInfo.philosophy;
      var about3 = this.props.resumeBasicInfo.preference;
    }

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img
                    height="250px"
                    src={profilepic}
                    alt="Avatar placeholder"
                  />
                  {/* <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  /> */}
                  <br/>
                  <br/>
                  {/* <a href="https://drive.google.com/uc?export=download&id=14IditQRDLICAzEMlKu7xtnMrXaQkVh-G">Download Resume</a> */}
                  </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello}</span>
                    <br />
                    <br />
                    {about1}
                    <br />
                    <br />
                    {about2}
                    <br />
                    <br />
                    {about3}
                    <br />
                    <br />
                    <Button className="resume" variant="dark" size="lg" href="https://drive.google.com/uc?&id=14IditQRDLICAzEMlKu7xtnMrXaQkVh-G">Resume</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
