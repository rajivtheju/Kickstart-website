import React, { Fragment, useRef } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBScrollspy, MDBScrollspyLink } from 'mdb-react-ui-kit';
import './C.css'
import NavbarComponent from '../components/Mainpage/Navbar';
import Navbar2 from './Navbar2';
import { Link } from 'react-router-dom';
export default function Ctutorial() {
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
    <Fragment>
      <div className='tutorials'>
      <Navbar2/>
    <MDBContainer fluid className='h-100' >
      <MDBRow className='h-100' >
      <MDBCol md='4'  style={{backgroundColor:'whitesmoke'}}>
          <MDBScrollspy container={collapseContainerRef}>
          <h1 className='langname'>Cprogramming</h1>
            <MDBScrollspyLink targetRef={collapseSection1}><h5 className='lang'>1.Basic Syntax and Structure</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection2}><h5 className='lang'>2.Input/Output Operations</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection3}><h5 className='lang'>3.Functions</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection4}><h5 className='lang'>4.Arrays and Strings</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection5}><h5 className='lang'>5.Loops</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection6}><h5 className='lang'>6.Conditional Statements</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection7}><h5 className='lang'>7.Switch Statements</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection8}><h5 className='lang'>8.Error Handling</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection9}><h5 className='lang'>9.Debugging</h5></MDBScrollspyLink>
            <MDBScrollspyLink targetRef={collapseSection10}><h5 className='lang'>10.Best Practices</h5></MDBScrollspyLink>
           <center> <Link to='/compiler'>
            <button className='compiler-button' style={{fontSize:'20px'}}>pratice code here</button></Link>
            </center>
          </MDBScrollspy>
         
        </MDBCol>
        <MDBCol md='8' className='h-100'>
          <div id='collapse' ref={collapseContainerRef} className='scrollspy-example h-100'>
            <section ref={collapseSection1} id='section-collapse-1'>
            <div>
      <h2>Basic Syntax and Structure</h2>
      <h3>1.1. Basic Syntax</h3>
      <p>
        Use <code>#include {'<'}stdio.h{'>'}</code> for input/output operations.
        Use <code>int main()</code> for the main function.
        Use <code>return 0;</code> to indicate successful execution.
      </p>
      <pre>
        <code>
          {`#include <stdio.h>

int main() {
    printf("Hello, World!");
    return 0;
}`}
        </code>
      </pre>
      <p>
        Output:
        <br />
        <code className='output'>Hello, World!</code>
      </p>

      <h3>1.2. Comments</h3>
      <p>
        Use // for single-line comments.
        Use {'/* */'} for multi-line comments.
      </p>
      <pre>
        <code>
          {`// This is a single-line comment

/*
This is a
multi-line
comment.
*/`}
        </code>
      </pre>

      <h3>1.3. Variables and Data Types</h3>
      <p>
        Use int, float, char, etc. for different data types.
        Use <code>int x = 5;</code> for declaring and initializing variables.
      </p>
      <pre>
        <code>
          {`int x = 5;
float y = 3.14;
char c = 'A';`}
        </code>
      </pre>

      <h3>1.4. Operators</h3>
      <p>
        Use +, -, *, /, % for basic arithmetic operations.
        Use ==, !=, >, {'<='}, etc. for comparison operators.
      </p>
      <pre>
        <code>
          {`int a = 10, b = 5;
int sum = a + b;
int diff = a - b;
int product = a * b;
int quotient = a / b;
int remainder = a % b;`}
        </code>
      </pre>

      <h3>1.5. Control Structures</h3>
      <p>
        Use if (condition) {'{ ... }'} for conditional statements.
        Use for (init; cond; inc) {'{ ... }'} for loops.
      </p>
      <pre>
        <code>
          {`int x = 10;
if (x > 5) {
    printf("x is greater than 5\\n");
}

for (int i = 0; i < 5; i++) {
    printf("Loop iteration: %d\\n", i);
}`}
        </code>
      </pre>
    </div>
            </section>
            <section ref={collapseSection2} id='section-collapse-2'>
            <div className="chapter-notes">
        <h2>Input/Output Operations</h2>

        <h3>2.1. printf() Function</h3>
        <p>
          Use <code>printf("Hello, World!");</code> for printing strings.
          Use <code>printf("%d", x);</code> for printing integers.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    int x = 5;
    printf("%d", x);
    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>Hello, World!</code>
          <br />
          <code>5</code>
        </p>

        <h3>2.2. scanf() Function</h3>
        <p>
          Use <code>scanf("%d", &amp;x);</code> for reading integers.
          Use <code>scanf("%s", str);</code> for reading strings.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    int num;
    printf("Enter a number: ");
    scanf("%d", &num);
    printf("You entered: %d\\n", num);
    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>
          (User input required)</code>
        </p>

        <h3>2.3. File Input/Output</h3>
        <p>
          Use <code>FILE *fp = fopen("file.txt", "r");</code> for reading files.
          Use <code>FILE *fp = fopen("file.txt", "w");</code> for writing files.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    FILE *fp;
    char ch;

    // Read from file
    fp = fopen("input.txt", "r");
    while ((ch = fgetc(fp)) != EOF) {
        printf("%c", ch);
    }
    fclose(fp);

    // Write to file
    fp = fopen("output.txt", "w");
    fprintf(fp, "Hello, World!");
    fclose(fp);

    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>
          (Depends on the contents of input.txt and output.txt)
          </code>
        </p>
      </div>
            </section>
            <section ref={collapseSection3} id='section-collapse-3'>
            <div className="chapter-notes">
        <h2>Functions</h2>

        <h3>3.1. Function Declaration</h3>
        <p>
          Use <code>int add(int a, int b);</code> for declaring a function.
        </p>

        <h3>3.2. Function Definition</h3>
        <p>
          Use <code>int add(int a, int b) {'{ return a + b; }'}</code> for defining a function.
        </p>

        <h3>3.3. Function Call</h3>
        <p>
          Use <code>int result = add(5, 3);</code> for calling a function.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

