let userAccessToken = '';


const Spotify = {
    getAccessToken() {
        if(userAccessToken){
            return userAccessToken;
        }

        const url = window.location.href;

        const accessToken = url.match(/access_token=([^&]*)/);
        const expiresIn = url.match(/expires_in=([^&]*)/); 

        if(userAccessToken && expiresIn){
            userAccessToken = accessToken[1];
            const expirationTime = Number(expiresIn[1]) * 1000;
            setTimeout(() => {
                userAccessToken = '';
            }, expirationTime );
            window.history.pushState('For Access Token', null, '/');         
        }else {
            window.location.href = 'https://accounts.spotify.com/authorize?client_id=CLIENT_ID&response_type=token&scope=playlist-modify-public&redirect_uri=REDIRECT_URI';
        }
    }
};

export default Spotify;