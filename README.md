# Context-Aware RAG Engine with ChromaDB

A Retrieval-Augmented Generation (RAG) system using **ChromaDB** for vector store indexing and context retrieval to reduce hallucinations in LLM output.

## Tech Stack

- **Tools:** Python, ChromaDB, Sentence-Transformers, Vector Search.

## Key Features

- **In-Memory Vector Database:** Fast indexing and retrieval using ChromaDB.
- **Contextual Query Pipeline:** Embeds knowledge base documents and matches query embeddings using similarity search.
- **Prompt Augmentation:** Automatically constructs grounded context prompts for LLM consumption.

## How to Run

```bash
pip install -r requirements.txt
python app.py
```
