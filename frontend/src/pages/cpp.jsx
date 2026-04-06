import React from "react";
import { useNavigate } from "react-router-dom";
import "./cpp.css";

export default function CPlusPlusPage() {
  const nav = useNavigate();

  const cppTopics = [
    {
      id: "variables",
      title: "1. VARIABLES & DATA TYPES",
      explanation: "C++ is a statically typed, compiled language that requires every variable to be associated with a specific data type before it can store any information. This explicit declaration allows the compiler to optimize memory usage and perform type-checking to prevent logic errors during execution. Common primitive types include 'int' for integers, 'float' or 'double' for decimals, and 'char' for single characters. Additionally, C++ provides a robust 'string' class within the standard library for handling text conveniently. Mastering these types is the first step toward understanding how C++ manages system resources and data structures.",
      logic: "datatype variable = value; (Statically Typed)",
      syntax: "int a = 10;\nfloat b = 3.5;\nchar ch = 'A';\nstring name = \"Varsha\";",
      example: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int a = 5;\n    cout << a;\n    return 0;\n}",
      practice: ["Output of int a=10; cout << a;", "Correct declaration: A) int a=\"10\" B) int a=10", "Identify the data type of 5.5", "Declare a string variable for a name", "Store an integer and print it"]
    },
    {
      id: "io",
      title: "2. INPUT & OUTPUT",
      explanation: "Input and Output operations in C++ are handled through streams, primarily using the 'iostream' header file. The 'cout' object (character output) is used with the insertion operator (<<) to display data on the screen, while the 'cin' object (character input) uses the extraction operator (>>) to capture user input from the keyboard. These streams provide a more intuitive and type-safe way to handle I/O compared to C's printf and scanf. You can also use 'endl' or '\\n' to manage line breaks within your output. Understanding how to bridge the gap between user input and program processing is essential for building interactive software.",
      logic: "cin >> variable; (Input) | cout << variable; (Output)",
      syntax: "cin >> a;\ncout << a;",
      example: "#include <iostream>\nusing namespace std;\n\nint main(){\n    int a;\n    cin >> a;\n    cout << \"Value: \" << a;\n    return 0;\n}",
      practice: ["Take input and print it", "Add two numbers from user input", "Display a greeting message", "Input an integer and print its sum", "Capture a user's name via cin"]
    },
    {
      id: "operators",
      title: "3. OPERATORS",
      explanation: "Operators in C++ are symbols that perform specific mathematical, relational, or logical operations on operands. Arithmetic operators (+, -, *, /, %) allow for basic calculations, while relational operators (==, !=, >, <) compare values to return a boolean result. Logical operators (&&, ||, !) are used to combine multiple conditions into a single decision-making expression. C++ also includes assignment and increment/decrement operators that help in writing concise code. Understanding the precedence and associativity of these operators is vital to ensure that complex mathematical expressions are evaluated in the correct order.",
      logic: "Arithmetic (+ - * / %), Relational (> < ==), Logical (&& ||)",
      syntax: "int a = 10, b = 5;\ncout << (a + b);",
      example: "cout << (10 % 3); // Output: 1",
      practice: ["Calculate the remainder of 10/3", "Compare if a > b", "Result of Logical AND (true && false)", "Multiply two numbers", "Evaluate 2+3*2 using precedence"]
    },
    {
      id: "conditionals",
      title: "4. CONDITIONAL STATEMENTS",
      explanation: "Conditional statements like if, else if, and else allow a C++ program to execute different segments of code based on whether a specific condition is true or false. This decision-making capability is what makes programs dynamic and responsive to different inputs or states. C++ also supports the switch statement, which is an efficient way to handle multiple discrete values for a single variable. Logical branching is used in almost every software application, from simple validation checks to complex algorithm flows. Proper use of braces and indentation ensures that the logic remains clear and maintainable as the program grows.",
      logic: "if (condition) { true_block } else { false_block }",
      syntax: "if(a > 5){\n    cout << \"Greater\";\n}else{\n    cout << \"Smaller\";\n}",
      example: "int a = 4;\nif(a % 2 == 0){\n    cout << \"Even\";\n}else{\n    cout << \"Odd\";\n}",
      practice: ["Check if a number is even or odd", "Find the largest of three numbers", "Determine a Grade based on score", "Positive/Negative number check", "Verify voting eligibility (age >= 18)"]
    },
    {
      id: "loops",
      title: "5. LOOPS",
      explanation: "Loops are fundamental constructs that enable the repetitive execution of a block of code, which is essential for processing collections of data or performing recurring calculations. The 'for' loop is generally used when the number of iterations is known in advance, while the 'while' loop is more suited for situations where the loop should continue until a certain condition is met. C++ also offers the 'do-while' loop, which guarantees that the code block runs at least once before the condition is checked. Mastering loops allows developers to write efficient algorithms that can handle large volumes of data with minimal code duplication.",
      logic: "for (init; cond; inc) | while (condition) { }",
      syntax: "for(int i=1; i<=5; i++){\n    cout << i;\n}",
      example: "for(int i=0; i<3; i++){\n    cout << i; // Prints 012\n}",
      practice: ["Print numbers from 1 to 10", "Sum of first N integers", "Print a multiplication table", "Factorial calculation using a loop", "Reverse loop from 10 down to 1"]
    },
    {
      id: "functions",
      title: "6. FUNCTIONS",
      explanation: "Functions in C++ are self-contained modules of code that perform a specific task and can be reused throughout a program. By breaking down a large application into smaller functions, you improve the code's readability, testability, and maintainability. Every C++ function must specify a return type, such as 'int' or 'void', and can optionally accept parameters as inputs. The main() function acts as the entry point for every C++ program. Using functions effectively follows the 'Don't Repeat Yourself' (DRY) principle, allowing you to organize logic into logical blocks that can be easily called whenever needed.",
      logic: "ReturnType functionName(params) { return value; }",
      syntax: "int add(int a, int b){\n    return a + b;\n}",
      example: "int add(int a, int b) { return a + b; }\nint main() { cout << add(2,3); return 0; }",
      practice: ["Function to add two numbers", "Function to calculate a square", "Check if a number is prime using a function", "Factorial function implementation", "Find largest number function"]
    },
    {
      id: "arrays",
      title: "7. ARRAYS",
      explanation: "An array in C++ is a data structure that stores a fixed-size, sequential collection of elements of the same type. Arrays are zero-indexed, meaning the first element is accessed at index 0 and the last at size-1. They are highly efficient for storing lists of related data, such as test scores or coordinates, in contiguous memory locations. While standard arrays have a fixed size, C++ also offers dynamic arrays through the 'vector' class in the Standard Template Library (STL) for more flexibility. Understanding how to iterate through and manipulate arrays is a core skill for any programmer dealing with collections of data.",
      logic: "Fixed-size, same type, contiguous memory",
      syntax: "int arr[3] = {1,2,3};",
      example: "int arr[] = {10, 20, 30};\ncout << arr[0]; // Output: 10",
      practice: ["Find the sum of all array elements", "Identify the largest element in an array", "Reverse an array's contents", "Find the length of an array", "Sort an array of integers"]
    },
    {
      id: "strings",
      title: "8. STRINGS",
      explanation: "In C++, strings are objects that represent a sequence of characters, primarily handled through the 'string' class defined in the standard library. Unlike character arrays in C, C++ strings are more flexible and come with a variety of built-in methods for manipulation, such as length(), substr(), and find(). You can easily concatenate strings using the '+' operator and compare them using standard relational operators like '=='. Strings are essential for any application that handles text-based data, from user names to complex document parsing. Learning how to efficiently manage and transform strings is a vital part of modern C++ development.",
      logic: "Sequence of characters (std::string object)",
      syntax: "string name = \"C++\";",
      example: "string name = \"Hello\";\ncout << name.length(); // Output: 5",
      practice: ["Reverse a string", "Check for a palindrome", "Count vowels in a string", "Concatenate two strings", "Find a specific character in a string"]
    }
  ];

  return (
    <div className="cpp-root">
      <div className="cpp-topbar">
        <h2>SkillUp360 // C++_ENGINE</h2>
        <div className="cpp-nav">
          <button onClick={() => nav("/student-dashboard")}>Dashboard</button>
          <button onClick={() => nav("/technical")}>Languages</button>
        </div>
      </div>

      <div className="cpp-main-layout">
        <aside className="cpp-sidebar">
          <div className="sidebar-hint">PROGRAM_STRUCTURE</div>
          {cppTopics.map((t, i) => (
            <a key={i} href={`#${t.id}`} className="cpp-side-link">
              {i + 1}. {t.title.split('.')[1]}
            </a>
          ))}
        </aside>

        <main className="cpp-content-scroll">
          {cppTopics.map((topic, index) => (
            <section key={index} id={topic.id} className="cpp-section">
              <h1 className="cpp-title">{topic.title}</h1>
              
              <div className="cpp-info-row">
                <div className="cpp-card glass-effect">
                  <h4>✅ Detailed Explanation</h4>
                  <p>{topic.explanation}</p>
                </div>
                <div className="cpp-card glass-effect">
                  <h4>🧠 Logical Reasoning</h4>
                  <code>{topic.logic}</code>
                </div>
              </div>

              <div className="cpp-code-row">
                <div className="cpp-code-box">
                  <div className="code-tag">✏️ Syntax</div>
                  <pre>{topic.syntax}</pre>
                </div>
                <div className="cpp-code-box">
                  <div className="code-tag">🔍 Live Example</div>
                  <pre>{topic.example}</pre>
                </div>
              </div>

              <div className="cpp-practice-section">
                <h4>🧠 Practice Challenge</h4>
                <div className="cpp-practice-grid">
                  {topic.practice.map((p, i) => (
                    <div key={i} className="cpp-practice-item">{p}</div>
                  ))}
                </div>
              </div>
              <div className="cpp-divider"></div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}