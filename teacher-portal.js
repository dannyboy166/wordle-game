/**
 * TEACHER PORTAL - SASCO Wordle
 * Allows teachers to create custom Wordle word lists
 */

// =============================================
// SHARED LISTS (from Australian Curriculum)
// =============================================
const SHARED_LISTS = [
    // ========== YEAR 2 CORE WORDS ==========
    {
        name: "Year 2 Core Words",
        category: "Year 2",
        words: [
            "ABOUT", "AFTER", "ALONG", "ALSO", "AGAIN", "ANY",
            "AROUND", "ASK", "BECAUSE", "BEFORE", "BEST", "BEEN",
            "BETTER", "CALLED", "CAME", "COULD", "CRY",
            "DEAR", "DOES", "DOING", "DOOR", "EAT", "EVERY", "FACE", "FAST", "FIND",
            "FIRST", "FOUND", "GAVE", "GIVE", "GOING", "GONE", "HALF", "HAPPY",
            "HEAD", "HEAR", "HOUSE", "KIND", "LIVE", "LONG",
            "MADE", "MAKE", "MANY", "MISS", "NAME",
            "NEVER", "NEW", "NEXT", "NICE", "NIGHT", "NOW", "OLD", "ONCE", "OPEN", "OUR",
            "OUT", "PLACE", "READ", "ROAD", "SHOULD",
            "START", "STORY", "THEIR", "THERE", "THESE", "THING", "THINK",
            "TIME", "TOLD", "TODAY", "TOO", "TWO", "VERY", "WANT", "WATER", "WERE",
            "WHAT", "WHO", "WOULD", "YEAR", "YOUR"
        ]
    },
    {
        name: "Year 2 Days of the Week",
        category: "Year 2",
        words: ["MONDAY", "TUESDAY", "FRIDAY", "SUNDAY"]
    },
    {
        name: "Year 2 Numbers",
        category: "Year 2",
        words: [
            "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN"
        ]
    },
    {
        name: "Year 2 Months",
        category: "Year 2",
        words: [
            "MARCH", "APRIL", "MAY", "JUNE", "JULY"
        ]
    },
    {
        name: "Year 2 Seasons",
        category: "Year 2",
        words: ["SUMMER", "AUTUMN", "WINTER", "SPRING"]
    },

    // ========== YEAR 3 CORE WORDS ==========
    {
        name: "Year 3 Core Words",
        category: "Year 3",
        words: [
            "ABLE", "ACROSS", "AIR", "ALONG", "ALREADY", "ANIMAL",
            "ASLEEP", "BIRD", "BOOK", "BOX", "CITY",
            "COLD", "DIED", "EARLY", "EVEN", "FEET", "FELT", "FLOOR",
            "GAMES", "GOES", "HAIR", "HARD", "HELLO", "HIGH", "LARGE", "LEAVE", "LIGHT",
            "OWN", "RAIN", "RING", "SEEN", "SENT", "SHOULD", "SHOW", "SIDE", "SLEPT",
            "SPACE", "STAY", "SURE",
            "TALK", "THAN", "TOWN", "TRAIN", "TRY", "USED", "VOICE", "WATCH",
            "WEEKS", "WON", "WRITE"
        ]
    },

    // ========== DOLCH SIGHT WORDS ==========
    {
        name: "Dolch Pre-Kindergarten",
        category: "Dolch",
        words: [
            "AND", "AWAY", "BIG", "BLUE", "CAN", "COME", "DOWN", "FIND", "FOR",
            "FUNNY", "HELP", "HERE", "JUMP",
            "LOOK", "MAKE", "NOT", "ONE", "PLAY", "RED", "RUN", "SAID",
            "SEE", "THE", "THREE", "TWO", "WHERE", "YOU"
        ]
    },
    {
        name: "Dolch Kindergarten",
        category: "Dolch",
        words: [
            "ALL", "ARE", "ATE", "BLACK", "BROWN", "BUT", "CAME",
            "DID", "EAT", "FOUR", "GET", "GOOD", "HAVE", "INTO", "LIKE",
            "MUST", "NEW", "NOW", "OUR", "OUT", "PLEASE", "RAN",
            "RIDE", "SAW", "SAY", "SHE", "SOON", "THAT", "THERE", "THEY", "THIS",
            "TOO", "UNDER", "WANT", "WAS", "WELL", "WENT", "WHAT", "WHITE", "WHO",
            "WILL", "WITH", "YES"
        ]
    },
    {
        name: "Dolch First Grade",
        category: "Dolch",
        words: [
            "AFTER", "AGAIN", "ANY", "ASK", "COULD", "EVERY", "FLY",
            "FROM", "GIVE", "GOING", "HAD", "HAS", "HER", "HIM", "HIS", "HOW", "JUST",
            "KNOW", "LET", "LIVE", "MAY", "OLD", "ONCE", "OPEN", "OVER", "PUT",
            "ROUND", "SOME", "STOP", "TAKE", "THANK", "THEM", "THEN", "THINK", "WALK",
            "WERE", "WHEN"
        ]
    },
    {
        name: "Dolch Second Grade",
        category: "Dolch",
        words: [
            "ALWAYS", "AROUND", "BECAUSE", "BEEN", "BEFORE", "BEST", "BOTH", "BUY",
            "CALL", "COLD", "DOES", "FAST", "FIRST", "FIVE", "FOUND", "GAVE", "GOES",
            "GREEN", "ITS", "MADE", "MANY", "OFF", "PULL", "READ", "RIGHT", "SING",
            "SIT", "SLEEP", "TELL", "THEIR", "THESE", "THOSE", "UPON", "USE",
            "VERY", "WASH", "WHICH", "WHY", "WISH", "WORK", "WOULD", "WRITE", "YOUR"
        ]
    },
    {
        name: "Dolch Third Grade",
        category: "Dolch",
        words: [
            "ABOUT", "BETTER", "BRING", "CARRY", "CLEAN", "CUT", "DONE", "DRAW", "DRINK",
            "EIGHT", "FALL", "FAR", "FULL", "GOT", "GROW", "HOLD", "HOT", "HURT",
            "KEEP", "KIND", "LAUGH", "LIGHT", "LONG", "MUCH", "NEVER", "ONLY",
            "OWN", "PICK", "SEVEN", "SHALL", "SHOW", "SIX", "SMALL", "START", "TEN",
            "TODAY", "TRY", "WARM"
        ]
    },
    {
        name: "Dolch Nouns",
        category: "Dolch",
        words: [
            "APPLE", "BABY", "BACK", "BALL", "BEAR", "BED", "BELL", "BIRD",
            "BOAT", "BOX", "BOY", "BREAD", "CAKE", "CAR", "CAT", "CHAIR",
            "COAT", "CORN", "COW", "DAY", "DOG",
            "DOLL", "DOOR", "DUCK", "EGG", "EYE", "FARM", "FEET",
            "FIRE", "FISH", "FLOOR", "GAME", "GIRL",
            "GRASS", "HAND", "HEAD", "HILL", "HOME", "HORSE", "HOUSE",
            "LEG", "MAN", "MEN", "MILK", "MONEY", "NAME",
            "NEST", "NIGHT", "PAPER", "PARTY", "PIG", "RAIN", "RING",
            "ROBIN", "SCHOOL", "SEED", "SHEEP", "SHOE", "SNOW", "SONG",
            "STICK", "STREET", "SUN", "TABLE", "THING", "TIME", "TOP", "TOY",
            "TREE", "WATCH", "WATER", "WAY", "WIND", "WOOD"
        ]
    },

    // ========== ADDITIONAL THEMED LISTS ==========
    {
        name: "Animals",
        category: "Themes",
        words: [
            "ANT", "BAT", "BEE", "CAT", "COW", "DOG", "EEL", "ELK", "FOX", "HEN",
            "OWL", "PIG", "RAT", "YAK",
            "BEAR", "BIRD", "BULL", "CRAB", "CROW", "DEER", "DOVE", "DUCK", "FISH",
            "FROG", "GOAT", "HARE", "HAWK", "LION", "MOLE", "MOTH", "SEAL", "SLUG",
            "SWAN", "TOAD", "WOLF", "WORM",
            "CAMEL", "EAGLE", "GOOSE", "HORSE", "HYENA", "KOALA", "LLAMA", "MOOSE",
            "MOUSE", "OTTER", "PANDA", "SHARK", "SHEEP", "SKUNK", "SLOTH", "SNAIL",
            "SNAKE", "SQUID", "TIGER", "WHALE", "ZEBRA"
        ]
    },
    {
        name: "Colors",
        category: "Themes",
        words: [
            "RED", "TAN",
            "BLUE", "CYAN", "GOLD", "GRAY", "GREY", "LIME", "NAVY", "PINK", "ROSE", "TEAL",
            "AMBER", "BEIGE", "BLACK", "CORAL", "GREEN", "IVORY", "LILAC", "OLIVE",
            "PEACH", "WHITE"
        ]
    },
    {
        name: "Food",
        category: "Themes",
        words: [
            "EGG", "HAM", "JAM", "NUT", "PEA", "PIE",
            "BEAN", "BEEF", "BEET", "CAKE", "CHIP", "CORN", "CRAB", "FISH", "LAMB",
            "LIME", "MEAT", "MILK", "MINT", "PEAR", "PLUM", "PORK", "RICE", "SALT", "TACO",
            "APPLE", "BACON", "BERRY", "BREAD", "CANDY", "CREAM", "FLOUR", "FRUIT",
            "GRAPE", "HONEY", "JUICE", "LEMON", "MANGO", "MELON", "OLIVE", "ONION",
            "PASTA", "PEACH", "PIZZA", "SALAD", "SAUCE", "STEAK", "TOAST", "WHEAT"
        ]
    },
    {
        name: "Body Parts",
        category: "Themes",
        words: [
            "ARM", "EAR", "EYE", "GUM", "HIP", "JAW", "LEG", "LIP", "RIB", "TOE",
            "BACK", "BONE", "CHIN", "FACE", "FOOT", "HAIR", "HAND", "HEAD", "HEEL",
            "KNEE", "NAIL", "NECK", "NOSE", "PALM", "SKIN",
            "ANKLE", "BRAIN", "CHEEK", "CHEST", "ELBOW", "HEART", "MOUTH", "SKULL",
            "SPINE", "THUMB", "TOOTH", "WAIST", "WRIST"
        ]
    }
];

