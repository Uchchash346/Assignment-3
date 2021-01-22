// 

/* Solve No 1 --> kilometerToMeter*/
function kilometerToMeter(km) { // km = kilometer
    var meter = km * 1000; // 1km = 1000m
    if (km < 0) {
        return "Error Input! Measurement never be negative.";
    }
    return meter;
}


/* Solve No 2 --> budgetCalculator*/
function budgetCalculator(watch, phone, laptop) {
    var totalCost = 0;
    if (watch >= 1) {
        totalCost = watch * 50;
    }
    if (phone >= 1) {
        cost_of_phone = phone * 100;
        totalCost = cost_of_phone + totalCost;
    }
    if (laptop >= 1) {
        cost_of_laptop = laptop * 500;
        totalCost = cost_of_laptop + totalCost;
    }
    else {
        return "No item is added"; //For without adding any item
    }
    return totalCost;
}

/* Solve No 3 --> hotelCost*/
function hotelCost(day_count) {
    var total_no_of_day = 0;
    if (day_count <= 0) {
        return "Error Input! Please Enter a Positive Number"
    }
    else if (day_count <= 10) {
        total_no_of_day = day_count * 100;
    }
    else if (day_count <= 20) {
        first_10_days = 10 * 100;
        var remaining_days = day_count - 10;
        var second_10_days = remaining_days * 80;
        total_no_of_day = first_10_days + second_10_days;
    }
    else {
        var first_10_days = 10 * 100;
        var second_10_days = 10 * 80;
        var remaining_days = total_no_of_day - 20;
        var after_20_days = remaining_days * 50;
        total_no_of_day = first_10_days + second_10_days + after_20_days;
    }
    return total_no_of_day;
}


/* Solve No 4 --> megaFriend*/
function megaFriend() {
    var lgth = 0; // lgth = Length of Array
    var nameList = ['Rahim', 'Karim', 'Uchchash', 'Ullash', 'Mr Mofazzol', 'Mahmudur Rahman Uchchash'];
    for (var i = 0; i < nameList.length; i++) {
        if (nameList[i].length > lgth) {
            var lgth = nameList[i].length;
            var longest_Name = nameList[i];
        }

    }
    return longest_Name; //return highest length element from the nameListay nameList.
}