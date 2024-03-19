# Assignment 4: Javascript Basics, Final

Last updated Readme: 3/19/24

## Plan

There are 2 goals for this assignment:

1. Demonstrate and implement Javascript basics in a webpage
2. Find a JS library that could be useful, and attempt to implement it

### Goal 1

For this I will add a comments section to my silly blog's home page.
Typically these would be present on every post, but I want to get it
working on just one page before I try to add it in all over the place.
This will display a text box that will accept up to 50 chars for a comment,
and a submit button. Whenever the submit button is pressed, the text inside
the the text box will be taken in as input and be output wrapped in a paragraph
object.

### Goal 2

After asking for good and simple libraries to add to my blog project, I decided
to go with moment.js to accurately display date and time information for posts
and comments.

I am also using this project for both assignment 4 and the final project. As
such, I have implemented some very basic server code that also made the program
function with the new JavaScript files.

## Result

I was unable to get the Javascript file to pick up on importing moment. I
could not figure out the correct syntax for it, and no matter where I put the
files in relation to each other or how I tried to reference them, it did not
understand, so I scrapped it. For the server I started with the Python file
shown in class, and modified it by removing unused parts, adding a docstring
and changing some variable names to make Intellisense happier. The comment
section now displays new comments made, though I was not able to get them to
show up on separate lines.
