const getData = function () {
    console.log('getting data');
    return fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            const person = data.results[0];
            let first_name = person.name.first;
            first_name = first_name.charAt(0).toUpperCase() + first_name.slice(1);
            let last_name = person.name.last;
            last_name = last_name[0].toUpperCase() + last_name.slice(1);
            let photo = person.picture.large;

            const wrapper = document.querySelector('.person');
            const image = document.createElement('img');
            image.classList.add('person__image');
            image.src = person.picture.large;
            const personalData = document.createElement('h3');
            personalData.classList.add('person__data');
            personalData.innerText = `${first_name} ${last_name}`;
            wrapper.appendChild(image);
            wrapper.appendChild(personalData);
            console.log(personalData);

        })
        .catch(err => console.log(err.message));
}

const search = function () {
    let level = 1
    console.log(`Searching the dungeoun - level ${level}...`);
    return function () {
        level++;
        console.log(`Searching the dungeoun - level ${level}...`);
        return function () {
            level++;
            console.log(`Searching the dungeoun - level ${level}...`);
            return function () {
                level++;
                console.log(`Searching the dungeoun - level ${level}...`);
                return function () {
                    level++;
                    console.log(`Searching the dungeoun - level ${level}...`);
                    return function () {
                        level++;
                        console.log(`Searching the dungeoun - level ${level}...`);
                        return function () {
                            level++;
                            console.log(`Searching the dungeoun - level ${level}...`);
                            return function () {
                                level++;
                                console.log(`Searching the dungeoun - level ${level}...`);
                                return function () {
                                    level++;
                                    console.log(`Searching the dungeoun - level ${level}...`);
                                    return function () {
                                        level++;
                                        console.log(`Searching the dungeoun - level ${level}...`);
                                        setTimeout(() => {
                                            console.log('You\'ve found the treasure!');
                                        }, 1000);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

const lvl1 = search();
const lvl2 = lvl1();
const lvl3 = lvl2();
const lvl4 = lvl3();
const lvl5 = lvl4();
const lvl6 = lvl5();
const lvl7 = lvl6();
const lvl8 = lvl7();
const lvl9 = lvl8();
lvl9();