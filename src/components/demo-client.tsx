"use client";

import { useState } from 'react';

type AgentStep = {
  id: string;
  title: string;
  description: string;
  status: 'ready' | 'active' | 'done';
};

type ProjectSummary = {
  template: string;
  dimensions: string;
  thickness: string;
  estimate: string;
};

const initialSteps: AgentStep[] = [
  { id: 'input', title: 'Input Agent', description: 'Recibe imagen, PDF, chat o template', status: 'done' },
  { id: 'vision', title: 'Vision Agent', description: 'Detecta líneas, paneles y cotas', status: 'ready' },
  { id: 'cad', title: 'CAD Agent', description: 'Convierte entradas en geometría', status: 'ready' },
  { id: 'builder', title: 'Parametric Builder', description: 'Compone el GlassProject', status: 'ready' },
];

export function DemoClient() {
  const [prompt, setPrompt] = useState('Quiero una puerta de baño 1200 x 2200 con vidrio de 10 mm.');
  const [steps, setSteps] = useState(initialSteps);
  const [summary, setSummary] = useState<ProjectSummary>({
    template: 'pivot_door',
    dimensions: '1200 x 2200 mm',
    thickness: '10 mm',
    estimate: '3 paneles / 2 bisagras / BOM preliminar',
  });
  const [loading, setLoading] = useState(false);

  const runDemo = async () => {
    setLoading(true);
    setSteps((current) =>
      current.map((step, index) => {
        if (index === 0) return { ...step, status: 'done' };
        if (index === 1) return { ...step, status: 'active' };
        return { ...step, status: 'ready' };
      })
    );

    const response = await fetch('/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });

    const payload = await response.json();

    setSummary({
      template: payload.template,
      dimensions: `${payload.dimensions.width} x ${payload.dimensions.height} mm`,
      thickness: `${payload.thickness_mm} mm`,
      estimate: `${payload.estimated_panels} paneles / ${payload.estimated_hinges} bisagras / BOM preliminar`,
    });

    setSteps((current) =>
      current.map((step, index) => {
        if (index < 3) return { ...step, status: 'done' };
        return { ...step, status: 'ready' };
      })
    );
    setLoading(false);
  };

  return (
    <>
      <section className="hero-card">
        <div>
          <p className="eyebrow">Glass AI Platform</p>
          <h1>Diseño parametrizado de vidrio con agentes especializados</h1>
          <p className="hero-text">
            Este prototipo representa el blueprint del producto: captura de input, visión de diseño,
            integración CAD y construcción del modelo GlassProject.
          </p>
          <button onClick={runDemo} disabled={loading}>{loading ? 'Procesando...' : 'Ejecutar demo'}</button>
        </div>

        <div className="panel-card">
          <label htmlFor="prompt">Prompt</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            rows={4}
          />
          <div className="summary-box">
            <h3>Resumen del proyecto</h3>
            <p><strong>Template:</strong> {summary.template}</p>
            <p><strong>Dimensiones:</strong> {summary.dimensions}</p>
            <p><strong>Espesor:</strong> {summary.thickness}</p>
            <p><strong>Estimación:</strong> {summary.estimate}</p>
          </div>
        </div>
      </section>

      <section className="agent-grid">
        {steps.map((step) => (
          <article key={step.id} className={`agent-card ${step.status}`}>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <span>{step.status}</span>
          </article>
        ))}
      </section>
    </>
  );
}
