import React from "react";
import "./Logical.css"; 
import { useNavigate } from "react-router-dom";

const logicalContent = [
  { id: "number-series", title: "NUMBER SERIES", intro: "Number series involve sequences following specific mathematical patterns. Identifying whether the logic is arithmetic, geometric, or based on squares/cubes is the primary objective. These questions evaluate numerical observation and pattern recognition. Regular practice helps in spotting complex multi-step patterns quickly. It is a core part of placement and competitive exams globally. Understanding the difference between terms is the most common starting point. Recognizing prime numbers or Fibonacci sequences can save significant time. Speed and accuracy are the most rewarded traits in this section. Consistent solving builds the mental agility needed for advanced calculations.", rules: ["1. Find constant differences.", "2. Check multiplication/division.", "3. Identify square/cube roots.", "4. Look for alternating series.", "5. Combine multiple operations."], example: "2, 4, 8, 16, ? → 32", formula: ["Term = Previous Term ± Pattern"] },
  { id: "letter-series", title: "LETTER SERIES", intro: "Letter series follows alphabetical arrangements based on positions from A to Z. Mapping letters to numbers (A=1, Z=26) is the most effective strategy. This topic tests familiarity with the alphabet and forward/backward jumps. Patterns often involve skipping a fixed number of letters or shifting positions. Group-based letter strings require analyzing each character's relative shift separately. It is a fundamental part of reasoning for recruitment and aptitude tests. Understanding circular logic (Z to A) is vital for complex problems. Speed improves by memorizing the numerical values of the alphabet. It builds strong pattern matching and sequential thinking skills.", rules: ["1. Map letters to positions.", "2. Identify constant gaps.", "3. Check for vowel sequences.", "4. Analyze group-wise shifts.", "5. Look for reverse positions."], example: "A, D, G, ? → J", formula: ["Position = Current + Shift"] },
  { id: "coding-decoding", title: "CODING – DECODING", intro: "Coding involves transforming a word into a secret format based on a specific logical rule. Decoding is the reverse process of identifying that rule to translate other words. This topic evaluates logical consistency and character mapping ability. Rules can involve simple shifts, reversals, or substituting letters with numbers. It is highly relevant for roles requiring attention to detail and data security. Complex patterns may involve cross-positional shifts or symbol-based logic. Identifying the logic of the first pair is the key to solving the entire set. Practice helps in recognizing 'Mirror-image' coding where A becomes Z. It is one of the most scoring topics in reasoning.", rules: ["1. Compare word and code.", "2. Identify shift direction.", "3. Check for reverse letters.", "4. Look for number mapping.", "5. Analyze position swaps."], example: "CAT → DBU (+1)", formula: ["Code = Input + Logic Rule"] },
  { id: "blood-relations", title: "BLOOD RELATIONS", intro: "Blood relations require mapping family links based on descriptions and clues. This topic tests the ability to navigate generational gaps and social connections. Drawing a family tree is essential for visualizing complex multi-person links. Phrasing often includes indirect pointers like 'only son of my mother'. Identifying gender accurately is critical to arriving at the final answer. It is a staple in banking, civil services, and corporate aptitude tests. Breaking down long sentences into smaller parts prevents common errors. Step-by-step analysis ensures clarity in extended family scenarios. It develops strong deductive reasoning and mental visualization skills.", rules: ["1. Draw a family tree.", "2. Use symbols for gender.", "3. Map married couples.", "4. Track generational levels.", "5. Don't assume gender by name."], example: "Father's Sister → Aunt", formula: ["Relation = Generation + Gender"] },
  { id: "direction-sense", title: "DIRECTION SENSE", intro: "Direction sense tests spatial orientation and movement tracking on a compass. It involves navigating through North, South, East, and West based on relative turns. The final objective is usually finding the end direction or shortest distance. Using a basic compass diagram is the gold standard for solving these. Right and Left turns are relative to the direction currently being faced. Pythagoras theorem is frequently used for calculating diagonal distances. It is a practical topic used in navigation and spatial logic assessments. Careful tracking of every distance mentioned ensures a correct final position. Mastery requires a clear understanding of the Cartesian coordinate system.", rules: ["1. Draw a compass first.", "2. Track every turn taken.", "3. Use Pythagoras for distance.", "4. Right = Clockwise.", "5. Left = Anti-clockwise."], example: "3m N, 4m E → 5m from start", formula: ["Distance = √(H² + V²)"] },
  { id: "seating-arrangement", title: "SEATING ARRANGEMENT", intro: "Seating arrangement involves placing individuals in specific spots based on constraints. This can be circular, linear, or square-shaped arrangements. It tests the ability to manage multiple spatial variables at once. Identifying a 'fixed' starting point is the key to unlocking the puzzle. Perspective changes depending on whether people face the center or outward. High concentration is required to ensure no constraints are violated in the final map. It is a high-weightage topic in advanced reasoning and competitive exams. Drawing multiple possibilities helps resolve ambiguous clues efficiently. Consistent practice improves speed in identifying relative positions like 'third to left'.", rules: ["1. Identify the shape type.", "2. Determine facing direction.", "3. Place definite clues first.", "4. Track relative positions.", "5. Cross-check all conditions."], example: "A sits 2nd to the left of B.", formula: ["Total = n | CW = Left (Inside)"] },
  { id: "puzzle-test", title: "PUZZLE TEST", intro: "Puzzle tests are complex problems linking multiple attributes like names, colors, and days. They evaluate data organization, systematic thinking, and patience. Puzzles can range from floor-based layouts to complicated scheduling tasks. Using a grid or table format is the best way to handle the data. It is often the most time-consuming but scoring section in aptitude tests. Negative information is just as valuable as positive statements for elimination. Clues are jumbled, requiring a structured approach to link all pieces. Solving one puzzle often yields answers to a set of five questions. It demands a highly logical and organized method of working.", rules: ["1. Use a grid/table format.", "2. Fill in definite info.", "3. Mark negative constraints.", "4. Link multiple variables.", "5. Test different cases."], example: "A lives on floor 3. B is above A.", formula: ["Grid Method: Row x Column"] },
  { id: "syllogism", title: "SYLLOGISM", intro: "Syllogism is a logical argument where conclusions are drawn from two or more premises. It tests deductive reasoning regardless of whether the statements are factually true. Venn diagrams are the primary tool used to verify if a conclusion follows. Statements use quantifiers like 'All', 'Some', 'No', and 'Some Not'. A conclusion is valid only if it holds true in every possible visual representation. This topic is essential for evaluating logical consistency and inference skills. Understanding the 'either-or' logic is critical for overlapping possibilities. It is widely used in legal, analytical, and critical thinking assessments. Mastery requires understanding set intersections and subsets.", rules: ["1. Draw Venn diagrams.", "2. Check all possibilities.", "3. 'Some' = Intersection.", "4. 'All' = Subset.", "5. 'No' = Separate circles."], example: "All A are B. All B are C. → All A are C.", formula: ["Conclusion = Intersection Logic"] },
  { id: "statement-conclusion", title: "STATEMENT AND CONCLUSION", intro: "Statement and conclusion require judging if a result is 100% certain from a text. It tests direct inference skills without the interference of outside knowledge. The conclusion must follow logically and exclusively from the provided statement. This topic evaluates reading precision and logical deduction speed. Personal bias or general facts must be ignored while solving. It is a critical part of verbal reasoning and aptitude testing. Keywords like 'all', 'only', and 'never' change the validity of the results. If a conclusion is just advice or an assumption, it is generally invalid. Clear thinking is the key to differentiating between facts and interpretations.", rules: ["1. Use only provided text.", "2. Look for keywords (All/Only).", "3. Must be 100% certain.", "4. Ignore general knowledge.", "5. Conclusion ≠ Suggestion."], example: "S: It's raining. C: Clouds are present.", formula: ["Statement (T) → Result (T)"] },
  { id: "statement-assumption", title: "STATEMENT AND ASSUMPTION", intro: "An assumption is a hidden part of a statement that is taken for granted. In these questions, you must identify what the speaker assumed before speaking. It tests the ability to see the underlying logic and context of a claim. Assumptions are not stated but are necessary for the statement to hold weight. This topic is common in management and decision-making assessments. To solve, one must adopt the perspective of the speaker to find the intent. Assumptions are usually positive and support the validity of the statement. Differentiating an assumption from a conclusion is the primary difficulty. It requires a deep understanding of logical intent and communication.", rules: ["1. Assumption is implicit.", "2. Supports the statement.", "3. Must be taken for granted.", "4. Usually positive intent.", "5. Use the negation test."], example: "S: Buy this! A: Buying is possible.", formula: ["Fact + Assumption = Statement"] },
  { id: "cause-and-effect", title: "CAUSE AND EFFECT", intro: "Cause and effect questions analyze if one event logically triggered another. You must decide if Statement I is the cause and Statement II is the result. This topic tests analytical reasoning and your understanding of causal links. Sometimes both statements are effects of a common underlying cause. It requires a good sense of real-world logic and chronological sequencing. Identifying the reason vs. the outcome is the primary objective. It is a frequent topic in critical reasoning and situational analysis modules. Accuracy depends on recognizing direct dependencies versus coincidences. Consistent practice helps in recognizing complex logical dependencies in data.", rules: ["1. Identify the first event.", "2. Ask 'Why?' for the cause.", "3. Look for 'Therefore' links.", "4. Check for common causes.", "5. Differentiate from coincidence."], example: "I: Heavy rain. II: Floods occurred.", formula: ["Cause → Effect (Link)"] },
  { id: "odd-one-out", title: "ODD ONE OUT", intro: "Odd one out requires identifying the element in a group that is logically different. This topic evaluates classification skills and broad-based general knowledge. Items can be words, numbers, or symbols sharing a specific characteristic. Identifying the common link among the majority is the key to finding the outlier. Relationships can be based on category, function, or mathematical properties. It is one of the quickest sections to solve in most competitive exams. Precision depends on finding the most defining characteristic of the group. Sometimes multiple links exist, but the strongest category always wins. It tests lateral thinking and observation across diverse subjects.", rules: ["1. Find the majority property.", "2. Check categories (Metals/etc).", "3. Look for math patterns.", "4. Analyze vowel counts.", "5. Outlier must NOT fit at all."], example: "Apple, Mango, Carrot, Peach → Carrot", formula: ["Group [P, P, P] vs Outlier [~P]"] },
  { id: "analogy", title: "ANALOGY", intro: "Analogy tests the ability to find a relationship in one pair and apply it to another. Represented as A : B :: C : D, you must identify the missing term D. Relationships can be based on synonyms, functions, or part-to-whole links. This topic evaluates vocabulary, general awareness, and relative logic. Identifying the specific logic of the first pair is the primary requirement. It is a staple in both verbal and non-verbal reasoning sections. Accuracy depends on maintaining the same logical order (A to B, C to D). Numerical analogies often involve squares, cubes, or arithmetic operations. It requires quick pattern matching and analytical depth to solve.", rules: ["1. Define the first link.", "2. Apply it to the second.", "3. Maintain the logic order.", "4. Check closest fit options.", "5. Look for Tool/Action types."], example: "Pen : Write :: Knife : Cut", formula: ["Logic(A→B) = Logic(C→D)"] },
  { id: "data-sufficiency", title: "DATA SUFFICIENCY", intro: "Data sufficiency asks if the provided facts are enough to answer a question. You do not need the final answer, only to know if the statements suffice. This topic tests analytical judgment and the handling of incomplete data sets. It evaluates if Statement 1, Statement 2, or both together are required. It is a high-level topic common in GMAT, CAT, and professional exams. One must avoid full calculation to save time during the assessment. Reading constraints carefully prevents errors in judgment of sufficiency. It requires a strong grasp of both math and logic concepts simultaneously. Accuracy is built by testing each statement independently first.", rules: ["1. Test Statement 1 alone.", "2. Test Statement 2 alone.", "3. Test both combined.", "4. Don't find final answer.", "5. Check for unique answers."], example: "Is X even? 1: X=2. (Sufficient)", formula: ["Data + Logic = Unique Answer"] },
  { id: "ranking-order", title: "RANKING AND ORDER", intro: "Ranking and order involve determining a person's position in a sequence. It requires calculating positions from the top, bottom, left, or right ends. This topic evaluates mathematical logic and spatial sequencing skills. A common hurdle is the double-counting of a person during total calculations. Using standard arithmetic formulas like (L+R)-1 ensures speed and accuracy. It is a highly scoring topic in most job recruitment exams. Drawing a simple line diagram helps in visualizing the relative placements. Careful reading of 'between' vs 'from' wording is essential for correctness. Consistent practice ensures these logical calculations become automatic.", rules: ["1. Use the (L+R)-1 formula.", "2. Track position swaps.", "3. Don't double-count people.", "4. Draw a sequence line.", "5. Note the direction of rank."], example: "10th from L, 11th from R → 20 Total", formula: ["Total = (L + R) - 1"] }
];

