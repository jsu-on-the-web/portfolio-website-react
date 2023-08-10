/*=============================================
=            Function Definition              =
=============================================*/

/*----------  Landing  ----------*/

/**
 * When fed a sentence and a HTML element to put that sentence in, this method will create the illusion of "typing" the sentence
 * @async
 * @param {*} sentence The sentence to type in
 * @param {*} element The HTML element to insert the sentence into
 * @param {number} [delay=100] The number of milliseconds to wait before typing the next letter (default: 100ms)
 * @returns {*}
 */
async function typingEffect(sentence, element, delay = 100) {
    const letters = sentence.split("");

    // Sentence could be any length, so we need to use a while loop
    let i = 0;
    while (i < letters.length) {
        await delayFunction(delay);
        document.querySelector(element).innerHTML += letters[i];
        i++;
    }
    return;
}

const delayFunction = function (delay) {
    return new Promise(resolve => setTimeout(resolve, delay)); // We use the promise to give the browser something to do, and the setTimeout function makes the browser wait for delay milliseconds before resolving the promise
}


/*=====  End of Function Definition  ======*/


/*=============================================
=            Variable Declaration             s=
=============================================*/

let projectsList = document.getElementsByClassName("projects__project-list");
let projectsListItems = [];
console.log(projectsList);



/*----------  Landing  ----------*/

const landing_message_one = "Hello! I'm Janet!";
const landing_message_two = "A Junior Developer!";


/*=====  End of Variable Declaration  ======*/


/*=============================================
=            Script assignment                =
=============================================*/

typingEffect("\> ./welcome", ".landing__command", 75);
setTimeout(typingEffect, 1000, landing_message_one, ".landing__message--first", 75);
setTimeout(typingEffect, 2570, landing_message_two, ".landing__message--second", 75);

/*=====  End of Script assignment  ======*/



