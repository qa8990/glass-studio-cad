Creo que aquí es donde podemos construir algo realmente innovador. No diseñaría una simple aplicación, sino una **plataforma de agentes especializados** (Agentic Architecture) donde cada agente tiene un propósito claro y todos colaboran para producir un proyecto completamente parametrizado.

El objetivo no es generar una imagen bonita; el objetivo es generar un **Digital Twin** del proyecto de vidrio.

---

# GLASS AI PLATFORM

```text
                  +------------------------------------------------+
                  |            GLASS DESIGN PLATFORM                |
                  +------------------------------------------------+

                           AI ORCHESTRATOR AGENT
                                      │
        ┌───────────────┬─────────────┼──────────────┬──────────────┐
        │               │             │              │              │
        ▼               ▼             ▼              ▼              ▼
 Input Agent     Vision Agent   CAD Agent   Template Agent   Chat Agent
        │               │             │              │              │
        └───────────────┴─────────────┴──────────────┴──────────────┘
                              │
                              ▼
                   Parametric Project Builder
                              │
      ┌──────────────┬───────────────┬───────────────┐
      ▼              ▼               ▼               ▼
 Geometry       Hardware AI     Rule Engine      BOM Engine
      │              │               │               │
      └──────────────┴───────────────┴───────────────┘
                              │
                              ▼
                    Digital Glass Project
                              │
        ┌──────────────┬─────────────┬─────────────┐
        ▼              ▼             ▼             ▼
     Canvas 2D      Viewer 3D      DXF         Work Order
```

---

# Filosofía

Todo termina convertido en un único objeto.

```python
GlassProject
```

No importa si vino de:

* foto
* PDF
* CAD
* template
* IA
* boceto

Todo termina siendo el mismo modelo.

---

# Capa 1 — Input Layer

Es la puerta de entrada.

## Input Agent

Responsabilidades

```text
Aceptar:

Imagen

PDF

DWG

DXF

Sketch

Chat

Template

JSON

API
```

Devuelve

```python
InputDocument
```

---

# Vision Agent

Este agente analiza imágenes.

Entradas

```text
Foto

Sketch

Plano escaneado
```

Detecta

```text
líneas

esquinas

paneles

puertas

agujeros

bisagras

manijas

cotas

texto
```

Salida

```json
{
 "objects":[...],
 "dimensions":[...],
 "annotations":[...]
}
```

Tecnologías

* OpenAI Vision
* Gemini Vision
* Florence-2
* OpenCV

---

# OCR Agent

Especializado únicamente en texto.

Extrae

```text
1200

2200

10 mm

CRL

Dormakaba

Templado

Low-E
```

Tecnologías

* Tesseract
* PaddleOCR
* Azure Vision OCR

---

# CAD Agent

Responsabilidad

Leer

```text
DWG

DXF

SVG

STEP
```

Convierte

↓

Objetos geométricos.

---

# Chat Agent

Recibe lenguaje natural.

Ejemplo

```text
Quiero una puerta
de baño
1200 x 2200
10 mm
```

Devuelve

```json
{
 template:"pivot_door",
 width:1200,
 height:2200
}
```

---

# Template Agent

Busca el template adecuado.

Ejemplo

```text
Entrada

Pivot Door
```

↓

Busca

```text
Template v12
```

↓

Carga

```text
Componentes

Restricciones

Reglas

Hardware
```

---

# Parametric Builder

Este será el corazón.

```text
Input

↓

Template

↓

Parámetros

↓

Modelo
```

Genera

```python
GlassProject
```

---

# Modelo

```python
GlassProject

Project

Panels

Hardware

Openings

Constraints

Dimensions

Metadata

BOM

Layers

Operations
```

Nunca imágenes.

Siempre objetos.

---

# Geometry Engine

Responsabilidad

Calcular.

```text
paneles

agujeros

recortes

ángulos

clearance

peso

centro gravedad

perímetros

área
```

No usa IA.

Usa matemáticas.

---

# Rule Engine

Aquí vive el conocimiento del negocio.

Ejemplo

```text
Bisagra X

↓

Solo compatible

10 mm

12 mm

↓

máximo 45 kg
```

o

```text
Puerta

↓

más de 1000 mm

↓

3 bisagras
```

Todo configurable.

No hardcodeado.

---

# Hardware AI

Este es muy interesante.

Usuario escribe

