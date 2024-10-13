import React, { useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink } from 'mdb-react-ui-kit';
import './C.css'
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
export default function Javatutorial() {
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
      <MDBCol md='4' style={{backgroundColor:'whitesmoke'}}>

          <MDBScrollspy container={collapseContainerRef}>
          <h1 className='langname'>Java</h1>

            <MDBScrollspyLink targetRef={collapseSection1}><h5 className='lang'>1.Introduction to Java Programming</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}><h5 className='lang'>2.Java Variables and Operators</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection3}><h5 className='lang'>3.Control Structures in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection4}><h5 className='lang'>4.Functions and Methods in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection5}><h5 className='lang'>5.Arrays and Multidimensional Arrays in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection6}><h5 className='lang'>6.Strings and String Methods in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection7}><h5 className='lang'>7.Classes and Objects in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection8}><h5 className='lang'>8.Inheritance and Polymorphism in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection9}><h5 className='lang'>9.Exception Handling in Java</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection10}><h5 className='lang'>10.File Input/Output and Networking in Java</h5></MDBScrollspyLink>
            <center> <Link to='/compiler'>
            <button className='compiler-button' style={{fontSize:'20px'}}>pratice code here</button></Link>
            </center>
          </MDBScrollspy>
        </MDBCol>
        <MDBCol md='8' className='h-100'>
          <div id='collapse' ref={collapseContainerRef} className='scrollspy-example h-100'>
            <section ref={collapseSection1} id='section-collapse-1'>
            <div>
      <h2>Chapter 1: Introduction to Java Programming</h2>

      <h3>1.1. What is Java?</h3>
      <h4>Definition and history of Java</h4>
      <p>Java is a high-level, object-oriented programming language developed by Sun Microsystems (now owned by Oracle Corporation).</p>

      <h4>Features and applications of Java</h4>
      <p>Java is known for its portability, security, and scalability, making it a popular choice for a wide range of applications, including web development, mobile apps, enterprise software, and more.</p>

      <h3>1.2. Setting Up the Java Environment</h3>
      <h4>Installing Java Development Kit (JDK)</h4>
      <p>To set up the Java environment, you need to install the Java Development Kit (JDK).</p>

      <h4>Configuring the environment variables</h4>
      <p>After installing the JDK, you need to configure the environment variables to run Java programs.</p>

      <h4>Writing and running your first Java program</h4>
      <p>Once the environment is set up, you can write and run your first Java program.</p>
      <pre><code>{`
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
      `}</code></pre>
      <p>This is a simple Java program that prints "Hello, World!" to the console.</p>

      <h3>1.3. Basic Syntax and Data Types</h3>
      <h4>Basic syntax of Java</h4>
      <p>Java has a specific syntax that you need to follow when writing code.</p>

      <h4>Data types in Java (primitive and non-primitive)</h4>
      <p>Java has a variety of data types, including primitive data types (e.g., int, double, boolean) and non-primitive data types (e.g., String, Array).</p>

      <h4>Variables and operators</h4>
      <p>You can declare variables and use operators to perform various operations in Java.</p>
      <pre><code>{`
public class BasicSyntax {
    public static void main(String[] args) {
        int x = 5;
        double y = 3.14;
        boolean z = true;
        System.out.println("x = " + x);
        System.out.println("y = " + y);
        System.out.println("z = " + z);
    }
}
      `}</code></pre>
      <p>This code demonstrates basic syntax and data types in Java.</p>

      <h3>1.4. Control Structures</h3>
      <h4>Conditional statements (if-else, switch)</h4>
      <p>Java provides conditional statements, such as if-else and switch, to control the flow of your program.</p>

      <h4>Loops (for, while, do-while)</h4>
      <p>Java also supports various loop structures, including for, while, and do-while loops, to repeatedly execute a block of code.</p>

      <h4>Jump statements (break, continue, return)</h4>
      <p>Java has jump statements, such as break, continue, and return, that allow you to control the flow of your program.</p>
      <pre><code>{`
public class ControlStructures {
    public static void main(String[] args) {
        int x = 5;
        if (x > 10) {
            System.out.println("x is greater than 10");
        } else {
            System.out.println("x is less than or equal to 10");
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates an if-else statement in Java.</p>

      <h3>1.5. Functions and Methods</h3>
      <h4>Functions and methods in Java</h4>
      <p>Java allows you to define functions and methods to encapsulate and reuse code.</p>

      <h4>Method overloading and overriding</h4>
      <p>Java supports method overloading and overriding, which allows you to define multiple methods with the same name but different parameters or implementations.</p>

      <h4>Function parameters and return types</h4>
      <p>Functions and methods in Java can have parameters and return types to pass data and return values.</p>
      <pre><code>{`
public class FunctionsAndMethods {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Result = " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
      `}</code></pre>
      <p>This code demonstrates a simple function in Java.</p>
    </div>
            </section>
            <section ref={collapseSection2} id='section-collapse-2'>
            <div>
      <h2>Chapter 2: Java Variables and Operators</h2>

      <h3>2.1. Variables and Data Types</h3>
      <h4>Declaring and initializing variables</h4>
      <p>In Java, you can declare and initialize variables using the `int`, `double`, `boolean`, and other data types.</p>
      <pre><code>{`
public class VariablesAndDataTypes {
    public static void main(String[] args) {
        int x = 5;
        double y = 3.14;
        boolean z = true;
        System.out.println("x = " + x);
        System.out.println("y = " + y);
        System.out.println("z = " + z);
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing variables in Java.</p>

      <h4>Data types in Java (primitive and non-primitive)</h4>
      <p>Java has a variety of data types, including primitive data types (e.g., int, double, boolean) and non-primitive data types (e.g., String, Array).</p>

      <h4>Variable scope and lifetime</h4>
      <p>Variables in Java have a scope and lifetime that determine when they are accessible and when they are garbage collected.</p>

      <h3>2.2. Operators in Java</h3>
      <h4>Arithmetic operators</h4>
      <p>Java supports various arithmetic operators, such as addition, subtraction, multiplication, and division, to perform calculations.</p>
      <pre><code>{`
public class Operators {
    public static void main(String[] args) {
        int x = 5;
        int y = 3;
        int result = x + y;
        System.out.println("Result = " + result);
    }
}
      `}</code></pre>
      <p>This code demonstrates arithmetic operators in Java.</p>
      <h4>Comparison operators</h4>
      <p>Java also supports comparison operators, such as `==`, `!=`, to compare values.</p>
      <h4>Logical operators</h4>
      <p>Java supports logical operators, such as `&&`, `||`, and ``, to combine conditions and evaluate expressions.</p>

      <h4>Assignment operators</h4>
      <p>Java supports assignment operators, such as `=`, `+=`, `-=`, `*=`, `/=`, etc., to assign values to variables.</p>
      <pre><code>{`
public class Operators {
    public static void main(String[] args) {
        int x = 5;
        x += 3;
        System.out.println("x = " + x);
    }
}
      `}</code></pre>
      <p>This code demonstrates assignment operators in Java.</p>

      <h3>2.3. Operator Precedence and Associativity</h3>
      <h4>Operator precedence</h4>
      <p>Java follows a specific order of operations when evaluating expressions, known as operator precedence.</p>

      <h4>Operator associativity</h4>
      <p>Operator associativity determines the order in which operators are evaluated when there are multiple operators with the same precedence.</p>
      <pre><code>{`
public class OperatorPrecedence {
    public static void main(String[] args) {
        int x = 5;
        int y = 3;
        int result = x + y * 2;
        System.out.println("Result = " + result);
    }
}
      `}</code></pre>
      <p>This code demonstrates operator precedence and associativity in Java.</p>

      <h3>2.4. Type Casting and Conversion</h3>
      <h4>Type casting</h4>
      <p>Java allows you to explicitly convert a value from one data type to another using type casting.</p>
      <pre><code>{`
public class TypeCasting {
    public static void main(String[] args) {
        int x = 5;
        double y = (double) x;
        System.out.println("y = " + y);
    }
}
      `}</code></pre>
      <p>This code demonstrates type casting in Java.</p>

      <h4>Type conversion</h4>
      <p>Java also supports implicit type conversion, where a value is automatically converted from one data type to another.</p>

      <h3>2.5. Variable Scope and Lifetime</h3>
      <h4>Variable scope</h4>
      <p>Variables in Java have a scope that determines when they are accessible.</p>

      <h4>Variable lifetime</h4>
      <p>Variables in Java have a lifetime that determines when they are garbage collected.</p>
      <pre><code>{`
public class VariableScope {
    public static void main(String[] args) {
        int x = 5;
        {
            int y = 3;
            System.out.println("y = " + y);
        }
        System.out.println("x = " + x);
    }
}
      `}</code></pre>
      <p>This code demonstrates variable scope and lifetime in Java.</p>
    </div>
            </section>
            <section ref={collapseSection3} id='section-collapse-3'>
            <div>
      <h2>Chapter 3: Control Structures in Java</h2>

      <h3>3.1. Conditional Statements</h3>
      <h4>if-else statements</h4>
      <p>Java supports if-else statements to control the flow of your program based on conditions.</p>
      <pre><code>{`
public class ConditionalStatements {
    public static void main(String[] args) {
        int x = 5;
        if (x > 10) {
            System.out.println("x is greater than 10");
        } else {
            System.out.println("x is less than or equal to 10");
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates an if-else statement in Java.</p>

      <h4>switch statements</h4>
      <p>Java also supports switch statements to handle multiple conditions.</p>
      <pre><code>{`
public class SwitchStatements {
    public static void main(String[] args) {
        int x = 2;
        switch (x) {
            case 1:
                System.out.println("x is 1");
                break;
            case 2:
                System.out.println("x is 2");
                break;
            default:
                System.out.println("x is neither 1 nor 2");
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates a switch statement in Java.</p>

      <h3>3.2. Loops</h3>
      <h4>for loops</h4>
      <p>Java supports for loops to repeatedly execute a block of code.</p>
      <pre><code>{`
public class ForLoops {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            System.out.println("i = " + i);
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates a for loop in Java.</p>

      <h4>while loops</h4>
      <p>Java also supports while loops to repeatedly execute a block of code.</p>
      <pre><code>{`
public class WhileLoops {
    public static void main(String[] args) {
        int i = 0;
        while (i < 5) {
            System.out.println("i = " + i);
            i++;
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates a while loop in Java.</p>

      <h4>do-while loops</h4>
      <p>Java supports do-while loops to repeatedly execute a block of code.</p>
      <pre><code>{`
public class DoWhileLoops {
    public static void main(String[] args) {
        int i = 0;
        do {
            System.out.println("i = " + i);
            i++;
        } while (i < 5);
    }
}
      `}</code></pre>
      <p>This code demonstrates a do-while loop in Java.</p>

      <h3>3.3. Jump Statements</h3>
      <h4>break statements</h4>
      <p>Java supports break statements to exit a loop or switch statement.</p>
      <pre><code>{`
public class JumpStatements {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            if (i == 3) {
                break;
            }
            System.out.println("i = " + i);
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates a break statement in Java.</p>

      <h4>continue statements</h4>
      <p>Java also supports continue statements to skip to the next iteration of a loop.</p>
      <pre><code>{`
public class JumpStatements {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            if (i == 3) {
                continue;
            }
            System.out.println("i = " + i);
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates a continue statement in Java.</p>

      <h3>3.4. Exception Handling</h3>
      <h4>try-catch blocks</h4>
      <p>Java supports try-catch blocks to handle exceptions and errors.</p>
      <pre><code>{`
public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates a try-catch block in Java.</p>

      <h4>throwing exceptions</h4>
      <p>Java also supports throwing exceptions to propagate errors up the call stack.</p>
      <pre><code>{`
public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
            throw new ArithmeticException("Error: / by zero");
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates throwing an exception in Java.</p>
    </div>
            </section>
            <section ref={collapseSection4} id='section-collapse-4'>
            <div>
      <h2>Chapter 4: Functions and Methods in Java</h2>

      <h3>4.1. Functions and Methods</h3>
      <h4>Declaring and initializing functions</h4>
      <p>Java supports functions and methods to define reusable blocks of code.</p>
      <pre><code>{`
public class FunctionsAndMethods {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Result: " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing a function in Java.</p>

      <h4>Method overloading</h4>
      <p>Java supports method overloading to define multiple methods with the same name but different parameters.</p>
      <pre><code>{`
public class MethodOverloading {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Result: " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }
}
      `}</code></pre>
      <p>This code demonstrates method overloading in Java.</p>

      <h3>4.2. Method Overriding</h3>
      <h4>Method overriding</h4>
      <p>Java supports method overriding to define a method that overrides a method in a parent class.</p>
      <pre><code>{`
public class MethodOverriding {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates method overriding in Java.</p>

      <h3>4.3. Function Parameters and Return Types</h3>
      <h4>Function parameters and return types</h4>
      <p>Java supports function parameters and return types to define the input and output of a function.</p>
      <pre><code>{`
public class FunctionParametersAndReturnTypes {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Result: " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
      `}</code></pre>
      <p>This code demonstrates function parameters and return types in Java.</p>

      <h3>4.4. Local Variables and Scope</h3>
      <h4>Local variables and scope</h4>
      <p>Java supports local variables and scope to define variables that are only accessible within a specific block of code.</p>
      <pre><code>{`
public class LocalVariablesAndScope {
    public static void main(String[] args) {
        int x = 5;
        {
            int y = 3;
            System.out.println("y: " + y);
        }
        System.out.println("x: " + x);
    }
}
      `}</code></pre>
      <p>This code demonstrates local variables and scope in Java.</p>

      <h3>4.5. Function Examples</h3>
      <h4>Example of functions</h4>
      <p>Here's an example of using functions in Java.</p>
      <pre><code>{`
public class FunctionExamples {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Result: " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using functions in Java.</p>
    </div>
            </section>
            <section ref={collapseSection5} id='section-collapse-5'>
            <div>
      <h2>Chapter 5: Arrays and Multidimensional Arrays in Java</h2>

      <h3>5.1. Arrays in Java</h3>
      <h4>Declaring and initializing arrays</h4>
      <p>Java supports arrays to store collections of elements of the same data type.</p>
      <pre><code>{`
public class Arrays {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        System.out.println("Array: " + Arrays.toString(array));
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing an array in Java.</p>

      <h4>Array operations (indexing, length, etc.)</h4>
      <p>Java provides various operations to work with arrays, such as indexing, getting the length, and more.</p>

      <h3>5.2. Multidimensional Arrays</h3>
      <h4>Declaring and initializing multidimensional arrays</h4>
      <p>Java also supports multidimensional arrays, which are arrays of arrays.</p>
      <pre><code>{`
public class MultidimensionalArrays {
    public static void main(String[] args) {
        int[][] array = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("Array: " + Arrays.deepToString(array));
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing a multidimensional array in Java.</p>

      <h4>Multidimensional array operations</h4>
      <p>You can perform various operations on multidimensional arrays, such as accessing elements, getting the length, and more.</p>

      <h3>5.3. Array Methods</h3>
      <h4>Array methods (length, clone, etc.)</h4>
      <p>Java provides various methods to work with arrays, such as getting the length, cloning the array, and more.</p>
      <pre><code>{`
public class ArrayMethods {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        System.out.println("Length: " + array.length);
    }
}
      `}</code></pre>
      <p>This code demonstrates using the `length` method on an array in Java.</p>

      <h3>5.4. Array Operations</h3>
      <h4>Array operations (indexing, length, etc.)</h4>
      <p>You can perform various operations on arrays, such as accessing elements, getting the length, and more.</p>
      <pre><code>{`
public class ArrayOperations {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        int sum = 0;
        for (int i = 0; i < array.length; i++) {
            sum += array[i];
        }
        System.out.println("Sum: " + sum);
    }
}
      `}</code></pre>
      <p>This code demonstrates performing operations on an array in Java.</p>

      <h3>5.5. Array Examples</h3>
      <h4>Example of arrays</h4>
      <p>Here's an example of using arrays in Java.</p>
      <pre><code>{`
public class ArrayExamples {
    public static void main(String[] args) {
        int[] array = {1, 2, 3, 4, 5};
        System.out.println("Array: " + Arrays.toString(array));
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using arrays in Java.</p>

      <h4>Example of multidimensional arrays</h4>
      <p>Here's an example of using multidimensional arrays in Java.</p>
      <pre><code>{`
public class MultidimensionalArrayExamples {
    public static void main(String[] args) {
        int[][] array = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("Array: " + Arrays.deepToString(array));
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using multidimensional arrays in Java.</p>
    </div>
            </section>
            <section ref={collapseSection6} id='section-collapse-6'>
            <div>
      <h2>Chapter 6: Strings and String Methods in Java</h2>

      <h3>6.1. Strings in Java</h3>
      <h4>Declaring and initializing strings</h4>
      <p>Java supports strings to store sequences of characters.</p>
      <pre><code>{`
public class Strings {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("String: " + str);
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing a string in Java.</p>

      <h4>String methods (length, substring, etc.)</h4>
      <p>Java provides various methods to work with strings, such as getting the length, substring, and more.</p>
      <pre><code>{`
public class StringMethods {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("Length: " + str.length());
        System.out.println("Substring: " + str.substring(7));
    }
}
      `}</code></pre>
      <p>This code demonstrates using string methods in Java.</p>

      <h3>6.2. String Concatenation</h3>
      <h4>String concatenation</h4>
      <p>Java supports string concatenation to combine strings.</p>
      <pre><code>{`
public class StringConcatenation {
    public static void main(String[] args) {
        String str1 = "Hello, ";
        String str2 = "World!";
        System.out.println("Concatenated String: " + str1 + str2);
    }
}
      `}</code></pre>
      <p>This code demonstrates string concatenation in Java.</p>

      <h3>6.3. String Comparison</h3>
      <h4>String comparison</h4>
      <p>Java supports string comparison to compare strings.</p>
      <pre><code>{`
public class StringComparison {
    public static void main(String[] args) {
        String str1 = "Hello";
        String str2 = "hello";
        System.out.println("Equal: " + str1.equals(str2));
    }
}
      `}</code></pre>
      <p>This code demonstrates string comparison in Java.</p>

      <h3>6.4. String Examples</h3>
      <h4>Example of strings</h4>
      <p>Here's an example of using strings in Java.</p>
      <pre><code>{`
public class StringExamples {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("String: " + str);
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using strings in Java.</p>

      <h4>Example of string methods</h4>
      <p>Here's an example of using string methods in Java.</p>
      <pre><code>{`
public class StringMethodsExamples {
    public static void main(String[] args) {
        String str = "Hello, World!";
        System.out.println("Length: " + str.length());
        System.out.println("Substring: " + str.substring(7));
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using string methods in Java.</p>
    </div>
            </section>
            <section ref={collapseSection7} id='section-collapse-7'>
            <div>
      <h2>Chapter 7: Classes and Objects in Java</h2>

      <h3>7.1. Classes and Objects</h3>
      <h4>Declaring and initializing classes</h4>
      <p>Java supports classes to define custom data types.</p>
      <pre><code>{`
public class ClassesAndObjects {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog {
    public void sound() {
        System.out.println("The dog barks");
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing a class in Java.</p>

      <h4>Object creation</h4>
      <p>Java supports object creation to instantiate objects from classes.</p>
      <pre><code>{`
public class ObjectCreation {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog {
    public void sound() {
        System.out.println("The dog barks");
    }
}
      `}</code></pre>
      <p>This code demonstrates object creation in Java.</p>

      <h3>7.2. Class Methods</h3>
      <h4>Class methods</h4>
      <p>Java supports class methods to define methods that can be called on objects of a class.</p>
      <pre><code>{`
public class ClassMethods {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog {
    public void sound() {
        System.out.println("The dog barks");
    }
}
      `}</code></pre>
      <p>This code demonstrates class methods in Java.</p>

      <h3>7.3. Object Methods</h3>
      <h4>Object methods</h4>
      <p>Java supports object methods to define methods that can be called on objects of a class.</p>
      <pre><code>{`
public class ObjectMethods {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog {
    public void sound() {
        System.out.println("The dog barks");
    }
}
      `}</code></pre>
      <p>This code demonstrates object methods in Java.</p>

      <h3>7.4. Inheritance</h3>
      <h4>Inheritance</h4>
      <p>Java supports inheritance to define a class that inherits properties and methods from another class.</p>
      <pre><code>{`
public class Inheritance {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates inheritance in Java.</p>

      <h3>7.5. Polymorphism</h3>
      <h4>Polymorphism</h4>
      <p>Java supports polymorphism to define methods that can be called on objects of different classes.</p>
      <pre><code>{`
public class Polymorphism {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.sound();
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates polymorphism in Java.</p>
    </div>
            </section>
            <section ref={collapseSection8} id='section-collapse-8'>
            <div>
      <h2>Chapter 8: Inheritance and Polymorphism in Java</h2>

      <h3>8.1. Inheritance</h3>
      <h4>Declaring and initializing classes</h4>
      <p>Java supports inheritance to define a class that inherits properties and methods from another class.</p>
      <pre><code>{`
public class Inheritance {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates declaring and initializing a class that inherits from another class in Java.</p>

      <h4>Method overriding</h4>
      <p>Java supports method overriding to define a method that overrides a method in a parent class.</p>
      <pre><code>{`
public class MethodOverriding {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates method overriding in Java.</p>

      <h3>8.2. Polymorphism</h3>
      <h4>Method overloading</h4>
      <p>Java supports method overloading to define multiple methods with the same name but different parameters.</p>
      <pre><code>{`
public class MethodOverloading {
    public static void main(String[] args) {
        int result = add(5, 3);
        System.out.println("Result: " + result);
    }

    public static int add(int a, int b) {
        return a + b;
    }

    public static double add(double a, double b) {
        return a + b;
    }
}
      `}</code></pre>
      <p>This code demonstrates method overloading in Java.</p>

      <h4>Method overriding</h4>
      <p>Java supports method overriding to define a method that overrides a method in a parent class.</p>
      <pre><code>{`
public class MethodOverriding {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
    }
}

class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates method overriding in Java.</p>

      <h3>8.3. Inheritance and Polymorphism Examples</h3>
      <h4>Example of inheritance and polymorphism</h4>
      <p>Here's an example of using inheritance and polymorphism in Java.</p>
      <pre><code>{`
public class InheritanceAndPolymorphismExamples {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.sound();
    }
}

class Dog extends Animal {
    public void sound() {
        System.out.println("The dog barks");
    }
}

class Animal {
    public void sound() {
        System.out.println("The animal makes a sound");
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using inheritance and polymorphism in Java.</p>
    </div>
            </section>
            <section ref={collapseSection9} id='section-collapse-9'>
            <div>
      <h2>Chapter 9: Exception Handling in Java</h2>

      <h3>9.1. Exception Handling</h3>
      <h4>Try-catch blocks</h4>
      <p>Java supports try-catch blocks to handle exceptions and errors.</p>
      <pre><code>{`
public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates using a try-catch block to handle an exception in Java.</p>

      <h4>Throwing exceptions</h4>
      <p>Java supports throwing exceptions to propagate errors up the call stack.</p>
      <pre><code>{`
public class ExceptionHandling {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
            throw new ArithmeticException("Error: / by zero");
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates throwing an exception in Java.</p>

      <h3>9.2. Exception Handling Examples</h3>
      <h4>Example of exception handling</h4>
      <p>Here's an example of using exception handling in Java.</p>
      <pre><code>{`
public class ExceptionHandlingExamples {
    public static void main(String[] args) {
        try {
            int x = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates an example of using exception handling in Java.</p>

      <h3>9.3. Exception Handling Best Practices</h3>
      <h4>Best practices for exception handling</h4>
      <p>Here are some best practices for exception handling in Java:</p>
      <ul>
        <li>Use try-catch blocks to handle exceptions and errors.</li>
        <li>Throw exceptions to propagate errors up the call stack.</li>
        <li>Use specific exception types to handle specific errors.</li>
        <li>Use catch blocks to handle exceptions and errors.</li>
      </ul>
    </div>
            </section>
            <section ref={collapseSection10} id='section-collapse-10'>
            <div>
      <h2>Chapter 10: File Input/Output and Networking in Java</h2>

      <h3>10.1. File Input/Output</h3>
      <h4>Reading and writing files</h4>
      <p>Java supports reading and writing files using the `File` and `FileReader` classes.</p>
      <pre><code>{`
public class FileInputOutput {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("example.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates reading and writing files in Java.</p>

      <h4>File input/output examples</h4>
      <p>Here are some examples of using file input/output in Java:</p>
      <ul>
        <li>Reading a file:</li>
        <pre><code>{`
public class FileInputOutput {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("example.txt")) {
            int character;
            while ((character = reader.read()) != -1) {
                System.out.print((char) character);
            }
        } catch (IOException e) {
            System.out.println("Error reading file: " + e.getMessage());
        }
    }
}
      `}</code></pre>
        <li>Writing a file:</li>
        <pre><code>{`
public class FileInputOutput {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("example.txt")) {
            writer.write("Hello, World!");
        } catch (IOException e) {
            System.out.println("Error writing file: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      </ul>

      <h3>10.2. Networking</h3>
      <h4>Networking basics</h4>
      <p>Java supports networking using the `Socket` and `ServerSocket` classes.</p>
      <pre><code>{`
public class Networking {
    public static void main(String[] args) {
        try (Socket socket = new Socket("www.example.com", 80)) {
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
            writer.println("GET / HTTP/1.1");
            writer.println("Host: www.example.com");
            writer.println();
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (UnknownHostException e) {
            System.out.println("Error connecting to host: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading from socket: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      <p>This code demonstrates basic networking in Java.</p>

      <h4>Networking examples</h4>
      <p>Here are some examples of using networking in Java:</p>
      <ul>
        <li>Connecting to a server:</li>
        <pre><code>{`
public class Networking {
    public static void main(String[] args) {
        try (Socket socket = new Socket("www.example.com", 80)) {
            // ...
        } catch (UnknownHostException e) {
            System.out.println("Error connecting to host: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading from socket: " + e.getMessage());
        }
    }
}
      `}</code></pre>
        <li>Sending and receiving data:</li>
        <pre><code>{`
public class Networking {
    public static void main(String[] args) {
        try (Socket socket = new Socket("www.example.com", 80)) {
            PrintWriter writer = new PrintWriter(socket.getOutputStream(), true);
            writer.println("GET / HTTP/1.1");
            writer.println("Host: www.example.com");
            writer.println();
            BufferedReader reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println(line);
            }
        } catch (UnknownHostException e) {
            System.out.println("Error connecting to host: " + e.getMessage());
        } catch (IOException e) {
            System.out.println("Error reading from socket: " + e.getMessage());
        }
    }
}
      `}</code></pre>
      </ul>
    </div>
            </section>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  );
}