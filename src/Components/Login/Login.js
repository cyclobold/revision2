import React from "react"

function Login(props){

    return (
        <div>
            <button onClick={() => props.greeting()}>Log in</button>
        </div>
    )



}

export default Login