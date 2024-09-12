const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent the default behavior of the event
    event.preventDefault();
    // Store the event for later use
    const installPromptEvent = event;
    // Show the install button
    butInstall.style.display = 'block';
    // Handle the click event on the install button
    butInstall.addEventListener('click', async () => {
        // Show the installation prompt
        installPromptEvent.prompt();
        // Wait for the user to respond to the prompt
        const choiceResult = await installPromptEvent.userChoice;
        // Log the user's choice
        console.log(`User choice: ${choiceResult.outcome}`);
        // Hide the install button
        butInstall.style.display = 'none';
    });
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Show the installation prompt
    installPromptEvent.prompt();
    // Wait for the user to respond to the prompt
    const choiceResult = await installPromptEvent.userChoice;
    // Log the user's choice
    console.log(`User choice: ${choiceResult.outcome}`);
    // Hide the install button
    butInstall.style.display = 'none';
});

// TODO: Add an event handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Log the event
    console.log('Jate has been installed!', event);
    // Hide the install button
    butInstall.style.display = 'none';
});
