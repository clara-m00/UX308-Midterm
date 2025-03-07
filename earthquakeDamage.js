function earthquakeDamage (intensity) {
    if (intensity < 5) {
        return "Little or no damage";
    }
    else if (intensity >= 5 && intensity < 5.5) {
        return "Some damage";
    }
    else if (intensity >= 5.5 && intensity < 6.5) {
        return "Serious damage: walls may crack or fall";
    }
    else if (intensity >= 6.5 && intensity < 7.5) {
        return "Disaster: buildings may collapse";
    }
    else if (intensity >= 7.5) {
        return "Catastrophe: most buildings are destroyed";
    }

}

export {earthquakeDamage}