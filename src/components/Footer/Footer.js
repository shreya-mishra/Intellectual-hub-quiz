import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div style={{
            textAlign: 'center', marginBottom: 10
        }}>
            Made with ❤ by{" "}
            <a href="https://github.com/shreya-mishra" style={{ curcor: "pointer" }}>
                Shreya Mishra
            </a>
        </div>
    )
}

export default Footer