// Function declaration
int add(int a, int b);

int main() {
    // Function call
    int result = add(5, 3);
    printf("Result: %d\\n", result);
    return 0;
}

// Function definition
int add(int a, int b) {
    return a + b;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>Result: 8</code>
        </p>
      </div>
            </section>
            <section ref={collapseSection4} id='section-collapse-4'>
            <div className="chapter-notes">
        <h2>Arrays and Strings</h2>

        <h3>4.1. Array Declaration</h3>
        <p>
          Use <code>int arr[5];</code> for declaring an array.
        </p>

        <h3>4.2. Array Initialization</h3>
        <p>
          Use <code>int arr[] = {'{'}1, 2, 3, 4, 5{'}'};</code> for initializing an array.
        </p>

        <h3>4.3. String Operations</h3>
        <p>
          Use <code>char str[] = "Hello";</code> for declaring a string.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    // Array declaration
    int arr[5];

    // Array initialization
    int arr[] = {1, 2, 3, 4, 5};

    // String declaration
    char str[] = "Hello";

    printf("Array Element: %d\\n", arr[0]);
    printf("String: %s\\n", str);
    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>Array Element: 1</code>
          <br />
          <code className='output'>String: Hello</code>
        </p>
      </div>
            </section>
            <section ref={collapseSection5} id='section-collapse-5'>
            <div className="chapter-notes">
        <h2>Loops</h2>

        <h3>5.1. for Loop</h3>
        <p>
          Use <code>for (int i = 0; i {'<'} 5; i++) {'{ ... }'}</code> for a for loop.
        </p>

        <h3>5.2. while Loop</h3>
        <p>
          Use <code>int i = 0; while (i {'<'} 5) {'{ ... }'}</code> for a while loop.
        </p>

        <h3>5.3. do-while Loop</h3>
        <p>
          Use <code>int i = 0; do {'{ ... }'} while (i {'<'} 5);</code> for a do-while loop.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    // for loop
    for (int i = 0; i < 5; i++) {
        printf("for Loop iteration: %d\\n", i);
    }

    // while loop
    int j = 0;
    while (j < 5) {
        printf("while Loop iteration: %d\\n", j);
        j++;
    }

    // do-while loop
    int k = 0;
    do {
        printf("do-while Loop iteration: %d\\n", k);
        k++;
    } while (k < 5);

    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>for Loop iteration: 0
          <br />
          for Loop iteration: 1
          <br />
          for Loop iteration: 2
          <br />
          for Loop iteration: 3
          <br />
          for Loop iteration: 4
          <br />
         while Loop iteration: 0
          <br />
          while Loop iteration: 1
          <br />
         while Loop iteration: 2
          <br />
          while Loop iteration: 3
          <br />
          while Loop iteration: 4
          <br />
         do-while Loop iteration: 0
          <br />
          do-while Loop iteration: 1
          <br />
          do-while Loop iteration: 2
          <br />
          do-while Loop iteration: 3
          <br />
          do-while Loop iteration: 4
          </code>
        </p>
      </div>
            </section>
            <section ref={collapseSection6} id='section-collapse-6'>
            <div className="chapter-notes">
        <h2>Conditional Statements</h2>

        <h3>6.1. if-else Statement</h3>
        <p>
          Use <code>if (condition) {'{ ... }'} else {'{ ... }'}</code> for an if-else statement.
        </p>

        <h3>6.2. Nested if-else</h3>
        <p>
          Use <code>if (condition) {'{ if (condition) { ... } }'}</code> for nested if-else statements.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    int x = 10;

    // if-else statement
    if (x > 5) {
        printf("x is greater than 5\\n");
    } else {
        printf("x is less than or equal to 5\\n");
    }

    // Nested if-else
    if (x > 5) {
        if (x < 15) {
            printf("x is between 5 and 15\\n");
        }
    }

    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>x is greater than 5
          <br />
          x is between 5 and 15</code>
        </p>
      </div>
            </section>
            <section ref={collapseSection7} id='section-collapse-7'>
            <div className="chapter-notes">
        <h2>Switch Statements</h2>

        <h3>7.1. Switch Statement</h3>
        <p>
          Use <code>switch (expression) {'{ case value: ... break; ... default: ... }'}</code> for a switch statement.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        default:
            printf("Invalid day\\n");
            break;
    }

    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>Wednesday</code>
        </p>
      </div>
            </section>
            <section ref={collapseSection8} id='section-collapse-8'>
            <div className="chapter-notes">
        <h2>Error Handling</h2>

        <h3>8.1. Error Messages</h3>
        <p>
          Use <code>printf("Error: %s\\n", strerror(errno));</code> for printing error messages.
        </p>

        <h3>8.2. Error Codes</h3>
        <p>
          Use <code>if (errno == EACCES) {'{ ... }'}</code> for checking error codes.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>
