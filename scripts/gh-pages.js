const ghpages = await import('gh-pages');
const fs = await import('fs');

fs.writeFileSync('./build/.nojekyll', '', function (err, file) {
    if (err) console.log(err);
    console.log(`Wrote .nojekyll file in build folder: ${file}`);
});

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