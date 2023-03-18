const ghpages = await import('gh-pages');


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