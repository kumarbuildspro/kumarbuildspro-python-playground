/* -------------------------------------------------------------
   1. DATA STRUCTURES & CURRICULUM CONTENT
------------------------------------------------------------- */
const COURSE_DATA = [
    {
        id: "mod1",
        title: "Module 1: Python Basics",
        lessons: [
            {
                id: "l1_1",
                title: "Introduction & Hello World",
                content: `
                    <h3 class="text-xl font-bold mb-3">Welcome to Python!</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Python is a high-level, interpreted, and easy-to-read programming language used globally for web development, data science, artificial intelligence, and automation.
                    </p>
                    <div class="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs mb-4">
                        print("Hello, World!")
                    </div>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        The <code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-brand-500">print()</code> function outputs text directly to standard stdout.
                    </p>
                `,
                codeSnippet: `# First Python Code\nprint("Hello, Welcome to Kumarbuildspro Python Platform!")\n`
            },
            {
                id: "l1_2",
                title: "Variables & Data Types",
                content: `
                    <h3 class="text-xl font-bold mb-3">Variables in Python</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Python variables do not need explicit type declarations. The interpreter dynamically infers the type of value assigned.
                    </p>
                    <ul class="list-disc pl-5 text-sm text-gray-700 dark:text-gray-300 space-y-1 mb-4">
                        <li><strong>Integer:</strong> age = 25</li>
                        <li><strong>Float:</strong> price = 99.99</li>
                        <li><strong>String:</strong> name = "Kumar"</li>
                        <li><strong>Boolean:</strong> is_active = True</li>
                    </ul>
                `,
                codeSnippet: `name = "Kumarbuildspro"\nage = 2026\nis_active = True\nprice = 49.99\n\nprint(f"Platform: {name}, Year: {age}, Active: {is_active}")\n`
            },
            {
                id: "l1_3",
                title: "User Input & Type Casting",
                content: `
                    <h3 class="text-xl font-bold mb-3">Type Conversion & Operations</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Convert data from one type to another using built-in constructors like <code class="text-brand-500">int()</code>, <code class="text-brand-500">str()</code>, and <code class="text-brand-500">float()</code>.
                    </p>
                `,
                codeSnippet: `num_str = "100"\nconverted_num = int(num_str)\nprint("Converted Integer:", converted_num + 50)\n`
            }
        ]
    },
    {
        id: "mod2",
        title: "Module 2: Control Flow",
        lessons: [
            {
                id: "l2_1",
                title: "Conditional Statements (If-Else)",
                content: `
                    <h3 class="text-xl font-bold mb-3">If, Elif, and Else</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Execute code conditionally based on Boolean evaluation. Python relies on strict indentation (4 spaces).
                    </p>
                `,
                codeSnippet: `score = 85\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 75:\n    print("Grade: B")\nelse:\n    print("Grade: C")\n`
            },
            {
                id: "l2_2",
                title: "Loops (For & While)",
                content: `
                    <h3 class="text-xl font-bold mb-3">Iteration with Loops</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Iterate over sequences using <code class="text-brand-500">for</code> loops or repeat execution while conditions remain True with <code class="text-brand-500">while</code>.
                    </p>
                `,
                codeSnippet: `# For Loop Example\nfor i in range(1, 6):\n    print(f"Iteration step: {i}")\n`
            }
        ]
    },
    {
        id: "mod3",
        title: "Module 3: Data Structures",
        lessons: [
            {
                id: "l3_1",
                title: "Lists & Operations",
                content: `
                    <h3 class="text-xl font-bold mb-3">Python Lists</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Lists are ordered, mutable collections capable of storing dynamic element types.
                    </p>
                `,
                codeSnippet: `fruits = ["Apple", "Banana", "Mango"]\nfruits.append("Orange")\nprint("Fruits list:", fruits)\n`
            },
            {
                id: "l3_2",
                title: "Dictionaries & Keys",
                content: `
                    <h3 class="text-xl font-bold mb-3">Key-Value Dictionaries</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Store mapping relations as key-value pairs with fast hashing lookup.
                    </p>
                `,
                codeSnippet: `user = {"name": "Kumar", "role": "Developer", "level": 10}\nprint("Role:", user.get("role"))\n`
            }
        ]
    },
    {
        id: "mod4",
        title: "Module 4: Functions & OOP",
        lessons: [
            {
                id: "l4_1",
                title: "Defining Functions",
                content: `
                    <h3 class="text-xl font-bold mb-3">Functions in Python</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Reuse code blocks using the <code class="text-brand-500">def</code> keyword.
                    </p>
                `,
                codeSnippet: `def greet(name):\n    return f"Hello {name}, welcome to Python!"\n\nprint(greet("Developer"))\n`
            },
            {
                id: "l4_2",
                title: "Object Oriented Programming (OOP)",
                content: `
                    <h3 class="text-xl font-bold mb-3">Classes & Objects</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Define blueprints with custom methods and properties using classes.
                    </p>
                `,
                codeSnippet: `class Student:\n    def __init__(self, name, score):\n        self.name = name\n        self.score = score\n\n    def is_passed(self):\n        return self.score >= 50\n\ns1 = Student("Alex", 88)\nprint(f"{s1.name} Passed: {s1.is_passed()}")\n`
            }
        ]
    },
    {
        id: "mod5",
        title: "Module 5: Advanced Python",
        lessons: [
            {
                id: "l5_1",
                title: "Exception Handling (Try / Except)",
                content: `
                    <h3 class="text-xl font-bold mb-3">Catching Runtime Errors</h3>
                    <p class="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                        Safely catch runtime errors using <code class="text-brand-500">try</code>, <code class="text-brand-500">except</code>, and <code class="text-brand-500">finally</code>.
                    </p>
                `,
                codeSnippet: `try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Caught division by zero error safely!")\n`
            }
        ]
    }
];

