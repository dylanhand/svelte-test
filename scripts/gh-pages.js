const ghpages = await import('gh-pages');

console.log("Deploying to GitHub Pages...");

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        silent: true,
        dotfiles: true,
        user: {
            name: 'Dylan Hand',
            email: 'dylan.hand@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
);