import React,{useState} from 'react'
import './Body.css';
import page from './page.jpeg'
import price from './price.jpeg'
import dob from './DOB.jpeg'
import zipcode from './zipcode.jpeg'
import gender from './gender.jpeg'
import tobaco from './tobaco.jpeg'
import health from './health.jpeg'
import male from './male.jpeg'
import female from './female.jpeg'
function Body() {
    const [zip, setZip] = useState("ZipCode");
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
                                    <img className="gender-image" src={male} alt="male" />
                                    <label htmlFor="gender" ><p>MALE</p></label>
                                    {/* <input type="radio" name="gender" /> */}
                                </button>
                                <button>
                                    <img className="gender-image" src={female} alt="female" />
                                    <label htmlFor="gender"><p>FEMALE</p></label>
                                    {/* <input type="radio" name="gender" /> */}
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className="dob">
                        <img className="formimage" src={zipcode} alt="zipcode" />
                        <input  type="text" name="zipcode" value={zip} onChange={(e)=>{setZip(e.target.value)}}/>
                    </div>
                    <div className="dob">
                        <img className="formimage" src={tobaco} alt="tobaco" />
                        <div className="gender">
                            <label htmlFor="">Tobaco</label>
                            <select>
                                {/* <option>Cigarett</option>
                                <option>biri</option>
                                <option>ganja</option>
                                <option>charas</option>
                                <option>gomutra</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="dob">
                        <img className="formimage" src={health} alt="health" />
                        <div className="gender">
                            <label htmlFor="">Health Status</label>
                            <select>
                                {/* <option>Cigarett</option>
                                <option>biri</option>
                                <option>ganja</option>
                                <option>charas</option>
                                <option>gomutra</option> */}
                            </select>
                        </div>
                    </div>
                    <div className="quote">
                        <button id="quote">
                            <span>&rarr;</span>
                            <span> Get your quote</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
