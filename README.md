# Full-Stack RAG Knowledge Retrieval System

A Retrieval-Augmented Generation (RAG) platform combining an in-memory **ChromaDB** vector store backend with an interactive **React** search interface.

## 🏗️ Architecture

- **Frontend:** React.js, JavaScript, HTML5/CSS3.
- **Backend/Vector Store:** Python, ChromaDB, Sentence-Transformers.

## ✨ Features

- **Semantic Vector Search:** Embeds unstructured text datasets into vector space for quick similarity matching.
- **Interactive Retrieval Interface:** React dashboard displaying vector search results and augmented prompt construction in real-time.
- **Hallucination Reduction:** Grounds LLM generation using retrieved context.

## 🚀 How to Run

```bash
### Vector Backend
pip install -r requirements.txt
python app.py
```

### React Interface

```bash
cd frontend
npm install
npm start
```
