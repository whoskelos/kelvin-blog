import { useState } from "preact/hooks";
import "./greeting.css";
export default function Greeting() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="greeting">
            <button className="greeting-btn" onClick={() => setIsOpen(!isOpen)}>
                New Greeting
            </button>
        </div>
    );
}
