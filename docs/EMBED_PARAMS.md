# Quiz Embed — URL Parameter Reference

All configuration is passed via URL query parameters. No server-side setup needed.

## Embed URL Format

```
https://gstreet-ops.github.io/gstreet-ops-quiz-embed/?community=YOUR_SLUG&bg=%23COLOR...
```

## Required Parameters

| Parameter | Type | Example | Description |
|-----------|------|---------|-------------|
| `community` | string | `ellie-hallaron` | Community slug from trivia-app |

## Theme Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `bg` | hex (URL encoded) | `%230D0D0D` | Background color |
| `surface` | hex | `%231A1A2E` | Card/surface color |
| `primary` | hex | `%236B2D5E` | Primary accent (buttons) |
| `accent` | hex | `%238B0000` | Secondary accent (correct, progress) |
| `text` | hex | `%23F5F0EB` | Body text color |
| `font` | string | `Inter` | Google Font name (use `+` for spaces) |

> Hex colors must be URL-encoded: `#6B2D5E` → `%236B2D5E`

## Behavior Parameters

| Parameter | Type | Default | Options | Description |
|-----------|------|---------|---------|-------------|
| `count` | number | `10` | 5, 10, 15, 20 | Questions per game |
| `difficulty` | string | `mixed` | easy, medium, hard, mixed | Question difficulty filter |
| `timer` | number | `0` | any positive int | Seconds per question (0 = off) |
| `leaderboard` | string | `community` | community, platform, both | Leaderboard tabs to show |
| `category` | string | `all` | any category slug | Filter by question category |

## Example — Ellie Hallaron (Dark Glamour)

```
?community=ellie-hallaron
&bg=%230D0D0D
&surface=%231A1A2E
&primary=%236B2D5E
&accent=%238B0000
&text=%23F5F0EB
&font=Cormorant+Garamond
&count=10
&difficulty=mixed
&leaderboard=both
```

## Defaults

If a parameter is omitted or invalid, the embed uses sensible defaults.
The only required parameter is `community` — without it, the embed
shows an error screen with setup instructions.

Invalid hex colors fall back to the Dark Glamour defaults.
Invalid count values fall back to 10. Invalid difficulty or
leaderboard values fall back to their defaults.
