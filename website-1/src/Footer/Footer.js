import React from 'react'
import "./Footer.css"
import SBLI from './SBLI.jpeg'
import eform from './eform.jpeg'
function Footer() {
    return (
        <div className="maindiv">
            <div className="sbli">

                <img id="sbli" src={SBLI} alt="sbli" />
            </div>
            <div className="text">
                <h3> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur amet, nam rem commodi Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Iure, magnam? Illo nesciunt ex perferendis quasi autem minus! Facere debitis iusto repellendus excepturi tenetur
                et dolor exercitationem, facilis earum harum provident, mollitia id sint ipsam aperiam voluptatem autquas aliquam obcaecati alias
                voluptates iusto fugit libero nisi illo, soluta quasi eligendi deleniti </h3>
            </div>
            <div className="eform">
                <img id="eform" src={eform} alt="eform" />
            </div>
        </div>
    )
}

export default Footer
