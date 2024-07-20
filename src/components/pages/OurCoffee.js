import "./OurCoffee.scss";
import Header from "../header/HeaderSection.js";
import InfoSection from "../infoSection/InfoSection.js";

const info = {
  img: "/img/aboutOurBeans.png",
  title: "About Our Beans",
  descr: `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
	Afraid at highly months do things on at. Situation recommend objection do intentionso questions.
	As greatly removed calling pleased improve an. Last ask him cold feel\n met spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.`,
};
export default function OurCoffee() {
  return (
    <div className="ourCoffee">
      <Header logo={"/icons/Group.svg"} title={"Our Coffee"} />
      <InfoSection {...info} />
			<hr/>
    </div>
  );
}
