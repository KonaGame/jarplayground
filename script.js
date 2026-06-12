document.addEventListener("DOMContentLoaded", async () => {
    const versionSelect = document.getElementById("javaVersion");
    const jarFileInput = document.getElementById("jarFile");
    const statusText = document.getElementById("status");
    const container = document.getElementById("container");
    const placeholder = document.getElementById("placeholder");

    // 1. Check for a version selection stored in the URL hash (defaults to Java 8)
    let currentVersion = window.location.hash.replace("#", "") || "8";
    if (!["8", "11", "17"].includes(currentVersion)) {
        currentVersion = "8";
    }
    versionSelect.value = currentVersion;

    // 2. Initialize the heavy CheerpJ WebAssembly environment
    statusText.innerText = `Initializing Java ${currentVersion} Runtime...`;
    try {
        await cheerpjInit({ 
            version: parseInt(currentVersion),
            status: "default" 
        });
        statusText.innerText = `Java ${currentVersion} Ready`;
    } catch (err) {
        statusText.innerText = "Initialization Failed";
        console.error(err);
    }

    // 3. Dropdown change triggers a page reload with the new hash
    versionSelect.addEventListener("change", () => {
        window.location.hash = versionSelect.value;
        window.location.reload();
    });

    // 4. File input logic to load and run the executable JAR
    jarFileInput.addEventListener("change", async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        placeholder.style.display = "none";
        statusText.innerText = `Loading ${file.name}...`;

        // Turn the local file object into a virtual object URL
        const blobUrl = URL.createObjectURL(file);

        // Sets up the visual canvas area for graphical (AWT/Swing) Java apps
        cheerpjCreateDisplay(1024, 768, container);

        try {
            statusText.innerText = `Running ${file.name}...`;
            // Fire up the JAR execution
            await cheerpjRunJar(blobUrl);
            statusText.innerText = "Application Running";
        } catch (error) {
            statusText.innerText = "Error running JAR file";
            console.error(error);
        }
    });
});