// =============================================
// STATE
// =============================================
let selectedLength = 5;
let selectedWords = new Set();
let customWords = [];
let savedLists = [];
let currentFilter = 'all';
let expandedListIndex = null;
let listSelectedWords = new Set();

// =============================================
// INITIALIZATION
// =============================================
function init() {
    loadSavedLists();
    setupLengthButtons();
    setupFilterButtons();
    setupEventListeners();
    renderSharedLists();
    renderSavedLists();
    updateSelectedCount();
}

function setupLengthButtons() {
    const buttons = document.querySelectorAll('.length-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedLength = parseInt(btn.dataset.length);
            document.getElementById('length-hint').textContent = selectedLength;

            // Clear selections when length changes
            selectedWords.clear();
            customWords = [];
            document.getElementById('custom-words-input').value = '';
            document.getElementById('custom-words-preview').classList.add('hidden');

            renderSharedLists();
            updateSelectedCount();
        });
    });
}

function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderSharedLists();
        });
    });
}

function setupEventListeners() {
    // Custom words input
    const customInput = document.getElementById('custom-words-input');
    customInput.addEventListener('input', handleCustomWordsInput);

    // Generate link button
    document.getElementById('generate-btn').addEventListener('click', generateLink);

    // Copy button
    document.getElementById('copy-btn').addEventListener('click', copyLink);

    // Open game button
    document.getElementById('open-btn').addEventListener('click', openGame);

    // Save button
    document.getElementById('save-btn').addEventListener('click', showSaveDialog);

    // Save dialog
    document.getElementById('cancel-save').addEventListener('click', hideSaveDialog);
    document.getElementById('confirm-save').addEventListener('click', confirmSave);
}

