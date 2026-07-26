import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    // Simulated RAG vector search output for UI demonstration
    setResult({
      retrievedContext:
        "LLM fine-tuning adjusts target weights using techniques like QLoRA to reduce memory usage.",
      augmentedPrompt: `Context: LLM fine-tuning adjusts target weights...\nQuestion: ${query}`,
    });
  };

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "sans-serif",
        maxWidth: "650px",
        margin: "auto",
      }}
    >
      <h2>🔍 RAG Document Search Dashboard</h2>
      <input
        type="text"
        style={{ width: "80%", padding: "10px" }}
        placeholder="Ask something about your document store..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        style={{ padding: "10px 15px", marginLeft: "10px" }}
      >
        Query Context
      </button>

      {result && (
        <div
          style={{
            marginTop: "25px",
            padding: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <h4>Vector DB Context Match:</h4>
          <p style={{ fontStyle: "italic", color: "#333" }}>
            "{result.retrievedContext}"
          </p>
          <hr />
          <h4>Constructed LLM Prompt:</h4>
          <pre
            style={{
              background: "#222",
              color: "#fff",
              padding: "10px",
              borderRadius: "4px",
            }}
          >
            {result.augmentedPrompt}
          </pre>
        </div>
      )}
    </div>
  );
}

export default App;
