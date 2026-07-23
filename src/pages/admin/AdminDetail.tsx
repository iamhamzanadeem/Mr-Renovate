import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Trash2 } from 'lucide-react';
import AdminLayout from '@/components/admin/AdminLayout';
import api from '@/lib/api';

export default function AdminDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const isQuote = location.pathname.includes('/quotes/');
  const endpoint = isQuote ? `/quotes/${id}` : `/contact/${id}`;
  const backPath = isQuote ? '/admin/quotes' : '/admin/leads';

  const [data, setData] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    api.get(endpoint).then(r => setData(r.data)).catch(console.error);
  }, [endpoint]);

  const remove = async () => {
    if (!confirm('Delete this entry?')) return;
    await api.delete(endpoint);
    navigate(backPath);
  };

  const skip = ['id', 'created_at'];
  const labelMap: Record<string, string> = {
    name: 'Name', email: 'Email', phone: 'Phone', subject: 'Subject',
    message: 'Message', location: 'Location', services: 'Services',
    budget: 'Budget', timeline: 'Timeline', details: 'Details',
  };

  return (
    <AdminLayout>
      <div className="max-w-2xl">
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => navigate(backPath)} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors">
            <ArrowLeft size={16} /> Back
          </button>
          <button onClick={remove} className="flex items-center gap-2 text-red-400 hover:text-red-300 text-sm transition-colors">
            <Trash2 size={15} /> Delete
          </button>
        </div>

        <h1 className="text-2xl font-bold text-white mb-1">{isQuote ? 'Quote Request' : 'Lead'} #{id}</h1>
        {data && <p className="text-gray-500 text-sm mb-6">{new Date(data.created_at as string).toLocaleString()}</p>}

        {!data ? (
          <p className="text-gray-400">Loading…</p>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-2xl divide-y divide-gray-800">
            {Object.entries(data)
              .filter(([k]) => !skip.includes(k))
              .map(([key, val]) => (
                <div key={key} className="px-5 py-4">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{labelMap[key] || key}</p>
                  <p className="text-white text-sm whitespace-pre-wrap">
                    {key === 'services' && typeof val === 'string'
                      ? JSON.parse(val).join(', ') || '—'
                      : String(val) || '—'}
                  </p>
                </div>
              ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
