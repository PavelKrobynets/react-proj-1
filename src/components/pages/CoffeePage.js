import Header from "../header/HeaderSection";
import InfoSection from "../infoSection/InfoSection";
import "./CoffeePage.scss"

const info = {
	title: "About it",
	country: "Brasil",
	descr: "lirem ipsum",
	img: "/img/aromico.jpg",
	price: 16.53
}

export default function CoffeePage() { 
	return (
		<div className="coffeePage">
			<Header title={"Our Coffee"}/>
			{/* <div className="coffeePage__wrapper">
				<img src="" alt="" className="coffeePage__img"/>
				<div className="coffeePage__content">

				</div>
			</div> */}
			<InfoSection {...info}/>
		</div>
	);
}