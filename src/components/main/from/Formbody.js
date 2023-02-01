import React, { useEffect, useState } from "react";
import Preview from "../preview/Preview";
import countrycodes from '../../../json/countrycode.json';
import "./form.css";

function FormBody() {
  const [cardform, setCardForm] = useState({
    bg_color: "",
    email: "",
    phone: "",
    website: "",

    bc_app: "",
    whatsapp: "",
    w_number:"",

    logo: "",
    logo_width: "",
    logo_height: "",
    object_fit: "",
    logo_alignment: "",
    use_border: false,
    border_width: "",
    border_style: "",
    border_color: "",
    border_radius: "",
    fname: "",
    lname: "",
  });

  const handlelogochange = (e) => {
    const logo = e.target.files;
    console.log(logo);
    setCardForm({ ...cardform, logo: URL.createObjectURL(logo[0]) });
  };

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setCardForm({ ...cardform, [name]: value });
  };

  const handlecheck = (e) => {
    setCardForm({ ...cardform, use_border: !cardform.use_border });
  };

  // const getcountry = async (e) => {
  //   const response = await fetch(
  //     "../countrycode.json"
  //   ).then((response) => response.json());
  //     console.log(response);
  //   setCardForm({...cardform, whatsapp : response});
  // };
  

  // useEffect(()=>{
  //   getcountry();
  // },[]);

  const handlesubmit = (e) => {
    console.log(cardform.fname);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8">
          <div className="form_body">
            <form action="">
              <div className="row">
                <div className="col-md-12">
                  {/* global section  */}
                  <fieldset className="fieldset">
                    <legend>Global</legend>
                    <div className="row">
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="bg-color">Background Color</label>
                          <input
                            type="color"
                            name="bg_color"
                            id="bg-color"
                            className="form-control form-control-color"
                            value={cardform.bg_color}
                            onChange={handleinput}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <h2 className="sub-heading">Contact Details</h2>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="email">Email</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa fa-envelope"></i>
                                </span>
                                <input
                                  type="email"
                                  name="email"
                                  id="email"
                                  className="form-control"
                                  value={cardform.email}
                                  onChange={handleinput}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="phone">Phone</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa fa-phone"></i>
                                </span>
                                <input
                                  type="tel"
                                  name="phone"
                                  id="phone"
                                  className="form-control"
                                  value={cardform.phone}
                                  onChange={handleinput}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="website">Website</label>
                              <div className="input-group">
                                <span className="input-group-text">
                                  <i className="fa fa-globe"></i>
                                </span>
                                <input
                                  type="url"
                                  name="website"
                                  id="website"
                                  className="form-control"
                                  value={cardform.website}
                                  onChange={handleinput}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label htmlFor="business-chat">
                                Select a Business chat app
                              </label>
                              <select
                                name="bc_app"
                                id="business-chat"
                                className="form-select"
                                onChange={handleinput}
                              >
                                <option value="">None</option>
                                <option value="whatsapp">Whats App</option>
                                <option value="slack">Slack</option>
                                <option value="discord">Discord</option>
                                <option value="telegram">Telegram</option>
                              </select>
                            </div>
                          </div>
                          {function () {
                            if (cardform.bc_app == "whatsapp") {
                              return ( 
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="col-md-3">
                                      <div className="bc_icon col">
                                        <i className="fab fa-whatsapp"></i>
                                      </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                      <label htmlFor="whatsapp">Country Code</label>
                                      <select name="whatsapp" id="whatsapp" className="form-control">
                                        {
                                        countrycodes && countrycodes.map((w) => (
                                            <option value={w.dial_code}>{w.name}</option>
                                          ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div className="col-md-4">
                                    <div className="mb-3">
                                        <label htmlFor="w-number">Whatsapp Number</label>
                                        <input type="tel" name="w_number" id="w-number" className="form-control" onChange={handleinput}/>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              );
                            } else if (cardform.bc_app == "slack") {
                              return ( <div className="col-md-12">

                              </div>);
                            } 
                            else if (cardform.bc_app == "discord") {
                              return ( <div className="col-md-12"></div>);
                            }
                            else if (cardform.bc_app == "discord") {
                              return ( <div className="col-md-12"></div>);
                            }
                            else {
                              return ( "" );
                            }
                          }.call(this)}
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  {/* global section  */}

                  {/* logo fieldset  */}
                  <fieldset className="fieldset">
                    <legend>Logo</legend>
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="logo-img">Upload a Logo</label>
                            <input
                              type="file"
                              name=""
                              id="logo-img"
                              className="form-control"
                              onChange={handlelogochange}
                            />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-width">Width</label>
                            <div className="input-group">
                              <input
                                type="number"
                                name="logo_width"
                                id="logo-width"
                                className="form-control"
                                value={cardform.logo_width}
                                onChange={handleinput}
                              />
                              <span className="input-group-text">Px</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-height">Height</label>
                            <div className="input-group">
                              <input
                                type="number"
                                name="logo_height"
                                id="logo-height"
                                className="form-control"
                                value={cardform.logo_height}
                                onChange={handleinput}
                              />
                              <span className="input-group-text">Px</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="object-fit">Object Fit </label>
                            <select
                              name="object_fit"
                              id="object-fit"
                              onChange={handleinput}
                              value={cardform.object_fit}
                              className="form-select"
                            >
                              <option value="">None</option>
                              <option value="cover">cover</option>
                              <option value="contain">contain</option>
                              <option value="fill">Fill</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-alignment">
                              Logo Alignment
                            </label>
                            <select
                              name="logo_alignment"
                              id="logo-alignment"
                              onChange={handleinput}
                              value={cardform.logo_alignment}
                              className="form-select"
                            >
                              <option value="">None</option>
                              <option value="center">Center</option>
                              <option value="start">Left</option>
                              <option value="end">end</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="mb-3">
                            <input
                              type="checkbox"
                              name="use_border"
                              id="use-border"
                              className="form-check-input"
                              defaultChecked={cardform.use_border}
                              onChange={handlecheck}
                            />
                            <label htmlFor="use-border">Use Borders</label>
                          </div>
                        </div>
                        {cardform.use_border ? (
                          <div className="row">
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="Border-width">
                                  Border Width
                                </label>
                                <div className="input-group">
                                  <input
                                    type="number"
                                    name="border_width"
                                    id="border-width"
                                    className="form-control"
                                    value={cardform.border_width}
                                    onChange={handleinput}
                                  />
                                  <span className="input-group-text">Px</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="select-style">Select Style</label>
                              <select
                                name="border_style"
                                id="select-style"
                                className="form-select"
                                value={cardform.border_style}
                                onChange={handleinput}
                              >

                                <option value="">None</option>
                                <option value="solid">Solid</option>
                                <option value="Dashed">Dashed</option>
                                <option value="Dotted">Dotted</option>
                              </select>
                            </div>
                            <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="border-radius">
                                  Border Radius
                                </label>
                                <div className="input-group">
                                  <input
                                    type="number"
                                    name="border_radius"
                                    id="border-radius"
                                    className="form-control"
                                    onChange={handleinput}
                                    value={cardform.border_radius}
                                  />
                                  <span className="input-group-text">Px</span>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <label htmlFor="border-color">Border Color</label>
                              <input
                                type="color"
                                name="border_color"
                                id="border-color"
                                className="form-control form-control-color"
                                onChange={handleinput}
                                value={cardform.border_color}
                              />
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </fieldset>
                  {/* logo fieldset  */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      placeholder="First Name"
                      required
                      value={cardform.fname}
                      onChange={handleinput}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      placeholder="Last Name"
                      value={cardform.lname}
                      onChange={handleinput}
                    />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={handlesubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <Preview
            ff ={cardform}
            bg_color={cardform.bg_color}
            email={cardform.email}
            phone={cardform.phone}
            website={cardform.website}
            data={cardform.fname}
            logo={cardform.logo}
            logo_width={cardform.logo_width}
            logo_height={cardform.logo_height}
            object_fit={cardform.object_fit}
            logo_alignment={cardform.logo_alignment}
            border_width={cardform.border_width}
            border_style={cardform.border_style}
            border_color={cardform.border_color}
            border_radius={cardform.border_radius}
          />
        </div>
      </div>
    </div>
  );
}
export default FormBody;
