import React from "react";
import "./preview_style.css";

function Preview(props) {
  // const logo_width = props.width_logo;
  return (
    <div className="preview_body">
      <div className="preview_box">
        <div className="card_header">
          <div className={"card_logo " + props.logo_alignment }>
            <img
              src={props.logo}
              className={
                props.logo_width.length === 0 ? "max-100 default-size" : "max-100"
              }
              width={
                props.logo_width.length > 0 ? props.logo_width + "px" : "auto"
              }
              height={
                props.logo_height.length > 0 ? props.logo_height + "px" : "auto"
              }
              style={{ objectFit: props.object_fit, borderWidth: props.border_width+'px', borderStyle: props.border_style, borderColor: props.border_color, borderRadius: props.border_radius+'px' } }
            />
          </div>
        </div>
        <div className="card_body"></div>
        <div className="card_footer"></div>
      </div>
    </div>
  );
}
export default Preview;
