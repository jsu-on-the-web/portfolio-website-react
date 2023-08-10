import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { typingEffect } from "src/scripts/VisualUtils";

export const LandingSection = () => {
	const [messages, setMessages] = useState([
		"> ./welcome",
		"Hello! I'm Janet!",
		"A Junior Developer!",
	]);

	const [showTypingEffect, setShowTypingEffect] = useState(false);

	useEffect(() => {
		setShowTypingEffect(true);
	});

	return (
		<>
			<section className="landing">
				{/* Add a picture of a rotating computer monitor here */}
				{/* <img src="https://picsum.photos/id/684/600/400" alt="" /> */}
				<div className="landing__text">
					<h2 className="landing__command">&gt;</h2>
					<h3 className="landing__message landing__message--first"></h3>
					<h3 className="landing__message landing__message--second"></h3>
					<span>
						<FontAwesomeIcon
							icon={faWindowMinimize}
							className="landing__title--cursoricon fa-fade"
						/>
					</span>
				</div>
			</section>
		</>
	);
};

export default LandingSection;
