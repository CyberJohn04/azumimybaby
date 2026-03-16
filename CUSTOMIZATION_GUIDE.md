# Romantic Birthday Website - Customization Guide

Welcome! This guide will help you customize every aspect of your romantic birthday website. All the content you need to change is clearly marked in the code.

## Quick Start

The website is built with React, TypeScript, and Tailwind CSS. The main file you'll be editing is:
- **`client/src/pages/Home.tsx`** - This is where all the content lives

## Design Philosophy

Your website follows the **Ethereal Romance** design approach:
- **Colors**: Soft blush pink (#FFF0F5), rose gold (#B76E79), cream white (#FFFAF0)
- **Typography**: Playfair Display (elegant headers), Lora (warm body text), Poppins (modern CTAs)
- **Aesthetic**: Elegant, intimate, magical with subtle animations and floating hearts

---

## How to Customize Content

### 1. **Change the Love Start Date** (for the Days Counter)

**Location**: `client/src/pages/Home.tsx`, line ~85

```typescript
// LOVE START DATE - Change this to the date you started loving her
const LOVE_START_DATE = new Date('2020-01-15');
```

**How to change**: Replace `'2020-01-15'` with the date you started loving her in format `'YYYY-MM-DD'`

**Example**:
```typescript
const LOVE_START_DATE = new Date('2023-06-20');
```

---

### 2. **Change the Birthday Message**

**Location**: `client/src/pages/Home.tsx`, line ~90

```typescript
// BIRTHDAY MESSAGE - Edit this heartfelt message
const BIRTHDAY_MESSAGE = `My Dearest Love,

Today is your special day...`;
```

**How to change**: Replace the entire text between the backticks with your own message. You can write as much as you want!

**Tips**:
- Use `\n\n` to create paragraph breaks
- Keep it heartfelt and personal
- The text will be displayed with nice formatting

---

### 3. **Change the Photo Gallery Images**

**Location**: `client/src/pages/Home.tsx`, line ~110

```typescript
// PHOTO GALLERY - Replace these image URLs with your own photos
const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1516962278756-18f3c5f0b009?w=500&h=500&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop',
  // ... more images
];
```

**How to change**: Replace the URLs with your own image links

**Where to get images**:
- **Use your own photos**: Upload them to a service like Imgur (https://imgur.com), Google Photos, or Cloudinary and use the direct link
- **Use free stock photos**: Unsplash (https://unsplash.com), Pexels (https://pexels.com), or Pixabay (https://pixabay.com)

**Example with your own photo**:
```typescript
const GALLERY_IMAGES = [
  'https://imgur.com/your-photo-id.jpg',
  'https://imgur.com/another-photo-id.jpg',
];
```

---

### 4. **Add or Edit Memories in the Timeline**

**Location**: `client/src/pages/Home.tsx`, line ~120

```typescript
// MEMORIES TIMELINE - Add your memories here
const MEMORIES = [
  {
    date: 'January 15, 2020',
    title: 'The Day We Met',
    message: 'The moment I saw you...',
    image: 'https://images.unsplash.com/...',
  },
  // ... more memories
];
```

**How to change**:
- Add new memories by copying a memory block and changing the values
- Change `date`, `title`, and `message` to your own memories
- Replace `image` URLs with your own photos

**Example**:
```typescript
const MEMORIES = [
  {
    date: 'February 14, 2021',
    title: 'Valentine\'s Day',
    message: 'The most romantic day we spent together',
    image: 'https://imgur.com/your-photo.jpg',
  },
  {
    date: 'July 4, 2021',
    title: 'Summer Adventure',
    message: 'We had the best time at the beach',
    image: 'https://imgur.com/beach-photo.jpg',
  },
];
```

---

### 5. **Change the Background Music**

**Location**: `client/src/pages/Home.tsx`, line ~165

```typescript
// BACKGROUND MUSIC - Replace with your own music URL
const BACKGROUND_MUSIC_URL = 'https://www.bensound.com/bensound-music/bensound-romantic.mp3';
```

**How to change**: Replace the URL with a link to your own romantic music

**Where to get music**:
- **Free royalty-free music**: 
  - Bensound (https://www.bensound.com/)
  - Zapsplat (https://www.zapsplat.com/)
  - Free Music Archive (https://freemusicarchive.org/)
  - YouTube Audio Library (https://www.youtube.com/audiolibrary)
- **Your own music**: Upload to a service and use the direct link

**Important**: Make sure the music file is in a format that browsers support (MP3, WAV, OGG)

---

### 6. **Change the Final Love Letter**

**Location**: `client/src/pages/Home.tsx`, line ~170

```typescript
// FINAL LOVE LETTER - Write your long birthday message here
const FINAL_LOVE_LETTER = `My Most Beautiful Girl,

As I sit down to write this...`;
```

**How to change**: Replace the entire text with your own long birthday letter. This is the final section, so make it extra special!

**Tips**:
- This is the most important message - take your time writing it
- You can write as much as you want
- Be personal, emotional, and sincere

---

## How to Change Colors

If you want to change the color scheme from the romantic pink/rose gold to something else:

**Location**: `client/src/index.css`, lines ~45-80

```css
:root {
  /* Romantic color palette */
  --primary: #d8a5a5;           /* Rose gold */
  --background: #fffaf8;         /* Cream white */
  --accent: #d8a5a5;             /* Rose gold accent */
  /* ... more colors */
}
```

**Popular color combinations**:

**Romantic Purple**:
```css
--primary: #c9a5d8;
--accent: #b76eb7;
--background: #faf8ff;
```

**Elegant Gold**:
```css
--primary: #d4af37;
--accent: #d4af37;
--background: #fffef9;
```

**Modern Coral**:
```css
--primary: #ff8a80;
--accent: #ff8a80;
--background: #fff5f4;
```

---

## How to Change Fonts

The website uses three beautiful fonts:
- **Playfair Display** - For headings (elegant, serif)
- **Lora** - For body text (warm, readable)
- **Poppins** - For buttons (modern, sans-serif)

To change fonts, edit `client/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

**Popular font combinations**:

**Romantic Serif**:
```html
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lora:wght@400;500;600&family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Then update `client/src/index.css`:
```css
h1, h2, h3, h4, h5, h6 {
  font-family: 'Cormorant Garamond', serif;
}
```

---

## Website Sections Explained

### Hero Section
- **What it shows**: Full-screen welcome with animated hearts
- **What to customize**: The main heading is fixed, but you can change the background by editing the image URL

### Love Message Section
- **What it shows**: Your heartfelt birthday message with floating hearts
- **What to customize**: The `BIRTHDAY_MESSAGE` variable

### Photo Gallery
- **What it shows**: A grid of your photos that open in a lightbox when clicked
- **What to customize**: The `GALLERY_IMAGES` array with your own photo URLs

### Memories Timeline
- **What it shows**: A timeline of important moments in your relationship
- **What to customize**: The `MEMORIES` array with your own dates, titles, messages, and photos

### Love Counter
- **What it shows**: The number of days since you started loving her
- **What to customize**: The `LOVE_START_DATE` to calculate the correct number

### Confetti Surprise
- **What it shows**: A button that triggers heart confetti and burst animations
- **What to customize**: The message displayed (currently "I Love You So Much ❤️")

### Final Section
- **What it shows**: A beautiful ending with your long love letter
- **What to customize**: The `FINAL_LOVE_LETTER` with your own message

---

## Features Explained

### Floating Hearts
Hearts gently float up and down throughout the website. This is automatic and creates a magical atmosphere.

### Music Player
The music icon in the top-right corner plays/pauses your background music. Users can click it to control the music.

### Lightbox Gallery
Click any photo in the gallery to view it in full size. Click the X or outside the image to close it.

### Confetti Animation
When users click the "Surprise Me!" button, hearts and confetti explode across the screen with a magical effect.

### Smooth Scrolling
The "Open My Surprise" button smoothly scrolls to the next section. All scrolling is smooth and elegant.

### Responsive Design
The website looks beautiful on mobile phones, tablets, and desktops. All text and images automatically adjust to fit the screen size.

---

## Tips for the Best Results

1. **Use high-quality photos**: The gallery looks best with clear, well-lit photos
2. **Keep messages personal**: The more personal and specific your messages, the more meaningful they'll be
3. **Choose good music**: Pick romantic, instrumental music that fits the mood
4. **Test on mobile**: Open the website on your phone to make sure everything looks good
5. **Proofread carefully**: Check for typos in your messages before showing her
6. **Use consistent photo style**: Try to use photos with similar lighting and color tone for the gallery

---

## Troubleshooting

### Images not showing?
- Make sure the image URL is correct and accessible
- Try using a different image URL
- Use services like Imgur or Unsplash for reliable image hosting

### Music not playing?
- Make sure the music URL is correct
- Try a different music file
- Check that the file format is supported (MP3, WAV, OGG)

### Text looks wrong?
- Check that you didn't accidentally delete any backticks or quotes
- Make sure you're editing the correct variable
- Refresh the page in your browser

### Colors look different?
- Different browsers might display colors slightly differently
- Try clearing your browser cache
- Test in a different browser

---

## Need Help?

If you need to make more advanced changes:
- The main component is in `client/src/pages/Home.tsx`
- Styles are in `client/src/index.css` and `client/src/styles/home.css`
- The React component uses hooks like `useState` and `useEffect` for interactivity

Good luck, and I hope your girlfriend loves the website! ❤️
