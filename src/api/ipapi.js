const evnBack = 'https://ipapi.co'

export const ipapi = () => {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
    return fetch(`${evnBack}/json`, requestOptions)
        .then(response => response.json())
}