const QUIZ_DATA = [
    {
        id: 1,
        module: "Module 1",
        question: "Which function is used to display output on the screen in Python?",
        options: ["console.log()", "print()", "write()", "output()"],
        correct: 1
    },
    {
        id: 2,
        module: "Module 1",
        question: "What is the result of type(3.14)?",
        options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "<class 'double'>"],
        correct: 1
    },
    {
        id: 3,
        module: "Module 2",
        question: "Which keyword is used for conditional checks in Python?",
        options: ["if", "case", "switch", "when"],
        correct: 0
    },
    {
        id: 4,
        module: "Module 3",
        question: "How do you add an item to the end of a list?",
        options: ["list.add()", "list.insert()", "list.append()", "list.push()"],
        correct: 2
    },
    {
        id: 5,
        module: "Module 4",
        question: "Which keyword defines a function in Python?",
        options: ["func", "function", "def", "define"],
        correct: 2
    }
];

const PYTHON_KEYWORDS = [
    "print", "def", "return", "if", "elif", "else", "for", "while", "import", "from", 
    "class", "try", "except", "finally", "True", "False", "None", "lambda", "range", "len"
];

/* -------------------------------------------------------------
   2. STATE & INITIALIZATION
------------------------------------------------------------- */
let pyodideInstance = null;
let currentLessonId = "l1_1";
let currentQuizIndex = 0;
let userQuizAnswers = {};
let userState = {
    completedLessons: [],
    codeRuns: 0,
    activeSection: 'home'
};

function loadSavedState() {
    const saved = localStorage.getItem('kumarbuildspro_state');
    if (saved) {
        try {
            userState = JSON.parse(saved);
        } catch(e) {
            console.error("Failed to parse state", e);
        }
    }
}

function saveState() {
    localStorage.setItem('kumarbuildspro_state', JSON.stringify(userState));
    updateDashboardUI();
}

/* -------------------------------------------------------------
   3. ROUTING & SPA NAVIGATION
------------------------------------------------------------- */
function navigateTo(sectionId) {
    userState.activeSection = sectionId;
    saveState();

    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));

    const target = document.getElementById(`section-${sectionId}`);
    if (target) target.classList.remove('hidden');

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
}

