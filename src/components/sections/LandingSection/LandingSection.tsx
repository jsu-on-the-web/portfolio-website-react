import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import TypedText from "../../TypedText/TypedText";
import { useState } from "react";

export const LandingSection = () => {
	return (
		<>
			<section className="landing w-[100vw] flex justify-center h-[100vh]">
				{/* Add a picture of a rotating computer monitor here */}
				{/* <img src="https://picsum.photos/id/684/600/400" alt="" /> */}
				<section className="landing__container bg-blue-charcoal-900 self-center max-w-xl rounded-lg border-8 pt-8 pb-8 m-3 animate-fadeIn min-w-program-modal">
					<div className="landing__text  text-left font-body pl-10 pr-10 border-t-4 border-blue-charcoal-10 pt-4 m-0">
						<h2 className="landing__command p-2 text-4xl font-bold">
							<TypedText text="> ./welcome" typingDelay={50} startDelay={0} />
						</h2>
						<h3 className="landing__message landing__message--first text-2xl">
							<TypedText
								text="Hello! I'm Janet!"
								typingDelay={50}
								startDelay={900}
							/>
						</h3>
						<h3 className="landing__message landing__message--second text-2xl">
							<TypedText
								text="A Junior Developer!"
								typingDelay={50}
								startDelay={2000}
							/>
						</h3>
						<span>
							<FontAwesomeIcon
								icon={faWindowMinimize}
								className="landing__title--cursoricon fa-fade"
							/>
						</span>
					</div>
				</section>
			</section>
		</>
	);
};

export default LandingSection;
