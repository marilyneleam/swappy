import { Link } from "react-router-dom";

export default function Item({
	img,
	city,
	itemname,
	pseudo,
}) {
    return (
        <div className="item">
            <img className="itempix" src={img} alt="itempix"></img>
            <p className="itemcity">{city}</p>
            <p className="itemname">{itemname}</p>
            <p className="itempseudo">{pseudo}</p>
            <Link to="/item">
                <button className="start btn-item">Voir l'article</button>
            </Link>
        </div>
    )
}
