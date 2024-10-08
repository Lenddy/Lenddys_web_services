import Logo from "../../assets/LM.png";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Welcome = () => {
	const welcomeRef = useRef(null);
	const [intersecting_welcome, setIntersecting_welcome] = useState();
	const [noAnimation, setNoAnimation] = useState(false);
	const { t } = useTranslation();
	const cookieValue = Cookies.get("i18next");

	return (
		<>
			<div className="welcome " ref={welcomeRef}>
				<div className="welcomeLeft ">
					<h1 className="welcomeMessage welcomeMessage_animation">
						{t("welcome_title")}
						{/* {cookieValue === "es" ? "El lugar para convertir tus ideas en realidad Bienvenido a " : "The Place To Turn Your Ideas Into Reality Welcome To"} */}
						<a href="https://www.instagram.com/lenddys_web_services/" target="_blank" rel="noreferrer" className="welcome_a_tag">
							Lenddy's Web Services
						</a>
					</h1>

					<div className="subheader">
						{/* sub_className */}
						<p className=" subheader_message subheader_animation">
							{t("welcome_sub_title")}
							{/* {cookieValue === "es" ? "¿Qué tal? Mi nombre es Lenddy. Me gusta crear sitios web y aplicaciones que se adapten a tus necesidades, utilizando las mejores tecnologías. Entonces, ¿cuál es tu próxima gran idea y cuándo quieres hacerla realidad?" : "Hello, my name is Lenddy. I enjoy creating websites and apps that suit your needs using the best technologies. So, what’s your next big idea, and when do you want to make it happen?"} */}
						</p>
					</div>

					<div className="welcomeBtn">
						<a className="hidden_a_tag btn_welcome" href="https://docs.google.com/document/d/1AD5kxapdVdUpXd1gBoQJV1Z41OVWd-XVgXe4O4iTDc0/edit?usp=sharing" target="_blank" rel="noreferrer">
							{t("welcome_btns.0")}
							{/* {cookieValue === "es" ? "Ver Resumen" : "View Resume"} */}
						</a>

						<a className="hidden_a_tag btn_welcome" href="https://github.com/Lenddy" target="_blank" rel="noreferrer">
							{t("welcome_btns.1")}
							{/* {cookieValue === "es" ? "Ver Github" : "View Github"} */}
						</a>

						<a className="hidden_a_tag btn_welcome" href="https://www.linkedin.com/in/lenddy/" target="_blank" rel="noreferrer">
							{t("welcome_btns.2")}
							{/* {cookieValue === "es" ? "Ver LinkIn" : "View LinkIn"} */}
						</a>
						<a className="hidden_a_tag btn_welcome" href="https://www.instagram.com/lenddys_web_services/" target="_blank" rel="noreferrer">
							{t("welcome_btns.3")}
							{/* {cookieValue === "es" ? "Ver Instagram" : "View Instagram"} */}
						</a>
					</div>
				</div>

				<div className="welcomeRight">
					<img src={Logo} alt="logo" className="logo" />
					<p className="subtext">
						{t("welcome_a_tag.0")}
						{/* {cookieValue === "es" ? "Te gusta El Logo as " : "Like the logo "} */}
						<span>
							<a href="https://instagram.com/merv_agency?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer">
								{t("welcome_a_tag.1")}
								{/* {cookieValue === "es" ? "click aquí" : "click here"} */}
							</a>
						</span>{" "}
						{t("welcome_a_tag.2")}
						{/* {cookieValue === "es" ? "para ver quien lo hizo." : "to see who made it"} */}
					</p>
				</div>
			</div>
		</>
	);
};

export default Welcome;
