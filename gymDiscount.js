function gymDiscount (cost, friends) {
    if (friends === 0) {
    return cost;
    }
    else if (friends === 1) {
    return cost*0.95;
    }
    else if (friends === 2) {
    return cost*0.90;
    }
    else if (friends >= 3) {
    return cost*0.85;
    }
}

export {gymDiscount}
