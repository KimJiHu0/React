import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

export default function Sample6() {
    // true : 플레이중
    // false : 정지중
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    function handleClick() {
        const nextIsPlaying = !isPlaying;

        flushSync(() => {
            setIsPlaying(nextIsPlaying);
        });

        if (!isPlaying) {
            // 정지중이면 시작
            videoRef.current.play();
        } else {
            // 플레이중이면 정지
            videoRef.current.pause();
        }
    }

    return (
        <>
            <video width="250" ref={videoRef}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
            <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
        </>
    );
}
