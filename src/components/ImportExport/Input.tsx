export function Input() {
    return (
        <>
            <Input.Label></Input.Label>
            <Input.Input></Input.Input>
        </>
    );
}
Input.Label = function () {
    return <label htmlFor="input">Label</label>;
};
Input.Input = function () {
    return <input id="input" placeholder="input..." />;
};
