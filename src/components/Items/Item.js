export default function Item({
	img,
	city,
	itemname,
	pseudo,
}) {
    return (
        <div className="item">
			<img className="itempix" src={img} alt='itempix'></img>
			<p className="itemcity">{city}</p>
			<p className="itemname">{itemname}</p>
			<p className="itempseudo">{pseudo}</p>
			<button className="start btn-item">Voir l'article</button>
        </div>
    )
}
