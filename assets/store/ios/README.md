# iOS App Store visuals

## Icon

Use `assets/images/icon.png` (1024×1024, RGB, no transparency).
The native target `AppIcon` is already this file.

## Screenshots

Same five files, three sizes. PNG, no alpha. Hindi title strip at the top.

| Slot in App Store Connect | Folder | Size |
|---|---|---|
| iPhone 6.9" | `6.9-inch/` | 1320 × 2868 |
| iPhone 6.5" | `6.5-inch/` | 1284 × 2778 |
| iPad 13" | `13-inch/` | 2064 × 2752 |

6.5" is required if 6.9" is missing. iPad 13" is required because the app has `supportsTablet: true`. Apple can scale the rest.

Order:

1. `01-home.png` — पाठ पुस्तक
2. `02-panchang.png` — हिन्दू पंचांग
3. `03-sundarkand.png` — सुंदरकांड
4. `04-aarti.png` — आरती
5. `05-kram.png` — आज का क्रम

Portrait only. Apple scales 13" down to 12.9" / 11" / 10.5".
