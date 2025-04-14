"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type SpeechRecognitionEvent = {
  results: Array<{
    0: {
      transcript: string;
    };
  }>;
};

type SpeechRecognitionErrorEvent = {
  error: string;
};

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef<InstanceType<
    typeof window.SpeechRecognition
  > | null>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);

      speakText(text);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;
  }, []);

  const handleStart = () => {
    setTranscript("");
    recognitionRef.current?.start();
    setIsListening(true);
  };

  const handleStop = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const speakText = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="p-4 border rounded shadow w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-2">🎙️ Voice to Text Agent</h2>
      <div className="mb-4">
        <button
          onClick={isListening ? handleStop : handleStart}
          className={`px-4 py-2 rounded ${
            isListening ? "bg-red-500" : "bg-green-500"
          } text-white`}
        >
          {isListening ? "Stop Listening" : "Start Listening"}
        </button>
      </div>
      <p className="border p-3 bg-gray-100 rounded min-h-[100px]">
        {transcript || "Your speech will appear here..."}
      </p>
    </div>
  );
};

export default SpeechToText;
