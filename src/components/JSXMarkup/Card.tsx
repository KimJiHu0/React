// 이렇게 필요한 것만 받을 수 있음 (구조분해할당)
const Card = ({ user: { name, theme } }) => {
    const baseUrl = 'https://';
    const url = 'i.imgur.com';
    const url2 = 'QIrZWGIs';
    const etc = '.jpg';
    return (
        <>
            <img src={`${baseUrl}${url}/${url2}${etc}`} />
            <div style={theme}></div>
            <p>name: {name}</p>
        </>
    );
};

export default Card;
