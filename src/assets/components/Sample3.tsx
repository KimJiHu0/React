import { useRef, useEffect } from 'react';
export default function Sample4() {
    const modalRef = useRef(null);
    useEffect(() => {
        console.log('dialog Mounted');
        modalRef.current.showModal();
        return () => {
            console.log('dialog unMounted');
            modalRef.current.close();
        };
    }, []);

    return (
        <dialog ref={modalRef}>
            <h3>
                <b>Hello</b>
                <button
                    onClick={() => {
                        modalRef.current.close();
                    }}
                >
                    닫기
                </button>
            </h3>
        </dialog>
    );
}
