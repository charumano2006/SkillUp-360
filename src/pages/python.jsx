import React from "react";
import { useNavigate } from "react-router-dom";
import "./python.css";

export default function PythonPage() {
  const nav = useNavigate();

  const topics = [
    {
      id: "variables",
      title: "1. VARIABLES & DATA TYPES",
      explanation: "Variables act as containers for storing data values. In Python, you don't need to declare the type explicitly because it is a dynamically typed language. This means the interpreter automatically detects whether a value is an integer, string, or float based on what you assign. Understanding data types is the foundation of all programming as it dictates how the computer processes your information. Proper naming conventions for variables also make your code more readable and maintainable.",
      logic: "Variable = value (Automatic Type Detection)",
      syntax: "a = 10\nb = 3.5\nname = \"Varsha\"",
      example: "a = 5\nprint(a) # Output: 5",
      practice: ["What is output? a=10, print(a)", "Which is string? A) 10 B) 'Hello'", "Declare 3 variables at once", "Store age and print it", "Identify type of 5.5"]
    },
    {
      id: "io",
      title: "2. INPUT & OUTPUT",
      explanation: "Input and Output operations allow your program to communicate with the user. The input() function reads a line from the console and always converts it into a string format, meaning you must typecast it if you need numbers. The print() function is used to display data to the standard output device. Mastery of these functions is essential for creating interactive command-line tools. You can also format your output using f-strings or commas to join different data types together for better presentation.",
      logic: "Input → Process → Output",
      syntax: "a = int(input(\"Enter number: \"))\nprint(a)",
      example: "name = input(\"Enter name: \")\nprint(\"Hello\", name)",
      practice: ["Take input and print", "Add 2 numbers via input", "Input an integer and print sum", "Take name and age as input", "Output formatting example"]
    },
    {
      id: "operators",
      title: "3. OPERATORS",
      explanation: "Operators are special symbols that carry out arithmetic or logical computations. Arithmetic operators like addition (+) and modulus (%) are used for mathematical calculations, while relational operators (>, <, ==) compare values. Logical operators (and, or, not) allow you to combine multiple conditions into a single decision. Understanding the order of operations (PEMDAS) is critical to ensure your calculations are accurate. These tools form the basic building blocks of any algorithm or complex logic.",
      logic: "Arithmetic (+ - * / %), Relational (> < ==), Logical (and, or)",
      syntax: "a = 10\nb = 5\nprint(a + b)",
      example: "print(10 % 3) # Output: 1",
      practice: ["Find remainder", "Compare a > b", "Logical AND example", "Division result", "Multiply two numbers"]
    },
    {
      id: "conditionals",
      title: "4. CONDITIONAL STATEMENTS",
      explanation: "Conditionals allow your program to branch out and perform different actions based on whether a condition is true or false. The if-else structure is the most common way to implement decision-making logic in Python. You can use 'elif' to check multiple conditions sequentially without nesting too many blocks. This is vital for tasks like validating user login, determining grades, or checking system states. Clear indentation is mandatory in Python to define which code belongs to which conditional block.",
      logic: "if condition → true block | else → false block",
      syntax: "if a > 5:\n    print(\"Greater\")\nelse:\n    print(\"Smaller\")",
      example: "a = 4\nif a % 2 == 0:\n    print(\"Even\")\nelse:\n    print(\"Odd\")",
      practice: ["Check even/odd", "Largest of 3 numbers", "Grade system logic", "Leap year check", "Voting eligibility (age >= 18)"]
    },
    {
      id: "loops",
      title: "5. LOOPS",
      explanation: "Loops are used to repeat a specific block of code multiple times, which is essential for working with collections of data. The 'for' loop is generally used when you know the number of iterations, such as iterating over a list or a range. The 'while' loop continues to execute as long as a specified condition remains true. Using loops correctly prevents code duplication and makes your programs more efficient. You can also use control statements like 'break' and 'continue' to manage how a loop behaves during execution.",
      logic: "for → fixed iterations | while → conditional repetition",
      syntax: "for i in range(1,6):\n    print(i)",
      example: "for i in range(3):\n    print(i) # Prints 0, 1, 2",
      practice: ["Print 1-10", "Multiplication table", "Factorial using loop", "Reverse loop (10-1)", "Sum of first N numbers"]
    },
    {
      id: "functions",
      title: "6. FUNCTIONS",
      explanation: "Functions are modular, reusable blocks of code that perform a specific task when called. By defining functions, you can organize your code into manageable pieces and avoid repeating the same logic. Functions can take inputs (parameters) and return outputs (results) back to the caller. This abstraction is a core principle of software engineering, allowing for easier testing and debugging. In Python, you define a function using the 'def' keyword followed by the function name and parentheses.",
      logic: "Input (Parameters) → Process → Return (Output)",
      syntax: "def add(a,b):\n    return a+b",
      example: "print(add(2,3)) # Output: 5",
      practice: ["Function to square a number", "Prime check function", "Even/odd return function", "Function to find largest number", "Factorial function"]
    },
    {
      id: "lists",
      title: "7. LISTS (ARRAYS)",
      explanation: "Lists are one of Python's most powerful built-in data types, used to store multiple items in a single variable. They are ordered, changeable (mutable), and allow duplicate values, making them extremely versatile. You can access elements using index numbers starting from zero, or use slicing to extract a sub-portion of the list. Python provides many built-in methods like append(), remove(), and sort() to manipulate list data easily. Lists are frequently used in data science and web development to manage collections of related information.",
      logic: "Ordered collection, Index starts from 0",
      syntax: "arr = [1,2,3]",
      example: "print(arr[1]) # Output: 2",
      practice: ["Reverse a list", "Sum of all list elements", "Add an element to list", "Sort list in ascending order", "Search for an element"]
    },
    {
      id: "strings",
      title: "8. STRINGS",
      explanation: "Strings are sequences of characters wrapped in single or double quotes. Python treats strings as arrays of bytes representing unicode characters, which allows for powerful operations like slicing and indexing. You can easily find the length of a string using len() or change its case using upper() and lower(). Strings are immutable, meaning once they are created, they cannot be changed directly; instead, operations return new strings. Mastering string manipulation is key for tasks like data parsing, user interface text, and web scraping.",
      logic: "Sequence of characters, supports slicing and len()",
      syntax: "name = \"Python\"",
      example: "print(len(name)) # Output: 6",
      practice: ["Reverse a string", "Palindrome check", "Count vowels in string", "Convert to Uppercase", "String slicing [0:3]"]
    }
  ];

  return (
    <div className="page">
      <div className="topbar">
        <h2>SkillUp360</h2>
        <div className="nav-btns">
          <button onClick={() => nav("/student-dashboard")}>Dashboard</button>
          <button onClick={() => nav("/technical")}>Languages</button>
        </div>
      </div>

      <div className="layout">
        <aside className="sidebar">
          <div className="sidebar-label">CURRICULUM INDEX</div>
          {topics.map((t, i) => (
            <a key={i} href={`#${t.id}`} className="sidebar-link">
              {i + 1}. {t.title.split('.')[1]}
            </a>
          ))}
        </aside>

        <main className="content-area">
          {topics.map((topic, index) => (
            <section key={index} id={topic.id} className="topic-section">
              <h1 className="topic-title">{topic.title}</h1>
              
              <div className="info-grid">
                <div className="info-box">
                  <h4>✅ Explanation</h4>
                  <p>{topic.explanation}</p>
                </div>
                <div className="info-box">
                  <h4>🧠 Logic</h4>
                  <p>{topic.logic}</p>
                </div>
              </div>

              <div className="code-container">
                <div className="code-box">
                  <h4>✏️ Syntax</h4>
                  <pre>{topic.syntax}</pre>
                </div>
                <div className="code-box">
                  <h4>🔍 Example</h4>
                  <pre>{topic.example}</pre>
                </div>
              </div>

              <div className="practice-area">
                <h4>🧠 Practice Questions</h4>
                <div className="practice-list">
                  {topic.practice.map((p, i) => (
                    <div key={i} className="practice-item">{p}</div>
                  ))}
                </div>
              </div>
              <div className="section-divider"></div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}