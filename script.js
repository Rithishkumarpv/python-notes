/* =====================================================
   PYTHON NOTES WEBSITE
===================================================== */


/* =====================================================
   PYTHON TOPICS
===================================================== */

const topics = {

    "first-program": {
        title: "First Python Program",

        content: `
            <h2>What is Python?</h2>

            <p>
                Python is a high-level, interpreted programming language
                known for its simple and readable syntax.
            </p>

            <h2>First Program</h2>

            <p>
                The simplest Python program prints a message on the screen.
            </p>

            <pre><code>print("Hello, World!")</code></pre>

            <h2>Output</h2>

            <pre><code>Hello, World!</code></pre>
        `
    },


    "execution": {
        title: "Python Execution",

        content: `
            <h2>Python Execution</h2>

            <p>
                Python programs are normally executed by the Python
                interpreter.
            </p>

            <h2>Example</h2>

            <pre><code>print("Python is running!")</code></pre>

            <p>
                The interpreter reads the Python program and executes
                the instructions.
            </p>
        `
    },


    "variables": {
        title: "Variables",

        content: `
            <h2>Variables</h2>

            <p>
                A variable is a name used to store a value.
                Python does not require you to declare the data type
                separately.
            </p>

            <pre><code>name = "Rithish"
age = 18
marks = 95.5</code></pre>

            <h2>Example</h2>

            <pre><code>x = 10
y = 20

print(x)
print(y)</code></pre>
        `
    },


    "operators": {
        title: "Operators",

        content: `
            <h2>Operators</h2>

            <p>
                Operators are symbols used to perform operations on values.
            </p>

            <h2>Arithmetic Operators</h2>

            <pre><code>+
-
*
/
%
//
**</code></pre>

            <h2>Example</h2>

            <pre><code>a = 10
b = 3

print(a + b)
print(a - b)
print(a * b)
print(a / b)
print(a % b)
print(a // b)
print(a ** b)</code></pre>

            <h2>Comparison Operators</h2>

            <pre><code>==
!=
>
<
>=
<=</code></pre>

            <h2>Logical Operators</h2>

            <pre><code>and
or
not</code></pre>
        `
    },


    "keywords": {
        title: "Keywords",

        content: `
            <h2>Keywords</h2>

            <p>
                Keywords are reserved words in Python that have special
                meanings.
            </p>

            <pre><code>if
else
elif
for
while
def
return
class
import
try
except
True
False
None</code></pre>

            <p>
                Keywords cannot normally be used as variable names.
            </p>
        `
    },


    "data-types": {
        title: "Data Types",

        content: `
            <h2>Python Data Types</h2>

            <p>
                A data type defines the kind of value stored in a variable.
            </p>

            <h2>Common Data Types</h2>

            <table>
                <tr>
                    <th>Data Type</th>
                    <th>Example</th>
                </tr>

                <tr>
                    <td>int</td>
                    <td>10</td>
                </tr>

                <tr>
                    <td>float</td>
                    <td>10.5</td>
                </tr>

                <tr>
                    <td>str</td>
                    <td>"Hello"</td>
                </tr>

                <tr>
                    <td>bool</td>
                    <td>True</td>
                </tr>

                <tr>
                    <td>list</td>
                    <td>[1, 2, 3]</td>
                </tr>

                <tr>
                    <td>tuple</td>
                    <td>(1, 2, 3)</td>
                </tr>

                <tr>
                    <td>set</td>
                    <td>{1, 2, 3}</td>
                </tr>

                <tr>
                    <td>dict</td>
                    <td>{"name": "John"}</td>
                </tr>
            </table>
        `
    },


    "conditional": {
        title: "Conditional Statements",

        content: `
            <h2>Conditional Statements</h2>

            <p>
                Conditional statements allow a program to make decisions.
            </p>

            <h2>if Statement</h2>

            <pre><code>age = 18

if age >= 18:
    print("Adult")</code></pre>

            <h2>if-else</h2>

            <pre><code>age = 16

if age >= 18:
    print("Adult")
else:
    print("Minor")</code></pre>

            <h2>if-elif-else</h2>

            <pre><code>marks = 85

if marks >= 90:
    print("A")
elif marks >= 75:
    print("B")
else:
    print("C")</code></pre>
        `
    },


    "match-case": {
        title: "Match-Case",

        content: `
            <h2>Match-Case</h2>

            <p>
                The match-case statement is used to compare a value
                against different patterns.
            </p>

            <pre><code>day = 2

match day:

    case 1:
        print("Monday")

    case 2:
        print("Tuesday")

    case 3:
        print("Wednesday")

    case _:
        print("Invalid day")</code></pre>
        `
    },


    "while-loop": {
        title: "While Loop",

        content: `
            <h2>While Loop</h2>

            <p>
                A while loop repeatedly executes a block of code while
                a condition remains true.
            </p>

            <pre><code>count = 1

while count <= 5:

    print(count)

    count += 1</code></pre>
        `
    },


    "for-loop": {
        title: "For Loop",

        content: `
            <h2>For Loop</h2>

            <p>
                A for loop is commonly used to iterate over a sequence
                such as a list, string or range.
            </p>

            <pre><code>for i in range(5):
    print(i)</code></pre>

            <h2>Looping through a list</h2>

            <pre><code>fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(fruit)</code></pre>
        `
    },


    "nested-loops": {
        title: "Nested Loops",

        content: `
            <h2>Nested Loops</h2>

            <p>
                A loop inside another loop is called a nested loop.
            </p>

            <pre><code>for i in range(3):

    for j in range(3):

        print(i, j)</code></pre>
        `
    },


    "functions": {
        title: "Functions",

        content: `
            <h2>Functions</h2>

            <p>
                A function is a reusable block of code designed to
                perform a particular task.
            </p>

            <h2>Creating a Function</h2>

            <pre><code>def greet():
    print("Hello")

greet()</code></pre>

            <h2>Function with Return</h2>

            <pre><code>def add(a, b):
    return a + b

result = add(10, 20)

print(result)</code></pre>
        `
    },


    "arguments": {
        title: "Arguments",

        content: `
            <h2>Arguments</h2>

            <p>
                Arguments are values passed to a function when it is called.
            </p>

            <pre><code>def greet(name):
    print("Hello", name)

greet("Rithish")</code></pre>

            <h2>Multiple Arguments</h2>

            <pre><code>def add(a, b):
    return a + b

print(add(5, 10))</code></pre>
        `
    },


    "lambda": {
        title: "Lambda",

        content: `
            <h2>Lambda Function</h2>

            <p>
                A lambda is a small anonymous function.
            </p>

            <pre><code>square = lambda x: x * x

print(square(5))</code></pre>

            <p>
                Lambda functions are useful when a small function is
                needed for a short operation.
            </p>
        `
    },


    "recursion": {
        title: "Recursion",

        content: `
            <h2>Recursion</h2>

            <p>
                Recursion occurs when a function calls itself.
            </p>

            <pre><code>def countdown(n):

    if n == 0:
        return

    print(n)

    countdown(n - 1)

countdown(5)</code></pre>
        `
    },


    "strings": {
        title: "Strings",

        content: `
            <h2>Strings</h2>

            <p>
                A string is a sequence of characters enclosed in quotes.
            </p>

            <pre><code>name = "Python"

print(name)</code></pre>

            <h2>String Operations</h2>

            <pre><code>text = "Python"

print(text.upper())
print(text.lower())
print(len(text))</code></pre>

            <h2>Indexing</h2>

            <pre><code>text = "Python"

print(text[0])
print(text[1])</code></pre>
        `
    },


    "lists": {
        title: "Lists",

        content: `
            <h2>Lists</h2>

            <p>
                A list is an ordered and changeable collection of values.
            </p>

            <pre><code>numbers = [10, 20, 30, 40]

print(numbers)</code></pre>

            <h2>Adding an Item</h2>

            <pre><code>numbers.append(50)</code></pre>

            <h2>Removing an Item</h2>

            <pre><code>numbers.remove(20)</code></pre>
        `
    },


    "tuples": {
        title: "Tuples",

        content: `
            <h2>Tuples</h2>

            <p>
                A tuple is an ordered collection that cannot normally
                be changed after creation.
            </p>

            <pre><code>numbers = (10, 20, 30)

print(numbers)</code></pre>
        `
    },


    "dictionaries": {
        title: "Dictionaries",

        content: `
            <h2>Dictionaries</h2>

            <p>
                A dictionary stores data using key-value pairs.
            </p>

            <pre><code>student = {
    "name": "Rithish",
    "age": 18,
    "course": "AIML"
}

print(student["name"])</code></pre>

            <h2>Adding Data</h2>

            <pre><code>student["marks"] = 90</code></pre>
        `
    },


    "sets": {
        title: "Sets",

        content: `
            <h2>Sets</h2>

            <p>
                A set is an unordered collection of unique elements.
            </p>

            <pre><code>numbers = {1, 2, 3, 4}

print(numbers)</code></pre>

            <h2>Adding an Element</h2>

            <pre><code>numbers.add(5)</code></pre>
        `
    },


    "arrays": {
        title: "Arrays",

        content: `
            <h2>Arrays</h2>

            <p>
                Arrays are collections designed to store multiple values
                of the same general type. Python commonly uses the
                array module or libraries such as NumPy for arrays.
            </p>

            <pre><code>from array import array

numbers = array("i", [1, 2, 3, 4])

print(numbers)</code></pre>
        `
    },


    "list-comprehension": {
        title: "List Comprehension",

        content: `
            <h2>List Comprehension</h2>

            <p>
                List comprehension provides a short way to create a list.
            </p>

            <pre><code>squares = [x * x for x in range(5)]

print(squares)</code></pre>

            <h2>With Condition</h2>

            <pre><code>even = [x for x in range(10) if x % 2 == 0]

print(even)</code></pre>
        `
    },


    "stack": {
        title: "Stack",

        content: `
            <h2>Stack</h2>

            <p>
                A stack follows the LIFO principle:
                Last In, First Out.
            </p>

            <pre><code>stack = []

stack.append(10)
stack.append(20)
stack.append(30)

print(stack)

stack.pop()

print(stack)</code></pre>
        `
    },


    "queue": {
        title: "Queue",

        content: `
            <h2>Queue</h2>

            <p>
                A queue generally follows the FIFO principle:
                First In, First Out.
            </p>

            <pre><code>from collections import deque

queue = deque()

queue.append(10)
queue.append(20)
queue.append(30)

print(queue)

queue.popleft()

print(queue)</code></pre>
        `
    },


    "modules": {
        title: "Modules & Packages",

        content: `
            <h2>Modules</h2>

            <p>
                A module is a Python file containing functions,
                variables or classes that can be imported into another
                Python program.
            </p>

            <pre><code>import math

print(math.sqrt(25))</code></pre>

            <h2>Packages</h2>

            <p>
                A package is a collection of related Python modules.
            </p>
        `
    },


    "libraries": {
        title: "Python Libraries",

        content: `
            <h2>Python Libraries</h2>

            <p>
                Python has many libraries that provide ready-made
                functionality.
            </p>

            <h2>Examples</h2>

            <ul>
                <li>math</li>
                <li>random</li>
                <li>datetime</li>
                <li>os</li>
                <li>NumPy</li>
                <li>pandas</li>
                <li>matplotlib</li>
            </ul>

            <h2>Example</h2>

            <pre><code>import math

print(math.pi)</code></pre>
        `
    },


    "errors": {
        title: "Errors & Exception Handling",

        content: `
            <h2>Errors</h2>

            <p>
                Errors can occur when a Python program is executed.
            </p>

            <h2>Common Errors</h2>

            <ul>
                <li>SyntaxError</li>
                <li>NameError</li>
                <li>TypeError</li>
                <li>ValueError</li>
                <li>IndexError</li>
                <li>KeyError</li>
            </ul>

            <h2>Exception Handling</h2>

            <p>
                Python uses try and except to handle exceptions.
            </p>

            <pre><code>try:

    number = int(input("Enter a number: "))

    print(number)

except ValueError:

    print("Invalid number")</code></pre>
        `
    },


    "files": {
        title: "File Handling",

        content: `
            <h2>File Handling</h2>

            <p>
                Python can be used to create, read, write and modify files.
            </p>

            <h2>Reading a File</h2>

            <pre><code>file = open("data.txt", "r")

content = file.read()

print(content)

file.close()</code></pre>

            <h2>Writing to a File</h2>

            <pre><code>file = open("data.txt", "w")

file.write("Hello Python")

file.close()</code></pre>

            <h2>Using with</h2>

            <pre><code>with open("data.txt", "r") as file:

    content = file.read()

    print(content)</code></pre>
        `
    }

};


