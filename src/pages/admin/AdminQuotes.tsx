import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Eye } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import api from '@/lib/api';

interface Quote {
  id: number;
  name: string;
  email: string;
  phone: string;
  budget: string;
  timeline: string;
  created_at: string;
}

export default function AdminQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    api.get('/quotes').then(r => { setQuotes(r.data); setLoading(false); }).catch(console.error);
  };

  useEffect(load, []);

  const remove = async (id: number) => {
    if (!confirm('Delete this quote request?')) return;
    await api.delete(`/quotes/${id}`);
    setQuotes(prev => prev.filter(q => q.id !== id));
  };

  return (
    <AdminLayout>
      <h1 className="text-2xl font-bold text-white mb-6">Quotes <span className="text-gray-500 text-base font-normal">({quotes.length})</span></h1>
      {loading ? (
        <p className="text-gray-400">Loading…</p>
      ) : quotes.length === 0 ? (
        <p className="text-gray-500">No quote requests yet.</p>
      ) : (
        <div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800 text-gray-400">
                <th className="text-left px-4 py-3 font-medium">Name</th>
                <th className="text-left px-4 py-3 font-medium">Email</th>
                <th className="text-left px-4 py-3 font-medium">Budget</th>
                <th className="text-left px-4 py-3 font-medium">Timeline</th>
                <th className="text-left px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {quotes.map(q => (
                <tr key={q.id} className="border-b border-gray-800/50 hover:bg-gray-800/30 transition-colors">
                  <td className="px-4 py-3 text-white">{q.name}</td>
                  <td className="px-4 py-3 text-gray-300">{q.email}</td>
                  <td className="px-4 py-3 text-gray-300">{q.budget || '—'}</td>
                  <td className="px-4 py-3 text-gray-300">{q.timeline || '—'}</td>
                  <td className="px-4 py-3 text-gray-400">{new Date(q.created_at).toLocaleDateString()}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2 justify-end">
                      <Link to={`/admin/quotes/${q.id}`} className="p-1.5 text-gray-400 hover:text-yellow-500 transition-colors">
                        <Eye size={15} />
                      </Link>
                      <button onClick={() => remove(q.id)} className="p-1.5 text-gray-400 hover:text-red-400 transition-colors">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminLayout>
  );
}
