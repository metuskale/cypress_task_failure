import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor";
import SearchPageComponent from "../components/SearchPageComponent";

Given(/^duck duck go website is opened$/, function () {
    SearchPageComponent.open();
});
When(/^we search for "([^"]*)"$/, function (element:string) {
    SearchPageComponent.searchFor(element)
});
Then(/^the title should contain "([^"]*)"$/, function (title:string) {
    SearchPageComponent.validateTitleContains(title)
});