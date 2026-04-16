import React from 'react'
import ReactDOM from 'react-dom/client'
import Sidebar from './layouts/Sidebar'
import Header from './layouts/Header'
import Dashboard from './pages/Dashboard'
import './assets/tailwind.css'

function App() {
    return (
        <div className="min-h-screen bg-latar">
            <Sidebar />
            <div className="ml-64">
                <Header />
                <main className="p-6">
                    <Dashboard />
                </main>
            </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)