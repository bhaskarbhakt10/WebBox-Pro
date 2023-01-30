import React, { useState } from "react";
import Preview from "../preview/Preview";

function FormBody() {
  const [cardform, setCardForm] = useState({
    logo: "",
    logo_width: "",
    fname: "",
    lname: "",
  });

  const handlelogochange =(e)=>{
    const logo = e.target.files;
    console.log(logo);
    setCardForm({...cardform, logo: URL.createObjectURL(logo[0])})
  }

  const handleinput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setCardForm({ ...cardform, [name]: value });
  };

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
                  <fieldset>
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
                          <input type="number" name="logo_width" id="logo-width"  className="form-control" value={cardform.logo_width} onChange={handleinput}/>
                          <span className="input-group-text">Px</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="mb-3">
                          <label htmlFor="logo-height">Height</label>
                          <div className="input-group">
                          <input type="number" name="" id="logo-height"  className="form-control"/>
                            <span className="input-group-text">Px</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="mb-3">
                          <input type="checkbox" name="" id="use-border" className="form-check-input"/>
                          <label htmlFor="use-border">Apply Border</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4">
                          <div className="mb-3">
                            <label htmlFor="Border-width">Border Width</label>
                            <div className="input-group">
                            <input type="number" name="" id="border-width" className="form-control"/>
                            <span className="input-group-text">Px</span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="select-style">Select Style</label>
                          <select name="" id="select-style" className="form-select">
                            <option value="">Solid</option>
                            <option value="">Dashed</option>
                            <option value="">Dotted</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                        <label htmlFor="">Border Color</label>
                        <input type="color" name="" id=""  className="form-control form-control-color"/>
                        </div>
                      </div>
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
          
          <Preview data={cardform.fname} logo={cardform.logo} logo_width={cardform.logo_width}/>
        </div>
      </div>
    </div>
  );
}
export default FormBody;
