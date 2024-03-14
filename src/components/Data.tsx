export default function Data(props) {
    return (
        <>
            <button onClick={props.setCount}>{props.count}</button>
        </>
    );
}