// =============================================
// SHARED LISTS
// =============================================
function renderSharedLists() {
    const container = document.getElementById('shared-lists');
    container.innerHTML = '';

    const filteredLists = SHARED_LISTS.filter(list => {
        if (currentFilter === 'all') return true;
        return list.category === currentFilter;
    });

    filteredLists.forEach((list, index) => {
        // Filter words by selected length
        const wordsOfLength = list.words.filter(w => w.length === selectedLength);
        if (wordsOfLength.length === 0) return;

        const listItem = document.createElement('div');
        listItem.className = 'shared-list-item';

        const isExpanded = expandedListIndex === index;

        listItem.innerHTML = `
            <div class="list-header" onclick="toggleList(${index})">
                <div class="list-info">
                    <span class="list-name">${list.name}</span>
                    <span class="list-count">${wordsOfLength.length} words</span>
                </div>
                <div class="list-actions">
                    <button class="play-all-btn" onclick="event.stopPropagation(); playAllWords(${index})">
                        Play All
                    </button>
                    <span class="expand-icon">${isExpanded ? '▼' : '▶'}</span>
                </div>
            </div>
            ${isExpanded ? renderExpandedList(wordsOfLength) : ''}
        `;

        container.appendChild(listItem);
    });

    if (container.children.length === 0) {
        container.innerHTML = `<p class="no-words-message">No ${selectedLength}-letter words in this category.</p>`;
    }
}

