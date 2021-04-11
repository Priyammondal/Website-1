import './Header.css';
function Header() {
    return (
        <nav>
            <span id="text">
                Please input your information,for a personalized quote
            </span>
            <span id="input">
                <input type="text"></input>
                input:
                <p>Your Progress</p>
            </span>
            <span id="ApplicationNo">
                <p style={{color: "red"}}>Your Application ID</p>
                <p>ORC 4893020230</p>
            </span>
        </nav>
    )
}

export default Header
