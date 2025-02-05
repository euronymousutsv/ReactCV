
const NameCard = ({Name,Profession,Location}) =>{
return(
    <>
    <h1 className="title">{Name}</h1>
    <h2>{Profession}</h2>
    <h3>{Location}</h3>
    </>
);

}
export default NameCard;
