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
  scrolling="no"
  allowtransparency="true"
  style="border: none; border-radius: 12px; min-height: 600px; overflow: hidden;"
  title="Trivia Quiz">
</iframe>
```

Replace `YOUR_SLUG` with your community slug.

> **Important:** The `scrolling="no"` attribute and `overflow: hidden` style prevent an unwanted scrollbar inside the iframe on mobile devices. Always include both.

## Step 3: Add Auto-Resize (Recommended)

The embed sends height updates via postMessage. Add this script
to your page so the iframe adjusts automatically:

```html
<script>
  window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'quiz-embed-resize') {
      const iframe = document.getElementById('quiz-iframe');
      if (iframe) iframe.style.height = (e.data.height + 16) + 'px';
    }
  });
</script>
```

The `+ 16` adds a small buffer to prevent edge-case scrollbar flicker on some devices.

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

---

## Browser Compatibility & Cross-Origin Auth

The quiz embed runs inside an iframe on your domain, which means it's a **third-party context** relative to the host page. This affects how browsers handle storage and cookies for the embed.

### How Auth Works

The embed uses Supabase Auth, which stores session tokens in `localStorage` scoped to the embed's origin (`gstreet-ops.github.io`). When a user logs in, their session persists across page loads — as long as the browser allows third-party storage.

### Browser Support Matrix

| Browser | Anonymous Play | Auth / Login | Session Persistence | Notes |
|---------|---------------|-------------|-------------------|-------|
| **Chrome** | ✅ | ✅ | ✅ | Full support. Third-party storage allowed in iframes by default. |
| **Edge** | ✅ | ✅ | ✅ | Chromium-based, same behavior as Chrome. |
| **Firefox** | ✅ | ✅ | ⚠️ Conditional | Works by default. Users with **Enhanced Tracking Protection** set to "Strict" may lose session between visits. |
| **Safari** | ✅ | ✅ | ❌ Limited | Safari blocks third-party localStorage/cookies by default (ITP). Users can log in, but sessions won't persist across page reloads. They'll need to log in each visit. |
| **Brave** | ✅ | ✅ | ❌ Limited | Blocks third-party storage by default, similar to Safari. |
| **iOS Safari** | ✅ | ✅ | ❌ Limited | Same ITP restrictions as desktop Safari. |
| **Chrome on iOS** | ✅ | ✅ | ❌ Limited | Uses WebKit engine on iOS, inherits Safari's restrictions. |

### What This Means in Practice

**Anonymous play always works** — the quiz generates a session ID and tracks scores in memory during the session. No storage required.

**Login works everywhere** — users can always sign in. The auth flow itself doesn't depend on persistent storage.

**Session persistence varies** — on Safari/Brave/strict Firefox, users may need to log in again on each visit. Their scores are still saved server-side and their account works fine — they just won't stay "remembered" in the embed.

### Recommendations for Client Sites

1. **No action required for most sites.** Chrome and Edge account for ~75% of desktop traffic. Anonymous play works everywhere.

2. **If your audience skews toward Safari/iOS** (common for creative, lifestyle, and author sites), consider mentioning in your site copy that users may need to log in each visit to track scores.

3. **Custom domain (future):** When the embed moves to a custom domain like `quiz.yourdomain.com` and is served from the same registrable domain as the host site, Safari's ITP restrictions no longer apply. This is planned for Phase 3.

### Storage Partitioning (Chrome 2024+)

Chrome has rolled out **Storage Partitioning**, which scopes third-party storage by the top-level site. This means a user who logs into the embed on `site-a.com` will appear logged out on `site-b.com`, even though both use the same embed URL. This is expected behavior — each host site gets its own isolated auth session. Users who play on multiple client sites will need to log in separately on each.

### Testing Cross-Origin Auth

To verify auth behavior on your site:

1. Open the quiz embed page in the target browser
2. Play a game anonymously — confirm score appears
3. Create an account or log in
4. Reload the page
5. Check if the user is still logged in (Chrome/Edge: yes, Safari/Brave: likely no)
6. Play another game — confirm score is saved to the account regardless
