| Step            | Estimated Time |
| --------------- | -------------- |
| Query Cleaning  | 20ms           |
| Retrieval       | 200ms          |
| Reranking       | 100ms          |
| Prompt Assembly | 50ms           |
| LLM Call        | 2000ms         |
| Guardrails      | 100ms          |
| Formatting      | 20ms           |
| Logging         | 30ms           |
| **Total**       | **~2.5 sec**   |


## The important thing for discussion:
- the LLM call is the bottleneck
- logging should probably be async/background
- retrieval + reranking are the main optimization targets
- caching common curriculum queries could reduce latency later