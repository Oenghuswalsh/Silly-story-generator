var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length)
    return array[random];
}

var storyText = "It was 94 outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: doens't like the heat, and it was a hot day and the :inserta: weighs 300 pounds.";
var insertX = ["Thor", "Dumbulldor", "Bluey", "Captin America", "Mr PeaBody"];
var insertY = ["the corner", "Hawthron Road", "the cinema", "the stage", "Caulfield Primary School"];
var insertZ = ["ran away", "fell over", "pooped", "screamed", "jumped up and down"];
var insertA = ["donkey", "watermelon", "chicken", "ice cream", "cat"];


randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;


    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);
    var aItem = randomValueFromArray(insertA);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserta:', aItem);

    if (customName.value !== '') {
        var name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        var stonesPerPound = 0.0714286;
        var weight = Math.round(300 * stonesPerPound) + ' stone';
        var temperature = Math.round((94 - 32) / 1.8);
        newStory = newStory.replace("94", temperature);
        newStory = newStory.replace("300 pounds", weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}