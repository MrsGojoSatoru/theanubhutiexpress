# Author's Portfolio Website

A beautiful and dreamy website for authors to showcase their stories and chapters. This website is designed to provide a Wattpad-like reading experience while maintaining a professional and elegant appearance.

## Features

- Responsive design that works on all devices
- Beautiful hero section with gradient background
- Featured stories section with story cards
- Latest updates section for new chapters
- Social media integration
- Clean and readable typography
- Dreamy color scheme

## How to Use

1. Replace "Author's Name" in the HTML file with your actual name
2. Add your stories to the featured stories section
3. Update the latest updates section with your new chapters
4. Customize the colors in the CSS file (look for the `:root` section)
5. Add your social media links in the footer
6. Replace the placeholder images with your story covers

## Customization

### Colors
The website uses a dreamy purple color scheme by default. You can change the colors by modifying the CSS variables in the `:root` section of `styles.css`:

```css
:root {
    --primary-color: #6b4fbb;
    --secondary-color: #9b6bff;
    --text-color: #333;
    --light-bg: #f9f7ff;
    --white: #ffffff;
}
```

### Adding New Stories
To add a new story, copy the story card template in the HTML file:

```html
<article class="story-card">
    <div class="story-cover">
        <img src="your-cover-image.jpg" alt="Story Cover">
    </div>
    <div class="story-info">
        <h3>Story Title</h3>
        <p class="story-excerpt">Your story description...</p>
        <div class="story-meta">
            <span><i class="fas fa-book"></i> Number of Chapters</span>
            <span><i class="fas fa-heart"></i> Read Count</span>
        </div>
        <a href="story-link" class="read-more">Read Now</a>
    </div>
</article>
```

### Adding New Chapters
To add a new chapter update, use this template:

```html
<article class="update-card">
    <h3>Chapter Title</h3>
    <p class="update-meta">Posted on: Date</p>
    <p class="update-excerpt">Chapter excerpt...</p>
    <a href="chapter-link" class="read-more">Continue Reading</a>
</article>
```

## Browser Support

The website is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Placeholder.com for placeholder images

## License

Feel free to use and modify this template for your personal use. 