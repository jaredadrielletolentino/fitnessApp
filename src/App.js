import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { AuthPage } from './pages/AuthPage';
import { WorkoutsPage } from './pages/WorkoutsPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import './App.css';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="main-content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<AuthPage />} />
                        <Route path="/workouts" element={
                            <ProtectedRoute>
                                <WorkoutsPage />
                            </ProtectedRoute>
                        } />
                        <Route path="/workouts/*" element={
                            <ProtectedRoute>
                                <WorkoutsPage />
                            </ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
}

export default App;