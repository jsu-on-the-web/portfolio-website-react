import { useEffect, useState } from "react";

interface TypedTextProps {
	text: string;
  typingDelay: number;
  startDelay: number;
}

function TypedText({ text, typingDelay, startDelay }: TypedTextProps) {
	const [currentText, setCurrentText] = useState("");
	const [currentIndex, setCurrentIndex] = useState(0);

	// Handle the typing effect
	useEffect(() => {
		if (currentIndex < text.length) {
			const timeout = setTimeout(() => {
				setCurrentText(currentText + text[currentIndex]);
				setCurrentIndex(currentIndex + 1);
      }, currentIndex === 0 ? startDelay : typingDelay);
      return () => clearTimeout(timeout);
    }
	}, [currentIndex, text, typingDelay]);

	return <span>{currentText}</span>;
}

export default TypedText;
