

const ChangeTheme = () => {
    const ChangeThemeButton= <button>+</button>;
    onclick((ChangeThemeButton)=>{
        if(ChangeThemeButton){
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
        
            // Toggle between light and dark themes
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
            // Update the data-theme attribute
            html.setAttribute('data-theme', newTheme);
        }
    });
};

export default ChangeTheme;
