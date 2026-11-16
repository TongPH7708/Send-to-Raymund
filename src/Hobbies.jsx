const Hobbies = () => {
    const hobbies = ["Volleyball", "Rock Climbing", "Basketball", "Hiking"]
    const noobhobbiesXML = (
        <ul>
            <li>{hobbies[0]}</li>
            <li>{hobbies[1]}</li>
            <li>{hobbies[2]}</li>
        </ul>
    )
    
    
    const prohobbiesXML = (
        <ul>
            {hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}
        </ul>
    )


    return prohobbiesXML
}


export default Hobbies