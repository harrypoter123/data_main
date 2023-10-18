document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("post-button-twitter").addEventListener("click", postToTwitter);
});

async function postToTwitter() {
    const tweetText = 'Check out this news article: https://www.lokshahi.com/news/lokshahi-politics/ashish-shelar-on-uddhav-thackeray-5';

    try {
        const response = await fetch('https://data-main.onrender.com/post-to-twitter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ tweetText }),
        });

        if (response.status === 200) {
            console.log('Successfully posted to Twitter!');
        } else {
            console.error('Failed to post to Twitter:', response.statusText);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