function renderExpandedList(words) {
    return `
        <div class="expanded-list">
            <div class="list-controls">
                <button class="select-all-btn" onclick="selectAllInList()">Select All</button>
                <button class="deselect-all-btn" onclick="deselectAllInList()">Deselect All</button>
            </div>
            <div class="word-checkboxes">
                ${words.map(word => `
                    <label class="word-checkbox ${selectedWords.has(word) ? 'checked' : ''}">
                        <input type="checkbox"
                               value="${word}"
                               ${selectedWords.has(word) ? 'checked' : ''}
                               onchange="toggleWord('${word}', this.checked)">
                        <span class="checkbox-custom"></span>
                        <span class="word-text">${word}</span>
                    </label>
                `).join('')}
            </div>
            <button class="use-selected-btn" onclick="useSelectedWords()">
                Use Selected Words
            </button>
        </div>
    `;
}

function toggleList(index) {
    expandedListIndex = expandedListIndex === index ? null : index;
    renderSharedLists();
}

function toggleWord(word, checked) {
    if (checked) {
        selectedWords.add(word);
    } else {
        selectedWords.delete(word);
    }
    updateSelectedCount();
}

function selectAllInList() {
    const checkboxes = document.querySelectorAll('.expanded-list .word-checkbox input');
    checkboxes.forEach(cb => {
        cb.checked = true;
        selectedWords.add(cb.value);
    });
    renderSharedLists();
    updateSelectedCount();
}

function deselectAllInList() {
    const checkboxes = document.querySelectorAll('.expanded-list .word-checkbox input');
    checkboxes.forEach(cb => {
        cb.checked = false;
        selectedWords.delete(cb.value);
    });
    renderSharedLists();
    updateSelectedCount();
}

function useSelectedWords() {
    // Close the expanded list
    expandedListIndex = null;
    renderSharedLists();
    updateSelectedCount();
}

function playAllWords(listIndex) {
    const filteredLists = SHARED_LISTS.filter(list => {
        if (currentFilter === 'all') return true;
        return list.category === currentFilter;
    });

    const list = filteredLists[listIndex];
    const wordsOfLength = list.words.filter(w => w.length === selectedLength);

    // Add all words to selection
    wordsOfLength.forEach(word => selectedWords.add(word));

    // Generate and open the link
    generateLink();
    openGame();
}

// =============================================
// CUSTOM WORDS
// =============================================
function handleCustomWordsInput(e) {
    const input = e.target.value.toUpperCase();
    const preview = document.getElementById('custom-words-preview');
    const tagsContainer = document.getElementById('preview-tags');

    // Parse words
    const words = input.split(',')
        .map(w => w.trim())
        .filter(w => /^[A-Z]+$/.test(w) && w.length === selectedLength);

    customWords = words;

    if (words.length > 0) {
        preview.classList.remove('hidden');
        tagsContainer.innerHTML = words.map(word =>
            `<span class="word-tag">${word}</span>`
        ).join('');
    } else {
        preview.classList.add('hidden');
    }

    updateSelectedCount();
}

