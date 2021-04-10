import React from 'react'
import './Body.css';
import page from './page.jpeg'
import price from './price.jpeg'
import dob from './DOB.jpeg'
import zipcode from './zipcode.jpeg'
import gender from './gender.jpeg'
import tobaco from './tobaco.jpeg'
import health from './health.jpeg'
function Body() {
    return (
        <div className="body">
            <div className="bodytext">
                <h1>Get your instant life insurance quote</h1>
                <p>Upto 1 Million Dollars of Instant Coverage </p>
                <p>Flexible term policies</p>
                <p>Coverage Can Start Same Day </p>
            </div>
            <div className="others">
                <div className="pic">
                    <img id="page" src={page} alt="page" />
                    <img id="price" src={price} alt="price" />
                </div>
                <div className="form">
                    <div className="dob">
                        <img className="formimage" src={dob} alt="DOB" />
                        <input type="date" name="date" value="DOB" />
                    </div>
                    <div className="dob">
                        <img className="formimage" src={gender} alt="gender" />
                        <div className="gender">
                            <h2>Gender</h2>
                            <div className="button">
                                <button>
                                    <label htmlFor="gender">Male</label>
                                    <input type="radio" name="gender" />
                                </button>
                                <button>
                                    <label htmlFor="gender">Female</label>
                                    <input type="radio" name="gender" />
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="dob">
                        <img className="formimage" src={zipcode} alt="zipcode" />
                        <input type="text" name="zipcode" value="ZIP Code" />
                    </div>
                    <div className="dob">
                        <img className="formimage" src={tobaco} alt="tobaco" />
                        <div className="gender">
                            <label htmlFor="">Tobaco</label>
                            <select>
                                <option value="">Cigarett</option>
                                <option value="">biri</option>
                                <option value="">ganja</option>
                                <option value="">charas</option>
                                <option value="">gomutra</option>
                            </select>
                        </div>
                    </div>
                    <div className="dob">
                        <img className="formimage" src={health} alt="health" />
                        <div className="gender">
                            <label htmlFor="">Health Status</label>
                            <select>
                                <option value="">Cigarett</option>
                                <option value="">biri</option>
                                <option value="">ganja</option>
                                <option value="">charas</option>
                                <option value="">gomutra</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
