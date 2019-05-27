function eachLevelProcedure(level, isFound = false) {
    const message = document.createElement('div');
    message.classList.add('message');
    if (!isFound) {
        message.innerHTML = `<p>Searching the dungeon - level ${level}...</p><p>No treasure here.</p><p>Let's go to the next level.</p>`;
    } else {
        message.classList.add('success');
        message.innerHTML = `<p>Searching the dungeon - level ${level}...</p><p>You\'ve found the treasure!</p>`;
    }
    document.querySelector('main').appendChild(message);
}

const search = function () {
    let level = 1
    eachLevelProcedure(level);
    return function () {
        level++;
        eachLevelProcedure(level);
        console.log(`Searching the dungeoun - level ${level}...`);
        return function () {
            level++;
            eachLevelProcedure(level);
            console.log(`Searching the dungeoun - level ${level}...`);
            return function () {
                level++;
                eachLevelProcedure(level);
                console.log(`Searching the dungeoun - level ${level}...`);
                return function () {
                    level++;
                    eachLevelProcedure(level);
                    console.log(`Searching the dungeoun - level ${level}...`);
                    return function () {
                        level++;
                        eachLevelProcedure(level);
                        console.log(`Searching the dungeoun - level ${level}...`);
                        return function () {
                            level++;
                            eachLevelProcedure(level);
                            console.log(`Searching the dungeoun - level ${level}...`);
                            return function () {
                                level++;
                                eachLevelProcedure(level);
                                console.log(`Searching the dungeoun - level ${level}...`);
                                return function () {
                                    level++;
                                    eachLevelProcedure(level);
                                    console.log(`Searching the dungeoun - level ${level}...`);
                                    return function () {
                                        level++;
                                        // The treasure is here
                                        eachLevelProcedure(level, true);
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

function proceed() {
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
}