/* -------------------------------------------------------------
   4. CURRICULUM RENDERING & LESSON READER
------------------------------------------------------------- */
function renderCurriculumSidebar() {
    const container = document.getElementById('modules-accordion');
    container.innerHTML = '';

    COURSE_DATA.forEach(mod => {
        const modBox = document.createElement('div');
        modBox.className = "border border-gray-200 dark:border-darkborder rounded-xl overflow-hidden bg-white dark:bg-darkcard";

        const modHeader = `
            <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-darkborder">
                ${mod.title}
            </div>
        `;

        let lessonsHtml = `<div class="divide-y divide-gray-100 dark:divide-gray-800">`;
        mod.lessons.forEach(les => {
            const isDone = userState.completedLessons.includes(les.id);
            lessonsHtml += `
                <button onclick="loadLesson('${les.id}')" class="w-full px-4 py-3 text-left text-xs font-semibold hover:bg-brand-50 dark:hover:bg-gray-800 transition flex items-center justify-between ${currentLessonId === les.id ? 'bg-brand-50 dark:bg-gray-800 text-brand-600 dark:text-brand-400' : 'text-gray-700 dark:text-gray-300'}">
                    <span><i class="fa-regular fa-file-code mr-2"></i>${les.title}</span>
                    ${isDone ? '<i class="fa-solid fa-circle-check text-brand-500"></i>' : '<i class="fa-regular fa-circle text-gray-400"></i>'}
                </button>
            `;
        });
        lessonsHtml += `</div>`;

        modBox.innerHTML = modHeader + lessonsHtml;
        container.appendChild(modBox);
    });
}

function loadLesson(lessonId) {
    currentLessonId = lessonId;
    renderCurriculumSidebar();

    let found = null;
    COURSE_DATA.forEach(m => {
        m.lessons.forEach(l => {
            if (l.id === lessonId) found = l;
        });
    });

    if (!found) return;

    if (!userState.completedLessons.includes(lessonId)) {
        userState.completedLessons.push(lessonId);
        saveState();
    }

    const reader = document.getElementById('lesson-content-area');
    reader.innerHTML = `
        <div>
            <span class="text-xs font-bold uppercase tracking-wider text-brand-500">Active Lesson</span>
            <h2 class="text-2xl font-extrabold text-gray-900 dark:text-white mt-1 mb-4">${found.title}</h2>
            <div>${found.content}</div>
        </div>

        <div class="bg-gray-900 rounded-xl p-4 border border-gray-800 mt-6">
            <div class="flex justify-between items-center mb-2">
                <span class="text-xs font-mono text-gray-400"><i class="fa-solid fa-code text-brand-400 mr-1"></i> Interactive Practice Snippet</span>
                <button onclick="copyToCompiler(\`${encodeURIComponent(found.codeSnippet)}\`)" class="px-3 py-1 bg-brand-500 hover:bg-brand-600 text-white rounded-md text-xs font-bold transition">
                    Open in Compiler <i class="fa-solid fa-arrow-right ml-1"></i>
                </button>
            </div>
            <pre class="font-mono text-xs text-gray-200 bg-gray-950 p-3 rounded-lg overflow-x-auto">${found.codeSnippet}</pre>
        </div>
    `;
}

function copyToCompiler(encodedSnippet) {
    const code = decodeURIComponent(encodedSnippet);
    document.getElementById('code-input').value = code;
    updateLineNumbers();
    navigateTo('compiler');
}

/* -------------------------------------------------------------
   5. PYODIDE PYTHON COMPILER & AUTOCOMPLETE ENGINE
------------------------------------------------------------- */
async function initPyodideEngine() {
    const statusEl = document.getElementById('pyodide-status');
    try {
        pyodideInstance = await loadPyodide();
        statusEl.className = "text-emerald-400 flex items-center";
        statusEl.innerHTML = `<i class="fa-solid fa-check-circle mr-1"></i> Python Ready`;
    } catch (err) {
        statusEl.className = "text-rose-400 flex items-center";
        statusEl.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-1"></i> Engine Load Error`;
    }
}