/* =====================================================
   GET HTML ELEMENTS
===================================================== */

const content = document.getElementById("content");

const searchInput = document.getElementById("searchInput");

const searchButton = document.getElementById("searchButton");

const darkModeButton = document.getElementById("darkModeButton");

const homeButton = document.getElementById("homeButton");

const startButton = document.getElementById("startButton");

const topicButtons = document.querySelectorAll(".topic-button");


/* =====================================================
   HOME PAGE
===================================================== */

function showHome() {

    content.innerHTML = `

        <section class="home-page">

            <div class="hero">

                <div class="python-icon">
                    🐍
                </div>

                <h1>Python Notes</h1>

                <p>
                    A simple Python learning website containing
                    notes, explanations and examples.
                </p>

                <button id="startButton" class="start-button">
                    Start Learning →
                </button>

            </div>


            <div class="welcome-box">

                <h2>Welcome!</h2>

                <p>
                    This website is designed as a personal Python
                    notes reference. Use the sidebar or search bar
                    to find the topic you want to study.
                </p>

            </div>


            <div class="cards">

                <div class="card">
                    <span>📘</span>

                    <h3>Python Basics</h3>

                    <p>
                        Learn variables, operators, keywords
                        and data types.
                    </p>
                </div>


                <div class="card">
                    <span>🔄</span>

                    <h3>Control Flow</h3>

                    <p>
                        Learn conditions, loops and match-case.
                    </p>
                </div>


                <div class="card">
                    <span>⚙️</span>

                    <h3>Functions</h3>

                    <p>
                        Learn functions, arguments, lambda
                        and recursion.
                    </p>
                </div>


                <div class="card">
                    <span>🗃️</span>

                    <h3>Data Structures</h3>

                    <p>
                        Learn strings, lists, tuples,
                        dictionaries and sets.
                    </p>
                </div>

            </div>

        </section>
    `;


    /* Reconnect Start Learning button */

    const newStartButton =
        document.getElementById("startButton");

    if (newStartButton) {

        newStartButton.addEventListener(
            "click",
            startLearning
        );

    }
}


