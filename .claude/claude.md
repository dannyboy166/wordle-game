# Wordle - SASCO Games Edition

## Project Context

This is one of **4 games** being integrated into Victor's **SASCO student/teacher portal platform** for schools.

### Portal Overview
The SASCO portal is a student/teacher platform where:
- **Teachers** can assign homework, set questions, and track student progress
- **Students** complete educational activities and earn "free time" credits
- **Games** are categorized as:
  - **Educational** - Learning games (can be assigned as homework)
  - **Free time rewards** - Games unlocked by completing educational tasks
  - **Time earners** - Games that generate free time credits when played

### The 4 Games

1. **MathCrush2** (Unity WebGL) - **Educational + Time Earner**
   - Equation-based math game
   - Earns students free time credits for solving equations
   - Currently in active integration with Victor (Phase 1: launch testing)
   - Location: Azure DevOps MathGame repo

2. **Wordle** (React) - **Educational** ← **THIS GAME**
   - Daily word puzzle for vocabulary/spelling practice
   - Teachers can assign custom word lists as homework
   - Location: `/Users/danielsamus/wordle-game`
   - Live: https://dannyboy166.github.io/wordle-game/

3. **Kangaroo Hop** (Phaser.js) - **Free Time Reward**
   - Endless runner game
   - Students play this after earning free time
   - Location: `/Users/danielsamus/my-kangaroo-game`
   - Live: https://dannyboy166.github.io/my-kangaroo-game/

4. **2048** (Vanilla JS) - **Free Time Reward**
   - Number puzzle game
   - Students play this after earning free time
   - Location: `/Users/danielsamus/2048-game`
   - Live: https://dannyboy166.github.io/2048-game/

### Central Planning
**All integration planning is coordinated at:**
`/Users/danielsamus/sasco-games-portal/`

This folder contains:
- Overall roadmap and integration plan (README.md)
- Task tracking (TASKS.md)
- Claude context for the full project (.claude/claude.md)

**Always check the central planning folder for:**
- Integration requirements and timeline
- Victor's technical specifications
- Progress tracking across all 4 games

---

## This Game: Wordle

### Current Status (2025-11-18)
- ✅ Game is complete and deployed
- ✅ Live on GitHub Pages
- ⏳ Waiting for Mum's approval before Victor integration
- 🔨 Needs optimization/features before portal integration

### Role in Portal
**Educational game - Vocabulary/Spelling practice**

**Key Educational Feature:**
- Teachers can assign custom word lists to students as homework
- Example: "Complete this week's spelling words in Wordle"
- Students must guess teacher-selected words instead of daily random words

### Integration Requirements (from Victor's MathCrush2 pattern)

**Phase 1: Basic Launch**
- Read URL parameters: `?studentId=X&sessionId=Y&token=Z`
- Embed in iframe within portal
- Add "Return to Portal" button

**Phase 2: Teacher Customization (Key Feature)**
- URL parameter for custom word list: `?wordList=encoded_words`
- Teachers can assign specific vocabulary words
- Track which words were completed

**Phase 3: Progress Tracking (Optional)**
- JS Interop to Victor's API (Victor provides the code)
- Track: words completed, attempts, success rate
- Store in Victor's database for teacher analytics

### Technical Architecture

**Tech Stack:**
- React 18
- TypeScript
- Tailwind CSS
- Create React App build system

**Source Code Location:**
The game is built from `/Users/danielsamus/wordle` (source) and compiled to `/Users/danielsamus/wordle-game` (production build).

**Important Files:**
- `wordle-game/index.html` - Entry point (production build)
- `wordle-game/static/js/` - Compiled React bundle
- `wordle-game/README.md` - User-facing documentation
- `wordle-game/SASCO-SETUP.md` - SASCO customization notes

**Word System:**
- Daily words: Algorithm picks word based on days since Jan 1, 2022
- Word list: 14,854 English 5-letter words (from official Wordle)
- Location: Embedded in compiled JS bundle (originally `wordle/src/constants/wordlist.ts`)

### Features Needed Before Portal Integration

**Priority 1: Teacher Word Assignment**
Design decisions needed:
- How do teachers create/assign word lists?
- URL parameter format for custom words?
- Mode selection: Daily vs. Teacher-assigned vs. Both?
- Does Victor's platform provide word list management, or do we build it?

**Priority 2: URL Parameter Support**
- Read `studentId`, `sessionId`, `token` from URL
- Read `wordList` parameter for teacher-assigned words
- Parse and validate parameters on game load

**Priority 3: Return to Portal Button**
- Add UI button to exit game
- Use `window.parent.postMessage()` to notify portal
- Or direct navigation to portal URL

**Priority 4: Progress Tracking (Optional)**
- Integrate Victor's JS Interop code (when provided)
- Track completion, attempts, time spent
- Send data to Victor's API with token authentication

### Development Workflow

**To modify the game:**
1. Work in `/Users/danielsamus/wordle` (source code)
2. Edit TypeScript files in `src/`
3. Run `npm run build`
4. Copy build output to `/Users/danielsamus/wordle-game`
5. Test at https://dannyboy166.github.io/wordle-game/
6. Commit and push to GitHub Pages

**To add features:**
- Check `/Users/danielsamus/sasco-games-portal/TASKS.md` for current priorities
- Reference Victor's MathCrush2 integration emails for technical specs
- Follow Victor's "small steps" approach - launch first, add features later

### Key Contacts

- **Victor** (Victor@eStreet.com.au) - Portal platform developer
- **Julie/Mum** (juliesamus@bigpond.com) - Educational requirements, teacher perspective
- **Daniel** (samus.daniel@gmail.com) - Developer

### Next Steps (from central plan)

1. Get Mum's approval for including Wordle in portal
2. Discuss teacher word assignment feature design with Mum
3. Implement URL parameter support
4. Add "Return to Portal" button
5. Wait for Victor's integration specs (after MathCrush2 launch)
6. Implement teacher customization feature
7. Test in Victor's staging environment
8. Launch to schools

### Important Notes

- **Don't rush** - Optimize before showing Victor
- **Follow MathCrush2 pattern** - Victor's approach is proven
- **Teacher-first design** - Mum's input is critical for educational features
- **Small steps** - Get basic launch working, then add features
- **Keep it simple** - Teachers need easy word assignment, not complex UIs

### Related Documentation

- **Central plan**: `/Users/danielsamus/sasco-games-portal/README.md`
- **Task tracking**: `/Users/danielsamus/sasco-games-portal/TASKS.md`
- **Victor's emails**: See central `.claude/claude.md` for MathCrush2 integration details
- **This game's README**: `README.md` (user-facing)
- **Setup notes**: `SASCO-SETUP.md` (SASCO branding customizations)

---

**When working on this game, always consider:**
- How does this feature help teachers?
- Does it align with Victor's integration pattern?
- Is the plan documented in `/Users/danielsamus/sasco-games-portal/`?
- Have we discussed this with Mum (teacher perspective)?
