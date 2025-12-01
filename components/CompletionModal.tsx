import { useState } from 'react';
import { X, Upload, Camera, Loader2, CheckCircle2 } from 'lucide-react';

interface CompletionModalProps {
  choreId: number;
  onClose: () => void;
}

export function CompletionModal({ choreId, onClose }: CompletionModalProps) {
  const [image, setImage] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Mock chore data
  const chore = {
    id: choreId,
    name: 'Wash Dishes',
    emoji: '🍽️',
    description: 'Clean all dishes, pots, and pans. Wipe down counters and sink.',
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB');
      return;
    }

    // Validate file type
    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      alert('File must be JPG, PNG, or WebP');
      return;
    }

    // Create preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setIsUploading(true);

    // Simulate upload and update
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsUploading(false);
    setIsComplete(true);

    // Close modal after showing success
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center">
              <span className="text-2xl">{chore.emoji}</span>
            </div>
            <div>
              <h3 className="text-gray-900">Complete Chore</h3>
              <p className="text-gray-600">{chore.name}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Chore Details */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h4 className="text-gray-900 mb-2">Description</h4>
            <p className="text-gray-600">{chore.description}</p>
          </div>

          {/* Photo Upload */}
          <div>
            <h4 className="text-gray-900 mb-3">Add Photo (Optional)</h4>
            
            {!image ? (
              <label className="block border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center cursor-pointer hover:border-[#8B5CF6] hover:bg-purple-50 transition-all">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                    <Upload className="w-8 h-8 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Drag & drop or click to upload</p>
                    <p className="text-gray-500">JPG, PNG, or WebP (max 5MB)</p>
                  </div>
                </div>
              </label>
            ) : (
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={image}
                  alt="Upload preview"
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-3 right-3 p-2 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>
            )}
          </div>

          {/* Notes */}
          <div>
            <h4 className="text-gray-900 mb-3">Notes (Optional)</h4>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any additional notes about this chore..."
              className="w-full border-2 border-gray-200 rounded-2xl p-4 min-h-[100px] focus:outline-none focus:border-[#8B5CF6] transition-colors resize-none"
            />
          </div>

          {/* Info Message */}
          {image && (
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4">
              <p className="text-gray-700">
                📸 Photo uploads require admin verification before marking complete.
              </p>
            </div>
          )}

          {/* Success Message */}
          {isComplete && (
            <div className="bg-[#F0FDF4] border border-green-200 rounded-2xl p-4 flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              <p className="text-gray-900">
                {image
                  ? 'Chore submitted! Pending admin verification.'
                  : 'Chore marked complete!'}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-2xl py-3 transition-colors"
            disabled={isUploading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isUploading || isComplete}
            className="flex-1 bg-gradient-to-r from-[#6EE7B7] to-[#34D399] hover:from-[#5FD9A8] hover:to-[#2BC78F] text-white rounded-2xl py-3 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : isComplete ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                <span>Complete!</span>
              </>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
