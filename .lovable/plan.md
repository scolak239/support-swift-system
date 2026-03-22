

## Problem

The app crashes with "Invalid hook call" / "Cannot read properties of null (reading 'useRef')" at `TooltipProvider`. This is caused by duplicate React instances — likely `framer-motion@^12` pulling in React 19 internals while the project uses React 18.

## Fix

**Remove `TooltipProvider` from `App.tsx`** — the site doesn't use any tooltips, so wrapping the entire app in `TooltipProvider` is unnecessary and is triggering the crash.

### Changes

**`src/App.tsx`**:
- Remove the `TooltipProvider` import and wrapper
- Keep everything else (QueryClientProvider, Toaster, Sonner, BrowserRouter, Routes)

This is a single-file, 3-line change that resolves the crash immediately.

