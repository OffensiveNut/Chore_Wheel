import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface AddChoreModalProps {
  onClose: () => void;
}

export function AddChoreModal({ onClose }: AddChoreModalProps) {
  const [choreName, setChoreName] = useState('');
  const [description, setDescription] = useState('');
  const [frequency, setFrequency] = useState('Weekly');
  const [rotationOrder, setRotationOrder] = useState('1');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!choreName.trim()) {
      alert('Please enter a chore name');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsComplete(true);

    // Close modal after showing success
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h3 className="text-gray-900">Add New Chore</h3>
            <p className="text-gray-600">Create a new household task</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Chore Name */}
          <div>
            <label className="block text-gray-700 mb-2">
              Chore Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={choreName}
              onChange={(e) => setChoreName(e.target.value)}
              placeholder="e.g., Water Plants"
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">Description (Optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Add details about this chore..."
              className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
              rows={3}
            />
          </div>

          {/* Frequency and Rotation Order */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">
                Frequency <span className="text-red-500">*</span>
              </label>
              <select
                value={frequency}
                onChange={(e) => setFrequency(e.target.value)}
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
              >
                <option>Daily</option>
                <option>Weekly</option>
                <option>Bi-weekly</option>
                <option>Monthly</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Rotation Order</label>
              <input
                type="number"
                value={rotationOrder}
                onChange={(e) => setRotationOrder(e.target.value)}
                min="1"
                placeholder="1"
                className="w-full border-2 border-gray-200 rounded-2xl px-4 py-3 focus:outline-none focus:border-[#8B5CF6] transition-colors"
              />
            </div>
          </div>

          {/* Success Message */}
          {isComplete && (
            <div className="bg-[#F0FDF4] border border-green-200 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <p className="text-gray-900">Chore created successfully!</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-2xl py-3 transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting || isComplete}
              className="flex-1 bg-gradient-to-r from-[#6EE7B7] to-[#34D399] hover:from-[#5FD9A8] hover:to-[#2BC78F] text-white rounded-2xl py-3 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Creating...' : isComplete ? 'Created!' : 'Create Chore'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
