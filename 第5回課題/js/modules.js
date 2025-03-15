/**
 * Simple Module Management System
 */
const TechElite = (function() {
    const _modules = {};
    
    return {
        modules: _modules,  // モジュールを外部からアクセス可能にする
        
        /**
         * Register a new module
         * @param {string} name - Module name
         * @param {function} moduleFunc - Module initialization function
         */
        registerModule: function(name, moduleFunc) {
            if (_modules[name]) {
                console.warn(`Module ${name} is already registered. Overwriting...`);
            }
            _modules[name] = moduleFunc();  // モジュールを初期化して格納
        },
        
        /**
         * Initialize all registered modules or specific modules
         * @param {Array} moduleNames - Optional array of module names to initialize, if not provided all will be initialized
         */
        init: function(moduleNames = null) {
            document.addEventListener('DOMContentLoaded', function() {
                if (moduleNames === null) {
                    // Initialize all modules
                    Object.keys(_modules).forEach(moduleName => {
                        if (typeof _modules[moduleName].init === 'function') {
                            _modules[moduleName].init();
                        }
                    });
                } else if (Array.isArray(moduleNames)) {
                    // Initialize only specified modules
                    moduleNames.forEach(moduleName => {
                        if (_modules[moduleName] && typeof _modules[moduleName].init === 'function') {
                            _modules[moduleName].init();
                        } else {
                            console.error(`Module ${moduleName} is not registered or does not have an init method.`);
                        }
                    });
                }
            });
        }
    };
})();