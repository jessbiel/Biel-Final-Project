/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Recipes';
const GET_FACT_MESSAGE = "Here's your options: ";
const HELP_MESSAGE = 'You can say tell me a recipe, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

// These are the dessert options that the user has to choose from when they open my skill and use one of the utterances.
var options = ["chocolate cake", "chocolate chip cookies", "brownies", "vanilla cake", "apple pie", "cheesecake","peanut butter cookies"];

// This array holds the ingredients list for everyone of the options an they are in the same order as the options array.
var ingredients = [[" 2 3/4 cups flour", " 2 tsp baking powder", " 1 1/2 tsp baking soda", " 1 tsp salt", " 1 cup cocoa", " 1 cup butter", " 2 1/2 cups sugar", " 4 eggs."],
[" 2 1/4 cups flour", " 1 tsp vanilla", " 1/2 tsp baking soda", " 1 cup brown sugar", " 1 cup butter", " 1/2 cups sugar", " 2 eggs", " 2 cups chocolate chips."],
[" 1 1/2 cups flour", " 1/2 tsp baking powder", " 1 tsp vanilla", " 1/2 tsp salt", " 1/2 cup cocoa", " 1 cup butter", " 2 cups sugar", " 4 eggs."],
[" 2 1/2 cups flour", " 2 1/2 tsp baking powder", " 1 tsp vanilla", " 1/2 tsp salt", " 1 cup whole milk", " 1 cup butter", " 2 cups sugar", " 4 eggs."],
[" 3 tbs flour", " 2 pre-made pie crust", " 1/4 cup confectioners sugar", " 1/4 cup water", " 1/2 cup brown sugar", " 1/2 cup butter", " 1/2 cups sugar", " 8 granny smith apples."],
[" 1 1/2 cups graham cracker crumbs", " 5 tbs + 1 tsp melted butter", " 1/8 tsp salt", " 2 cups cream cheese", " 1 tsp vanilla", " 2/3 cups sugar", " 2 eggs."],
[" 1 cup sugar", " 1 cup peanut butter", " 1 egg."]];

var dessertNum = 0; // This holds the position of the option that the user chooses so that the recipe and ingredients list can be matched up with the right dessert option. 

// These are the recipes for each option that are in the same order as the options array.
var recipes = [[" Preheat the oven to 350°F. Line the bottom of each cake pan with parchment paper. Sift the flour, baking powder, baking soda, and salt together. Bring 3 cups water to a boil, then carefully measure exactly 2 cups and pour over the cocoa powder and whisk until completely smooth. Cream butter and sugar then add the eggs one at a time. Alternatively add the dry and cocoa mixtures starting with dry and ending with dry. Bake for 45 mins."],
[" Stir flour and baking soda together. Beat butter sugar and vanilla Add the eggs then stir in flour mixture. Add chocolate chips and bake at 350 for 10 to 12 minutes."],
[" Melt butter and mix all the ingredients as given. Bake at 350 for 20 to 30 minutes in a greased 9 by 13 inch pan."],
[" Preheat the oven to 350°F and line the bottom of each cake pan with parchment paper. Sift the flour, baking powder, and salt together. Beat butter and sugar then add the eggs. Add milk and dry ingredients alternatively starting and ending with dry. Bake for 40 minutes."],
[" Preheat oven to 425 degrees. Melt the butter in a saucepan. Stir in flour to form a paste. Add water, white sugar and brown sugar, and bring to a boil. Reduce temperature and let simmer. Place the bottom crust in your pan. Fill with apples, mounded slightly. Cover with a lattice work crust. Pour the sugar and butter liquid over the crust. Bake for 15 minutes then reduce the temperature to 350 and bake for an additional 35 to 45 minutes."],
[" Preheat oven to 350 degrees and make crust by mixing the first four ingredients together. Press crust into bottom of 9 inch pan. Beat together the cream cheese and sugar then add eggs and vanilla. Pour filling into crust then bake for 30 minutes."],
[" Preheat oven to 350 degrees and line a cookie sheet with parchment paper. Stir the ingredients together till smooth. Measure out 2 tsp balls of dough and press down with fork on cookie sheet to make criss cross pattern. Bake for 15 to 20 minutes."]]; 
//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    // this reads out the dessert options that the user has to choose from when the skill is opened and listens for a response
    'OptionsIntent': function () {
        this.response.speak("The options you have for dessert are " + options).listen("The options you have for dessert are " + options);
        this.emit(':responseReady');
    }, 
    // this checks to see if the user entered one of the options in the options array, if not it relists the options array
    // if the user does enter an option in the options array alexa responds with the ingredients array in the same position as the option choosen
    // it then asks the user if the have the ingredients then listens for a response
    'IngredientsIntent': function () {
        var dessert = this.event.request.intent.slots.dessert.value;
        if(dessertCheck(dessert))
        {
            this.response.speak("Here are the ingredients " + ingredients[dessertNum] + " Do you have all the ingredients? ").listen("Do you want to make the dessert? ");
            this.emit(':responseReady');
        }
        else
        {
            this.emit('OptionsIntent');
        }
    },
    // this intent listens to see if the user responds yes when asked if they have all the ingredients they need
    // if they reply yes then alexa reads out the recipe in the same position as the option they choose 
    'RecipeIntent': function () {
        
            this.response.speak("Here is the recipe: " + recipes[dessertNum]);
            this.emit(':responseReady');
        },
    // this intent listens to see if the user responds no when asked if they have all the ingredients they need
    // if they reply no then alexa reads out the recipe in the same poistion as the option they choose
    'NoIntent': function () {
        
        this.emit('OptionsIntent');
        },
    
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
// this function checks to see if the user entered one of the given options in the array
// the loop goes through the options array and if the user replies with one of the given options it set dessertNum 
// to position of the option choosen and returns true if the user does not enter one of the options it returns false
function dessertCheck(ingred){
    for(let i = 0; i < options.length; i++)
    {
        if(options[i] == ingred)
        {
          dessertNum = i;
          return true;
        }
    }
    return false;
}