async function runPythonCode() {
    const outputEl = document.getElementById('code-output');
    const code = document.getElementById('code-input').value;

    if (!pyodideInstance) {
        outputEl.innerText = "Error: Python runtime engine is still initializing. Please wait...";
        return;
    }

    outputEl.innerText = "Running script...\n";
    userState.codeRuns += 1;
    saveState();

    try {
        pyodideInstance.runPython(`
            import sys
            import io
            sys.stdout = io.StringIO()
        `);

        await pyodideInstance.runPythonAsync(code);

        let stdout = pyodideInstance.runPython("sys.stdout.getvalue()");
        outputEl.innerText = stdout || "Code executed successfully (no stdout output).";
    } catch (err) {
        outputEl.innerText = `Traceback Error:\n${err.message}`;
    }
}

function clearEditor() {
    document.getElementById('code-input').value = '';
    updateLineNumbers();
}

function clearOutput() {
    document.getElementById('code-output').innerText = '';
}

function loadSampleSnippet() {
    const sample = `# Python Data Processing Example\nnumbers = [12, 45, 2, 89, 34, 67]\n\neven_numbers = [n for n in numbers if n % 2 == 0]\nsquares = {n: n**2 for n in even_numbers}\n\nprint("Original List:", numbers)\nprint("Filtered Evens:", even_numbers)\nprint("Squares Dictionary:", squares)\n`;
    document.getElementById('code-input').value = sample;
    updateLineNumbers();
}

const codeInput = document.getElementById('code-input');
const lineNumbers = document.getElementById('line-numbers');
const suggestionBox = document.getElementById('suggestion-box');
const suggestionList = document.getElementById('suggestion-list');

function updateLineNumbers() {
    const lines = codeInput.value.split('\n').length;
    lineNumbers.innerHTML = Array.from({length: lines}, (_, i) => i + 1).join('<br>');
}

codeInput.addEventListener('input', () => {
    updateLineNumbers();
    handleAutocomplete();
});

codeInput.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeInput.scrollTop;
});

function handleAutocomplete() {
    const val = codeInput.value;
    const pos = codeInput.selectionStart;
    const lastWord = val.slice(0, pos).split(/\s+/).pop();

    if (lastWord.length < 2) {
        suggestionBox.classList.add('hidden');
        return;
    }

    const matches = PYTHON_KEYWORDS.filter(k => k.startsWith(lastWord));
    if (matches.length > 0) {
        suggestionList.innerHTML = '';
        matches.forEach(m => {
            const li = document.createElement('li');
            li.className = "px-3 py-1.5 hover:bg-brand-500 hover:text-white cursor-pointer font-mono";
            li.innerText = m;
            li.onclick = () => insertSuggestion(m, lastWord);
            suggestionList.appendChild(li);
        });

        suggestionBox.style.left = "40px";
        suggestionBox.style.top = "60px";
        suggestionBox.classList.remove('hidden');
    } else {
        suggestionBox.classList.add('hidden');
    }
}

function insertSuggestion(word, replaceWord) {
    const pos = codeInput.selectionStart;
    const before = codeInput.value.slice(0, pos - replaceWord.length);
    const after = codeInput.value.slice(pos);
    codeInput.value = before + word + after;
    suggestionBox.classList.add('hidden');
    codeInput.focus();
    updateLineNumbers();
}

