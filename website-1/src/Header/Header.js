import './Header.css';
function Header() {
    return (
        <nav>
            <div id="text">
                Please input your information, for a personalized quote
            </div>
            <div className="new">
                <span id="input">
                    <input type="text"></input>
                    <div className="progress">Your Progress</div>
                </span>
                <span id="ApplicationNo">
                    <p style={{ color: "tomato" }}>Your Application ID</p>
                    <p>ORC 4893020230</p>
                </span>
            </div>
        </nav>
    )
}

export default Header
