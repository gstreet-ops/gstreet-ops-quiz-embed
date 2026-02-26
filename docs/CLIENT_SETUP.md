# Quiz Embed — Client Setup Guide

Add a trivia quiz to any HTML website in under 5 minutes.

## Step 1: Get Your Community Slug

Your community must exist in the trivia platform with questions loaded.
Contact the platform admin for your community slug (e.g., `ellie-hallaron`).

## Step 2: Add the iframe

Paste this into any HTML page where you want the quiz to appear:

```html
<iframe
  id="quiz-iframe"
  src="https://gstreet-ops.github.io/gstreet-ops-quiz-embed/?community=YOUR_SLUG"
  width="100%"
  height="600"
  frameborder="0"
  allowtransparency="true"
  style="border: none; border-radius: 12px; min-height: 600px;"
  title="Trivia Quiz">
</iframe>
```

Replace `YOUR_SLUG` with your community slug.

## Step 3: Add Auto-Resize (Recommended)

The embed sends height updates via postMessage. Add this script
to your page so the iframe adjusts automatically:

```html
<script>
  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'quiz-embed-resize') {
      const iframe = document.getElementById('quiz-iframe');
      if (iframe) iframe.style.height = e.data.height + 'px';
    }
  });
</script>
```

## Step 4: Customize (Optional)

Add theme and behavior params to the iframe `src` URL.
See [EMBED_PARAMS.md](./EMBED_PARAMS.md) for the full reference.

Example with custom theme:
```
?community=your-slug&bg=%23FFFFFF&primary=%23007BFF&text=%23333333&font=Roboto
```

## Notes

- The embed works on any site that supports iframes
- No JavaScript SDK or build step required
- Anonymous play works out of the box — no auth setup needed
- Users can optionally sign in to save scores to the leaderboard
- Accounts created in the embed work across the full trivia platform
- Mobile responsive — works at any width down to 320px
