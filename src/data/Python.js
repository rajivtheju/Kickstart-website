import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink } from 'mdb-react-ui-kit';
import './C.css'
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';

export default function Pythontutorial() {
  const collapseSection1 = useRef(null);
  const collapseSection2 = useRef(null);
  const collapseSection3 = useRef(null);
  const collapseSection4 = useRef(null);
  const collapseSection5 = useRef(null);
  const collapseSection6 = useRef(null);
  const collapseSection7 = useRef(null);
  const collapseSection8 = useRef(null);
  const collapseSection9 = useRef(null);
  const collapseSection10 = useRef(null);

  const collapseContainerRef = useRef(null);

  return (
    <div className='tutorials'>
      <Navbar2/>
    <MDBContainer fluid className='h-100' >
      <MDBRow className='h-100' >
      <MDBCol md='4' style={{backgroundColor:'whitesmoke'}}>

          <MDBScrollspy container={collapseContainerRef}>
          <h1 className='langname'>Python </h1>

            <MDBScrollspyLink targetRef={collapseSection1}><h5 className='lang'>1.Introduction to Python</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}><h5 className='lang'>2.Variables</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection3}><h5 className='lang'>3.Data Types</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection4}><h5 className='lang'>4.Control Structures</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection5}><h5 className='lang'>5.Functions</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection6}><h5 className='lang'>6.Modules and Packages</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection7}><h5 className='lang'>7.Object-Oriented Programming</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection8}><h5 className='lang'>8.File Input and Output</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection9}><h5 className='lang'>9.Exception Handling</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection10}><h5 className='lang'>10.Advanced Topics</h5></MDBScrollspyLink>
            <center> <Link to='/compiler'>
            <button className='compiler-button' style={{fontSize:'20px'}}>pratice code here</button></Link>
            </center>
          </MDBScrollspy>
        </MDBCol>
        <MDBCol md='8' className='h-100'>
          <div id='collapse' ref={collapseContainerRef} className='scrollspy-example h-100'>
            <section ref={collapseSection1} id='section-collapse-1'>
            <div>
      <h2>Chapter 1: Introduction to Python</h2>

      <h3>What is Python?</h3>
      <p>
        Python is a versatile, high-level programming language known for its simplicity and readability.
        It supports multiple programming paradigms, including procedural, object-oriented, and functional programming.
      </p>

      <h3>Setting Up Python</h3>
      <p>
        Python can be easily installed on various operating systems.
        Visit the official Python website to download the installer appropriate for your system and follow the installation instructions provided.
      </p>

      <h3>Basic Syntax and Data Types</h3>
      <p>
        Python syntax is clean and readable, utilizing indentation to define code blocks.
        Data types in Python include integers, floats, strings, lists, tuples, dictionaries, and booleans.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`# Example code demonstrating basic Python syntax and input/output
name = input("Enter your name: ")
age = int(input("Enter your age: "))  # Convert input to integer

print("Hello,", name)
print("Your age is", age)`}
          </code>
        </pre>
      </div>
      <div>
        <h4>Output:</h4>
        <pre>
          <code>
            {`Enter your name: John
Enter your age: 25
Hello, John
Your age is 25`}
          </code>
        </pre>
      </div>

      <h3>Indentation and Comments</h3>
      <p>
        Indentation is crucial in Python to denote code blocks. Proper indentation enhances code readability and is enforced by the Python interpreter.
      </p>
      <p>
        Comments are used to document code and provide context. They are preceded by the <code>#</code> symbol and ignored by the interpreter.
      </p>

      <h3>Basic Input and Output</h3>
      <p>
        Python provides built-in functions for basic input and output operations.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`name = input("Enter your name: ")
age = int(input("Enter your age: "))  # Convert input to integer

print("Hello,", name)
print("Your age is", age)`}
          </code>
        </pre>
      </div>
      <div>
        <h4>Output:</h4>
        <pre>
          <code>
            {`Enter your name: John
Enter your age: 25
Hello, John
Your age is 25`}
          </code>
        </pre>
      </div>
    </div>
  
            </section>
            <section ref={collapseSection2} id='section-collapse-2'>
            <div>
      <h2>Chapter 2: Variables</h2>

      <h3>1. Declaring Variables</h3>
      <p>
        Variables in Python are declared by assigning a value to a name using the assignment operator (<code>=</code>).
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let x = 10;`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>2. Assigning Values to Variables</h3>
      <p>
        Values can be assigned to variables using the assignment operator (<code>=</code>).
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let y = "Python";`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>3. Redeclaring Variables</h3>
      <p>
        Variables can be redeclared with new values, and Python dynamically determines the variable's data type.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`x = 20;`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>4. Assigning Different Values to Multiple Variables</h3>
      <p>
        Multiple variables can be assigned different values in a single line using multiple assignment.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let a = 1, b = 2, c = 3;`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>5. Using the Same Name for Different Types</h3>
      <p>
        Python allows variables to be redeclared with values of different types.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`x = 10;
