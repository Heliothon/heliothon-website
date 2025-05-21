'use client';

import { useEffect, useState } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AlertBanner() {
  const [alerts, setAlerts] = useState([]);
  const [currentAlertIndex, setCurrentAlertIndex] = useState(0);
  const supabase = createClientComponentClient();

  useEffect(() => {
    fetchAlerts();

    const interval = setInterval(() => {
      setCurrentAlertIndex((prev) => (prev + 1) % alerts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [alerts.length]);

  async function fetchAlerts() {
    const { data, error } = await supabase
      .from('alerts')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false });

    if (!error && data.length > 0) {
      setAlerts(data);
    }
  }

  if (alerts.length === 0) return null;

  const currentAlert = alerts[currentAlertIndex];
  
  const bgColor = {
    info: 'bg-blue-500/10 border-blue-500',
    warning: 'bg-yellow-500/10 border-yellow-500',
    error: 'bg-red-500/10 border-red-500',
  }[currentAlert.type];

  return (
    <div className={`border ${bgColor} p-4 pt-20 transition-all duration-500`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{currentAlert.title}</h3>
            <p className="text-gray-300">{currentAlert.message}</p>
          </div>
          {alerts.length > 1 && (
            <div className="flex gap-1">
              {alerts.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentAlertIndex
                      ? 'bg-white'
                      : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}