/* -------------------------------------------------------------
   6. QUIZ SYSTEM CORE
------------------------------------------------------------- */
function renderQuiz() {
    const q = QUIZ_DATA[currentQuizIndex];
    const container = document.getElementById('quiz-container');

    document.getElementById('quiz-module-badge').innerText = q.module;
    document.getElementById('quiz-progress-text').innerText = `Question ${currentQuizIndex + 1} of ${QUIZ_DATA.length}`;

    const userSelected = userQuizAnswers[q.id];

    let optionsHtml = `<div class="space-y-3 mt-4">`;
    q.options.forEach((opt, idx) => {
        let stateClass = "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/40 hover:border-brand-500";
        if (userSelected !== undefined) {
            if (idx === q.correct) {
                stateClass = "border-emerald-500 bg-emerald-500/10 text-emerald-400 font-bold";
            } else if (userSelected === idx) {
                stateClass = "border-rose-500 bg-rose-500/10 text-rose-400 font-bold";
            }
        }

        optionsHtml += `
            <button onclick="selectQuizOption(${q.id}, ${idx})" class="w-full text-left p-4 rounded-xl border transition flex items-center justify-between text-sm ${stateClass}">
                <span>${opt}</span>
                ${userSelected !== undefined && idx === q.correct ? '<i class="fa-solid fa-circle-check text-emerald-500"></i>' : ''}
            </button>
        `;
    });
    optionsHtml += `</div>`;

    container.innerHTML = `
        <h3 class="text-lg font-bold text-gray-900 dark:text-white">${q.question}</h3>
        ${optionsHtml}
    `;

    document.getElementById('prev-quiz-btn').disabled = currentQuizIndex === 0;
    const nextBtn = document.getElementById('next-quiz-btn');
    if (currentQuizIndex === QUIZ_DATA.length - 1) {
        nextBtn.innerHTML = `Finish Quiz <i class="fa-solid fa-flag-checkered ml-1"></i>`;
    } else {
        nextBtn.innerHTML = `Next Question <i class="fa-solid fa-chevron-right ml-1"></i>`;
    }
}

function selectQuizOption(qId, optionIdx) {
    userQuizAnswers[qId] = optionIdx;
    renderQuiz();
    saveState();
}

function navigateQuiz(dir) {
    if (dir === 1 && currentQuizIndex < QUIZ_DATA.length - 1) {
        currentQuizIndex++;
        renderQuiz();
    } else if (dir === -1 && currentQuizIndex > 0) {
        currentQuizIndex--;
        renderQuiz();
    } else if (dir === 1 && currentQuizIndex === QUIZ_DATA.length - 1) {
        navigateTo('dashboard');
    }
}

/* -------------------------------------------------------------
   7. DASHBOARD & STATS UPDATES
------------------------------------------------------------- */
function updateDashboardUI() {
    let totalLessons = 0;
    COURSE_DATA.forEach(m => totalLessons += m.lessons.length);
    const doneLessons = userState.completedLessons.length;
    
    document.getElementById('dash-completed-lessons').innerText = `${doneLessons} / ${totalLessons}`;
    document.getElementById('header-progress-text').innerText = `${doneLessons}/${totalLessons} Lessons`;

    const lessonPct = Math.round((doneLessons / totalLessons) * 100);
    document.getElementById('dash-lesson-bar').style.width = `${lessonPct}%`;

    let correctCount = 0;
    QUIZ_DATA.forEach(q => {
        if (userQuizAnswers[q.id] === q.correct) correctCount++;
    });

    const quizPct = QUIZ_DATA.length ? Math.round((correctCount / QUIZ_DATA.length) * 100) : 0;
    document.getElementById('dash-quiz-score').innerText = `${quizPct}%`;
    document.getElementById('dash-quiz-bar').style.width = `${quizPct}%`;

    document.getElementById('dash-code-runs').innerText = userState.codeRuns;

    let rank = "Beginner Pythonista";
    if (doneLessons >= 10 && quizPct >= 80) rank = "Master Python Architect";
    else if (doneLessons >= 5) rank = "Intermediate Developer";

    document.getElementById('dash-user-rank').innerText = rank;
}

function resetUserProgress() {
    localStorage.removeItem('kumarbuildspro_state');
    userState = { completedLessons: [], codeRuns: 0, activeSection: 'home' };
    userQuizAnswers = {};
    currentQuizIndex = 0;
    saveState();
    renderCurriculumSidebar();
    loadLesson('l1_1');
    renderQuiz();
    navigateTo('home');
}

/* -------------------------------------------------------------
   8. APPLICATION ENTRY POINT
------------------------------------------------------------- */
window.onload = function() {
    loadSavedState();
    initPyodideEngine();
    renderCurriculumSidebar();
    loadLesson(currentLessonId);
    renderQuiz();
    updateLineNumbers();

    navigateTo(userState.activeSection || 'home');
};
