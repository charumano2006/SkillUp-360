import React from "react";
import "./Verbal.css";
import { useNavigate } from "react-router-dom";

const verbalContent = [
  {
    id: "reading-comprehension",
    title: "READING COMPREHENSION",
    intro: "Reading Comprehension is the ability to read a text and understand its meaning clearly. It helps a person know what the writer is trying to say in the passage. Reading comprehension is an important skill in education and competitive exams. It improves vocabulary and language understanding. When reading a passage, the reader must focus on the main idea. The reader should also identify important details and supporting points. Sometimes passages include facts, opinions, and examples. Understanding these helps in answering questions correctly. Reading comprehension also requires concentration and careful reading. Skimming the passage first can help understand the general idea.",
    rules: [
      "1. Read the passage carefully without skipping any lines.",
      "2. Understand the main idea of the passage first.",
      "3. Read questions before/after to know what information to find.",
      "4. Focus on keywords like names, dates, places, and numbers.",
      "5. Do not assume answers from outside knowledge; answer only from the passage.",
      "6. Use context clues to understand difficult words.",
      "7. Pay attention to the first and last paragraph for the main idea."
    ],
    example: (
      <>
        <div className="example-sub-section">
          <strong>Passage 1:</strong><br/>
          Technology has become an important part of modern life. People use smartphones, computers, and the internet for communication, education, and entertainment. Students use technology to attend online classes and access study materials easily. However, excessive use of technology can lead to problems such as reduced physical activity and lack of face-to-face communication. Therefore, it is important to use technology in a balanced way.<br/>
          <em>Answer: Main topic is the use of technology in modern life.</em>
        </div>
      </>
    ),
    formula: [
      "Main Idea = Topic + Author’s Key Point",
      "Summary = Main Idea + Important Supporting Points",
      "Fact Finding = Exact Line from Passage",
      "Vocabulary = Context (Sentence before + After)",
      "Inference = Clue in Passage + Logical Thinking",
      "Tone = Author’s Opinion + Words Used"
    ]
  },
  {
    id: "sentence-correction",
    title: "SENTENCE CORRECTION",
    intro: "Sentence Correction is a part of English grammar used to find and correct errors in a sentence. It tests a person’s ability to use proper grammar, vocabulary, and sentence structure. In many exams like placement tests and aptitude exams, sentence correction questions are common. These questions check whether a sentence is written correctly or not. Sometimes you must choose the correct option, and sometimes you must identify the error. Sentence correction improves writing and communication skills. It also helps in understanding correct grammar usage.",
    rules: [
      "1. Subject and verb must agree (singular subject → singular verb).",
      "2. Use correct tense according to the time of action.",
      "3. Articles (a, an, the) should be used correctly.",
      "4. Pronouns must match the noun they refer to.",
      "5. Avoid double negatives and use correct prepositions.",
      "6. Maintain proper word order and parallel structure."
    ],
    example: (
      <div className="example-sub-section">
        <strong>Incorrect:</strong> She go to college every day.<br/>
        <strong>Correct:</strong> She goes to college every day.<br/>
        <em>Reason: The subject “She” is singular, so the verb must be “goes.”</em>
      </div>
    ),
    formula: [
      "Sub(Singular) → Verb(Singular) | Sub(Plural) → Verb(Plural)",
      "Tense: Past/Present/Future must match action time",
      "Article: a (consonant), an (vowel), the (specific)",
      "Parallelism: Verb + Verb + Verb (same form)"
    ]
  },
  {
    id: "para-jumbles",
    title: "PARA JUMBLES",
    intro: "Para jumbles are questions where sentences are given in a random or mixed order. The task is to arrange these sentences to form a meaningful paragraph. These questions test logical thinking and reading comprehension. Para jumbles are commonly asked in competitive exams and placement tests. Each sentence in a paragraph is connected to the others. Usually, one sentence introduces the topic of the paragraph. Other sentences explain or support the main idea. The final sentence often gives a conclusion or result. Words like however, therefore, then, and because help identify the order. Practicing para jumbles improves understanding of sentence flow.",
    rules: [
      "1. Find the introductory sentence (general statement).",
      "2. Look for linking words (however, therefore, then).",
      "3. Identify pronouns and their related nouns.",
      "4. Arrange sentences in logical order.",
      "5. Find the concluding sentence at the end."
    ],
    example: (
      <div className="example-sub-section">
        <strong>Sentences:</strong> A. They provide oxygen. B. Trees are important. C. Protect them. D. They give fruits.<br/>
        <strong>Order:</strong> B → A → D → C
      </div>
    ),
    formula: ["Order = Introduction → Explanation → Example → Conclusion"]
  },
  {
    id: "synonyms-antonyms",
    title: "SYNONYMS & ANTONYMS",
    intro: "Synonyms and antonyms are important parts of English vocabulary. Synonyms are words that have similar meanings. Antonyms are words that have opposite meanings. Learning these words improves vocabulary and language skills. They are commonly asked in competitive exams and placement tests. Understanding synonyms helps people use different words with similar meanings. Antonyms help in understanding opposite ideas. These questions test a person's knowledge of word meanings. A strong vocabulary improves communication and writing skills. Reading books and articles helps increase vocabulary. Regular practice helps in remembering new words easily.",
    rules: [
      "1. Understand the meaning of the given word.",
      "2. Read all the options carefully.",
      "3. Eliminate options with unrelated meanings.",
      "4. Choose the closest meaning for synonym.",
      "5. Choose the opposite meaning for antonym."
    ],
    example: (
      <div className="example-sub-section">
        <strong>Word:</strong> Happy<br/>
        <strong>Synonym:</strong> Joyful | <strong>Antonym:</strong> Sad
      </div>
    ),
    formula: ["Synonym = Same Meaning", "Antonym = Opposite Meaning"]
  },
  {
    id: "fill-in-the-blanks",
    title: "FILL IN THE BLANKS",
    intro: "Fill in the blanks is a common type of question in English grammar tests. In these questions, a sentence is given with one or more missing words. The student must choose the correct word to complete the sentence. These questions test grammar, vocabulary, and sentence understanding. They are widely used in school exams and competitive exams. Understanding the context of the sentence is very important. Knowledge of parts of speech helps in solving these questions. Sometimes tense or prepositions decide the correct answer. Reading the sentence carefully helps in finding the right word.",
    rules: [
      "1. Read the whole sentence carefully.",
      "2. Understand the meaning of the sentence.",
      "3. Identify the correct part of speech needed.",
      "4. Check tense and grammar rules.",
      "5. Choose the word that fits logically and grammatically."
    ],
    example: (
      <div className="example-sub-section">
        <strong>Sentence:</strong> She ____ to school every day.<br/>
        <strong>Options:</strong> go / goes / going | <strong>Correct:</strong> goes
      </div>
    ),
    formula: ["Sentence = Context + Correct Grammar + Meaningful Word"]
  },
  {
    id: "error-detection",
    title: "ERROR DETECTION",
    intro: "Error detection is an important topic in English grammar. In these questions, a sentence is given with a grammatical mistake. The task is to identify the part of the sentence that contains the error. These questions are common in competitive exams and placement tests. Error detection tests knowledge of grammar rules. Many mistakes occur in subject–verb agreement and tense usage. Errors may also appear in articles, prepositions, or pronouns. To solve these questions, each part of the sentence must be checked carefully. Understanding basic grammar rules helps in identifying errors quickly.",
    rules: [
      "1. Check subject–verb agreement.",
      "2. Check tense correctness.",
      "3. Look for article errors (a, an, the).",
      "4. Check prepositions and pronouns.",
      "5. Read the sentence carefully to find mistakes."
    ],
    example: (
      <div className="example-sub-section">
        <strong>Sentence:</strong> She go to college every day.<br/>
        <strong>Error:</strong> go | <strong>Correct:</strong> goes
      </div>
    ),
    formula: ["Sentence = Proper Grammar + Correct Tense + Correct Word Order"]
  }
];

