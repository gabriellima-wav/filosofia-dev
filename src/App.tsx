import { ErrorBoundary } from "react-error-boundary";
import AppRoutes from "./AppRoutes";
import Breadcrumbs from "./components/Breadcrumbs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { AuthProvider } from "./pages/AuthContext";

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AuthProvider>
        <Header />
        <Breadcrumbs />
        <AppRoutes />
        <Footer />
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;