x = "Python";`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>
    </div>
            </section>
            <section ref={collapseSection3} id='section-collapse-3'>
            <div>
      <h2>Chapter 3: Data Types</h2>

      <h3>1. Numeric Data Types</h3>
      <p>
        Numeric data types in Python include integers, floating-point numbers, and complex numbers.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let x = 5; // Integer
let y = 3.14; // Floating-point
let z = 2 + 3j; // Complex`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>2. String Data Types</h3>
      <p>
        Strings are sequences of characters enclosed in single or double quotes.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let message = "Hello, Python!";`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>3. Sequence Data Types</h3>
      <p>
        Sequence data types include lists, tuples, and range objects.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let my_list = [1, 2, 3, 4, 5];
let my_tuple = (1, 2, 3, 4, 5);
let my_range = range(1, 6);`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>4. Mapping Data Types</h3>
      <p>
        Mapping data types include dictionaries, which store key-value pairs.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let my_dict = {"name": "Alice", "age": 30, "city": "New York"};`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>

      <h3>5. Boolean Data Types</h3>
      <p>
        Boolean data type represents truth values, <code>True</code> or <code>False</code>.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let x = true;
let y = false;`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> No output, just variable assignment.
      </p>
    </div>
            </section>
            <section ref={collapseSection4} id='section-collapse-4'>
            <div>
      <h2>Chapter 4: Control Structures</h2>

      <h3>1. Conditional Statements</h3>
      <p>
        Conditional statements allow the execution of different code blocks based on certain conditions. Common conditional statements in Python include <code>if</code>, <code>elif</code>, and <code>else</code>.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
} else if (x === 5) {
    console.log("x is equal to 5");
} else {
    console.log("x is less than 5");
}`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`x is greater than 5`}
        </code>
      </p>

      <h3>2. Loops</h3>
      <p>
        Loops are used to execute a block of code repeatedly. Python supports <code>for</code> and <code>while</code> loops.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`for (let i = 0; i < 5; i++) {
    console.log(i);
}`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`0
1
2
3
4`}
        </code>
      </p>

      <h3>3. Break and Continue Statements</h3>
      <p>
        The <code>break</code> statement is used to exit a loop prematurely, while the <code>continue</code> statement skips the rest of the loop's code and continues with the next iteration.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`0
1
2
3
4`}
        </code>
      </p>

      <h3>4. Nested Loops</h3>
      <p>
        Nested loops are loops within loops. They allow for more complex iteration patterns.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 2; j++) {
        console.log(i, j);
    }
}`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`0 0
0 1
1 0
1 1
2 0
2 1`}
        </code>
      </p>

      <h3>5. Control Structure Best Practices</h3>
      <p>
        Best practices for control structures include writing clear and concise code, using meaningful variable names, and avoiding deeply nested structures.
      </p>
    </div>
            </section>
            <section ref={collapseSection5} id='section-collapse-5'>
            <div>
      <h2>Chapter 5: Functions</h2>

      <h3>1. Defining Functions</h3>
      <p>
        Functions are reusable blocks of code that perform a specific task. In Python, functions are defined using the <code>def</code> keyword.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`def greet(name):
    return "Hello, " + name

message = greet("John")
print(message)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Hello, John`}
        </code>
      </p>

      <h3>2. Function Parameters</h3>
      <p>
        Function parameters are variables that are passed to a function when it is called. Parameters allow functions to accept input and produce output.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`def add(x, y):
    return x + y

result = add(3, 5)
print(result)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`8`}
        </code>
      </p>

      <h3>3. Function Return Types</h3>
      <p>
        Functions can return values using the <code>return</code> statement. If no value is specified, the function returns <code>None</code> by default.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`def is_even(x):
    if x % 2 == 0:
        return True
    else:
        return False

