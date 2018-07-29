# HTML5 & CSS practice test

Question 1
How would you center an element horizontally in css?

    margin: 0 auto;

    Explanation
    The margin: 0 auto property: value pair is used to center an element horizontally within a page. The first value (0) represents the margin in the top and bottom positions of the element. These can be set at 0 if you don't want top/bottom margins, or you can increase the pixel value as well. The second value denotes the right and left margin value (auto). The value "auto" asks your browser to divide the right and left margin of the element equally, effectively centering the element.

Question 2
How do you select an element by its id in CSS?

    #id_name { }

Question 3
Which tag is used to link an external stylesheet to a html page?

    <link>

The tag is used to link an external stylesheet with a html page. It's an empty tag, so it does not have start and end tags.

Question 4
How do you align text to the center in css?

    text-align: center;

Question 5
How is a button created in HTML?

    <button>Submit</button>

Question 6
<section> and <div> tag have the same characteristics.

    True - Both and tags are block level tags, that hold different forms of content within them. They take up the entire width of a web page.

Question 7
  <h1 id="first">Heading 1 </h1> <p id="first">Hello there!</p> Is this code correct?

  No - In a document, an id of an element is unique to that element. It cannot be used for any other element. Since we've already used the id "first" for the element, we shouldn't use it for the element again.

Question 8
What is the difference between a margin and a padding?

    Padding: Distance between the text or content of an element and its ends /border
    Margin: Distance/Space between 2 elements.

Question 9
How do you specify hover conditions for a button?

    button: hover { } - The pseudo selector "hover" is used along with the element's name to specify the hover condition for that particular element.

Question 10
<h2> tag is bigger than the <h1> tag. True or false.

    False - tags are used to produce primary headings and tags are used to produce secondary headings. So, produces text that has a smaller font size than the tag.

Question 11
What is the procedure to align 2 block level elements side by side?

    display: inline-block;
    float: right;
    (or)
    float: left;

    Block elements like the and elements have the default display value as "block". Block level elements typically take up the entire width of the page, hence they cannot be aligned side by side. So, we should first change their display value to inline-block, which makes them flexible for alignment. Then, we can either give a right or left float value to align the elements to the left or right side of their parent block element.

Question 12
The document's title, description and other meta characteristic are written within the following tag pairs.

    <head>...</head> - The tag is one of the direct descendants (children) of the html root tag. This tag holds information on the web page, like the character used in the web page, it's description, title, keywords, etc.

Question 13
Which is the root tag of a html document?

    <html> - tag is the root tag of the html document. It encompasses all the other tags inside it.

Question 14
Colors can only be mentioned by their names in a stylesheet. True or false?

    False - Colors can be mentioned by their names, their hexadecimal values (ex: #ffffff for white) or rgb values (ex: rgb(0,0,0) for black) in a stylesheet.

Question 15
Which property should we use to change the text size of an element?

    font-size: value;

Question 16
"utf-8" is the value of which __________ attribute of _______ tag.

    charset, meta - The charset attribute of the meta tag is used to specify the character set used in the web document. UTF-8 is one of those character sets.

Question 17
margin: 10px 20px 30px 40px;   In the above property: value pair, what do the 4 values denote, in order?

    Top margin
    Right margin
    Bottom margin
    Left margin

Question 18
What is the syntax of the canvas tag?

    <canvas>...</canvas>

Question 19
<meta> tag has a start and end tag. True or false?

  False - tag is an empty tag, meaning it does not have a start and end tag.

Question 20
The <br> tag creates ____ number of new lines in a document.

    one - The <br> tag creates exactly one new line/space in a document. On the other hand, a <p> tag creates 2 lines of space between the paragraph and the next element.
