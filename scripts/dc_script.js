let bgmPlay = true;
let playerCharacter = null;

bgm = document.getElementById("bgm");
bgmButton = document.getElementById("bgm-btn");

function bgmToggle()
{
    bgmPlay = !bgmPlay;
    if (bgmPlay)
    {
        bgm.play();
        bgmButton.style.backgroundImage = 'url("/Images/play.png")';
    }
    else
    {
        bgm.pause();
        bgmButton.style.backgroundImage = 'url("/Images/pause.png")';
    }
}

const userCharacter = (char)  => playerCharacter = char;

function oppSelection()
{
    console.log(playerCharacter);
}