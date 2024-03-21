import { useState } from 'react';

export default function Sample2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });

    // 1. 간단하게 만들기
    function handleChange(e) {
        console.log(e);
        setPerson({
            ...person,
            [e.target.name]: e.target.value,
        });
    }

    // 2. 간단하게 만들기
    const changeFn = (e) => {
        setPerson({ ...person, [e.target.name]: e.target.value });
    };

    function handleFirstNameChange(e) {
        // setPerson({ ...person, firstName: e.target.value });
        person.firstName = e.target.value;
        changeFn(e);
    }

    function handleLastNameChange(e) {
        // setPerson({ ...person, lastName: e.target.value });
        person.lastName = e.target.value;
        changeFn(e);
    }

    function handleEmailChange(e) {
        // setPerson({ ...person, email: e.target.value });
        person.email = e.target.value;
        changeFn(e);
    }

    return (
        <>
            <label>
                First name:
                <input name="firstName" value={person.firstName} onChange={handleFirstNameChange} />
                {/* <input name="firstName" value={person.firstName} onChange={handleChange} /> */}
            </label>
            <label>
                Last name:
                <input name="lastName" value={person.lastName} onChange={handleLastNameChange} />
                {/* <input name="lastName" value={person.lastName} onChange={handleChange} /> */}
            </label>
            <label>
                Email:
                <input name="email" value={person.email} onChange={handleEmailChange} />
                {/* <input name="email" value={person.email} onChange={handleChange} /> */}
            </label>
            <p>
                {person.firstName} {person.lastName} ({person.email})
            </p>
        </>
    );
}
