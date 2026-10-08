# Baby's Fashions

A soft, light shoe shop website (demo). Plain HTML, CSS and JavaScript. No install needed.

## Folder structure

```
baby-fashions-site/
  index.html          page content (text, sections)
  css/style.css       all styles (desktop + mobile)
  js/
    helpers.js        small helper functions
    products.js       ALL product data (names, prices, sizes, images)
    cart.js           shopping cart (saved in the browser)
    ui.js             menu, product popup, search, checkout
    effects.js        camera effect on the home page shoe
    main.js           starts the app
  assets/images/      all shoe pictures
```

## Open it on your computer (VS Code)

1. Open the `baby-fashions-site` folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension.
3. Right-click `index.html` > **Open with Live Server**.

You can also just double-click `index.html`.

## Put it on GitHub and get a link (GitHub Pages)

1. Go to github.com and sign in. Click **New repository**. Name it, for example, `babys-fashions`. Keep it **Public**. Click **Create repository**.
2. Click **uploading an existing file**. Drag in everything that is INSIDE the `baby-fashions-site` folder (index.html, css, js, assets, README.md). Make sure the folders stay as folders. Click **Commit changes**.
3. Open **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**. Pick branch **main** and folder **/ (root)**. Click **Save**.
4. Wait 1 to 2 minutes. Your link will be:

   `https://YOUR-GITHUB-USERNAME.github.io/babys-fashions/`

### Or with Git commands (in the VS Code terminal)

```
git init
git add .
git commit -m "Baby's Fashions website"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/babys-fashions.git
git push -u origin main
```

Then do step 3 above.

## How to change things

- **Shop name, headlines, reviews, footer:** `index.html`
- **Products, prices, sizes, pictures:** `js/products.js` (put new pictures in `assets/images/`)
- **Colours, spacing, fonts:** `css/style.css`

## Notes

- This is a demo store. The cart and checkout do not take real payments.
- The font (Poppins) loads from Google Fonts, so it needs internet.
- Check that you have the right to use each product picture before sharing the site publicly.
