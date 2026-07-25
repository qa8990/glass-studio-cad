# Glass Studio CAD

Prototipo inicial de una plataforma de diseño de vidrio basada en el blueprint de agentes especializados. El objetivo de esta primera versión es demostrar un flujo end-to-end simple:

- Input Agent: captura de prompt o template.
- Vision Agent: simula la detección de geometría y parámetros.
- CAD Agent: prepara la estructura de proyecto.
- Parametric Builder: construye un objeto GlassProject preliminar.

## Stack propuesto

- Frontend: Next.js + React + TypeScript
- Estilo: CSS modular y componentes simples
- Backend/Agentes: Python con uv para el skeleton de orquestación
- Despliegue: Vercel

## Estructura del proyecto

```text
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  agents/
    orchestrator.py
    README.md
```

## Requisitos

- Node.js 20+
- pnpm 9+
- Python 3.11+
- uv

## Instalación local

### 1) Frontend con pnpm

```bash
pnpm install
pnpm dev
```

### 2) Skeleton de agentes con uv

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -e .
python -c "from src.agents.orchestrator import AgentOrchestrator; print(AgentOrchestrator().build_project('Quiero una puerta de baño 1200 x 2200 con vidrio de 10 mm.'))"
```

> Si prefieres usar uv directamente, también puedes ejecutar `uv venv` y `uv pip install -e .`.

## Despliegue en Vercel

### Opción A: despliegue directo desde GitHub

1. Sube este repositorio a GitHub.
2. En Vercel, selecciona "Add New Project".
3. Conecta el repositorio.
4. Usa estas configuraciones:
   - Framework Preset: Next.js
   - Root Directory: `.`
   - Build Command: `pnpm build`
   - Output Directory: `.next`

### Opción B: despliegue desde la CLI

```bash
pnpm install
pnpm build
vercel --prod
```

### Variables de entorno

No se requieren variables de entorno para esta versión inicial. Si más adelante se integra OpenAI/Gemini/OCR, agregarías:

```bash
OPENAI_API_KEY=
GEMINI_API_KEY=
```

## Siguiente evolución recomendada

- Integrar API Routes en Next.js para exponer el orquestador.
- Añadir un canvas 2D/3D simple con renderizado de paneles.
- Conectar OCR/CAD/vision real con proveedores externos.
- Persistir GlassProject en base de datos o JSON.

## Notas

Este es un skeleton de prototipo, no una implementación completa del blueprint. Sirve como base para iterar y mostrar la arquitectura propuesta.
