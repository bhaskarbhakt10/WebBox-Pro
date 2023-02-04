import React from "react";
import "./preview_style.css";

function Preview(props) {
  // const logo_width = props.width_logo;
  return (
    <div className="preview_body">
      <div
        className={
          "box-100 " + (props.bg_color.length > 0 ? "" : "preview_box")
        }
    
        style={props.bg_grad ? {backgroundImage:'linear-gradient('+props.angle+'deg , '+ props.bg_grad_color_one +' '+ props.percent_one +'% ,'+props.bg_grad_color_two +' '+ props.percent_two + '% )' } : { backgroundColor: props.bg_color } }
      >
        <div className="card_header">
          <div className={"card_logo " + props.logo_alignment}>
            <img
              src={props.logo}
              className={
                props.logo_width.length === 0
                  ? "max-100 default-size"
                  : "max-100"
              }
              width={
                props.logo_width.length > 0 ? props.logo_width + "px" : "auto"
              }
              height={
                props.logo_height.length > 0 ? props.logo_height + "px" : "auto"
              }
              style={{
                objectFit: props.object_fit,
                borderWidth: props.border_width + "px",
                borderStyle: props.border_style,
                borderColor: props.border_color,
                borderRadius: props.border_radius + "px",
              }}
            />
          </div>
        </div>
        <div className="card_body"></div>
        <div className="card_footer">
        
          <ul>
            {props.email && (
              <li className="card_footer_icon card_footer_email">
                <a href={"mailto:"+props.email}>
                    <i className="fa fa-envelope" style={{fontSize: props.contact_font_size+"px", color:props.contact_font_color}}>

                    </i>
                </a>
              </li>
            )}
            {props.phone && (
                <li className="card_footer_icon card_footer_phone">
                    <a href={'tel:'+props.phone}>
                        <i className="fa fa-phone" style={{fontSize: props.contact_font_size+"px", color:props.contact_font_color}}></i>
                    </a>
                </li>
            )}
            {props.website && (
                <li className="card_footer_icon card_footer_web">
                    <a href={props.website}>
                        <i className="fa fa-globe" style={{fontSize: props.contact_font_size+"px", color:props.contact_font_color}}></i>
                    </a>
                </li>
            )}
            {
                function() {
                    if(props.bc_app === "whatsapp"){
                        return (
                            <li className="card_footer_icon card_footer_web">
                    <a href={"https://api.whatsapp.com/send?phone="+props.whatsapp_country.substring(1) + props.whatsapp_number}>
                        <i className="fab fa-whatsapp" style={{fontSize: props.contact_font_size+"px", color:props.contact_font_color}}></i>
                    </a>
                </li>
                        )
                    }
                    else if(props.bc_app === "slack"){

                    }
                    else if(props.bc_app === "discord"){

                    }
                    else if(props.bc_app === "telegram"){

                    }
                    else{
                        return ('')
                    }
                }.call(this)
            }

          </ul>
        </div>
      </div>
    </div>
  );
}
export default Preview;
