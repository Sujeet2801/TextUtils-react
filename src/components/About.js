import React from "react";

export default function About(props) {

  // // To change background style
  // const [myStyle, setMyStyle] = useState({
  //   color: "#2c2a62",
  //   backgroundColor: "white",
  // });

  // // To change button text
  // const [btntext, setBtnText] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (myStyle.color === "#2c2a62") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "#2c2a62",
  //       // border: '1px solid white'
  //     });
  //     setBtnText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "#2c2a62",
  //       backgroundColor: "white",
  //     });
  //     setBtnText("Enable Dark Mode");
  //   }
  // };

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    background: props.mode === 'dark'?'rgb(36 74 104)': 'white',
    // border: '2px solid white'
  }

  return (
    <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Welcome to TextUtils, your go-to online tool for quick and
              convenient text conversion. We specialize in transforming text
              into various formats, including lowercase, uppercase, and clearing
              unwanted content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Accessibility and Convenience</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Our TextUtils website is designed with user convenience in mind.
              It is accessible from any device with an internet connection,
              allowing you to transform text on the go. Whether you're using a
              computer, tablet, or smartphone, our website provides a seamless
              and responsive experience, ensuring you can easily convert text
              whenever you need it.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Time-saving and Reliable</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              With our TextUtils tools, you can save valuable time by automating
              the process of converting text to uppercase, lowercase, or
              clearing unnecessary formatting. No need to manually edit each
              letter or word - our website performs the conversion swiftly and
              accurately, allowing you to focus on other important tasks.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div> */}
    </div>
  );
}
