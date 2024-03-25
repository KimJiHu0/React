export default function Sample2({ title, isActive, onShow, children }) {
    // 부모 Component에서 데이터를 관리하고 전달받은 props로 화면을 표기하는 방법이다.
    return (
        <>
            <div style={{ border: '1px solid black' }}>
                <h3>{title}</h3>
                {isActive ? <p>{children}</p> : <button onClick={onShow}>Detail</button>}
            </div>
        </>
    );
}
