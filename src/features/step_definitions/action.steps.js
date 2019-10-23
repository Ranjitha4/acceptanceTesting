var {Given} = require('cucumber');
const chai = require('chai');
const Webdriver = require('selenium-webdriver');
var assert = require('assert');

Given(/^I open the site "\/"$/, function () {
    const url = browser.options.baseUrl;
    browser.url(url);
});
Given(/^I verify five days weather is displayed$/, function () {
    var results = $$("//div[@data-reactroot]/div/div/span[1]/span[1]");
    let text = results.length;
    //validation
    if(text===5){
        console.log("****** five days weather is displayed **********" );
    }else {
        console.log("****** Displaying less or more than 5 days ********");
    }
});
Given(/^I click on a (.*) to check hourly forecast$/, function (val) {
    let elem = $("//*[@data-test='day-"+val+"']").click();
    let horlyForcast = $("//span[contains(@data-test, 'hour-')]").isDisplayed();
    browser.pause(3000);
});
Given(/^I click on a (.*) to hide the wethere forecast$/, function (val) {
    browser.pause(3000);
    let elem = $("//*[@data-test='day-"+val+"']").click();
    browser.pause(3000);
});
Given(/^I enter (.*) name$/, function (city) {
    elem = $('#city');
    clearExixtingValue = elem.clearValue();
    browser.pause(4000);
    elem.setValue(city);
    elem.setValue(Webdriver.Key.ENTER);
});

//if no city is entered / blank
Given(/^I verify blank value for city display error (.*)$/, function (msg) {
    let getErr = $("//*[@data-test='error']").getText();
    assert.equal(msg,getErr);
    browser.pause(4000);
});
Given(/^I get value$/, function () {
    elem = $("//div[@data-reactroot]/div[1]/div/span[2]");
    val = elem.getAttribute('aria-label');
    console.log(val);
});
Given(/^I display min and max temperature of selected (.*)$/, function (val) {
    let maxtemp = $("//*[@data-test='maximum-"+val+"']").getText();
    let mintemp = $("//*[@data-test='minimum-"+val+"']").getText();
    console.log("The maximum temperature of selected day is:"+Math.round(parseInt(maxtemp))+" degrees");  //with value rounded down
    console.log("The minimum temperature of selected day is:"+Math.round(parseInt(mintemp))+" degrees");  //with value rounded down
});
Given(/^I display dominant wind speed of selected (.*)$/, function (val) {
    let windSpeed = $("//*[@data-test='speed-"+val+"']").getText();
    console.log("The current wind speed of selected day is:"+Math.round(parseInt(windSpeed))+"kph"); //with value rounded down
});
Given(/^I display the current climate of selected (.*)$/, function (val) {
    let currentWeather = $("//*[@data-test='description-"+val+"']").getAttribute('aria-label');
    console.log("The current weather condition of selected day is:"+currentWeather);
    const Climate = { Rain: 'Rain', Clear: 'Clear', Clouds: 'Clouds'};
    //validation
    if(currentWeather === Climate.Rain){
        console.log("Current weather condtion is Rain");
    }else if (currentWeather === Climate.Clear){
        console.log("Current weather is Clear");
    }else if (currentWeather === Climate.Clouds) {
        console.log("Current weather is Clouds");
    }
});
Given(/^I display the aggregate rainfall of selected (.*)$/, function (val) {
    let aggregateRainfall = $("//*[@data-test='rainfall-"+val+"']").getText();
    console.log("Aggregate raisfall of selected day:"+Math.round(parseInt(aggregateRainfall))+"mm"); //with value rounded down
});