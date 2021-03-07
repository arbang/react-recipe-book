const Recipe = ({label,totalTime, image, url}) => {

    return (
        <a href ={url} className='recipe'>
            <h3 type="text">{label}</h3>
            <img src={image} alt="{label}"/>
            <p>Total Cook Time: {totalTime} min</p>
        </a>
    )
}

export default Recipe
