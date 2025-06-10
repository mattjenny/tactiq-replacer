let factsArray = [];

// Load facts from facts.txt
async function loadFacts() {
  try {
    const response = await fetch(chrome.runtime.getURL('facts.txt'));
    const text = await response.text();
    factsArray = text.split('\n')
      .map(line => line.trim())
      .filter(line => line.length > 0)
      .map(line => line.replace(/^\s*\d+\s*/, '')); // Remove line numbers
  } catch (error) {
    console.error('Failed to load facts:', error);
    factsArray = ["The speed of light is generally rounded down to 186,000 miles per second."]; // Fallback
  }
}

function getRandomFact() {
  if (factsArray.length === 0) {
    return "The speed of light is generally rounded down to 186,000 miles per second.";
  }
  const randomIndex = Math.floor(Math.random() * factsArray.length);
  return factsArray[randomIndex];
}

function replaceText() {
  // Look for divs that contain the Tactiq message
  const divs = document.querySelectorAll('div');
  
  divs.forEach(div => {
    const textContent = (div.textContent || div.innerText).trim();
    
    // Skip if we've already replaced this (starts with our factbot text)
    if (textContent.startsWith('[FACTBOT]:')) {
      return;
    }
    
    // Check if this div starts with the Tactiq message (much more performant)
    if (textContent.startsWith('Hi everyone, this is an automated message to let you know my Tactiq extension:')) {
      
      // Replace the entire div content with our fact
      const replacementText = `[FACTBOT]: ${getRandomFact()}`;
      div.innerHTML = replacementText;
    }
  });
}

// Load facts and start replacement
async function init() {
  await loadFacts();
  replaceText();
  
  // Set up observer to watch for dynamically added content
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === Node.ELEMENT_NODE || node.nodeType === Node.TEXT_NODE) {
          replaceText();
        }
      });
    });
  });

  // Start observing
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

// Initialize the extension
init();