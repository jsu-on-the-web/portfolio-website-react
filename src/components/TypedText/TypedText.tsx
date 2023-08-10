import { useState } from 'react';

interface TypedTextProps { }

function TypedText({ text : string, delay : int }: TypedTextProps) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <span>{currentText}</span>
  );
}

export default TypedText;