import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import TypedText from "../../TypedText/TypedText";
import { useState } from "react";


export const LandingSection = () => {
	return (
		<>
			<section className="landing">
				{/* Add a picture of a rotating computer monitor here */}
				{/* <img src="https://picsum.photos/id/684/600/400" alt="" /> */}
				<div className="landing__text text-left">
                    <h2 className="landing__command p-2"><TypedText text="> ./welcome" typingDelay={50} startDelay={0} /></h2>
					<h3 className="landing__message landing__message--first"><TypedText text = "Hello! I'm Janet!" typingDelay = {50} startDelay={900}/></h3>
                    <h3 className="landing__message landing__message--second"><TypedText text="A Junior Developer!" typingDelay={50} startDelay={2000} /></h3>
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
