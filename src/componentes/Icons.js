

const Icons = (icon) => {
    switch (icon) {
        case 0 || 1:
            icon = 'icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 2:
            icon = 'icons/partly-cloudy-day.svg'
            break;
        case 3:
            icon = 'icons/overcast.svg'
            break;
        case 45 || 48:
            icon = 'icons/fog.svg'
            console.log('NIEBLA');
            break;
        case 51 || 53 || 55 || 56 || 57:
            icon = 'icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;
        case 66 || 67:
            icon = 'icons/sleet.svg'
            break;
        case 71 || 73 || 75 || 77:
            icon = 'icons/snowy.svg'
            console.log('NIEVE');
            break;
        case 80 || 81 || 82 || 61 || 63 || 65 || 66 || 67 || 85 || 86:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;
        case 95 || 96 || 99:
            icon = 'icons/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;

        default:
            icon = 'icons/clear-day.svg'
            console.log('LIMPIO');
    }
    return icon
}

export default Icons