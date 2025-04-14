خیلی عالی! پروژه‌ی تو یه اپلیکیشن React مبتنی بر Web Speech API هست که گفتار رو به متن تبدیل می‌کنه و دوباره همون متن رو به صورت صوتی می‌خونه. این یه قابلیت هوشمند و جالب برای پروژه‌های مدرن محسوب می‌شه.

در ادامه یه README کامل و حرفه‌ای برای GitHub آماده کردم که شامل معرفی پروژه، امکانات، نحوه اجرا، پیش‌نمایش و نکات فنی هست:

---

```markdown
# 🎙️ Voice to Text Agent

A simple, elegant, and fully client-side **React app** that converts your speech into text and then speaks it back to you using the **Web Speech API**.

This project leverages `SpeechRecognition` for speech-to-text and `SpeechSynthesisUtterance` for text-to-speech — built entirely with modern React and TypeScript.

---

## 🚀 Features

- 🎤 **Start/Stop voice recognition**
- 📝 **Transcribes speech into text**
- 🔊 **Reads back the transcribed text**
- 🌐 **Supports English (en-US) language**
- ⚛️ **Built with React 18, TypeScript & TailwindCSS**
- 🎨 **Custom MUI Theme with Roboto Font**

---

## 🖥️ Demo

![demo](https://user-images.githubusercontent.com/your-github/demo.gif)

> Your speech will appear inside a styled textbox. Try saying something like “Hello world!” and the app will read it back to you.

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/voice-to-text-agent.git
cd voice-to-text-agent
npm install
```

---

## ▶️ Usage

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```bash
.
├── app/
│   └── layout.tsx       # Global layout with MUI ThemeProvider
├── components/
│   └── SpeechToText.tsx # Main component
├── pages/
│   └── index.tsx        # Home page rendering the component
├── styles/
│   └── globals.css      # Global Tailwind styles
```

---

## ⚙️ Technologies Used

- **React 18**
- **Next.js App Router (client-side rendering)**
- **TypeScript**
- **Web Speech API**
- **TailwindCSS**
- **Material UI (with custom theme)**

---

## 💡 Browser Support

> ⚠️ This app works best in **Chrome** and **Edge**. SpeechRecognition is not supported in Firefox or Safari.

---

## ❓ Known Issues

- Some mobile browsers may have limited support.
- Multiple clicks on “Start Listening” while already recording can throw errors (avoid spamming the button).

---

## 📜 License

MIT License © 2025 [Your Name]

---

## 🌟 Feedback & Contribution

Found a bug? Have a feature request? Feel free to open an issue or create a pull request. Contributions are welcome! 😊
