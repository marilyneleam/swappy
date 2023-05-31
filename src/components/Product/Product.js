import './Product.css'
import Photo from '../../assets/photo.png'

function Product() {

	const id = 14;


    return (
        <div className="product">
            <div className="prod-grid">
                <img
                    className="prod-grid-col-2 prod-grid-row-2"
                    src="https://cdn.shopify.com/s/files/1/0288/2754/9784/products/Globe-terrestre-vintage-5_800x.jpg?v=1649763313"
                    alt="product"
                ></img>

                <img
                    src="https://cdn.shopify.com/s/files/1/0288/2754/9784/products/Globe-terrestre-vintage-5_800x.jpg?v=1649763313"
                    alt="product"
                ></img>
                <img
                    src="https://cdn.shopify.com/s/files/1/0288/2754/9784/products/Globe-terrestre-vintage-5_800x.jpg?v=1649763313"
                    alt="product"
                ></img>
                <img
                    src="https://cdn.shopify.com/s/files/1/0288/2754/9784/products/Globe-terrestre-vintage-5_800x.jpg?v=1649763313"
                    alt="product"
                ></img>
                <img
                    src="https://cdn.shopify.com/s/files/1/0288/2754/9784/products/Globe-terrestre-vintage-5_800x.jpg?v=1649763313"
                    alt="product"
                ></img>
            </div>
            <div className="prod-bot">
                <div className="prod-bot-left">
                    <div className="prod-title">
                        <h1>Polaroid</h1>
                        <p>Tremblay-en-France 93290</p>
                        <p className="post-date">
                            Postée le 31/05/2023 à 11:20
                        </p>
                    </div>
                    <div className="prod-desc">
                        <p>
                            Salut à tous les passionnés de photographie et de
                            souvenirs inoubliables, <br /> <br /> Je suis à la
                            recherche d'une expérience unique et d'histoires
                            fascinantes, et pour cela, je propose un troc
                            spécial. J'ai en ma possession un appareil Polaroid
                            vintage en excellent état, capable d'immortaliser
                            des moments authentiques et intemporels. Cet
                            appareil a le pouvoir de capturer l'essence même de
                            chaque instant, et je souhaite le partager avec
                            quelqu'un qui valorisera véritablement ce don.{' '}
                            <br /> <br /> Je recherche des souvenirs uniques,
                            des aventures extraordinaires et des rencontres
                            inoubliables. Que vous soyez un voyageur intrépide,
                            un artiste créatif ou simplement quelqu'un avec une
                            histoire fascinante à raconter, je suis prêt à
                            échanger ce Polaroid contre des moments précieux que
                            je pourrai garder près de mon cœur. Partagez avec
                            moi vos récits d'aventures, vos photos préférées,
                            vos rencontres inspirantes ou vos moments de bonheur
                            les plus intenses. Les souvenirs que vous offrirez
                            seront exposés dans mon album personnel, où ils
                            seront chéris pour toujours. <br /> <br /> Si vous
                            pensez avoir un souvenir unique à offrir en échange
                            de ce Polaroid, n'hésitez pas à me contacter.
                            Expliquez-moi en détail l'histoire qui l'accompagne
                            et montrez-moi comment ce souvenir est devenu un
                            trésor pour vous.
                        </p>
                    </div>
                    <div className="critere">
                        <p className="crit">Critères</p>
                        <div className="wrapper">
                            <div>
                                <p className="cat">État</p>
                                <p>État neuf</p>
                            </div>
                            <div>
                                <p className="cat">Type</p>
                                <p>Appareil photo</p>
                            </div>
                            <div>
                                <p className="cat">Matière</p>
                                <p>Bois</p>
                            </div>
                            <div>
                                <p className="cat">Couleur</p>
                                <p>Autre</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="prod-bot-right">
                    <div className="card">
                        <div className="profile">
                            <img src={Photo} alt="pix"></img>
                            <p className="pro-name">Sandra</p>
                        </div>
                        <div className="see">
                            {
                                //Check if message failed
                                id === '14' ? (
                                    <button className="prop-btn">
                                        Proposer une enchère
                                    </button>
                                ) : (
                                    <button className="see-btn">
                                        Voir les enchères
                                    </button>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
