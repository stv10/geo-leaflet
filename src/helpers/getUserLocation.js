export const getUserLocation = async() => {
    return new Promise((res, rej) => {
        navigator.geolocation.getCurrentPosition(
            ({coords}) => {
                res([coords.latitude,coords.longitude])
            },
            (err) => {
                alert('No se puede obtener la GeoLocation')
                console.error(err);
                rej();
            }
        )
    })
}