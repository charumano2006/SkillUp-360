import React from "react";
import { useNavigate } from "react-router-dom";
import "./java.css";

export default function JavaPage() {
  const nav = useNavigate();

  const javaTopics = [
    {
      id: "variables",
      title: "1. VARIABLES & DATA TYPES",
      explanation: "Java is a strongly typed language, which means every variable must have a declared data type before it can be used. This strictness helps catch errors during compilation rather than at runtime, making your code more robust. Variables act as named storage locations in memory where data is kept and manipulated. You can use primitive types like 'int' for whole numbers or 'float' for decimals, and reference types like 'String' for text. Proper initialization of these variables is a fundamental requirement for any Java application to execute correctly.",
      logic: "datatype variable = value; (Strict Typing Required)",
      syntax: "int a = 10;\nfloat b = 3.5f;\nString name = \"Varsha\";",
      example: "class Main {\n  public static void main(String[] args) {\n    int a = 5;\n    System.out.println(a);\n  }\n}",
      practice: ["Output of int a=10; System.out.println(a);", "Which is correct: A) int a='10' B) int a=10", "Declare a String variable", "Identify the data type of 5.5", "Declare 3 variables in one line"]
    },
    {
      id: "io",
      title: "2. INPUT & OUTPUT",
      explanation: "Input and Output in Java are primarily handled through the System.out object for display and the Scanner class for user input. To use the Scanner, you must import the 'java.util' package and create a new instance linked to the standard input stream (System.in). This allows your program to become interactive by accepting data from the keyboard during execution. Methods like nextInt(), nextFloat(), and nextLine() are used to capture specific data types. Mastering these streams is the first step toward building complex user-driven software applications.",
      logic: "Scanner sc = new Scanner(System.in); → sc.nextDataType();",
      syntax: "import java.util.Scanner;\nScanner sc = new Scanner(System.in);\nint a = sc.nextInt();",
      example: "Scanner sc = new Scanner(System.in);\nint a = sc.nextInt();\nSystem.out.println(\"Value: \" + a);",
      practice: ["Take input and print it", "Add two numbers from user input", "Display your name using Scanner", "Input two values and print sum", "Format output with a message"]
    },
    {
      id: "operators",
      title: "3. OPERATORS",
      explanation: "Operators are the building blocks of Java logic, allowing you to perform calculations and comparisons between variables. Arithmetic operators handle basic math like addition and modulus, while relational operators like '==' and '!=' compare values to return boolean results. Logical operators such as '&&' (AND) and '||' (OR) are used to combine multiple boolean expressions. Java follows specific operator precedence rules, which dictate the order in which operations are performed in complex expressions. Understanding these symbols is essential for writing algorithms and managing program flow.",
      logic: "Arithmetic (+ - * / %), Relational (> < ==), Logical (&&, ||)",
      syntax: "int a = 10, b = 5;\nSystem.out.println(a + b);",
      example: "System.out.println(10 % 3); // Output: 1",
      practice: ["Find the remainder of 10/3", "Compare if a is greater than b", "Logical AND example result", "Multiply two integers", "Find result of 2+3*2"]
    },
    {
      id: "conditionals",
      title: "4. CONDITIONAL STATEMENTS",
      explanation: "Conditional statements like if, else if, and else provide the decision-making power in Java programs. They allow the execution of specific code blocks only when a certain boolean condition is met, enabling dynamic behavior. You can nest these conditions to create complex logic trees or use switch statements for multiple discrete values. This flow control is vital for tasks ranging from simple user validation to complex game mechanics. Accurate use of curly braces and indentation is crucial in Java to maintain readable and error-free conditional logic.",
      logic: "if(condition) { execute } else { execute }",
      syntax: "if(a > 5) {\n  System.out.println(\"Greater\");\n} else {\n  System.out.println(\"Smaller\");\n}",
      example: "int a = 4;\nif(a % 2 == 0) {\n  System.out.println(\"Even\");\n} else {\n  System.out.println(\"Odd\");\n}",
      practice: ["Check if a number is even or odd", "Find the largest of 3 numbers", "Implement a basic Grade system", "Check for Leap Year", "Voting eligibility (age >= 18)"]
    },
    {
      id: "loops",
      title: "5. LOOPS",
      explanation: "Loops are essential for executing a block of code repeatedly, which saves time and reduces redundancy in your source code. The 'for' loop is ideal when you know exactly how many times a block should run, while the 'while' loop is perfect for situations where the end condition depends on dynamic data. Java also offers the 'do-while' loop, which guarantees the code executes at least once. Efficient looping is a core skill for traversing data structures like arrays or processing large datasets. Using 'break' and 'continue' allows you to fine-tune loop behavior for better performance.",
      logic: "for(init; cond; incr) | while(condition) { }",
      syntax: "for(int i=1; i<=5; i++) {\n  System.out.println(i);\n}",
      example: "for(int i=0; i<3; i++) {\n  System.out.println(i); // Prints 0, 1, 2\n}",
      practice: ["Print numbers 1 to 10", "Sum of first N numbers", "Generate a multiplication table", "Factorial of a number using loop", "Reverse loop from 10 to 1"]
    },
    {
      id: "methods",
      title: "6. FUNCTIONS (METHODS)",
      explanation: "Methods in Java are blocks of code that perform specific tasks and are only executed when called. They promote the principle of 'DRY' (Don't Repeat Yourself) by allowing you to write logic once and reuse it throughout your application. A method can accept data through parameters and return a result using the 'return' keyword. In Java, all methods must be defined within a class. Static methods can be called without creating an instance of the class, which is useful for utility functions. Mastering method definition is key to building modular and scalable software.",
      logic: "ReturnType methodName(parameters) { return result; }",
      syntax: "static int add(int a, int b) {\n  return a + b;\n}",
      example: "class Main {\n  static int square(int x) { return x * x; }\n  public static void main(String[] args) {\n    System.out.println(square(5));\n  }\n}",
      practice: ["Method to add two numbers", "Create a square method", "Prime check method", "Factorial method", "Method to find largest number"]
    },
    {
      id: "arrays",
      title: "7. ARRAYS",
      explanation: "Arrays are objects in Java that store multiple variables of the same type in a contiguous block of memory. They are fixed in size, meaning once you declare an array's length, it cannot be changed during runtime. You access individual elements using a zero-based index system, which is standard across most programming languages. Arrays are highly efficient for storing collections of primitive data or objects. Java provides the 'length' property to find the size of an array, and you can use enhanced for-loops (for-each) to iterate through them easily and safely.",
      logic: "Fixed size, same data type, index starts at 0",
      syntax: "int arr[] = {1, 2, 3};",
      example: "int arr[] = {10, 20, 30};\nSystem.out.println(arr[0]); // Output: 10",
      practice: ["Sum of all elements in array", "Find the largest element", "Reverse an array", "Find the length of an array", "Sort an array"]
    },
    {
      id: "strings",
      title: "8. STRINGS",
      explanation: "In Java, a String is an object that represents a sequence of characters, and it is handled by the String class. Unlike many other languages, Java Strings are immutable, meaning their values cannot be changed after they are created. Any operation that appears to modify a string actually creates a new String object. The String class provides many useful methods for manipulation, such as length(), equals() for comparison, and substring() for extracting parts of text. Understanding how the String Pool works in memory is also a vital advanced concept for optimizing Java performance.",
      logic: "Sequence of characters (Immutable Objects)",
      syntax: "String name = \"Java\";",
      example: "String s = \"Hello\";\nSystem.out.println(s.length()); // Output: 5",
      practice: ["Reverse a string", "Check for Palindrome", "Count vowels in a string", "Concatenate two strings", "Convert string to Uppercase"]
    }
  ];

  return (
    <div className="java-page">
      <div className="java-topbar">
        <h2>SkillUp360 // JAVA_CORE</h2>
        <div className="nav-group">
          <button onClick={() => nav("/student-dashboard")}>Dashboard</button>
          <button onClick={() => nav("/technical")}>Languages</button>
        </div>
      </div>

      <div className="java-layout">
        <aside className="java-sidebar">
          <div className="sidebar-header">MODULE_PROGRESS</div>
          {javaTopics.map((t, i) => (
            <a key={i} href={`#${t.id}`} className="java-side-link">
              {i + 1}. {t.title.split('.')[1]}
            </a>
          ))}
        </aside>

        <main className="java-content">
          {javaTopics.map((topic, index) => (
            <section key={index} id={topic.id} className="java-section">
              <h1 className="java-topic-title">{topic.title}</h1>
              
              <div className="java-info-grid">
                <div className="java-card">
                  <h4>✅ Explanation</h4>
                  <p>{topic.explanation}</p>
                </div>
                <div className="java-card">
                  <h4>🧠 Logic</h4>
                  <code>{topic.logic}</code>
                </div>
              </div>

              <div className="java-code-grid">
                <div className="java-code-box">
                  <div className="code-label">✏️ Syntax</div>
                  <pre>{topic.syntax}</pre>
                </div>
                <div className="java-code-box">
                  <div className="code-label">🔍 Example</div>
                  <pre>{topic.example}</pre>
                </div>
              </div>

              <div className="java-practice">
                <h4>🧠 Practice Challenges</h4>
                <div className="practice-grid">
                  {topic.practice.map((p, i) => (
                    <div key={i} className="practice-card">{p}</div>
                  ))}
                </div>
              </div>
              <div className="java-divider"></div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}