const userInput = document.querySelector("#username");
const searchButton = document.querySelector("#search-button");
const url = "https://api.github.com/users/";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const profileImage = document.querySelector("[data-profile-img]");
const userName = document.querySelector(".name");
const userHyperLink = document.querySelector("#profile-hyper");
const joinedData = document.querySelector(".joined-data");
const bio = document.querySelector(".bio");
const Repo = document.querySelector("[data-reop]");
const followers = document.querySelector("[data-followers]");
const following = document.querySelector("[data-following]");
const Location = document.querySelector("[location-data]");
const websiteLink = document.querySelector("[website-link]");
const twitter = document.querySelector("[twitter-link]");
const company = document.querySelector("[company-data]");
const inputContainer = document.querySelector('.input-container');
const errorMessage = document.querySelector('.error')
const crossButton = document.querySelector('#cross');
const root = document.documentElement.style;
const btnMode = document.querySelector('#btnMode');

let darkMode = false;


btnMode.addEventListener('click',()=>{
  if(darkMode == false){
    darkModeProperties();
  }
  else{
    lightModeProperties();
  }
})

userInput.addEventListener('input',()=>{
  if(userInput.value){
    crossButton.classList.add('active');
  }
  else{
    crossButton.classList.remove('active');
  }
})

crossButton.addEventListener('click',()=>{
  userInput.value = '';
  crossButton.classList.remove('active');
})

searchButton.addEventListener("click", () => {
  let username = userInput.value;
  getUserInfo(url + username);
});

getUserInfo(url+'thepranaygupta');

async function getUserInfo(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    renderUserInfo(data);
  } catch (error) {
    console.log(error);
  }
}

function renderUserInfo(data) {
  console.log(data);
  if(data.message === 'Not Found'){
    errorMessage.classList.add('active');
    crossButton.classList.remove('active');
    setTimeout(()=>{
      errorMessage.classList.remove('active');
    },1000)

    userInput.value = '';
    return;
  }

  let datesegments = data.created_at.split("T").shift().split("-");
  joinedData.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
  userName.innerText = data?.name;
  profileImage.src = data?.avatar_url;
  bio.innerText = data?.bio;
  Repo.innerText = data?.public_repos;
  followers.innerText = data?.followers;
  following.innerText = data?.following;
  Location.innerText = data?.location;
  twitter.innerText = data?.twitter_username;
  twitter.href = `https://twitter.com/${data.twitter_username}`
  company.innerText = data?.company;
  websiteLink.innerText = data?.blog;
  websiteLink.href = data?.blog;
  userHyperLink.innerText = `@${data?.login}`;
  userHyperLink.href = data?.html_url;
}

const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
const localStorageDarkMode = localStorage.getItem('daresfesf');
const modeText = document.querySelector('#mode-text');
const modeImg = document.querySelector('#mode-img');

if(localStorageDarkMode === null){
  localStorage.setItem("dark-mode",prefersDarkMode);
  darkMode = prefersDarkMode;
}

if(localStorageDarkMode){
  darkMode = localStorageDarkMode;
  darkModeProperties();
}
else{
  localStorage.setItem('dark-mode',prefersDarkMode);
  darkMode = prefersDarkMode;
  lightModeProperties();
}

function darkModeProperties(){
  root.setProperty("--lm-bg", "#141D2F");
  root.setProperty("--lm-bg-content", "#1E2A47");
  root.setProperty("--lm-text", "white");
  root.setProperty("--lm-text-alt", "white");
  root.setProperty("--lm-shadow-xl", "rgba(70,88,109,0.15)");
  modeText.innerText = "LIGHT";
  modeImg.src = "./assets/images/sun-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(1000%)");
  darkMode = true;
  localStorage.setItem("dark-mode",true);
}

function lightModeProperties(){
  root.setProperty("--lm-bg", "#F6F8FF");
  root.setProperty("--lm-bg-content", "#FEFEFE");
  root.setProperty("--lm-text", "#4B6A9B");
  root.setProperty("--lm-text-alt", "#2B3442");
  root.setProperty("--lm-shadow-xl", "rgba(70, 88, 109, 0.25)");
  modeText.innerText = "DARK";
  modeImg.src = "./assets/images/moon-icon.svg";
  root.setProperty("--lm-icon-bg", "brightness(100%)");
  darkMode = false;
  localStorage.setItem("dark-mode", false);
}