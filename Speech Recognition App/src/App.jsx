import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";

const App = () => {
  const [copyText, setCopyText] = useState();
  const [isCopied, setIsCopied] = useClipboard(copyText, {
    successDuration: 10000,
  });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
  const stopListening = () => SpeechRecognition.stopListening();

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <div className="p-10 items-center drop-shadow-lg shadow-lg rounded-2xl m-1 w-auto">
      <h1 className="text-4xl text-center">Speech Recognition App</h1>
      <div className="h-20" onClick={() => setCopyText(transcript)}>
        {transcript}
      </div>

      <div className="flex p-10 gap-5">
        <button
          className="cursor-pointer bg-blue-400 p-2 py-1 rounded-md"
          onClick={setIsCopied}
        >
          {isCopied ? "Copied" : "Copy to Clipboard"}
        </button>
        <button
          className="bg-blue-400 p-2 py-1 rounded-md cursor-pointer"
          onClick={startListening}
        >
          Start Listening
        </button>
        <button
          className="bg-blue-400 p-2 py-1 rounded-md cursor-pointer"
          onClick={stopListening}
        >
          Stop Listening
        </button>
      </div>
    </div>
  );
};

export default App;
