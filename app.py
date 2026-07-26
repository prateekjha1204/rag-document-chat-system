import chromadb

def run_rag_pipeline():
    print("Initializing Vector Database (ChromaDB)...")
    
    # Initialize in-memory ChromaDB client
    client = chromadb.Client()
    collection = client.get_or_create_collection(name="ai_knowledge_base")

    # Knowledge Base Documents
    documents = [
        "LLM fine-tuning adjusts target weights using techniques like QLoRA to reduce memory usage.",
        "FastAPI provides asynchronous, high-throughput endpoints for deploying quantized LLM APIs.",
        "Retrieval-Augmented Generation (RAG) grounds LLM responses with accurate external knowledge retrieved from vector stores."
    ]
    
    metadatas = [{"category": "fine-tuning"}, {"category": "deployment"}, {"category": "rag"}]
    ids = ["doc_1", "doc_2", "doc_3"]

    print("Embedding and indexing documents into vector space...")
    collection.add(
        documents=documents,
        metadatas=metadatas,
        ids=ids
    )

    # Simulated User Query
    user_query = "How does RAG improve LLM responses?"
    print(f"\nUser Query: '{user_query}'")

    # Retrieve relevant context from Vector DB
    results = collection.query(
        query_texts=[user_query],
        n_results=1
    )

    retrieved_context = results['documents'][0][0]
    print(f"Retrieved Context: '{retrieved_context}'")
    
    # Final Contextual Output Simulation
    prompt_with_context = f"Context: {retrieved_context}\nQuestion: {user_query}\nAnswer:"
    print("\n--- Augmented Prompt Prepared for LLM ---")
    print(prompt_with_context)

if __name__ == "__main__":
    run_rag_pipeline()