# A Birthday Site for Ashina 🌸

A little multi-page birthday website — an envelope to open, a letter, a
flip-card list of reasons, a blooming flower garden, a Pinterest-style
memory board, and a cake-and-confetti finale.

## How to open it
Just double-click **index.html** and it opens in your browser. No install,
no server needed. Works completely offline except for the two Google Fonts
used for the headings/script text (if you're offline those will fall back
to a normal serif/cursive font instead).

## How to share it with her
The easiest way: zip the whole folder (or keep this one) and send it to
her, or open it yourself and share your screen. If you want a real link
you can send her, drag this folder onto **netlify.com/drop** (free, no
account needed) and it'll give you a shareable URL in seconds. GitHub
Pages works too if you're comfortable with that.

## Pages
- `index.html` – the envelope cover / entry point
- `home.html` – hub with cards linking to every section
- `letter.html` – the birthday letter
- `reasons.html` – 15 flip-cards, "reasons I love you"
- `garden.html` – the animated flower garden (click the flowers!)
- `memories.html` – Pinterest-style photo board (placeholders for now)
- `surprise.html` – the cake / candle / confetti finale

## Making it yours
Everything is plain HTML, so it's easy to edit in any text editor.

- **Letter text** — open `letter.html`, edit the paragraphs inside
  `<div class="letter-body">`.
- **Reasons list** — open `reasons.html`, each reason lives inside a
  `<div class="flip-face flip-back">…</div>`.
- **Real photos** — open `memories.html`. Each placeholder card looks like:
  ```html
  <div class="mem-photo h-lg"> ... </div>
  ```
  Replace the whole `<div class="mem-photo ...">…</div>` with:
  ```html
  <img src="images/your-photo.jpg" style="width:100%;display:block;">
  ```
  and drop your photo files into the `images/` folder. Keep the
  `<p class="mem-cap">caption</p>` line under it, or change the caption.
- **Colors** — three palettes are already built in (the three dots in the
  top-right of the nav bar: Rosewood / Lilac Dusk / Sage Garden). To change
  the defaults, edit the `:root { … }` block at the top of `css/style.css`.
- **Background music (optional)** — add an MP3 to the `images/` folder (or
  a new `audio/` folder) and add this near the bottom of any page's
  `<body>`, just before the `<script>` tag:
  ```html
  <audio src="audio/song.mp3" autoplay loop></audio>
  ```
  Note: most browsers block autoplay-with-sound until the user interacts
  with the page once (a click on the envelope counts).

## Notes
- Built with plain HTML, CSS and JavaScript — no build step, no
  dependencies to install.
- Respects `prefers-reduced-motion` and is responsive down to mobile.
- The little color dots and page transitions are saved in the browser's
  local storage, so her theme choice will stick between visits.

Happy birthday, Ashina — hope she loves it. 🤍
— made for Shadman
