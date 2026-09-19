# MediaMEMO

**Keep a little culture close.** A personal shelf for films, games, series, music, and books—with release dates, honest notes, and room for your own taste.

[Open the demo](https://michaelsanders08.github.io/MediaMEMO/)

## A three-minute tour

1. Save a title from **Discover**, or choose **Try a sample shelf** for clearly labeled example activity.
2. Open it. Set its status, add a rating, mark a favorite, and save a note.
3. Reload: the library is still there.
4. **Add your own** title with an upcoming release date. It appears in the release calendar.
5. Export the shelf as JSON or the release dates as an `.ics` calendar file.

The initial shelf is empty. Sample notes and statuses are created only when you choose the demo; they do not represent your actual opinions or viewing history.

## What works

- Search the historical starter catalog by title, creator, description, or genre.
- A unified, duplicate-safe local library for all five media types.
- Planned, in-progress, finished, paused, and set-aside states.
- Ratings, favorites, personal notes, custom titles, editable metadata, and removal.
- Type/status/favorite filters and title/rating/release/added-date sorting.
- A release calendar grouped by upcoming month, already-released, and unknown dates.
- A portable JSON backup with atomic validation on import.
- Calendar export with stable event ids, exclusive all-day end dates, escaping, and Unicode-safe line folding.
- Responsive layouts, keyboard-accessible dialogs, clear empty states, and storage error handling.

## Run

Node **22.18+** and npm:

```sh
npm ci
npm run dev
npm test
npm run build
npm run preview
```

Build output is `dist/`. Relative assets and hash navigation make the app work on GitHub Pages project paths. CI tests and builds pull requests; successful `main` builds publish through GitHub Pages Actions.

## Honest boundaries

This is a personal, browser-local app. It does not have accounts, cloud synchronization, live release APIs, public reviews, or social features. Notes are private to this browser; they are not presented as community comments.

The starter catalog is a small **historical 2023 selection inherited from the original project**, with new short descriptions and geometric cover art. It is neither a current release feed nor personalized recommendations. Dates can vary by territory/platform; source links and editable metadata let you keep your own collection accurate. Series, music, and books can be added manually.

Local storage uses `mediamemo-library-v1`. Export before clearing browser data or changing devices. JSON imports replace the library only after validation and, when needed, confirmation. Invalid stored data is preserved in recovery mode: Export downloads its original contents and new writes stay in memory until a repaired library is imported. The library allows up to 2,000 entries and 4 MB of serialized text; browser storage limits can be lower. Exports and calendar files contain your saved metadata and notes, so share them intentionally.

Calendar files are snapshots, not subscriptions. No notifications are sent. No data is uploaded or fetched by the app; source links are opened only when clicked.

## Development

- `app/App.vue` — Vue interface and browser persistence.
- `app/library.ts` — typed model, validation, filtering, and calendar serialization.
- `app/catalog.ts` — historical sample catalog.
- `app/style.css` — responsive visual system.
- `tests/library.test.mjs` — core behavior tests, using Node's type stripping.
- `legacy/` — original Ionic source, tests, configuration, and README preserved for reference; not included in the current build.

The original MediaMEMO team's work and Git history remain intact. This version carries forward the project’s “by the viewers, for the viewers” intent as a functional personal collection tool.
