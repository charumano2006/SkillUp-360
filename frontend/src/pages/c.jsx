import React from "react";
import { useNavigate } from "react-router-dom";
import "./c.css";

export default function CPage() {
  const nav = useNavigate();

  const cTopics = [
    {
      id: "variables",
      title: "1. VARIABLES & DATA TYPES",
      explanation: "In C programming, variables are essentially named locations in the system memory used to store various types of data. C is a statically typed language, meaning you must explicitly declare the data type of a variable before it can be used in your code. This allows the compiler to allocate the exact amount of memory needed, such as 4 bytes for an integer or 1 byte for a character. Understanding these fundamental types—int, float, and char—is critical for memory management and efficient coding. Proper variable declaration ensures that your program handles data correctly without unexpected crashes.",
      logic: "datatype variable = value; (Manual Memory Allocation)",
      syntax: "int a = 10;\nfloat b = 3.5;\nchar ch = 'A';",
      example: "#include <stdio.h>\nint main(){\n    int a = 5;\n    printf(\"%d\", a);\n    return 0;\n}",
      practice: ["Output of int a=10; printf(\"%d\", a);", "Which is correct: A) int a=\"10\" B) int a=10", "Declare a char variable", "Identify data type: 5.5", "Declare 3 variables in one line"]
    },
    {
      id: "io",
      title: "2. INPUT & OUTPUT",
      explanation: "Input and Output in C are handled by the standard input-output library using the functions scanf() and printf(). The printf() function allows you to display formatted strings and variable values to the console using format specifiers like %d for integers or %f for floats. Conversely, scanf() reads user input from the keyboard, requiring the address-of operator (&) to store the value directly into a variable's memory location. These functions are the primary way a C program interacts with a user. Mastering format specifiers is essential for controlling exactly how data appears or is captured by your application.",
      logic: "scanf(\"%format\", &variable); → printf(\"%format\", variable);",
      syntax: "scanf(\"%d\", &a);\nprintf(\"%d\", a);",
      example: "#include <stdio.h>\nint main(){\n    int a;\n    printf(\"Enter: \");\n    scanf(\"%d\", &a);\n    printf(\"You entered: %d\", a);\n    return 0;\n}",
      practice: ["Take input and print it", "Add two numbers from user input", "Display a message using printf", "Input an integer and print its value", "Format output to show a float value"]
    },
    {
      id: "operators",
      title: "3. OPERATORS",
      explanation: "Operators in C are symbols that trigger specific mathematical or logical actions on operands. Arithmetic operators perform basic calculations like addition, subtraction, and the modulus operator, which finds the remainder of a division. Relational operators compare two values to determine equality or magnitude, returning true (1) or false (0). Logical operators like && (AND) and || (OR) allow you to chain multiple conditions together to form complex logical expressions. Understanding operator precedence is vital, as it determines which part of a calculation is solved first to ensure mathematical accuracy.",
      logic: "Arithmetic (+ - * / %), Relational (> < ==), Logical (&& ||)",
      syntax: "int a = 10, b = 5;\nprintf(\"%d\", a + b);",
      example: "printf(\"%d\", 10 % 3); // Output: 1",
      practice: ["Find the remainder of 10/3", "Compare if a > b", "Result of Logical AND (5>3 && 2>1)", "Multiply two integers", "Find result of 2+3*2"]
    },
    {
      id: "conditionals",
      title: "4. CONDITIONAL STATEMENTS",
      explanation: "Conditional statements provide the decision-making framework that allows a C program to execute different code blocks based on specific criteria. The 'if' statement evaluates a boolean expression, and if true, the code inside the braces runs; otherwise, the 'else' block provides an alternative path. You can also use 'else if' to check multiple conditions in a sequence. This control flow is the heart of programming logic, enabling tasks like user authentication or data validation. C uses non-zero values to represent 'true' and zero for 'false', which is a unique aspect of its conditional handling.",
      logic: "if(condition) { execute } else { execute }",
      syntax: "if(a > 5){\n    printf(\"Greater\");\n}else{\n    printf(\"Smaller\");\n}",
      example: "int a = 4;\nif(a % 2 == 0){\n    printf(\"Even\");\n}else{\n    printf(\"Odd\");\n}",
      practice: ["Check even/odd logic", "Find largest of 3 numbers", "Build a Grade system", "Leap year check", "Positive/Negative number check"]
    },
    {
      id: "loops",
      title: "5. LOOPS",
      explanation: "Loops are powerful constructs that allow you to repeat a block of code multiple times without rewriting it. The 'for' loop is most commonly used when the number of iterations is known beforehand, providing a compact way to handle initialization, condition checking, and incrementing. The 'while' loop is preferred when the loop should continue until a specific condition changes dynamically during execution. Loops are essential for processing arrays, performing repetitive calculations, or keeping a program running. Mastering loops is a key milestone in moving from basic syntax to writing functional, efficient algorithms.",
      logic: "for(init; cond; inc) | while(condition) { }",
      syntax: "for(int i=1; i<=5; i++){\n    printf(\"%d\", i);\n}",
      example: "for(int i=0; i<3; i++){\n    printf(\"%d\", i); // Prints 0 1 2\n}",
      practice: ["Print numbers 1-10", "Sum of first N numbers", "Generate multiplication table", "Factorial using a loop", "While loop to count digits"]
    },
    {
      id: "functions",
      title: "6. FUNCTIONS",
      explanation: "Functions in C are independent blocks of code designed to perform a specific task, allowing you to break a large program into smaller, manageable pieces. By using functions, you can reuse code across different parts of your application, which significantly improves maintainability and readability. Every C program must have a main() function, which serves as the starting point for execution. Functions can accept parameters as inputs and return a single value back to the caller using the 'return' keyword. This modular approach is a fundamental principle of structured programming in the C language.",
      logic: "ReturnType functionName(params) { return value; }",
      syntax: "int add(int a, int b){\n    return a + b;\n}",
      example: "#include <stdio.h>\nint f() { return 5; }\nint main() { printf(\"%d\", f()); return 0; }",
      practice: ["Function to add numbers", "Function to square a value", "Prime check function", "Factorial function", "Method call example"]
    },
    {
      id: "arrays",
      title: "7. ARRAYS",
      explanation: "An array in C is a collection of elements of the same data type stored in contiguous memory locations. Arrays allow you to store multiple values, such as a list of integers or grades, under a single variable name. Elements are accessed using an index number, which always begins at zero and goes up to size-1. Because C does not perform automatic bounds checking, you must be careful not to access an index outside the array's defined size. Arrays are the foundation for more complex data structures like matrices, strings, and lists in low-level programming.",
      logic: "Fixed size collection, Same type, Zero-indexed",
      syntax: "int arr[3] = {1, 2, 3};",
      example: "int arr[] = {10, 20, 30};\nprintf(\"%d\", arr[0]); // Output: 10",
      practice: ["Sum of array elements", "Find largest element", "Reverse an array", "Loop through an array", "Find length of an array"]
    },
    {
      id: "strings",
      title: "8. STRINGS",
      explanation: "Unlike many modern languages, C does not have a dedicated 'string' data type; instead, strings are handled as arrays of characters terminated by a special null character ('\\0'). This null terminator tells functions where the string ends in memory. You can manipulate strings using the standard library <string.h>, which provides functions like strlen() for length and strcmp() for comparison. Working with strings in C requires a good understanding of character arrays and memory, as you are managing the underlying bytes directly. This gives you high control but requires careful attention to avoid memory errors.",
      logic: "Character Array with null terminator (\\0)",
      syntax: "char name[] = \"C Language\";",
      example: "#include <string.h>\nprintf(\"%lu\", strlen(\"Hello\")); // Output: 5",
      practice: ["Reverse a string", "Check for palindrome", "Count vowels in string", "Compare two strings", "Copy a string"]
    }
  ];

  return (
    <div className="c-page-root">
      <nav className="c-navbar">
        <h2>SkillUp360 // C_MODULE</h2>
        <div className="c-nav-links">
          <button onClick={() => nav("/student-dashboard")}>Dashboard</button>
          <button onClick={() => nav("/technical")}>Languages</button>
        </div>
      </nav>

      <div className="c-layout">
        <aside className="c-sidebar">
          <div className="c-sidebar-tag">SYSTEM_CORE</div>
          {cTopics.map((t, i) => (
            <a key={i} href={`#${t.id}`} className="c-sidebar-item">
              {i + 1}. {t.title.split('.')[1]}
            </a>
          ))}
        </aside>

        <main className="c-scroll-container">
          {cTopics.map((topic, index) => (
            <section key={index} id={topic.id} className="c-topic-section">
              <h1 className="c-header">{topic.title}</h1>
              
              <div className="c-explanation-grid">
                <div className="c-info-card glass">
                  <h4>✅ Detailed Explanation</h4>
                  <p>{topic.explanation}</p>
                </div>
                <div className="c-info-card glass">
                  <h4>🧠 Logical Flow</h4>
                  <p>{topic.logic}</p>
                </div>
              </div>

              <div className="c-code-grid">
                <div className="c-code-item">
                  <div className="c-code-label">✏️ Syntax</div>
                  <pre>{topic.syntax}</pre>
                </div>
                <div className="c-code-item">
                  <div className="c-code-label">🔍 Live Example</div>
                  <pre>{topic.example}</pre>
                </div>
              </div>

              <div className="c-practice-box">
                <h4>🧠 Knowledge Check</h4>
                <div className="c-practice-items">
                  {topic.practice.map((p, i) => (
                    <div key={i} className="c-practice-card">{p}</div>
                  ))}
                </div>
              </div>
              <div className="c-spacer"></div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}