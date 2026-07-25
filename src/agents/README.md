# Agents skeleton

Este módulo representa el núcleo del blueprint: un orquestador simple que transforma un prompt en un objeto GlassProject.

## Ejecución local

```bash
uv run python -c "from src.agents.orchestrator import AgentOrchestrator; print(AgentOrchestrator().build_project('Quiero una puerta de baño 1200 x 2200 con vidrio de 10 mm.'))"
```
