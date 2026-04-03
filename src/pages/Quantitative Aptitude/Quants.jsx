import React from "react";
import "./Quants.css"; 
import { useNavigate } from "react-router-dom";

const quantsContent = [
  { id: "number-system", title: "NUMBER SYSTEM", intro: "Number system is the foundation of mathematics, dealing with types of numbers like Prime, Composite, Rational, and Irrational. It includes concepts like divisibility rules, unit digits, and remainders. Understanding the classification of numbers helps in solving complex simplification problems. Mastery of this topic is essential for data interpretation and numerical logic. It is the most frequently tested area in technical aptitude rounds.", rules: ["1. Memorize divisibility rules (2-11).", "2. Learn unit digit cycles.", "3. Understand Remainder Theorem.", "4. Know Prime Number properties.", "5. Practice surds and indices."], example: "Find unit digit of 23^45 → 3^1 = 3", formula: ["Sum of first n natural numbers = n(n+1)/2"] },
  { id: "lcm-hcf", title: "LCM AND HCF", intro: "LCM (Least Common Multiple) and HCF (Highest Common Factor) are used to solve problems related to bells ringing, traffic lights, and dividing items into equal groups. It relates to the product of two numbers and their factors. This concept is vital for simplifying fractions and solving time-based puzzles.", rules: ["1. Product of 2 numbers = LCM × HCF.", "2. HCF of fractions = HCF(Num)/LCM(Den).", "3. LCM of fractions = LCM(Num)/HCF(Den)."], example: "LCM of 12, 15 is 60; HCF is 3.", formula: ["n1 × n2 = LCM × HCF"] },
  { id: "simplification", title: "SIMPLIFICATION", intro: "Simplification tests your calculation speed and accuracy using the BODMAS/VBNODMAS rule. It involves fractions, decimals, and square roots. Approximation is used when options are far apart, helping save time in competitive exams.", rules: ["1. Follow BODMAS order strictly.", "2. Use Vedic math for fast squares.", "3. Learn reciprocals up to 1/20.", "4. Round off for approximation."], example: "125% of 80 + 20 = 100 + 20 = 120", formula: ["B-O-D-M-A-S (Bracket-Of-Div-Mult-Add-Sub)"] },
  { id: "percentage", title: "PERCENTAGE", intro: "Percentage is a way of expressing numbers as a fraction of 100. It is the core of Profit/Loss, SI/CI, and Data Interpretation. Quick conversion between percentages and fractions is the key to solving problems in seconds.", rules: ["1. Learn Fraction to % table.", "2. x% of y = y% of x.", "3. Successive % change formula.", "4. Identify the base value correctly."], example: "20% increase on 500 → 600", formula: ["% Change = (Diff / Original) × 100"] },
  { id: "profit-loss", title: "PROFIT AND LOSS", intro: "This topic deals with the financial aspects of trade, including Cost Price (CP), Selling Price (SP), and Marked Price (MP). It covers discounts, dishonest dealers, and successive price changes. Understanding the relationship between margin and markup is crucial.", rules: ["1. Profit % is always on CP.", "2. Discount is always on MP.", "3. SP = CP × (100 + P)/100.", "4. Effective discount = a+b - (ab/100)."], example: "CP=100, SP=120 → 20% Profit", formula: ["Profit = SP - CP | Loss = CP - SP"] },
  { id: "ratio-proportion", title: "RATIO AND PROPORTION", intro: "Ratio is a comparison of two quantities by division. Proportion indicates that two ratios are equal. This concept is used in partnership, ages, and mixture problems to distribute quantities effectively.", rules: ["1. Duplicate and Triplicate ratios.", "2. Mean Proportional = √ab.", "3. Third Proportional = b²/a.", "4. Comparison of ratios by cross-mult."], example: "A:B = 2:3, B:C = 4:5 → A:B:C = 8:12:15", formula: ["a/b = c/d → ad = bc"] },
  { id: "average", title: "AVERAGE", intro: "Average or Mean is the sum of observations divided by the number of observations. It includes weighted averages and problems related to age groups or runs scored in cricket. Speed depends on using the 'deviation method'.", rules: ["1. Sum = Average × Count.", "2. New Avg after adding/removing.", "3. Average speed = 2xy/(x+y).", "4. Arithmetic Progression averages."], example: "Avg of 10, 20, 30 is 20.", formula: ["Avg = Sum of Terms / Total Terms"] },
  { id: "simple-interest", title: "SIMPLE INTEREST", intro: "Simple Interest (SI) is calculated only on the principal amount for the entire duration. It is a linear growth model. This is commonly used in basic banking and installment-based aptitude questions.", rules: ["1. SI remains constant every year.", "2. Total Amount = P + SI.", "3. Rate is % per annum."], example: "P=1000, R=10%, T=2yrs → SI=200", formula: ["SI = (P × R × T) / 100"] },
  { id: "compound-interest", title: "COMPOUND INTEREST", intro: "Compound Interest (CI) is interest calculated on the principal plus the accumulated interest of previous periods. It represents exponential growth. Questions often involve the difference between CI and SI.", rules: ["1. Interest on Interest.", "2. Half-yearly/Quarterly compounding.", "3. Difference for 2 yrs = P(R/100)²."], example: "P=1000, R=10%, T=2yrs → CI=210", formula: ["A = P(1 + R/100)^T"] },
  { id: "time-and-work", title: "TIME AND WORK", intro: "This topic explores the relationship between the number of people, the time taken, and the efficiency of work. It includes concepts like individual work, group work, and 'man-days'. Efficiency is inversely proportional to time.", rules: ["1. Use LCM for total work.", "2. Efficiency = Work / Time.", "3. Work done = Rate × Time.", "4. Wages are based on work done."], example: "A in 10d, B in 15d → Together in 6d", formula: ["M1D1H1/W1 = M2D2H2/W2"] },
  { id: "pipes-cisterns", title: "PIPES AND CISTERNS", intro: "Similar to Time and Work, but includes negative work (leakage or outlet pipes). Inlet pipes fill the tank (+ve) while outlet pipes empty it (-ve). Managing net efficiency is the goal.", rules: ["1. Inlet pipe = +ve work.", "2. Outlet pipe = -ve work.", "3. If tank empties, net work is -ve."], example: "Fill in 4h, Empty in 6h → Net 12h to fill", formula: ["Net = 1/A - 1/B"] },
  { id: "time-speed-distance", title: "TIME, SPEED AND DISTANCE", intro: "TSD covers the fundamental relationship between how fast an object moves and the time it takes. Includes average speed, relative speed, and crossing problems. Unit conversion (km/hr to m/s) is the most common error point.", rules: ["1. Speed = Distance / Time.", "2. km/hr to m/s: Multiply by 5/18.", "3. m/s to km/hr: Multiply by 18/5.", "4. Relative speed (Same dir = -)."], example: "60km/hr for 2h → 120km", formula: ["D = S × T"] },
  { id: "boats-streams", title: "BOATS AND STREAMS", intro: "Deals with the relative speed of a boat in moving water. Downstream means moving with the flow (Speed adds), Upstream means moving against it (Speed subtracts). Crucial for physics-based aptitude.", rules: ["1. Downstream = Boat + Stream.", "2. Upstream = Boat - Stream.", "3. Boat speed = (D+U)/2.", "4. Stream speed = (D-U)/2."], example: "Boat 10, Stream 2 → Down 12, Up 8", formula: ["U = B - S | D = B + S"] },
  { id: "permutation-combination", title: "PERMUTATION & COMBINATION", intro: "Permutation is about 'Arrangement' (Order matters), while Combination is about 'Selection' (Order doesn't matter). These are the pillars of probability and logical grouping questions.", rules: ["1. nPr = n! / (n-r)!.", "2. nCr = n! / r!(n-r)!.", "3. 0! is always 1.", "4. AND = Multiply, OR = Add."], example: "Arrange 3 items → 3! = 6 ways", formula: ["nCr = nCn-r"] },
  { id: "probability", title: "PROBABILITY", intro: "Probability is the measure of the likelihood that an event will occur. It ranges from 0 to 1. Covers coins, dice, cards, and ball-picking scenarios. Understanding the sample space is the first step.", rules: ["1. P(E) = Fav / Total.", "2. P(A) + P(not A) = 1.", "3. Independent events = P(A)×P(B)."], example: "Tossing 2 coins → P(2 Heads) = 1/4", formula: ["P = n(E) / n(S)"] },
  { id: "mensuration", title: "MENSURATION", intro: "Mensuration deals with the measurement of geometric figures (2D and 3D). It involves finding Area, Perimeter, Volume, and Surface Area. Memorizing formulas is key to speed.", rules: ["1. 2D: Square, Circle, Triangle.", "2. 3D: Cube, Cylinder, Cone.", "3. Units must be consistent (m vs cm)."], example: "Circle r=7 → Area = 154", formula: ["Cylinder Volume = πr²h"] },
  { id: "data-interpretation", title: "DATA INTERPRETATION", intro: "DI involves analyzing data presented in charts (Pie, Bar, Line) and tables. It combines percentages, ratios, and averages to draw conclusions. It is the heaviest section in bank and corporate exams.", rules: ["1. Scan the chart titles/units first.", "2. Calculate approximate values.", "3. Look for trends in line graphs."], example: "Pie chart total 360° = 100%", formula: ["Value = (Degree/360) × Total"] },
  { id: "mixture-alligation", title: "MIXTURE AND ALLIGATION", intro: "Alligation is a rule used to find the ratio in which two ingredients at different prices are mixed to produce a mixture of a specific mean price. It is a shortcut for weighted average problems.", rules: ["1. (Cheaper/Dearer) ratio formula.", "2. Replacement formula for liquids.", "3. Mean price must be between C and D."], example: "Mix $10 and $20 to get $12 → Ratio 4:1", formula: ["(Qc/Qd) = (d-m)/(m-c)"] }
];