#include <errno.h>
#include <string.h>

int main() {
    FILE *fp = fopen("non-existent-file.txt", "r");
    if (fp == NULL) {
        if (errno == ENOENT) {
            printf("File not found\\n");
        } else {
            printf("Error occurred\\n");
        }
        return 1;
    }
    fclose(fp);
    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>File not found</code>
        </p>
      </div>
            </section>
            <section ref={collapseSection9} id='section-collapse-9'>
            <div className="chapter-notes">
        <h2>Debugging</h2>

        <h3>9.1. Debugging Tools</h3>
        <p>
          Use <code>gcc -g program.c -o program</code> for compiling with debugging information.
        </p>
        <p>
          Use <code>gdb program</code> for debugging with GDB.
        </p>

        <h3>9.2. Print Statements</h3>
        <p>
          Use <code>printf("Debug: %d\\n", x);</code> for printing debug messages.
        </p>
        <pre>
          <code>
            {`#include <stdio.h>

int main() {
    int x = 10, y = 0;
    int result = x / y;
    printf("Result: %d\\n", result);
    return 0;
}`}
          </code>
        </pre>
        <p>
          Output:
          <br />
          <code className='output'>Result: -2147483648</code> 
        </p>
      </div>
            </section>
            <section ref={collapseSection10} id='section-collapse-10'>
            <div className="chapter-notes">
        <h2>Best Practices</h2>

        <h3>10.1. Code Organization</h3>
        <p>
          Use separate files for different functions or modules.
        </p>

        <h3>10.2. Code Readability</h3>
        <p>
          Use consistent indentation and spacing.
        </p>
        <p>
          Use meaningful variable names and comments.
        </p>
        <pre>
          <code>
            {`// This function calculates the area of a rectangle
float calculateRectangleArea(float length, float width) {
    // Multiply the length and width to get the area
    float area = length * width;
    return area;
}`}
          </code>
        </pre>
      </div>
            </section>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
    </Fragment>
  );
}