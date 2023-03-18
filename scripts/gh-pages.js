const ghpages = await import('gh-pages');
const dotenv = await import('dotenv');
const fs = await import('fs');

dotenv.config();

fs.writeFileSync('./build/.nojekyll', '', function (err, file) {
    if (err) console.log(err);
    console.log(`Wrote .nojekyll file in build folder: ${file}`);
});

ghpages.publish(
    'build',
    {
        branch: 'gh-pages',
        silent: true,
        // repo: 'https://' + process.env.GITHUB_TOKEN + '@github.com/dylanhand/svelte-test.git',
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