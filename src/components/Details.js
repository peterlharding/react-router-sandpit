import React from 'react';
import { LoremIpsum, Avatar, name, surname, username  } from 'react-lorem-ipsum';

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

const Details = () => {

    const noParagraphs = getRandomInt(6) + 1;

    const gender = (Math.random() > 0.5) ? 'female' : 'male';

    const avatar = (
        <Avatar gender={gender} className="avatar" width="200" height="200" alt="Avatar" />
    );

    const randomSurname = surname();
    const randomFirstName = name(gender);
    const fullName = randomFirstName + ' ' + randomSurname;

    if (gender) {
        return  (
            <div className="text-wrapper" style={{textAlign: "left"}}>
                <h1>{fullName}</h1>
                {avatar}
                <div style={{padding:"5vh"}}>
                    <div className="name">Name: {randomFirstName}</div>
                    <div className="surname">Surname: {randomSurname}</div>
                    <div className="username">Username: {username()}</div>
                </div>
                <h2>Info</h2>
                <LoremIpsum p={noParagraphs} />
            </div>
        );
    } else {
        return  (
            <div className="text-wrapper" style={{textAlign: "left"}}>
                <h1>Name</h1>
                {avatar}
                <h2>Info</h2>
                <LoremIpsum p={3} />
            </div>
        );
    }

}

export default Details;