function Logical() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="logical-master-container">
      <aside className="logical-sidebar">
        <div className="sidebar-brand">SKILLUP_LOGICAL</div>
        <nav className="sidebar-nav">
          {logicalContent.map((item) => (
            <div key={item.id} className="nav-link" onClick={() => scrollToSection(item.id)}>
              <span className="nav-bullet"></span>
              {item.title}
            </div>
          ))}
        </nav>
        
        {/* CORRECTLY LINKED NAV BUTTONS */}
        <div className="sidebar-bottom">
          <button className="nav-btn home-btn" onClick={() => navigate("/")}>
            <span className="btn-icon">⌂</span> HOME
          </button>
          <button className="nav-btn dash-btn" onClick={() => navigate("/student-dashboard")}>
            <span className="btn-icon">⊞</span> DASHBOARD
          </button>
        </div>
      </aside>

      <main className="logical-content-stream">
        <header className="page-header">
          <h1 className="header-title">LOGICAL REASONING CORE</h1>
          <div className="status-indicator">SYSTEM_ACTIVE // ANALYTICAL_MODE</div>
        </header>

        {logicalContent.map((section) => (
          <section key={section.id} id={section.id} className="content-section">
            <div className="hud-frame">
              <div className="frame-header">
                <span className="section-id">LOG_{section.id.substring(0, 3).toUpperCase()}</span>
                <h2 className="section-name">{section.title}</h2>
              </div>

              <div className="frame-body">
                <div className="body-block">
                  <h3 className="label">// LOGIC_INTRO</h3>
                  <p className="text">{section.intro}</p>
                </div>

                <div className="dual-grid">
                  <div className="grid-box">
                    <h3 className="label">// REASONING_RULES</h3>
                    <ul className="rules-list">
                      {section.rules.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                  <div className="grid-box">
                    <h3 className="label">// LOGIC_FORMULA</h3>
                    <div className="formula-container">
                      {section.formula.map((f, i) => (
                        <div key={i} className="formula-item">{f}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="body-block example">
                  <h3 className="label">// CASE_STUDY</h3>
                  <div className="example-text">{section.example}</div>
                </div>
              </div>
              <div className="frame-corner"></div>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

export default Logical;