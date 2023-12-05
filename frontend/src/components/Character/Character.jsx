export default function Character(img, name){
    return(
        <>
            <p>{name}</p>
            <img src={img} alt={name} />
        </>
    )
}