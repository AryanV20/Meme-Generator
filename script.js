let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");
// API URL

let url = "https://meme-api.com/gimme/";
//Array of subreddits of your choice 
let subreddits = ["bollyblindsngossip","dankmemes","dankindianmemes" ,"bollywoodmemes"];

//Function to get random meme
let getMeme = () => {
    // choose a random subreddit from the subreddits array
    let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
    
    //Fetch data from the api
    fetch(url+randomSubreddit).then(resp => resp.json()).then((data) => {
        let memeImg = new Image();
       //Display memes
        memeImg.onload = () => {
            meme.src = data.url;
            //Display title
            title.innerHTML = data.title;
        };
        memeImg.src=data.url;
        
    });
};

//call the getMeme() on button cliick and on window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);

