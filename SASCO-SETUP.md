# SASCO Wordle - Setup Guide

## What's Been Done

Your Wordle game for the SASCO school portal is ready! Here's what was customized:

### Changes Made:

1. **Branding**
   - Title changed to "Wordle - SASCO Games"
   - Added SASCO branding in About modal
   - Proper attribution to original creator (Hannah Park)

2. **Word List**
   - **Replaced French words with 14,854 English words**
   - Words sourced from the official Wordle game
   - All 5-letter English words suitable for students

3. **How Words Are Chosen**
   - **Daily word rotation** - New word every day!
   - Algorithm: Days since Jan 1, 2022 → picks word from list
   - Same word for everyone on the same day

4. **Legal/Attribution**
   - Kept original MIT LICENSE
   - Added attribution in About modal
   - 100% legal for school use

## File Structure

```
wordle-game/
├── index.html          (Main game file - OPEN THIS!)
├── LICENSE             (MIT license - REQUIRED)
├── README.md          (Game documentation)
├── SASCO-SETUP.md     (This file)
├── static/
│   ├── js/            (Game code including word list)
│   └── css/           (Styling)
├── manifest.json      (PWA config)
└── favicon.ico        (Game icon)
```

## How to Use

### To Play:
Simply open `index.html` in any web browser!

**Live version:** https://dannyboy166.github.io/wordle-game/

### To Add to Your Portal:
1. Copy the entire `wordle-game` folder to your school portal
2. Link to it from your games menu
3. That's it - it works standalone!

## Customization Options

### Change the Words:
Want to customize which words appear?

1. You'll need to edit the source in the `/Users/danielsamus/wordle` folder
2. Edit `src/constants/wordlist.ts`
3. Rebuild with `npm run build`
4. Copy build files to `wordle-game/`

### Change the Starting Date:
The game counts days since Jan 1, 2022 to pick words.
To change this, edit `src/lib/words.ts` line 13 (epochMs value)

### Change Colors:
The game uses Tailwind CSS. To change colors, you'd need to:
1. Edit the source files in `/Users/danielsamus/wordle`
2. Rebuild the project
3. Redeploy

## Game Features

- ✅ Daily word puzzles (new word every 24 hours)
- ✅ 6 guesses to find the word
- ✅ Green/yellow/gray tile feedback
- ✅ On-screen keyboard
- ✅ Mobile-friendly
- ✅ Works offline after first load
- ✅ Saves your progress

## Educational Benefits

Perfect for:
- Spelling practice
- Vocabulary building
- Logic and deduction
- Problem-solving skills
- Morning warm-up activities
- Brain breaks

## Technical Details

**Built with:**
- React + TypeScript
- Tailwind CSS
- No server needed
- Pure static files

**Word List:**
- 14,854 English 5-letter words
- From official Wordle game source
- Safe for all ages

## Credits

**Original Wordle Clone:**
- Created by: Hannah Park
- Repository: https://github.com/hannahcode/wordle
- License: MIT

**Word List:**
- Source: Official Wordle game (via Tab Atkins Jr.)
- Repository: https://github.com/tabatkins/wordle-list

**SASCO Edition:**
- Customized for educational use
- Part of SASCO Games platform
- English word list integration

## Troubleshooting

**Game won't load:**
- Make sure you're opening the GitHub Pages URL or serving locally
- All files must be in the same folder structure

**Wrong words appearing:**
- The word changes daily based on your computer's date
- Everyone sees the same word on the same day

**Want to test different words:**
- You can modify the source code and rebuild

---

**SASCO Games** - Making learning fun for students!
