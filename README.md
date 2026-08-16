# Paath Pustak (पाठ पुस्तक)

Hindu devotion app for India — Hindi + English, Android-first, same codebase for iOS. Home-screen name: Paath Pustak.

- Aartis (Jagdish, Ganesh, Hanuman, Shiv, Durga, Lakshmi, Krishna, Santoshi)
- Sundarkand path (selected episodes) + full Hanuman Chalisa
- Katha: Satyanarayan, Ekadashi, Sankashti, Pradosh
- 2026 vrat calendar: Ekadashi, Pradosh, Sankashti, festivals
- Optional local reminders the evening before and morning of a vrat
- All reading works offline

## Run

```sh
npm install
npx expo start
```

Scan the QR with Expo Go, or press `a` / `i` for emulator.

Expo SDK 57 may need a [development build](https://docs.expo.dev/develop/development-builds/introduction/) if Expo Go on your phone is still on an older SDK.

## iOS vs Android

Ship Play Store first (most of India). Keep iOS in the project — `npx expo run:ios` or EAS Build when you are ready for App Store.

## Panchang note

Dates follow a commonly used North Indian 2026 panchang. Local sunrise can shift a tithi by a day.

## Stack

Expo SDK 57, Expo Router, TypeScript.
