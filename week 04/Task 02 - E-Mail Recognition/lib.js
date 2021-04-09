function isEmailAddr(s) {
    let hasAt = false;
    let hasLeadingDot = false;
    let hasTrailingDot = false;

    if (s.includes('@')) {
        hasAt = true; 
        if (s.slice(0,s.indexOf('@')).includes('.')) hasLeadingDot = true;
        if (s.slice(s.indexOf('@')).includes('.')) hasTrailingDot = true;
    }

    return hasAt && hasLeadingDot && hasTrailingDot;
}