export function Profile({ name }) {
    return (
        <>
            <p>name : {name}</p>
            <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
        </>
    );
}

export default function Gallery() {
    return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}