result = is_even(4)
print(result)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`True`}
        </code>
      </p>

      <h3>4. Function Best Practices</h3>
      <p>
        Best practices for functions include using descriptive function names, writing concise and readable code, and adhering to the single responsibility principle.
      </p>

      <h3>5. Function Examples</h3>
      <p>
        Examples of functions include mathematical functions, string manipulation functions, and functions for working with data structures.
      </p>
    </div>
            </section>
            <section ref={collapseSection6} id='section-collapse-6'>
            <div>
      <h2>Chapter 6: Modules and Packages</h2>

      <h3>1. Introduction to Modules</h3>
      <p>
        Modules in Python are files containing Python code that can be reused in other Python programs. They allow for better organization and modularity of code.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`# my_module.py
def greet(name):
    return "Hello, " + name`}
          </code>
        </pre>
        <pre>
          <code>
            {`# main.py
import my_module

message = my_module.greet("John")
print(message)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Hello, John`}
        </code>
      </p>

      <h3>2. Creating Modules</h3>
      <p>
        Modules can be created by simply writing Python code in a separate file with a <code>.py</code> extension.
      </p>

      <h3>3. Using Modules</h3>
      <p>
        Modules are imported using the <code>import</code> statement, and functions or variables from a module are accessed using dot notation.
      </p>

      <h3>4. Packages</h3>
      <p>
        Packages are directories containing multiple Python modules. They allow for better organization of related modules.
      </p>

      <h3>5. Package Best Practices</h3>
      <p>
        Best practices for packages include using meaningful package names, organizing modules within packages, and documenting package contents.
      </p>
    </div>
            </section>
            <section ref={collapseSection7} id='section-collapse-7'>
            <div>
      <h2>Chapter 7: Object-Oriented Programming</h2>

      <h3>1. Classes and Objects</h3>
      <p>
        Classes are blueprints for creating objects in Python. They define the properties and behaviors of objects. An object is an instance of a class.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

my_car = Car("Toyota", "Camry")
print(my_car.make)
print(my_car.model)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Toyota
Camry`}
        </code>
      </p>
      <p>
        <strong>Explanation:</strong>
        <br />
        In this example, we define a class <code>Car</code> with two attributes <code>make</code> and <code>model</code>. We then create an instance of the <code>Car</code> class called <code>my_car</code> with the make "Toyota" and model "Camry". We access and print the values of the <code>make</code> and <code>model</code> attributes of <code>my_car</code>.
      </p>

      <h3>2. Class Attributes</h3>
      <p>
        Class attributes are variables that are shared by all instances of a class. They are defined outside of any method in the class.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`class Car:
    fuel_type = "Petrol"