/* =====================================================
   SHOW TOPIC
===================================================== */

function showTopic(topicId) {

    const topic = topics[topicId];


    if (!topic) {

        content.innerHTML = `

            <div class="no-results">

                <h2>Topic Not Found</h2>

                <p>
                    The requested topic could not be found.
                </p>

            </div>

        `;

        return;
    }


    const topicIds = Object.keys(topics);

    const currentIndex =
        topicIds.indexOf(topicId);


    let previousButton = "";

    let nextButton = "";


    /* Previous */

    if (currentIndex > 0) {

        const previousId =
            topicIds[currentIndex - 1];

        const previousTitle =
            topics[previousId].title;

        previousButton = `
            <button
                class="previous-button"
                data-navigation="${previousId}"
            >
                ← ${previousTitle}
            </button>
        `;
    }


    /* Next */

    if (currentIndex < topicIds.length - 1) {

        const nextId =
            topicIds[currentIndex + 1];

        const nextTitle =
            topics[nextId].title;

        nextButton = `
            <button
                class="next-button"
                data-navigation="${nextId}"
            >
                ${nextTitle} →
            </button>
        `;
    }


    content.innerHTML = `

        <article class="topic-page">

            <h1>${topic.title}</h1>

            ${topic.content}


            <div class="navigation-buttons">

                ${previousButton}

                ${nextButton}

            </div>

        </article>

    `;


    /* Add Copy Buttons */

    addCopyButtons();


    /* Add Previous / Next events */

    const navigationButtons =
        document.querySelectorAll(
            "[data-navigation]"
        );


    navigationButtons.forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const id =
                    this.getAttribute("data-navigation");

                showTopic(id);

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    });


    /* Scroll to top */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =====================================================
   SEARCH
