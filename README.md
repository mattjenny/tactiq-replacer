# Tactiq Text Replacer

A Chrome extension that replaces specific Tactiq automated messages on Google Meet pages with random fun facts.

## What it does

When this extension detects the Tactiq automated message:
> "Hi everyone, this is an automated message to let you know my Tactiq extension: https://tactiq.io/r/transcribing is transcribing this meeting for me so I can give my full attention to you."

It replaces it with:
> "[FACTBOT]: [random fact]"

## Installation

1. **Download/Clone this repository** to your local machine

2. **Open Chrome Extensions page:**
   - Type `chrome://extensions/` in your address bar, OR
   - Click the three dots menu → More Tools → Extensions

3. **Enable Developer mode:**
   - Toggle "Developer mode" on (top right corner)

4. **Load the extension:**
   - Click "Load unpacked"
   - Select the folder containing this extension's files

5. **Verify installation:**
   - You should see "Tactiq Text Replacer" in your extensions list
   - Make sure it's enabled (toggle switch is blue)

## Usage

The extension works automatically on Google Meet pages. Simply:

1. Visit any Google Meet page that contains the target Tactiq message
2. The extension will automatically replace the message with a random fact
3. Each time the message appears, it will be replaced with a different random fact

## Files

- `manifest.json` - Extension configuration
- `content.js` - Main script that performs text replacement
- `facts.txt` - Database of fun facts
- `README.md` - This file

## Credits

The facts used in this extension are sourced from [fact-bot](https://github.com/anfederico/fact-bot) by @anfederico.

## Privacy

This extension:
- Only runs on Google Meet pages (`meet.google.com`)
- Does not collect or transmit any data
- Only modifies text content locally in your browser
- Requires minimal permissions (`activeTab`)