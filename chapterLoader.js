document.addEventListener('DOMContentLoaded', () => {
    const chapterTitleElement = document.getElementById('chapter-title');
    const chapterMetaElement = document.getElementById('chapter-meta');
    const chapterContentElement = document.getElementById('chapter-content');
    const prevChapterBtn = document.getElementById('prev-chapter-btn');
    const nextChapterBtn = document.getElementById('next-chapter-btn');

    let currentStoryTitle = '';
    let currentChapterNumber = 1;
    const totalChapters = 3; // You can make this dynamic later if needed

    const fetchChapterContent = async (storyTitle, chapterNumber) => {
        const chapterFilePath = `stories/${storyTitle}/Chapter_${chapterNumber}.txt`;
        try {
            const response = await fetch(chapterFilePath);
            if (!response.ok) {
                throw new Error(`Chapter not found: ${response.statusText}`);
            }
            const content = await response.text();
            chapterContentElement.innerHTML = `<p>${content.replace(/\n/g, '</p><br><p>')}</p>`;

            // Update title and meta (you might fetch this from a JSON later)
            chapterTitleElement.textContent = `Chapter ${chapterNumber}: ${getChapterName(chapterNumber)}`;
            chapterMetaElement.textContent = `${storyTitle} | Posted on: March ${14 + chapterNumber}, 2024`; // Placeholder date

            updateNavigationButtons(chapterNumber);
        } catch (error) {
            console.error('Error fetching chapter:', error);
            chapterContentElement.innerHTML = '<p>Failed to load chapter content. Please try again later.</p>';
            chapterTitleElement.textContent = 'Error Loading Chapter';
            chapterMetaElement.textContent = '';
            prevChapterBtn.classList.add('disabled');
            nextChapterBtn.classList.add('disabled');
        }
    };

    const updateNavigationButtons = (chapterNumber) => {
        if (chapterNumber <= 1) {
            prevChapterBtn.classList.add('disabled');
            prevChapterBtn.style.pointerEvents = 'none'; // Disable clicks
        } else {
            prevChapterBtn.classList.remove('disabled');
            prevChapterBtn.style.pointerEvents = 'auto';
        }

        if (chapterNumber >= totalChapters) {
            nextChapterBtn.classList.add('disabled');
            nextChapterBtn.style.pointerEvents = 'none'; // Disable clicks
        } else {
            nextChapterBtn.classList.remove('disabled');
            nextChapterBtn.style.pointerEvents = 'auto';
        }
    };

    const getChapterName = (chapterNumber) => {
        switch (chapterNumber) {
            case 1:
                return "The Beginning";
            case 2:
                return "Whispers of the Grove";
            case 3:
                return "The Ancient Guardian";
            default:
                return "Unknown Chapter";
        }
    };

    // Handle initial load from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const storyFromUrl = urlParams.get('story');
    const chapterFromUrl = parseInt(urlParams.get('chapter'));

    if (storyFromUrl && !isNaN(chapterFromUrl)) {
        currentStoryTitle = decodeURIComponent(storyFromUrl);
        currentChapterNumber = chapterFromUrl;
        fetchChapterContent(currentStoryTitle, currentChapterNumber);
    } else {
        // Default load if no parameters are present (e.g., direct access to chapter.html)
        currentStoryTitle = "The Enchanted Forest"; // Fallback story title
        fetchChapterContent(currentStoryTitle, currentChapterNumber);
    }

    // Navigation button click handlers
    prevChapterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentChapterNumber > 1) {
            currentChapterNumber--;
            fetchChapterContent(currentStoryTitle, currentChapterNumber);
        }
    });

    nextChapterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (currentChapterNumber < totalChapters) {
            currentChapterNumber++;
            fetchChapterContent(currentStoryTitle, currentChapterNumber);
        }
    });

}); 