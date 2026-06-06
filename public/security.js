document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});

document.addEventListener("keydown", (e) => {
    const blockedKeys = [
        "F12",
        "F11"
    ];

    if (
        blockedKeys.includes(e.key) ||
        (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
        (e.ctrlKey && e.key.toLowerCase() === "u")
    ) {
        e.preventDefault();
        e.stopPropagation();
    }
});