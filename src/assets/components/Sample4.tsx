import { forwardRef, useRef } from 'react';

export function Sample4() {}

// 일반 props로 던져줬을 때
Sample4.UseRef = ({ inputRef }) => {
    return (
        <>
            <input ref={inputRef} />
        </>
    );
};

// forwardRef를 사용했을 때
Sample4.UseForwardRef = forwardRef((props, inputForwardRef) => {
    return (
        <>
            <input ref={inputForwardRef} />
        </>
    );
});

// const Sample4 = forwardRef((props, ref) => {
//     return <input {...props} ref={ref} />;
// });
