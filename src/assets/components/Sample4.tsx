import { forwardRef, useRef } from 'react';

const Sample4 = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

export default Sample4;
