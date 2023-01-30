import React from "react";
import './preview_style.css'


function Preview( props ){
    const logo_width = props.width_logo;
    return(
        <div className="preview_body">
            <div className="preview_box">
                <div className="card_header">
                    <div className="card_logo">
                        <img src={props.logo} className="img-fluid default-size"/>
                        <h1>{logo_width ? "rrrrr" : "fffff"}</h1>
                    </div>
                </div>
                <div className="card_body">

                </div>
                <div className="card_footer">

                </div>
            </div>
        </div>
    )
}
export default Preview;