function Verbal() {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="verbal-master-container">
      <aside className="verbal-sidebar">
        <div className="sidebar-brand">SKILLUP_VERBAL</div>
        <nav className="sidebar-nav">
          {verbalContent.map((item) => (
            <div key={item.id} className="nav-link" onClick={() => scrollToSection(item.id)}>
              <span className="nav-bullet"></span>
              {item.title}
            </div>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <span onClick={() => navigate("/")}>HOME</span>
          <span onClick={() => navigate("/student-dashboard")}>DASHBOARD</span>
        </div>
      </aside>

      <main className="verbal-content-stream">
        <header className="page-header">
          <h1 className="header-title">VERBAL ABILITY CORE</h1>
          <div className="status-indicator">SYSTEM_ACTIVE // ALL_UNITS_LOADED</div>
        </header>

        {verbalContent.map((section) => (
          <section key={section.id} id={section.id} className="content-section">
            <div className="hud-frame">
              <div className="frame-header">
                <span className="section-id">UNIT_{section.id.substring(0, 3).toUpperCase()}</span>
                <h2 className="section-name">{section.title}</h2>
              </div>

              <div className="frame-body">
                <div className="body-block">
                  <h3 className="label">// INTRODUCTION</h3>
                  <p className="text">{section.intro}</p>
                </div>

                <div className="dual-grid">
                  <div className="grid-box">
                    <h3 className="label">// RULES_SET</h3>
                    <ul className="rules-list">
                      {section.rules.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                  </div>
                  <div className="grid-box">
                    <h3 className="label">// FORMULA_LOG</h3>
                    <div className="formula-container">
                      {section.formula.map((f, i) => (
                        <div key={i} className="formula-item">{f}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="body-block example">
                  <h3 className="label">// EXAMPLE_PROMPT</h3>
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

export default Verbal;