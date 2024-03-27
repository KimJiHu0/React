import '../css/common.css';
import { useRef } from 'react';
export default function Sample1() {
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    const handleScrollToFirstCat = () => {
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };
    const handleScrollToSecondCat = () => {
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };
    const handleScrollToThirdCat = () => {
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    };

    return (
        <>
            <nav>
                <button onClick={handleScrollToFirstCat}>Tom</button>
                <button onClick={handleScrollToSecondCat}>Maru</button>
                <button onClick={handleScrollToThirdCat}>Jellylorum</button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Tom" ref={firstCatRef} />
                    </li>
                    <li>
                        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Maru" ref={secondCatRef} />
                    </li>
                    <li>
                        <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Jellylorum" ref={thirdCatRef} />
                    </li>
                </ul>
            </div>
        </>
    );
}
