import { auth0 } from '../lib/auth0';
import { DemoClient } from '../components/demo-client';

export default async function HomePage() {
  const session = await auth0.getSession();

  return (
    <main className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Autenticación</p>
          <h2>{session?.user ? `Conectado como ${session.user.name ?? session.user.email}` : 'Acceso con Auth0 para tu workspace'}</h2>
        </div>
        <div className="auth-actions">
          {session?.user ? (
            <a href="/auth/logout" className="auth-link secondary">Cerrar sesión</a>
          ) : (
            <a href="/auth/login" className="auth-link">Iniciar sesión</a>
          )}
        </div>
      </header>

      <DemoClient />
    </main>
  );
}
