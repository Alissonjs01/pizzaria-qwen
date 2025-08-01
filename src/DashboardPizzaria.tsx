import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home, Pizza, Users, TrendingUp, Clock } from 'lucide-react';

const DashboardPizzaria = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="p-6 max-w-7xl mx-auto space-y-8">
        {/* Título */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            🍕 Pizzaria Don Giovanni
          </h1>
          <p className="text-lg text-gray-600">Sistema de Gestão de Pedidos e Equipe</p>
        </div>

        {/* Cards de Estatísticas */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-orange-500">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Pedidos Hoje</h3>
                <p className="text-2xl font-bold text-gray-800">34</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp size={12} className="mr-1" /> +12% vs ontem
                </p>
              </div>
              <Pizza className="text-orange-500" size={32} />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-green-500">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Entregas Concluídas</h3>
                <p className="text-2xl font-bold text-gray-800">28</p>
                <p className="text-xs text-gray-500 mt-1">4 em andamento</p>
              </div>
              <Home size={32} className="text-green-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-blue-500">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Clientes Ativos</h3>
                <p className="text-2xl font-bold text-gray-800">56</p>
                <p className="text-xs text-gray-500 mt-1">Últimos 7 dias</p>
              </div>
              <Users size={32} className="text-blue-500" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-purple-500">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-600">Tempo Médio</h3>
                <p className="text-2xl font-bold text-gray-800">28 min</p>
                <p className="text-xs text-red-600 mt-1">Meta: 25 min</p>
              </div>
              <Clock size={32} className="text-purple-500" />
            </div>
          </div>
        </div>

        {/* Tabela de Pedidos */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Pedidos em Andamento</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-sm text-gray-700 border-b">
                  <th className="pb-3 font-semibold">Cliente</th>
                  <th className="pb-3 font-semibold">Pedido</th>
                  <th className="pb-3 font-semibold">Valor</th>
                  <th className="pb-3 font-semibold">Status</th>
                  <th className="pb-3 font-semibold">Entrega</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3">Maria Silva</td>
                  <td>2x Margherita, 1x Calabresa</td>
                  <td className="font-medium">R$ 98,00</td>
                  <td>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs font-medium">
                      Em preparo
                    </span>
                  </td>
                  <td>15 min</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3">Carlos Oliveira</td>
                  <td>1x Pepperoni, 1x Vegetariana</td>
                  <td className="font-medium">R$ 82,00</td>
                  <td>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
                      Saiu para entrega
                    </span>
                  </td>
                  <td>8 min</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-3">Ana Costa</td>
                  <td>3x Quatro Queijos</td>
                  <td className="font-medium">R$ 114,00</td>
                  <td>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium border">
                      Aguardando pagamento
                    </span>
                  </td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-12">
          Sistema Don Giovanni • Gestão Inteligente de Pizzaria • © 2025
        </div>
      </div>
    </div>
  );
};

// Renderização
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DashboardPizzaria />
  </React.StrictMode>
);