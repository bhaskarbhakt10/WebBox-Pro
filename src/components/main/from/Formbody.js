import React, { useState } from "react";
import Preview from "../preview/Preview";
import './form.css'

function FormBody() {
  const [cardform, setCardForm] = useState({
    logo: "",
    logo_width: "",
    logo_height: "",
    object_fit:"",
    logo_alignment:"",
    use_border: false,
    border_width:"",
    border_style: "",
    border_color:"",
    border_radius:"" ,
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
  
  const handlecheck = (e)=>{
    setCardForm({...cardform, use_border: !cardform.use_border });
  }

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
                            <select name="object_fit" id="object-fit" onChange={handleinput} value={cardform.object_fit} className="form-select">
                              <option value="">None</option>
                              <option value="cover">cover</option>
                              <option value="contain">contain</option>
                              <option value="fill">Fill</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="mb-3">
                            <label htmlFor="logo-alignment">Logo Alignment</label>
                            <select name="logo_alignment" id="logo-alignment" onChange={handleinput} value={cardform.logo_alignment} className="form-select">
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
                        { cardform.use_border ? (
                        <div className="row">
                          <div className="col-md-3">
                            <div className="mb-3">
                              <label htmlFor="Border-width">Border Width</label>
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
                              <option value="solid">Solid</option>
                              <option value="Dashed">Dashed</option>
                              <option value="Dotted">Dotted</option>
                            </select>
                          </div>
                          <div className="col-md-3">
                              <div className="mb-3">
                                <label htmlFor="border-radius">Border Radius</label>
                                <div className="input-group">
                                  <input type="number" name="border_radius" id="border-radius" className="form-control" onChange={handleinput} value={cardform.border_radius}/>
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
                        ) : '' }
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
