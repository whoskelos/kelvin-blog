import { useEffect, useState } from "preact/hooks";
import "./greeting.css";
export default function Greeting() {
    const [isOpen, setIsOpen] = useState(false);
    const showPet = () => {
        console.log("SHOW PET HERE");
        setIsOpen(false);
    }

    useEffect(() => {
        console.log(isOpen);
        if (isOpen) {
            showPet();
        }
    },[isOpen])
    return (
        <button type="button" className="greeting" onClick={() => setIsOpen(!isOpen)}>
            👋🏻
        </button>
    );
}