my_car = Car()
print(my_car.fuel_type)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Petrol`}
        </code>
      </p>
      <p>
        <strong>Explanation:</strong>
        <br />
        In this example, we define a class attribute <code>fuel_type</code> with the value "Petrol". We then create an instance of the <code>Car</code> class called <code>my_car</code> and access and print the value of the <code>fuel_type</code> attribute of <code>my_car</code>.
      </p>

      <h3>3. Object Methods</h3>
      <p>
        Object methods are functions defined within a class that operate on objects of that class. They can access and modify the attributes of the object.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display_info(self):
        print("Make:", self.make)
        print("Model:", self.model)

my_car = Car("Toyota", "Camry")
my_car.display_info()`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Make: Toyota
Model: Camry`}
        </code>
      </p>
      <p>
        <strong>Explanation:</strong>
        <br />
        In this example, we define a method <code>display_info</code> within the <code>Car</code> class that prints the make and model of the car. We then create an instance of the <code>Car</code> class called <code>my_car</code> and call the <code>display_info</code> method on it to display its make and model.
      </p>

      <h3>4. Inheritance</h3>
      <p>
        Inheritance is a mechanism in object-oriented programming that allows a new class to inherit properties and methods from an existing class. The new class is called a subclass, and the existing class is called a superclass or base class.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

class Car(Vehicle):
    def __init__(self, make, model, year):
        super().__init__(make, model)
        self.year = year

my_car = Car("Toyota", "Camry", 2022)
print(my_car.make)
print(my_car.model)
print(my_car.year)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Toyota
Camry
2022`}
        </code>
      </p>
      <p>
        <strong>Explanation:</strong>
        <br />
        In this example, we define a <code>Vehicle</code> class with make and model attributes. We then define a <code>Car</code> class that inherits from the <code>Vehicle</code> class and adds a year attribute. We create an instance of the <code>Car</code> class called <code>my_car</code> and print its make, model, and year attributes.
      </p>

      <h3>5. Polymorphism</h3>
      <p>
        Polymorphism is the ability of different classes to be treated as objects of a common superclass. It allows methods to be defined in the superclass and overridden in the subclasses.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`class Animal:
    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        print("Woof")

class Cat(Animal):
    def make_sound(self):
        print("Meow")

animals = [Dog(), Cat()]
for animal in animals:
    animal.make_sound()`}
          </code>
        </pre>
      </div>
      
        <strong>Output:</strong>
        <p>
        <strong>Output:</strong>
        <br />
        <code>
          {`Woof
Meow`}
        </code>
      </p>
      <p>
        <strong>Explanation:</strong>
        <br />
        In this example, we define a superclass <code>Animal</code> with a method <code>make_sound</code>. We then define two subclasses <code>Dog</code> and <code>Cat</code> that override the <code>make_sound</code> method with their own implementations. We create a list <code>animals</code> containing instances of both subclasses and iterate over it, calling the <code>make_sound</code> method on each instance.
      </p>
    </div>
            </section>
            <section ref={collapseSection8} id='section-collapse-8'>
            <div>
      <h2>Chapter 8: File Input and Output</h2>

      <h3>1. Reading Files</h3>
      <p>
        Reading files in Python is essential for processing external data. The <code>open()</code> function is used to open a file in various modes, such as read mode ('r').
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`with open("example.txt", "r") as file:
    content = file.read()
    print(content)`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> Content of the file "example.txt"
      </p>
      <p>
        <strong>Explanation:</strong> In this example, the file "example.txt" is opened in read mode ('r'). The content of the file is read using the <code>read()</code> method and stored in the variable <code>content</code>. Finally, the content is printed to the console.
      </p>

      <h3>2. Writing Files</h3>
      <p>
        Writing files allows Python programs to create or modify external files. The <code>open()</code> function is used to open a file in write mode ('w').
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`with open("output.txt", "w") as file:
    file.write("Hello, world!")`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Output:</strong> File "output.txt" containing the text "Hello, world!"
      </p>
      <p>
        <strong>Explanation:</strong> In this example, the file "output.txt" is opened in write mode ('w'). The text "Hello, world!" is written to the file using the <code>write()</code> method.
      </p>

      <h3>3. File Modes</h3>
      <p>
        File modes specify the purpose of opening a file. Common file modes include:
        <ul>
          <li><code>'r'</code>: Read mode</li>
          <li><code>'w'</code>: Write mode</li>
          <li><code>'a'</code>: Append mode</li>
          <li><code>'b'</code>: Binary mode</li>
        </ul>
      </p>

      <h3>4. File Handling Best Practices</h3>
      <p>
        Best practices for file handling include using context managers (<code>with</code> statement) to automatically close files after use, handling exceptions, and ensuring proper file permissions.
      </p>

      <h3>5. File Examples</h3>
      <p>
        Examples of file handling include reading from and writing to text files, parsing data from CSV files, processing log files, and working with structured data formats like JSON and XML.
      </p>
    </div>
            </section>
            <section ref={collapseSection9} id='section-collapse-9'>
            <div>
      <h2>Chapter 9: Exception Handling</h2>

      <h3>1. Introduction to Exceptions</h3>
      <p>
        Exceptions are errors that occur during the execution of a program. They can be caused by various reasons such as invalid input, file not found, or division by zero.
      </p>

      <h3>2. Try-Except Blocks</h3>
      <p>
        Try-except blocks are used to handle exceptions gracefully. Code that may raise an exception is placed inside the <code>try</code> block, and the code to handle the exception is placed inside the <code>except</code> block.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`try:
    num = int(input("Enter a number: "))
    result = 10 / num
    print("Result:", result)
except ZeroDivisionError:
    print("Cannot divide by zero")
except ValueError:
    print("Invalid input. Please enter a valid number.")`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Explanation:</strong> In this example, the code inside the <code>try</code> block attempts to perform division by the user-input number. If a <code>ZeroDivisionError</code> occurs (i.e., if the user inputs 0), the program prints "Cannot divide by zero." If a <code>ValueError</code> occurs (i.e., if the user inputs a non-integer value), the program prints "Invalid input. Please enter a valid number."
      </p>

      <h3>3. Raising Exceptions</h3>
      <p>
        Python allows programmers to raise exceptions manually using the <code>raise</code> keyword. This is useful for signaling errors or exceptional conditions in the program.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`x = -5
if x < 0:
    raise ValueError("Number must be positive")`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Explanation:</strong> In this example, if the value of <code>x</code> is negative, a <code>ValueError</code> is raised with the message "Number must be positive."
      </p>

      <h3>4. Exception Handling Best Practices</h3>
      <p>
        Best practices for exception handling include being specific about the types of exceptions to catch, handling exceptions at the appropriate level of abstraction, and providing informative error messages.
      </p>

      <h3>5. Exception Examples</h3>
      <p>
        Examples of exception handling include validating user input, handling file I/O errors, and gracefully recovering from unexpected errors in a program.
      </p>
    </div>
            </section>
            <section ref={collapseSection10} id='section-collapse-10'>
            <div>
      <h2>Chapter 10: Advanced Topics</h2>

      <h3>1. Regular Expressions</h3>
      <p>
        Regular expressions (regex) are powerful tools for pattern matching and string manipulation. They allow you to search for and manipulate text based on patterns.
      </p>
      <div>
        <h4>Example Code:</h4>
        <pre>
          <code>
            {`import re

pattern = r'dog'
text = 'The quick brown fox jumps over the lazy dog'

match = re.search(pattern, text)
if match:
    print('Match found:', match.group())
else:
    print('No match found')`}
          </code>
        </pre>
      </div>
      <p>
        <strong>Explanation:</strong> In this example, the regular expression pattern <code>r'dog'</code> is searched for in the text "The quick brown fox jumps over the lazy dog". The <code>search()</code> function returns a match object if the pattern is found, which contains information about the match.
      </p>

      <h3>2. Web Development</h3>
      <p>
        Python is widely used in web development for building web applications, APIs, and server-side scripting. Popular web frameworks like Django and Flask provide tools and libraries for developing web applications efficiently.
      </p>

      <h3>3. Data Analysis</h3>
      <p>
        Python is extensively used in data analysis and scientific computing due to its rich ecosystem of libraries such as NumPy, pandas, and Matplotlib. These libraries provide tools for data manipulation, analysis, visualization, and statistical modeling.
      </p>

      <h3>4. Machine Learning</h3>
      <p>
        Python is the leading language for machine learning and artificial intelligence. Libraries like scikit-learn, TensorFlow, and PyTorch offer powerful tools and algorithms for building and training machine learning models.
      </p>

      <h3>5. Advanced Topics Best Practices</h3>
      <p>
        Best practices for advanced topics include staying updated with the latest developments in the field, leveraging the community and resources available online, and practicing hands-on coding with real-world projects.
      </p>
    </div>
            </section>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}