===================================================== */

function searchTopics() {

    const searchText =
        searchInput.value.trim().toLowerCase();


    /* Empty search */

    if (searchText === "") {

        showHome();

        return;
    }


    const results = [];


    Object.keys(topics).forEach(id => {

        const topic = topics[id];


        const titleMatch =
            topic.title
                .toLowerCase()
                .includes(searchText);


        const contentText =
            topic.content
                .replace(/<[^>]*>/g, " ")
                .toLowerCase();


        const contentMatch =
            contentText.includes(searchText);


        if (titleMatch || contentMatch) {

            results.push({
                id: id,
                title: topic.title
            });

        }

    });


    /* No results */

    if (results.length === 0) {

        content.innerHTML = `

            <div class="no-results">

                <h2>No Results Found</h2>

                <p>
                    No Python topic matches
                    "<strong>${escapeHTML(searchText)}</strong>".
                </p>

                <br>

                <button
                    id="backHomeButton"
                    class="navigation-buttons"
                >
                    Go Back Home
                </button>

            </div>

        `;


        const backButton =
            document.getElementById("backHomeButton");


        if (backButton) {

            backButton.addEventListener(
                "click",
                showHome
            );

        }


        return;
    }


    /* Display results */

    let resultsHTML = `

        <h1 class="search-title">
            Search Results
        </h1>

        <p>
            Found ${results.length} topic(s).
        </p>

        <br>
    `;


    results.forEach(result => {

        resultsHTML += `

            <div
                class="search-result"
                data-result="${result.id}"
            >

                <h3>
                    ${result.title}
                </h3>

                <p>
                    Click to open this topic.
                </p>

            </div>

        `;

    });


    content.innerHTML = resultsHTML;


    /* Make search results clickable */

    const resultButtons =
        document.querySelectorAll(
            "[data-result]"
        );


    resultButtons.forEach(result => {

        result.addEventListener(
            "click",
            function () {

                const id =
                    this.getAttribute("data-result");

                showTopic(id);

            }
        );

    });

}


