function fixText(txt) {
    // Trim whitespace.
    let fixedText = txt.trim();

    // Upper case first letter, lower case all the rest.
    fixedText = fixedText.charAt(0).toUpperCase() + fixedText.slice(1).toLowerCase();

    return fixedText;
}