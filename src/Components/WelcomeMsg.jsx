const WelcomeMsg=({onbuttonClick})=>{
    return (<center className="welcomeMsg"><h1 >There are no posts </h1>
    <button className="btn btn-primary" onClick={onbuttonClick}>Get post from server</button>
    </center>
    )
}
export default WelcomeMsg;