```text
Necesito una manija similar
```

↓

Busca

```text
Dormakaba

CRL

FHC

Hafele
```

↓

Sugiere

Compatibles.

---

# BOM Engine

Genera automáticamente

```text
Vidrios

Herrajes

Gomas

Tornillos

Perfiles

Accesorios
```

---

# Production Engine

Genera

```text
DXF

PDF

Plano

Etiqueta

Código QR

Lista corte

Optimización
```

---

# Canvas Engine

Yo utilizaría

React Konva

porque permite

```text
Snap

Zoom

Layers

Drag

Rotate

Guides

Selection

Editable
```

---

# Viewer 3D

React Three Fiber

Permite

```text
Materiales

Vidrio

Reflexión

Espesores

Exploded View
```

---

# WMS Agent

Genera

```text
Orden Producción

Estaciones

Etiquetas

Código Barra

QR

Tracking
```

---

# Inventory Agent

Consulta

```text
¿Existe stock?

↓

Vidrio

↓

Herrajes

↓

Perfiles
```

---

# Pricing Agent

Calcula

```text
Vidrio

+

Herrajes

+

Mano de obra

+

Desperdicio

+

Margen
```

---

# AI Copilot

Siempre disponible.

Ejemplo

```text
Haz esta puerta
20 cm más ancha.
```

↓

Modifica el proyecto.

---

# Arquitectura Técnica

```text
                    React

                      │

         React Query + Zustand

                      │

                 API Gateway

                      │

         +------------+-------------+

         |                          |

 FastAPI Backend              AI Orchestrator

         |                          |

         +------------+-------------+

                      │

             Event Bus (NATS/Kafka)

                      │

    +---------+--------+--------+---------+

    |         |        |        |         |

 Vision   Geometry   Rules   Hardware   BOM

    |         |        |        |         |

    +---------+--------+--------+---------+

                      │

               PostgreSQL

                      │

                Object Storage

                 (S3 / MinIO)
```

---

# Base de Datos

Yo dividiría completamente.

```text
projects

templates

hardware

manufacturers

constraints

operations

materials

glass_types

pricing

bom

drawings

images

ocr

users

tenants

orders

stations

inventory
```

---

# Tecnologías

## Frontend

* React 19
* TypeScript
* Vite
* React Konva
* React Three Fiber
* Zustand
* TanStack Query
* Tailwind CSS + shadcn/ui

## Backend

* FastAPI
* Python 3.13
* SQLAlchemy 2.x
* PostgreSQL + PostGIS (para operaciones geométricas avanzadas y consultas espaciales)
* Redis
* Celery (o Temporal para workflows complejos)

## Motor Geométrico

* Shapely
* CadQuery
* OpenCascade (pythonOCC)
* ezdxf
* NumPy

## IA

En lugar de depender de un único proveedor, propondría una **arquitectura agnóstica de modelos**:

* **OpenAI GPT-5**: razonamiento, copiloto y comprensión de requisitos.
* **OpenAI Vision** o **Gemini Vision**: interpretación de bocetos, fotografías y planos.
* **Florence-2** (cuando convenga ejecutarlo localmente): detección de objetos y elementos específicos.
* **PaddleOCR**: extracción de cotas, anotaciones y texto técnico.

Todos estos modelos quedarían detrás de un **AI Provider Layer**, de modo que el sistema pueda cambiar de proveedor según costo, precisión o disponibilidad sin modificar la lógica de negocio.

# Evolución futura: un sistema "Agentic"

La siguiente etapa sería convertir cada módulo en un **agente autónomo** que publique y consuma eventos. Así, el `Vision Agent` podría detectar una puerta, el `Template Agent` seleccionar automáticamente el template más cercano, el `Rule Engine` validar las restricciones, el `Inventory Agent` comprobar disponibilidad y el `Pricing Agent` calcular el presupuesto, todo de forma paralela.

Con esta arquitectura no estaríamos desarrollando únicamente un diseñador de vidrio, sino una **plataforma CAD paramétrica con IA nativa**, preparada para integrarse con WMS, ERP, optimización de corte y maquinaria industrial, manteniendo cada componente desacoplado y escalable. El resultado sería un ecosistema donde la inteligencia artificial acelera la captura y configuración del proyecto, mientras que el motor geométrico y las reglas de negocio garantizan precisión y consistencia para producción.
