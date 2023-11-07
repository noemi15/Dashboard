

const Icons = (icon) => {
    switch (icon) {
        case 0:
            icon = 'icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 1:
            icon = 'icons/clear-day.svg'
            console.log('LIMPIO');
            break;
        case 2:
            icon = 'icons/partly-cloudy-day.svg'
            break;
        case 3:
            icon = 'icons/overcast.svg'
            break;
        case 45:
            icon = 'icons/fog.svg'
            console.log('NIEBLA');
            break;

        case 48:
            icon = 'icons/fog.svg'
            console.log('NIEBLA');
            break;

        case 51:
            icon = 'icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;

        case 53:
            icon = 'icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;

        case 55:
            icon = 'icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;

        case 56:
            icon = 'icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;

        case 57:
            icon = 'icons/drizzle.svg'
            console.log('LLOVIZNA');
            break;

        case 66:
            icon = 'icons/sleet.svg'
            break;

        case 67:
            icon = 'icons/sleet.svg'
            break;

        case 71:
            icon = 'icons/snowy.svg'
            console.log('NIEVE');
            break;

        case 73:
            icon = 'icons/snowy.svg'
            console.log('NIEVE');
            break;

        case 75:
            icon = 'icons/snowy.svg'
            console.log('NIEVE');
            break;

        case 77:
            icon = 'icons/snowy.svg'
            console.log('NIEVE');
            break;

        case 80:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

        case 81:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

        case 82:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

        case 61:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

        case 63:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

            case 65:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

            case 85:
            icon = 'icons/rain.svg'
            console.log('LLUVIA');
            break;

            case 86:
                icon = 'icons/rain.svg'
                console.log('LLUVIA');
                break;
        case 95:
            icon = 'icons/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;

        case 96:
            icon = 'icons/thunderstorms-rain.svg'
            console.log("TORMENTA")
            break;

        case 99:
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