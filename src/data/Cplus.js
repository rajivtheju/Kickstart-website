import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink } from 'mdb-react-ui-kit';
import './C.css'
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
export default function Cplus() {
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
    <MDBContainer fluid className='h-100'>
      <MDBRow className='h-100'>
      <MDBCol md='4'  style={{backgroundColor:'whitesmoke'}}>
     
          <MDBScrollspy container={collapseContainerRef}>
          <h1 className='langname'>C++ </h1>
            <MDBScrollspyLink targetRef={collapseSection1}><h5 className='lang'>1.Introduction to C++</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}><h5 className='lang'>2.Basic Syntax and Data Types</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection3}><h5 className='lang'>3.Control Structures</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection4}><h5 className='lang'>4.Functions</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection5}><h5 className='lang'>5.Arrays and Vectors</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection6}><h5 className='lang'>6.Classes and Objects</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection7}><h5 className='lang'>7.Inheritance</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection8}><h5 className='lang'>8.Polymorphism</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection9}><h5 className='lang'>9.File Input/Output</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection10}><h5 className='lang'>10.Debugging and Error Handling</h5></MDBScrollspyLink>
            <center> <Link to='/compiler'>
            <button className='compiler-button' style={{fontSize:'20px'}}>pratice code here</button></Link>
            </center>
          </MDBScrollspy>
        </MDBCol>
        <MDBCol md='8' className='h-100'>
          <div id='collapse' ref={collapseContainerRef} className='scrollspy-example h-100'>
            <section ref={collapseSection1} id='section-collapse-1'>
            <div>
      <h1>Introduction to C++</h1>

      <h2>1.1. What is C++?</h2>
      <p>
        C++ is a high-level, compiled, and general-purpose programming language that was developed by Bjarne Stroustrup as an extension of the C programming language.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the basic syntax of C++ by printing "Hello, World!" to the console.
      </p>

      <h2>1.2. History of C++</h2>
      <p>
        C++ was first introduced in 1985 by Bjarne Stroustrup as an extension of the C programming language.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "C++ was first introduced in 1985 by Bjarne Stroustrup as an extension of the C programming language." << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the history of C++ by printing a message about its introduction in 1985.
      </p>

      <h2>1.3. Features of C++</h2>
      <p>
        C++ has several key features that make it a powerful and versatile programming language.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "C++ has several key features that make it a powerful and versatile programming language." << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the features of C++ by printing a message about its key features.
      </p>

      <h2>1.4. Advantages of C++</h2>
      <p>
        C++ has several advantages that make it a popular choice for many applications.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "C++ has several advantages that make it a popular choice for many applications." << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the advantages of C++ by printing a message about its popularity.
      </p>

      <h2>1.5. Setting Up a C++ Environment</h2>
      <p>
        To start programming in C++, you need to set up a development environment that includes a compiler, an editor or IDE, and any necessary libraries or frameworks.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "To start programming in C++, you need to set up a development environment that includes a compiler, an editor or IDE, and any necessary libraries or frameworks." << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the setup of a C++ environment by printing a message about the necessary components.
      </p>

      <h2>1.6. Basic Syntax of C++</h2>
      <p>
        The basic syntax of C++ includes the use of keywords, identifiers, and symbols to define the structure and organization of a program.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    std::cout << "The basic syntax of C++ includes the use of keywords, identifiers, and symbols to define the structure and organization of a program." << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the basic syntax of C++ by printing a message about the use of keywords, identifiers, and symbols.
      </p>
      </div>
            </section>
            <section ref={collapseSection2} id='section-collapse-2'>
            <div>
      <h1>Basic Syntax and Data Types</h1>

      <h2>2.1. Basic Syntax of C++</h2>
      <p>
        The basic syntax of C++ includes the use of keywords, identifiers, and symbols to define the structure and organization of a program.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    std::cout << "The value of x is: " << x << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>This code demonstrates the basic syntax of C++ by defining a variable `x` and printing its value.</p>

      <h2>2.2. Variables and Data Types</h2>
      <p>
        Variables are used to store and manipulate data in a program, and C++ supports a variety of data types including integers, floating-point numbers, characters, and more.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5; // integer variable
    double y = 3.14; // floating-point variable
    char z = 'a'; // character variable
    std::cout << "x: " << x << ", y: " << y << ", z: " << z << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of different data types in C++ by defining variables of type `int`, `double`, and `char`.
      </p>

      <h2>2.3. Operators in C++</h2>
      <p>
        Operators are used to perform operations on variables and values in a program, such as arithmetic, comparison, and logical operations.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    int y = 3;
    int sum = x + y;
    std::cout << "The sum of x and y is: " << sum << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of arithmetic operators in C++ by calculating the sum of two variables.
      </p>

      <h2>2.4. Control Structures</h2>
      <p>
        Control structures are used to control the flow of a program, such as conditional statements, loops, and jump statements.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    if (x > 10) {
        std::cout << "x is greater than 10" << std::endl;
    } else {
        std::cout << "x is less than or equal to 10" << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a conditional statement in C++ to control the flow of a program.
      </p>

      <h2>2.5. Functions in C++</h2>
      <p>
        Functions are reusable blocks of code that can be called multiple times from different parts of a program.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    std::cout << "The result is: " << result << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a function in C++ to perform a calculation and return a result.
      </p>
    </div>
            </section>
            <section ref={collapseSection3} id='section-collapse-3'>
            <div>
      <h1>Control Structures</h1>

      <h2>3.1. Conditional Statements</h2>
      <p>
        Conditional statements are used to execute different blocks of code based on conditions or expressions.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    if (x > 10) {
        std::cout << "x is greater than 10" << std::endl;
    } else if (x == 5) {
        std::cout << "x is equal to 5" << std::endl;
    } else {
        std::cout << "x is less than 5" << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a conditional statement in C++ to execute different blocks of code based on conditions.
      </p>

      <h2>3.2. Loops in C++</h2>
      <p>
        Loops are used to execute a block of code repeatedly for a specified number of times.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int i = 0;
    while (i < 5) {
        std::cout << "i is: " << i << std::endl;
        i++;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a while loop in C++ to execute a block of code repeatedly.
      </p>

      <h2>3.3. Jump Statements</h2>
      <p>
        Jump statements are used to transfer control to a different part of a program.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    if (x > 10) {
        std::cout << "x is greater than 10" << std::endl;
        return 0;
    } else {
        std::cout << "x is less than or equal to 10" << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a return statement in C++ to transfer control to the end of a function.
      </p>

      <h2>3.4. Switch Statements</h2>
      <p>
        Switch statements are used to execute different blocks of code based on the value of an expression.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int day = 2;
    switch (day) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday" << std::endl;
            break;
        default:
            std::cout << "Invalid day" << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a switch statement in C++ to execute different blocks of code based on the value of an expression.
      </p>

      <h2>3.5. Exception Handling</h2>
      <p>
        Exception handling is used to handle runtime errors and exceptions in a program.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <stdexcept>

int main() {
    try {
        int x = 5 / 0;
    } catch (std::runtime_error& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of exception handling in C++ to handle runtime errors and exceptions.
      </p>
    </div>
            </section>
            <section ref={collapseSection4} id='section-collapse-4'>
            <div>
      <h1>Functions</h1>

      <h2>4.1. Function Definitions</h2>
      <p>
        Function definitions specify the parameters and return type of a function.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    std::cout << "The result is: " << result << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of a function definition in C++ to specify the parameters and return type of a function.
      </p>

      <h2>4.2. Function Parameters</h2>
      <p>
        Function parameters are used to pass values to a function.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    std::cout << "The result is: " << result << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of function parameters in C++ to pass values to a function.
      </p>

      <h2>4.3. Function Return Types</h2>
      <p>
        Function return types specify the type of value that a function returns.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int add(int x, int y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    std::cout << "The result is: " << result << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of function return types in C++ to specify the type of value that a function returns.
      </p>

      <h2>4.4. Function Overloading</h2>
      <p>
        Function overloading allows multiple functions with the same name to be defined with different parameters.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int add(int x, int y) {
    return x + y;
}

double add(double x, double y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    double result2 = add(5.5, 3.3);
    std::cout << "The result is: " << result << std::endl;
    std::cout << "The result2 is: " << result2 << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of function overloading in C++ to define multiple functions with the same name but different parameters.
      </p>

      <h2>4.5. Recursion in C++</h2>
      <p>
        Recursion is a programming technique where a function calls itself repeatedly until a base case is reached.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int factorial(int n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

int main() {
    int result = factorial(5);
    std::cout << "The result is: " << result << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of recursion in C++ to calculate the factorial of a number.
      </p>
    </div>
            </section>
            <section ref={collapseSection5} id='section-collapse-5'>
            <div>
      <h1>Arrays and Vectors</h1>

      <h2>5.1. Arrays in C++</h2>
      <p>
        Arrays are used to store and manipulate collections of values.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int scores[] = {90, 80, 70, 60};
    for (int i = 0; i < 4; i++) {
        std::cout << "Score " << i + 1 << ": " << scores[i] << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of arrays in C++ to store and manipulate collections of values.
      </p>

      <h2>5.2. Vectors in C++</h2>
      <p>
        Vectors are used to store and manipulate dynamic collections of values.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <vector>

int main() {
    std::vector<int> scores = {90, 80, 70, 60};
    for (int i = 0; i < scores.size(); i++) {
        std::cout << "Score " << i + 1 << ": " << scores[i] << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of vectors in C++ to store and manipulate dynamic collections of values.
      </p>

      <h2>5.3. Multidimensional Arrays</h2>
      <p>
        Multidimensional arrays are used to store and manipulate collections of values with multiple dimensions.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int scores[2][3] = {{90, 80, 70}, {60, 50, 40}};
    for (int i = 0; i < 2; i++) {
        for (int j = 0; j < 3; j++) {
            std::cout << "Score " << i + 1 << ", " << j + 1 << ": " << scores[i][j] << std::endl;
        }
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of multidimensional arrays in C++ to store and manipulate collections of values with multiple dimensions.
      </p>

      <h2>5.4. Array Operations</h2>
      <p>
        Array operations are used to perform operations on arrays, such as sorting and searching.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <algorithm>

int main() {
    int scores[] = {90, 80, 70, 60};
    std::sort(scores, scores + 4);
    for (int i = 0; i < 4; i++) {
        std::cout << "Score " << i + 1 << ": " << scores[i] << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of array operations in C++ to perform operations on arrays, such as sorting and searching.
      </p>

      <h2>5.5. Vector Operations</h2>
      <p>
        Vector operations are used to perform operations on vectors, such as sorting and searching.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> scores = {90, 80, 70, 60};
    std::sort(scores.begin(), scores.end());
    for (int i = 0; i < scores.size(); i++) {
        std::cout << "Score " << i + 1 << ": " << scores[i] << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of vector operations in C++ to perform operations on vectors, such as sorting and searching.
      </p>
    </div>
            </section>
            <section ref={collapseSection6} id='section-collapse-6'>
            <div>
      <h1>Classes and Objects</h1>

      <h2>6.1. Classes in C++</h2>
      <p>
        Classes are used to define custom data types and their behavior.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Person {
public:
    std::string name;
    int age;

    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    void printInfo() {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }
};

int main() {
    Person person("John", 30);
    person.printInfo();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of classes in C++ to define custom data types and their behavior.
      </p>

      <h2>6.2. Objects in C++</h2>
      <p>
        Objects are instances of classes and are created using the class constructor.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Person {
public:
    std::string name;
    int age;

    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    void printInfo() {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }
};

int main() {
    Person person("John", 30);
    person.printInfo();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of objects in C++ to create instances of classes and access their properties and methods.
      </p>

      <h2>6.3. Constructors and Destructors</h2>
      <p>
        Constructors are used to initialize objects when they are created, and destructors are used to clean up resources when objects are destroyed.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Person {
public:
    std::string name;
    int age;

    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    ~Person() {
        std::cout << "Person destroyed" << std::endl;
    }

    void printInfo() {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }
};

int main() {
    Person person("John", 30);
    person.printInfo();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of constructors and destructors in C++ to initialize and clean up objects.
      </p>

      <h2>6.4. Member Functions</h2>
      <p>
        Member functions are used to define the behavior of classes and objects.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Person {
public:
    std::string name;
    int age;

    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    void printInfo() {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }

    void setAge(int a) {
        age = a;
    }
};

int main() {
    Person person("John", 30);
    person.printInfo();
    person.setAge(31);
    person.printInfo();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of member functions in C++ to define the behavior of classes and objects.
      </p>

      <h2>6.5. Encapsulation and Abstraction</h2>
      <p>
        Encapsulation is the concept of hiding the implementation details of a class or object from the outside world, and abstraction is the concept of showing only the necessary information to the outside world.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Person {
public:
    std::string name;
    int age;

    Person(std::string n, int a) {
        name = n;
        age = a;
    }

    void printInfo() {
        std::cout << "Name: " << name << ", Age: " << age << std::endl;
    }

    void setAge(int a) {
        age = a;
    }
};

int main() {
    Person person("John", 30);
    person.printInfo();
    person.setAge(31);
    person.printInfo();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of encapsulation and abstraction in C++ to hide implementation details and show only necessary information.
      </p>
    </div>
            </section>
            <section ref={collapseSection7} id='section-collapse-7'>
            <div>
      <h1>Inheritance</h1>

      <h2>7.1. Inheritance Basics</h2>
      <p>
        Inheritance is a mechanism in C++ where a class can inherit properties and behavior from another class.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.sound();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of inheritance in C++ to create a class `Dog` that inherits properties and behavior from another class `Animal`.
      </p>

      <h2>7.2. Single Inheritance</h2>
      <p>
        Single inheritance is a type of inheritance where a class inherits properties and behavior from only one base class.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.sound();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of single inheritance in C++ to create a class `Dog` that inherits properties and behavior from a base class `Animal`.
      </p>

      <h2>7.3. Multiple Inheritance</h2>
      <p>
        Multiple inheritance is a type of inheritance where a class inherits properties and behavior from multiple base classes.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Mammal {
public:
    void eat() {
        std::cout << "The mammal eats." << std::endl;
    }
};

class Dog : public Animal, public Mammal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }

    void eat() {
        std::cout << "The dog eats." << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.sound();
    myDog.eat();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of multiple inheritance in C++ to create a class `Dog` that inherits properties and behavior from multiple base classes `Animal` and `Mammal`.
      </p>

      <h2>7.4. Multilevel Inheritance</h2>
      <p>
        Multilevel inheritance is a type of inheritance where a class inherits properties and behavior from a base class, and the base class inherits properties and behavior from another base class.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Mammal : public Animal {
public:
    void eat() {
        std::cout << "The mammal eats." << std::endl;
    }
};

class Dog : public Mammal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }

    void eat() {
        std::cout << "The dog eats." << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.sound();
    myDog.eat();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of multilevel inheritance in C++ to create a class `Dog` that inherits properties and behavior from a base class `Mammal`, and the base class `Mammal` inherits properties and behavior from another base class `Animal`.
      </p>

      <h2>7.5. Hierarchical Inheritance</h2>
      <p>
        Hierarchical inheritance is a type of inheritance where a class inherits properties and behavior from a base class, and the base class inherits properties and behavior from another base class.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Mammal : public Animal {
public:
    void eat() {
        std::cout << "The mammal eats." << std::endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }

    void eat() {
        std::cout << "The dog eats." << std::endl;
    }
};

int main() {
    Dog myDog;
    myDog.sound();
    myDog.eat();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of hierarchical inheritance in C++ to create a class `Dog` that inherits properties and behavior from a base class `Animal`, and the base class `Animal` inherits properties and behavior from another base class `Mammal`.
      </p>
    </div>
            </section>
            <section ref={collapseSection8} id='section-collapse-8'>
            <div>
      <h1>Polymorphism</h1>

      <h2>8.1. Polymorphism Basics</h2>
      <p>
        Polymorphism is a mechanism in C++ where objects of different classes can be treated as objects of a common superclass.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    virtual void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }
};

int main() {
    Animal* animal = new Dog();
    animal->sound();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of polymorphism in C++ to treat objects of different classes as objects of a common superclass.
      </p>

      <h2>8.2. Function Overloading</h2>
      <p>
        Function overloading is a mechanism in C++ where multiple functions with the same name can be defined with different parameters.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int add(int x, int y) {
    return x + y;
}

double add(double x, double y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    double result2 = add(5.5, 3.3);
    std::cout << "The result is: " << result << std::endl;
    std::cout << "The result2 is: " << result2 << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of function overloading in C++ to define multiple functions with the same name but different parameters.
      </p>

      <h2>8.3. Operator Overloading</h2>
      <p>
        Operator overloading is a mechanism in C++ where operators can be redefined to perform operations on objects of a class.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Complex {
public:
    int real;
    int imag;

    Complex(int r, int i) {
        real = r;
        imag = i;
    }

    Complex operator+(Complex other) {
        Complex result;
        result.real = real + other.real;
        result.imag = imag + other.imag;
        return result;
    }
};

int main() {
    Complex c1(5, 3);
    Complex c2(2, 4);
    Complex result = c1 + c2;
    std::cout << "The result is: " << result.real << " + " << result.imag << "i" << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of operator overloading in C++ to redefine the `+` operator to perform operations on objects of a class `Complex`.
      </p>

      <h2>8.4. Compile-Time Polymorphism</h2>
      <p>
        Compile-time polymorphism is a mechanism in C++ where the type of an object is determined at compile-time.
      </p>
      <pre>
        <code>
          {`#include <iostream>

template <typename T>
T add(T x, T y) {
    return x + y;
}

int main() {
    int result = add(5, 3);
    double result2 = add(5.5, 3.3);
    std::cout << "The result is: " << result << std::endl;
    std::cout << "The result2 is: " << result2 << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of compile-time polymorphism in C++ to define a template function `add` that can be used with different types of arguments.
      </p>

      <h2>8.5. Runtime Polymorphism</h2>
      <p>
        Runtime polymorphism is a mechanism in C++ where the type of an object is determined at runtime.
      </p>
      <pre>
        <code>
          {`#include <iostream>

class Animal {
public:
    virtual void sound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Dog : public Animal {
public:
    void sound() {
        std::cout << "The dog barks." << std::endl;
    }
};

int main() {
    Animal* animal = new Dog();
    animal->sound();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of runtime polymorphism in C++ to treat objects of different classes as objects of a common superclass.
      </p>
    </div>
            </section>
            <section ref={collapseSection9} id='section-collapse-9'>
            <div>
      <h1>File Input/Output</h1>

      <h2>9.1. File Input/Output Basics</h2>
      <p>
        File input/output is a mechanism in C++ where data can be read from and written to files.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("output.txt");
    file << "Hello, World!" << std::endl;
    file.close();

    std::ifstream file2("output.txt");
    std::string line;
    while (std::getline(file2, line)) {
        std::cout << line << std::endl;
    }
    file2.close();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of file input/output in C++ to read from and write to files.
      </p>

      <h2>9.2. Reading from Files</h2>
      <p>
        Reading from files is a mechanism in C++ where data can be read from files.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <fstream>

int main() {
    std::ifstream file("input.txt");
    std::string line;
    while (std::getline(file, line)) {
        std::cout << line << std::endl;
    }
    file.close();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of reading from files in C++ to read data from a file.
      </p>

      <h2>9.3. Writing to Files</h2>
      <p>
        Writing to files is a mechanism in C++ where data can be written to files.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <fstream>

int main() {
    std::ofstream file("output.txt");
    file << "Hello, World!" << std::endl;
    file.close();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of writing to files in C++ to write data to a file.
      </p>

      <h2>9.4. Reading and Writing to Files</h2>
      <p>
        Reading and writing to files is a mechanism in C++ where data can be both read from and written to files.
      </p>
      <pre>
        <code>
          {`#include <iostream>
#include <fstream>

int main() {
    std::ifstream file("input.txt");
    std::string line;
    while (std::getline(file, line)) {
        std::cout << line << std::endl;
    }
    file.close();

    std::ofstream file2("output.txt");
    file2 << "Hello, World!" << std::endl;
    file2.close();
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of reading and writing to files in C++ to both read and write data to a file.
      </p>
    </div>
            </section>
            <section ref={collapseSection10} id='section-collapse-10'>
            <div>
      <h1>Debugging and Error Handling</h1>

      <h2>10.1. Debugging Basics</h2>
      <p>
        Debugging is a process in C++ where errors in a program are identified and fixed.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    int y = 0;
    int result = x / y;
    std::cout << "The result is: " << result << std::endl;
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates a simple debugging example where a division by zero error is identified and fixed.
      </p>

      <h2>10.2. Using Debuggers</h2>
      <p>
        Debuggers are tools in C++ that help identify and fix errors in a program.
      </p>
      <p>
        This topic is more about the use of debuggers rather than providing code examples.
      </p>

      <h2>10.3. Error Handling Basics</h2>
      <p>
        Error handling is a mechanism in C++ where errors in a program are handled and managed.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    int y = 0;
    try {
        int result = x / y;
        std::cout << "The result is: " << result << std::endl;
    } catch (std::runtime_error& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of error handling in C++ to catch and handle a division by zero error.
      </p>

      <h2>10.4. Try-Catch Blocks</h2>
      <p>
        Try-catch blocks are a mechanism in C++ where errors in a program are caught and handled.
      </p>
      <pre>
        <code>
          {`#include <iostream>

int main() {
    int x = 5;
    int y = 0;
    try {
        int result = x / y;
        std::cout << "The result is: " << result << std::endl;
    } catch (std::runtime_error& e) {
        std::cout << "Error: " << e.what() << std::endl;
    }
    return 0;
}`}
        </code>
      </pre>
      <p>
        This code demonstrates the use of try-catch blocks in C++ to catch and handle a division by zero error.
      </p>

      <h2>10.5. Error Messages and Codes</h2>
      <p>
        Error messages and codes are used in C++ to provide information about errors in a program.
      </p>
      <p>
        This topic is more about the use of error messages and codes rather than providing code examples.
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