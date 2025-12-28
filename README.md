# Costa Rica Butterfly Emporium

A wholesale butterfly specimen catalogue website featuring 8 Costa Rican butterfly species. Built with a Kinfolk magazine-inspired editorial aesthetic.

## Features

- **Trilingual Support**: English, Spanish, and Japanese with seamless toggle
- **Responsive Design**: 
  - Mobile/Tablet: 1 card per row
  - Desktop: 4 cards per row
- **Kinfolk Aesthetic**: Minimalist, editorial design with elegant serif typography
- **8 Authentic Species**: Blue Morpho, Giant Owl, Glasswing, Malachite, Postman, Sara Longwing, Julia Heliconian, and Zebra Longwing
- **GitHub Pages Ready**: Static HTML/CSS/JS - no build step required

## File Structure

```
butterfly-emporium/
├── index.html      # Main HTML with trilingual data attributes
├── styles.css      # Kinfolk-inspired CSS with responsive grid
├── script.js       # Language toggle and animations
└── README.md       # This file
```

## Quick Start

Simply open `index.html` in a browser to preview locally.

---

## GitHub Pages Deployment Instructions

### Prerequisites

1. **Git installed** - Download from https://git-scm.com/downloads
2. **GitHub account** - Sign up at https://github.com
3. **PowerShell** (Windows) or Terminal (Mac/Linux)

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `costa-rica-butterfly-emporium` (or your preferred name)
3. Description: `Wholesale butterfly specimen catalogue - Kinfolk aesthetic`
4. Select **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license (we'll push existing files)
6. Click **Create repository**

### Step 2: PowerShell Commands

Open PowerShell and navigate to your project folder, then run these commands:

```powershell
# Navigate to your project folder (adjust path as needed)
cd C:\Users\YourName\Projects\butterfly-emporium

# Initialize Git repository
git init

# Add all files to staging
git add .

# Create initial commit
git commit -m "Initial commit: Costa Rica Butterfly Emporium catalogue"

# Rename branch to 'main' (GitHub default)
git branch -M main

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/costa-rica-butterfly-emporium.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (gear icon)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes for deployment

Your site will be live at:
```
https://YOUR_USERNAME.github.io/costa-rica-butterfly-emporium/
```

---

## Customizing Images

The current images use Unsplash URLs. To use your own images:

1. Create an `images/` folder in your project
2. Add your butterfly photos (recommended: 600x750px or similar 4:5 ratio)
3. Update the `src` attributes in `index.html`:

```html
<!-- Before -->
<img src="https://images.unsplash.com/photo-..." alt="Blue Morpho Butterfly">

<!-- After -->
<img src="images/blue-morpho.jpg" alt="Blue Morpho Butterfly">
```

4. Commit and push changes:

```powershell
git add .
git commit -m "Add custom butterfly images"
git push
```

---

## Updating Content

### Adding/Editing Butterflies

Each card in `index.html` follows this structure:

```html
<article class="card">
    <div class="card-image">
        <img src="IMAGE_URL" alt="Butterfly Name" loading="lazy">
        <span class="card-badge" data-en="Badge EN" data-es="Badge ES" data-ja="Badge JA">Badge EN</span>
    </div>
    <div class="card-content">
        <p class="card-latin">Scientific Name</p>
        <h3 class="card-title" data-en="Name EN" data-es="Name ES" data-ja="Name JA">Name EN</h3>
        <p class="card-description" data-en="Description EN" data-es="Description ES" data-ja="Description JA">Description EN</p>
        <div class="card-specs">
            <!-- Specs here -->
        </div>
    </div>
</article>
```

### Translation Keys

All translatable text uses data attributes:
- `data-en` - English
- `data-es` - Spanish  
- `data-ja` - Japanese

The JavaScript automatically swaps text content when language is changed.

---

## Common PowerShell Commands

```powershell
# Check current status
git status

# View commit history
git log --oneline

# Pull latest changes (if working on multiple machines)
git pull

# Create a new branch for changes
git checkout -b feature/new-butterflies

# Switch back to main branch
git checkout main

# Merge feature branch into main
git merge feature/new-butterflies
```

---

## Troubleshooting

### "fatal: remote origin already exists"
```powershell
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/costa-rica-butterfly-emporium.git
```

### GitHub Pages not updating
- Wait 2-5 minutes for cache to clear
- Check **Actions** tab for deployment status
- Try hard refresh: `Ctrl + Shift + R`

### Images not loading
- Verify image URLs are accessible
- Check for CORS issues with external images
- Use relative paths for local images

---

## Tech Stack

- **HTML5** - Semantic markup with accessibility features
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - No dependencies
- **Fonts** - Cormorant Garamond (serif) + Karla (sans-serif) via Google Fonts

---

## License

This is a mockup/demonstration project. Butterfly information sourced from Costa Rica tourism and entomological resources. Images from Unsplash (free to use).

---

## Credits

- Design inspiration: Kinfolk Magazine
- Butterfly research: Costa Rica Entomological Supply, La Paz Waterfall Gardens
- Typography: Google Fonts
- Built by James with Claude AI assistance
