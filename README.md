# Biel-Final-Project

The purpose of my Amazon Alexa skill is to give the user options on what to make for dessert when they ask for it. It is sometimes hard to figure out what to bake when you want a sweet treat. My skill lists a set list of dessert options for the user to choose from. All the user has to do is ask alexa to open Biel Baking and say one of the following phrases: "I want dessert", "What can I have for desert" or "What are my options for dessert". Once one of these phrases is uttered Alexa will list the options the user has for dessert. The user can then choose the option they want for dessert by just saying the "dessert name", "I want (dessert name)", "I want to make (dessert name)", "I want to have (dessert name)" or "I will make (dessert name)". Alexa will then lists the ingredients needed to make the recipe and ask the user if they have all the ingredients they need. If the user replies with "yes", "yes I have all the ingredients", "yeah", "yes I do" or "yes I have what I need" then Alexa will read off the recipe for the user. If the user replies with "no", "no I don't", "I don't", "no I do not", "I do not", "I don't have all the ingredients" or "I do not have all the ingredients" when Alexa asks if they have all the ingredients they need then Alexa will relist the dessert options for the user to choose from. This allows for the user to look for a dessert option in which they have all the ingredients to make. Alexa stops after the recipe is given. However, if the user wants to choose a different dessert option after the recipe has been read just re-open Biel Baking and start the process all over again. 

FAQs
What if I want a dessert that isn't one of the options?
Right now my Alexa skill only has a limited set of dessert options to choose from however it is fairly easy to alter my code to personalize the options, ingredients and recipes to a specific persons own preferences. All you have to do is add an options at the end of the options array and add the ingredients and recipe at the end of both of those arrays. 

What if I don't like one of the recipes and want to change it?
My alexa skill has only one recipe and set of ingredients for each of the options however, it is easy to alter my code in order to personalize the recipes and ingredients set for each option. All you have to do is change the ingedients list in the same position as the dessert you choose in the ingrdients array and do the same for the recipes array.

Alexa only says the recipe once how do I get her to repeat it so that I can follow the steps?
My skill does not allow for alexa to repeat the recipe more than once so I would recommend writing down the recipe as she reads it off for the first time or re-opening Biel Baking and going through the process again so that she repeats the recipe. 

How do I get rid of an option I don't want?
In order to get rid of an option you don't want you would have to alter my code and remove the option from the options array and remove the ingredients list and the recipe from both 2D arrays in the same position as the dessert you are removing in the options array.

The recipes were taken off of the internet the links to the recipes are below

chocolate cake:https://howtocakeit.com/products/yos-ultimate-chocolate-cake

chocolate chip cookies:https://howtocakeit.com/products/yos-chocolate-chip-cookies

brownies:https://www.allrecipes.com/recipe/9599/quick-and-easy-brownies/

vanilla cake:https://howtocakeit.com/products/yos-ultimate-vanilla-cake

apple pie:https://www.allrecipes.com/recipe/12682/apple-pie-by-grandma-ople/

cheesecake:https://www.kingarthurflour.com/recipes/easy-cheesecake-recipe

peanut butter cookies:https://www.biggerbolderbaking.com/3-ingredient-peanut-butter-cookies/