/* =====================================================
   ESCAPE HTML
===================================================== */

function escapeHTML(text) {

    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =====================================================
   START LEARNING
===================================================== */

function startLearning() {

    showTopic("first-program");

}


/* =====================================================
   COPY CODE BUTTONS
===================================================== */

function addCopyButtons() {

    const codeBlocks =
        document.querySelectorAll("pre");


    codeBlocks.forEach(block => {

        /* Prevent duplicate copy buttons */

        if (
            block.querySelector(".copy-button")
        ) {

            return;

        }


        const button =
            document.createElement("button");


        button.textContent = "Copy";

        button.className = "copy-button";


        button.addEventListener(
            "click",
            async function () {

                const code =
                    block
                        .querySelector("code")
                        .innerText;


                try {

                    await navigator.clipboard.writeText(
                        code
                    );


                    button.textContent =
                        "Copied!";


                    setTimeout(() => {

                        button.textContent =
                            "Copy";

                    }, 1500);


                } catch (error) {

                    button.textContent =
                        "Copy failed";

                }

            }
        );


        block.appendChild(button);

    });

}


/* =====================================================
   DARK MODE
===================================================== */

function toggleDarkMode() {

    document.body.classList.toggle("dark");


    const darkModeEnabled =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "darkMode",
        darkModeEnabled
    );


    if (darkModeEnabled) {

        darkModeButton.textContent = "☀️";

    } else {

        darkModeButton.textContent = "🌙";

    }

}


/* =====================================================
   LOAD DARK MODE
===================================================== */

function loadDarkMode() {

    const savedMode =
        localStorage.getItem("darkMode");


    if (savedMode === "true") {

        document.body.classList.add("dark");

        darkModeButton.textContent = "☀️";

    }

}


/* =====================================================
   EVENT LISTENERS
===================================================== */


/* Sidebar topic buttons */

topicButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            const topicId =
                this.getAttribute("data-topic");

            showTopic(topicId);

        }
    );

});


/* Home button */

homeButton.addEventListener(
    "click",
    showHome
);


/* Start button */

startButton.addEventListener(
    "click",
    startLearning
);


/* Search button */

searchButton.addEventListener(
    "click",
    searchTopics
);


/* Enter key inside search */

searchInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {

            searchTopics();

        }

    }
);


/* Dark mode */

darkModeButton.addEventListener(
    "click",
    toggleDarkMode
);


/* =====================================================
   INITIALIZE WEBSITE
===================================================== */

loadDarkMode();

addCopyButtons();