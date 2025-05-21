'use client';

import { useState, useEffect } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';

export default function AdminAlertsPage() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('info');
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    checkUser();
    fetchAlerts();
  }, []);

  async function checkUser() {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      router.push('/admin/login');
    }
  }

  async function fetchAlerts() {
    const { data, error } = await supabase
      .from('alerts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching alerts:', error);
    } else {
      setAlerts(data);
    }
    setLoading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    const { data, error } = await supabase
      .from('alerts')
      .insert([
        {
          title,
          message,
          type,
          active: true
        }
      ]);

    if (error) {
      console.error('Error creating alert:', error);
    } else {
      setTitle('');
      setMessage('');
      setType('info');
      fetchAlerts();
    }
  }

  async function toggleAlert(id, currentActive) {
    const { error } = await supabase
      .from('alerts')
      .update({ active: !currentActive })
      .eq('id', id);

    if (error) {
      console.error('Error toggling alert:', error);
    } else {
      fetchAlerts();
    }
  }

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Manage Alerts</h1>

      <form onSubmit={handleSubmit} className="mb-12 bg-black/50 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
            rows={4}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          >
            <option value="info">Info</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Create Alert
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-4">Existing Alerts</h2>
        {alerts.map((alert) => (
          <div
            key={alert.id}
            className={`p-4 rounded-lg border ${
              alert.active
                ? 'bg-black/50 border-gray-700'
                : 'bg-black/20 border-gray-800'
            }`}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{alert.title}</h3>
              <button
                onClick={() => toggleAlert(alert.id, alert.active)}
                className={`px-3 py-1 rounded text-sm ${
                  alert.active
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {alert.active ? 'Deactivate' : 'Activate'}
              </button>
            </div>
            <p className="text-gray-300 mb-2">{alert.message}</p>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Type: {alert.type}</span>
              <span>
                Created: {new Date(alert.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}