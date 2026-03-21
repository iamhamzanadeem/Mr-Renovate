import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, FileText, TrendingUp, Calendar } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import api from '@/lib/api';

interface Stats {
  total_contacts: number;
  total_quotes: number;
  today_contacts: number;
  today_quotes: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    api.get('/admin/stats').then(r => setStats(r.data)).catch(console.error);
  }, []);

  const cards = stats
    ? [
        { label: 'Total Leads', value: stats.total_contacts, sub: `+${stats.today_contacts} today`, icon: MessageSquare, to: '/admin/leads' },
        { label: 'Total Quotes', value: stats.total_quotes, sub: `+${stats.today_quotes} today`, icon: FileText, to: '/admin/quotes' },
        { label: "Today's Leads", value: stats.today_contacts, sub: 'New contact submissions', icon: TrendingUp, to: '/admin/leads' },
        { label: "Today's Quotes", value: stats.today_quotes, sub: 'New quote requests', icon: Calendar, to: '/admin/quotes' },
      ]
    : [];

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-white mb-6">Dashboard</h1>
      {!stats ? (
        <p className="text-gray-400">Loading…</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map(({ label, value, sub, icon: Icon, to }) => (
            <Link
              key={label}
              to={to}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-yellow-500/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">{label}</span>
                <Icon size={18} className="text-yellow-500" />
              </div>
              <p className="text-3xl font-bold text-white">{value}</p>
              <p className="text-xs text-gray-500 mt-1">{sub}</p>
            </Link>
          ))}
        </div>
      )}
    </AdminLayout>
  );
}
