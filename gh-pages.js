var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/kyr-min/8thSunrinthon.git', // Update to point to your repository  
        user: {
            name: 'Kyr-min', // update to use your name
            email: 'alsrudfhr1357246@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)