let firstObject = new Object();

firstObject["company name"] = 'Samsung electronics';
firstObject.opened = 1938;
firstObject.companyCode = Number('005930');
firstObject.employees = 270372;
firstObject.ceo = 'Kyung Kye-Hyun'
firstObject.nvo = false;
firstObject.workingLocations = {}
firstObject.workingLocations.countries = ['Korea', 'China', 'USA', 'Germany', 'Japan', 'Singapore'];
firstObject.activityAreas = {};
firstObject.activityAreas.activities = ['consumer electronics maker', 'chip maker', 'ship maker']
firstObject.contacts = {};
firstObject.contacts.phone = 18007267864;
firstObject.contacts.email = 'samsung@gmail.com';
firstObject.contacts.address = {};
firstObject.contacts.address.country = 'South Korea'
firstObject.contacts.address.city = 'Suwon'
firstObject.contacts.address.street = 'Gyeonggi-do, Yongin-si, Giheung-gu, Yeongdeok-dong, 788-4, 삼성전자디지털프라자 수원본점'
firstObject.contacts.address.apartment = '3층'

firstObject.getAddress = function () {
    return `${this.contacts.address.country}, ${this.contacts.address.city}, ${this.contacts.address.street}, ${this.contacts.address.apartment}`;
}
firstObject.setNvoStatus = function () {
    return this.nvo = !this.nvo;
}
firstObject.changeNvoStatus = function () {
    if (this.nvo) {
        return this.nvo = false
    } else {
        return this.nvo = true

    }
}
firstObject.getLocations = function () {
    return `${this.workingLocations.countries.join(', ')}`
}

firstObject.getActivities = function () {
    return `${this.activityAreas.activities.join(', ')}`
}

firstObject.addWorkingCountry = function (newCountry) {
    let currentList = this.workingLocations.countries;
    currentList.push(newCountry);
    return `${currentList}`
}

firstObject.removeWorkingCountry = function (removeCountry) {
    this.workingLocations.countries = this.workingLocations.countries.filter(country => country !== removeCountry);
}

firstObject.addActivityAreas = function (newActivity) {
    let currentActivities = this.activityAreas.activities;
    currentActivities.push(newActivity);
    return `${currentActivities}`;

}



firstObject.removeActivityAreas = function (removeActivityIndex) {
    let activities = this.activityAreas.activities;
    let newActivities = [];
    for (let i = 0; i < activities.length; i++) {
        if (i !== removeActivityIndex) {
            newActivities.push(activities[i]);
        }
    }
    this.activityAreas.activities = newActivities;
    return newActivities;
};

console.log(firstObject.removeActivityAreas(2));

