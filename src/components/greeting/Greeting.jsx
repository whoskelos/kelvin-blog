import { useState } from "preact/hooks";
import "./greeting.css";
export default function Greeting() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <button className="greeting" onClick={() => setIsOpen(!isOpen)}>
            Hi!
        </button>
    );
}
