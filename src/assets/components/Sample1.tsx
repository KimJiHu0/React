import { useRef, useEffect } from 'react';
export default function Sample1({ isPlaying }) {
    const videoRef = useRef(null);
    // isPlaying : true => 플레이 중이므로 Pause 버튼이 보여지며, 클릭 시 정지
    // isPlaying : false => 정지 중이므로 Play 버튼이 보여지며, 클릭 시 실행

    // useEffect를 사용하지 않을 경우 랜더링 전에 조건문 로직이 실행되어
    // ref에는 null이 담겨있는 채로 로직을 실행하려 하기 때문에 에러가 발생한다.
    // if (isPlaying) {
    //     videoRef.current.play();
    // } else {
    //     videoRef.current.pause();
    // }

    // useEffect를 사용할 경우 해당 로직은 랜더링이 된 후에 실행되기 때문에
    // ref에는 video HTML이 담겨있어 정상적으로 실행할 수 있다.
    useEffect(() => {
        if (isPlaying) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    });

    return (
        <div>
            <video width="250" ref={videoRef}>
                <source
                    src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                    type="video/mp4"
                />
            </video>
        </div>
    );
}
