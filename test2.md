# Javascript & HTML5 Canvas Practice Test

Question 1:
How do you retrieve an element with the id "picture" from your html document?

    document.getElementById("picture");

Question 2:
var str = "Hello";
var str1 = "there!";
alert(str + str1 + "How are you?");
What would be the output of this statement?

    In javascript, in order to get spaces between displayed strings, you need to include them yourself. There was no space between "Hello", "there!" and "How are you?"

Question 3:
What would the alert box display?

var sum = 1;
for (var i=0; i<5; i++) {
    sum += i;
}
alert(sum);

    The value of "sum" starts at 1. At the first iteration, i = 0, so sum+=i will be 1. In second iteration of the loop, i = 1, so sum will be 2. For the 3rd, i = 2, so sum will be 4. For the 4th, i = 3, so sum will be 7. And for the 5th, i = 4, so sum will be 11. Then i becomes 5, so the condition becomes false, and the execution comes out of the for loop, and 11 is printed out.

Question 4:
Break statements are required for default cases of a switch statement.

    Break statements are only required for case statements in a switch statement. This is to ensure that the execution breaks out of the switch statement after a case is encountered and executed. A default statement is at the end of the switch statement, after which the execution will automatically come out of the switch statement.

Question 5:
The following code should print the number 9 in the output. But I don't get any output when I open the page in my browser. Why?

function addSum(a, b) {
    var sum = a + b;
    alert(sum);
}

var num1 = 5, num2 = 4;

    In order to execute a function, you need to call said function from the outside. In this case, the function call should have been addSum(num1, num2), which would have called the addSum function and sent the values of num1 and num2 to the function.

Question 6:
var a = 5, b = 6;
sum = a + b;
if ( sum > 10) {
    alert("Great!");
}
else {
    alert("Not so great");
}
What is the output of this code snippet?

    The value of sum will be 11, so it'll pass through the if condition.

Question 7:
Javascript variables and methods are not case sensitive. True or False.

    Pretty much everything is case sensitive in Javascript. The varaible "ball" will not be considered the same as the variable "Ball". This is why Javascript's built-in methods/functions should always be written in the exact manner they were meant to be written (getContext() method with a capital 'c', for example).


Question 8:
This is the scenario. Mary wants to score her test scores on 5 subjects inside an array, in the following order. The order shouldn't change, so she knows how to retrieve them later on.

Math: 100

Physics: 85

Chemistry: 90

English: 90

Geography: 93

How would she go about doing that? There are multiple correct answers. Choose the ones you feel are appropriate.

    var scores;
    scores[0] = 100;
    scores[1] = 85;
    scores[2] = 90;
    scores[3] = 90;
    scores[4] = 93;

    var scores = [100, 85, 90, 90, 93]

Question 9:
We have a canvas with width 500 and height 300. I'd like my context to be placed at the top right corner position of my canvas (from the user's point of view). How would I represent it?

    If the context has to be placed at the top right corner, then the x value should be equal to the width of the canvas, which is 500. At the top position, the height would be 0. So the x and y values are 500 and 0, which are represented as (500,0)

Question 10:
var newArray = [[1,2,3],[4,5,6],[7,8,9]];
newArray[3] = [10,11,12];
newArray[2][2] = 7;
newArray[1][2] = 5;
newArray[3][1] = 8;
newArray[1][0] = 2;
alert(newArray[1]);
What would be the output?

    newArray[1][0]'s value was changed to 2 and newArray[1][2]'s value was changed to 5. So, the new value of the child array newArray[1] is [2,5,5]

Question 11:
var a = 5, b = 2;
if (a > 4 && b <2) {
    alert("Condition was true");
}
else {
    alert("Condition was not true");
}
What is the output of this snippet?

    For an && condition to be true, the conditions on either side of the && symbol should be true. a > 4 is true, but b < 2 is not true (since b is equal to 2), so the if statement would not be executed.
