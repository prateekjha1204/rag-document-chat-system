import React, { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    if (!query.trim()) return;
    setLoading(true);

    // Simulating response latency for a slick UI feel
    setTimeout(() => {
      setResult({
        retrievedContext:
          "LLM fine-tuning adjusts target weights using techniques like QLoRA to reduce memory usage during parameter-efficient adaptation.",
        augmentedPrompt: `[CONTEXT]: LLM fine-tuning adjusts target weights using techniques like QLoRA...\n\n[USER QUERY]: ${query}\n\n[SYSTEM INSTRUCTION]: Answer using only the context provided above.`,
        similarityScore: "0.892 (Cosine Distance)",
        latency: "42ms",
      });
      setLoading(false);
    }, 400);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <span style={styles.badge}>RAG Pipeline</span>
          <h1 style={styles.title}>🔍 Vector Knowledge Dashboard</h1>
          <p style={styles.subtitle}>
            Retrieval-Augmented Generation context query interface powered by
            ChromaDB & local vector embeddings.
          </p>
        </div>

        {/* Input Bar */}
        <div style={styles.inputGroup}>
          <input
            type="text"
            style={styles.input}
            placeholder="Ask something about your document store (e.g., How does QLoRA work?)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            style={styles.button}
            disabled={loading}
          >
            {loading ? "Searching..." : "Query Context"}
          </button>
        </div>

        {/* Output Panel */}
        {result && (
          <div style={styles.resultsContainer}>
            <div style={styles.metricsRow}>
              <span style={styles.metricTag}>
                ⚡ Latency: <strong>{result.latency}</strong>
              </span>
              <span style={styles.metricTag}>
                🎯 Match Score: <strong>{result.similarityScore}</strong>
              </span>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>📥 Vector DB Context Match</h3>
              <div style={styles.contextBox}>"{result.retrievedContext}"</div>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>🤖 Constructed Prompt for LLM</h3>
              <pre style={styles.codeBlock}>{result.augmentedPrompt}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  card: {
    backgroundColor: "#1e293b",
    borderRadius: "16px",
    padding: "36px",
    maxWidth: "750px",
    width: "100%",
    boxShadow:
      "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    border: "1px solid #334155",
  },
  header: {
    marginBottom: "28px",
  },
  badge: {
    backgroundColor: "#0284c7",
    color: "#e0f2fe",
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "20px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginTop: "12px",
    marginBottom: "8px",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "14px",
    color: "#94a3b8",
    margin: 0,
    lineHeight: "1.5",
  },
  inputGroup: {
    display: "flex",
    gap: "12px",
    marginBottom: "28px",
  },
  input: {
    flex: 1,
    padding: "14px 18px",
    backgroundColor: "#0f172a",
    border: "1px solid #475569",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    padding: "14px 24px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background-color 0.2s",
  },
  resultsContainer: {
    backgroundColor: "#0f172a",
    borderRadius: "12px",
    padding: "24px",
    border: "1px solid #334155",
  },
  metricsRow: {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
  },
  metricTag: {
    fontSize: "12px",
    color: "#cbd5e1",
    backgroundColor: "#1e293b",
    padding: "6px 12px",
    borderRadius: "6px",
    border: "1px solid #334155",
  },
  section: {
    marginTop: "16px",
  },
  sectionTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#cbd5e1",
    marginBottom: "8px",
  },
  contextBox: {
    backgroundColor: "#1e293b",
    padding: "16px",
    borderRadius: "8px",
    color: "#38bdf8",
    fontStyle: "italic",
    fontSize: "14px",
    borderLeft: "4px solid #0284c7",
    lineHeight: "1.6",
  },
  codeBlock: {
    backgroundColor: "#020617",
    color: "#a7f3d0",
    padding: "16px",
    borderRadius: "8px",
    fontSize: "13px",
    fontFamily: "monospace",
    whiteSpace: "pre-wrap",
    margin: 0,
    border: "1px solid #1e293b",
  },
};

export default App;