// =============================================
// LINK GENERATION
// =============================================
function getAllSelectedWords() {
    const allWords = [...selectedWords, ...customWords];
    // Remove duplicates
    return [...new Set(allWords)];
}

function updateSelectedCount() {
    const count = getAllSelectedWords().length;
    document.getElementById('selected-count').textContent = count;
}

function generateLink() {
    const allWords = getAllSelectedWords();

    if (allWords.length === 0) {
        alert('Please select at least one word!');
        return;
    }

    const baseUrl = window.location.href.replace('teacher.html', 'index.html');
    const url = `${baseUrl}?length=${selectedLength}&words=${allWords.join(',')}`;

    document.getElementById('game-link').value = url;
    document.getElementById('link-output').classList.remove('hidden');
}

function copyLink() {
    const linkInput = document.getElementById('game-link');
    linkInput.select();
    document.execCommand('copy');

    // Visual feedback
    const copyBtn = document.getElementById('copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<span class="copy-icon">✓</span>';
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 1500);
}

function openGame() {
    const url = document.getElementById('game-link').value;
    if (url) {
        window.open(url, '_blank');
    }
}

// =============================================
// SAVED LISTS
// =============================================
function loadSavedLists() {
    const saved = localStorage.getItem('wordleTeacherLists');
    if (saved) {
        savedLists = JSON.parse(saved);
    }
}

function saveLists() {
    localStorage.setItem('wordleTeacherLists', JSON.stringify(savedLists));
}

function showSaveDialog() {
    document.getElementById('save-dialog').classList.remove('hidden');
    document.getElementById('list-name-input').value = '';
    document.getElementById('list-name-input').focus();
}

function hideSaveDialog() {
    document.getElementById('save-dialog').classList.add('hidden');
}

function confirmSave() {
    const name = document.getElementById('list-name-input').value.trim();
    if (!name) {
        alert('Please enter a name for your list.');
        return;
    }

    const allWords = getAllSelectedWords();

    savedLists.push({
        name: name,
        length: selectedLength,
        words: allWords,
        created: new Date().toISOString()
    });

    saveLists();
    renderSavedLists();
    hideSaveDialog();
}

function renderSavedLists() {
    const container = document.getElementById('saved-lists');
    const noListsMsg = document.getElementById('no-saved-lists');

    if (savedLists.length === 0) {
        container.innerHTML = '';
        noListsMsg.classList.remove('hidden');
        return;
    }

    noListsMsg.classList.add('hidden');

    container.innerHTML = savedLists.map((list, index) => `
        <div class="saved-list-item">
            <div class="saved-list-info">
                <span class="saved-list-name">${list.name}</span>
                <span class="saved-list-meta">${list.length}-letter • ${list.words.length} words</span>
            </div>
            <div class="saved-list-actions">
                <button class="load-btn" onclick="loadList(${index})">Load</button>
                <button class="play-btn" onclick="playList(${index})">Play</button>
                <button class="delete-btn" onclick="deleteList(${index})">🗑️</button>
            </div>
        </div>
    `).join('');
}

function loadList(index) {
    const list = savedLists[index];

    // Set the length
    selectedLength = list.length;
    document.querySelectorAll('.length-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.length) === selectedLength);
    });
    document.getElementById('length-hint').textContent = selectedLength;

    // Clear and set selected words
    selectedWords.clear();
    list.words.forEach(word => selectedWords.add(word));

    // Clear custom words
    customWords = [];
    document.getElementById('custom-words-input').value = '';
    document.getElementById('custom-words-preview').classList.add('hidden');

    renderSharedLists();
    updateSelectedCount();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function playList(index) {
    loadList(index);
    generateLink();
    openGame();
}

function deleteList(index) {
    if (confirm('Are you sure you want to delete this list?')) {
        savedLists.splice(index, 1);
        saveLists();
        renderSavedLists();
    }
}

// =============================================
// INITIALIZE
// =============================================
document.addEventListener('DOMContentLoaded', init);
