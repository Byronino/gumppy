import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
import { PruebaPage } from "./pages/PruebaPage";
import { PruebaProvider } from "./context/pruebaContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import PeriogramaPage from "./pages/PeriogramaPage";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <PruebaProvider>
          <BrowserRouter>
            <header>
              <Header />
              <Navbar />
            </header>

            <main className="container mx-auto h-16 content-container  px-10 md:px-0 display-flex p-4">

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/periograma" element={<PeriogramaPage />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<h1>Profile</h1>} />
                  <Route path="/prueba" element={<PruebaPage />} />
                </Route>
              </Routes>

            </main>
            <footer>
              <Footer />
            </footer>
          </BrowserRouter>
        </PruebaProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
