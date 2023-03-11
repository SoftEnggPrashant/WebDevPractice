const userTab = document.querySelector('[data-userWeather]');
const searchTab = document.querySelector('[data-searchWeather]');
const userContainer = document.querySelector('.weater-container');
const grantAccessContainer = document.querySelector('.grant_permission');
const searchForm = document.querySelector('[data-serchForm]');
const loadingScreen = document.querySelector('.loader-container');
const userInfoContainer = document.querySelector('.Weather-info');


let oldTab = userTab;
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";

oldTab.classList.add('current-tab');
getfromSessionStorage();

function switchTab(newTab){
    if(newTab !== oldTab){
        oldTab.classList.remove('current-tab');
        oldTab = newTab;
        oldTab.classList.add('current-tab');

        if(!searchForm.classList.contains('active')){
            userInfoContainer.classList.remove('active');
            grantAccessContainer.classList.remove('active');
            searchForm.classList.add('active');
        }
        else{
            searchForm.classList.remove('active');
            userInfoContainer.classList.remove('active');
            getfromSessionStorage();
        }

    }
}

userTab.addEventListener('click',()=>{
    switchTab(userTab);
});

searchTab.addEventListener('click',()=>{
    switchTab(searchTab);
})

function getfromSessionStorage(){
    const localCoordinates = sessionStorage.getItem('user-coordinates');
    if(!localCoordinates){
        grantAccessContainer.classList.add('active');
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates){

    const {lat,lon} = coordinates;
    
    grantAccessContainer.classList.remove('active');

    loadingScreen.classList.add('active');

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        const data = await response.json();

        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        renderWeatherInfo(data);
    }
    catch(e){
        loadingScreen.classList.remove('active');
        console.log('api call failed');
    }
}

function renderWeatherInfo(weatherInfo){

    console.log(weatherInfo);

    const cityName = document.querySelector('[data-cityName]');
    const countryIcon = document.querySelector('[data-countryIcon]');
    const desc = document.querySelector('[data-weatherDesc]');
    const weaterIcon = document.querySelector('[data-weatherIcon]');
    const temp = document.querySelector('[data-temp]');
    const windspeed = document.querySelector('[data-windspeed]');
    const humidity = document.querySelector('[data-humidity');
    const cloudiness = document.querySelector('[data-cloudiness]');
    const errorMessage = document.querySelector('.not-found');

    if(weatherInfo.cod === '404'){
        userInfoContainer.classList.remove('active')
        errorMessage.classList.add('active');
    }
    else{
        errorMessage.classList.remove('active');
        cityName.innerText = weatherInfo?.name;
        countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
        desc.innerText = weatherInfo?.weather?.[0]?.description;
        weaterIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
        temp.innerText = `${weatherInfo?.main?.temp} °C`;
        windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
        humidity.innerText = `${weatherInfo?.main?.humidity}%`;
        cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("Navigator is not supported");
    }
}

function showPosition(position){

    const userCoordinates = {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    }

    sessionStorage.setItem('user-coordinates',JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector('[data-grantAccess]');
grantAccessButton.addEventListener('click',getLocation);

const searchInput = document.querySelector('[data-serchInput]');

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === ''){
        return;
    }
    else{
        fetchSeachWeatherInfo(cityName);
    }
})

async function fetchSeachWeatherInfo(cityName){

    loadingScreen.classList.add('active');
    userInfoContainer.classList.remove('active');
    grantAccessButton.classList.remove('active');

    try{

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        loadingScreen.classList.remove('active');
        userInfoContainer.classList.add('active');
        console.log("api response",data);
        renderWeatherInfo(data)
    }
    catch(error){
        console.log("api call failed with the city name");
    }
}