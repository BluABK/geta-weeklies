function fixText(txt) {
    // Trim whitespace.
    let fixedText = txt.trim();

    // Upper case first letter.
    fixedText = fixedText.charAt(0).toUpperCase() + fixedText.slice(1);

    return fixedText;
}