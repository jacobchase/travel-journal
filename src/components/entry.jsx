export default function entry(props){
    console.log(props)
    return(
        <article>
    <div>
    <img src ={props.img.src} className="picture"/>
    </div>
    <div className = "text">
    <span classname = "Location"><img src = "/src/assets/marker.png" className="marker"/>{props.country} <a href ={props.mapsLink}>View on Google Maps</a></span>
    <br></br>
    <span className="Title">{props.title}</span>
    <br></br>
    <h4 className = "dates">{props.dates}</h4>
    <br></br>
    <h5 className = "description">{props.text}</h5>
    <hr></hr>
    </div>
    </article>
    )
}