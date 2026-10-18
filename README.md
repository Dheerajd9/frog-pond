# Frog Pond 🐸

A free daily planner built on *Eat That Frog!* by Brian Tracy: the frog-first habit, ABCDE with A-1/A-2, big/month/week/today/not-doing lists, 10 goals with one major goal, key result areas, a Swiss-cheese focus timer and all 21 rules in simple words.

- Works in any browser: iPhone, Mac, Windows, Android.
- On iPhone, open the link in Safari → Share → **Add to Home Screen**. It opens like an app and works offline.
- **Sync (free, private):** Me tab → sign in with the same email on every device. Data lives in your own Firebase project (Spark free plan); Firestore rules let only your account read it. Optional **extra lock** encrypts everything on the device (AES-GCM, key from your passphrase) before upload.
- Works offline: changes save on the device and sync when back online. Edits from two devices merge item by item.
- Backup file (Me → Settings) still works as an extra safety net.
- Optional free AI: paste a free Gemini key from https://aistudio.google.com in **Me → Settings**.

## Free reminders on Telegram (optional)
Add two repo secrets (Settings → Secrets and variables → Actions): `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`.
The workflow in `.github/workflows/reminders.yml` sends a morning "eat your frog" and an evening "plan tomorrow" message.
GitHub pauses scheduled workflows after 60 days with no commits; re-enable it from the Actions tab if that happens.
