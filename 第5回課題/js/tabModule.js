/**
 * Tab Module - Handles all tab switching functionality
 */
TechElite.registerModule('tabs', function() {
  /**
   * Initialize tab functionality
   * @param {string} buttonSelector - CSS selector for tab buttons
   * @param {string} tabSelector - CSS selector for tab content panes
   */
  function initTabs(buttonSelector = '.tab-button', tabSelector = '.tab-pane') {
    const tabButtons = document.querySelectorAll(buttonSelector);
    const tabPanes = document.querySelectorAll(tabSelector);
    
    if (!tabButtons.length || !tabPanes.length) return;
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and panes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabPanes.forEach(pane => pane.classList.remove('active'));
        
        // Add active class to clicked button and corresponding pane
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        const targetTab = document.getElementById(tabId);
        
        if (targetTab) {
          targetTab.classList.add('active');
        }
      });
    });
  }
  
  // Initialize tabs
  initTabs();
  
  // Return public methods
  return {
    init: initTabs
  };
});