function Quantitative() {
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
        <div className="sidebar-brand">SKILLUP_QUANTS</div>
        <nav className="sidebar-nav">
          {quantsContent.map((item) => (
            <div key={item.id} className="nav-link" onClick={() => scrollToSection(item.id)}>
              <span className="nav-bullet"></span>
              {item.title}
            </div>
          ))}
        </nav>
        
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
          <h1 className="header-title">QUANTITATIVE APTITUDE CORE</h1>
          <div className="status-indicator">SYSTEM_ACTIVE // CALCULATION_MODE</div>
        </header>

        {quantsContent.map((section) => (
          <section key={section.id} id={section.id} className="content-section">
            <div className="hud-frame">
              <div className="frame-header">
                <span className="section-id">QNT_{section.id.substring(0, 3).toUpperCase()}</span>
                <h2 className="section-name">{section.title}</h2>
              </div>

              <div className="frame-body">
                <div className="body-block">
                  <h3 className="label">// QUANT_INTRO</h3>
                  <p className="text">{section.intro}</p>
                </div>

                <div className="dual-grid">
                  <div className="grid-box">
                    <h3 className="label">// SOLVING_RULES</h3>
                    <ul className="rules-list">
                      {section.rules.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                  <div className="grid-box">
                    <h3 className="label">// MATH_FORMULA</h3>
                    <div className="formula-container">
                      {section.formula.map((f, i) => (
                        <div key={i} className="formula-item">{f}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="body-block example">
                  <h3 className="label">// EXAMPLE_PROBLEM</h3>
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

export default Quantitative;