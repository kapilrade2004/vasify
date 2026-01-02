import React, { useState, useEffect } from "react"; 
import { X, Loader2, ImageIcon } from "lucide-react";

export default function CategoryForm({ editingItem, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    isActive: true,
  });

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  // Update form when editingItem changes
  useEffect(() => {
    if (editingItem) {
      setFormData({
        name: editingItem.name || "",
        description: editingItem.description || "",
        imageUrl: editingItem.image_url || "",
        isActive: editingItem.is_active === true, // ✅ Fixed: Use strict comparison
      });
      // Set preview for existing image
      if (editingItem.image_url) {
        setImagePreview(editingItem.image_url);
        setImageError(false);
      }
    } else {
      // ✅ Fixed: Reset form when creating new category
      setFormData({
        name: "",
        description: "",
        imageUrl: "",
        isActive: true,
      });
      setImagePreview("");
      setImageError(false);
      setImageFile(null);
    }
  }, [editingItem]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle image URL change
  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    setFormData((prev) => ({ ...prev, imageUrl: url }));

    if (url.trim()) {
      setImagePreview(url);
      setImageError(false);
    } else {
      setImagePreview("");
      setImageError(false);
    }
  };

  // Remove image
  const removeImage = () => {
    setImagePreview("");
    setImageError(false);
    setImageFile(null);
    setFormData((prev) => ({ ...prev, imageUrl: "" }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      alert("Category name is required");
      return;
    }

    setFormSubmitting(true);

    try {
      const endpoint = editingItem
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/${editingItem.id}`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories`;

      const method = editingItem ? "PUT" : "POST";

      const formDataPayload = new FormData();
      formDataPayload.append("name", formData.name);
      formDataPayload.append("description", formData.description);
      formDataPayload.append("isActive", formData.isActive.toString()); // ✅ Convert to string

      if (imageFile) {
        formDataPayload.append("image", imageFile);
      }

      const response = await fetch(endpoint, {
        method,
        credentials: "include",
        body: formDataPayload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save category");
      }

      await onSubmit();
      alert(`Category ${editingItem ? "updated" : "created"} successfully!`);
      onClose();
    } catch (err) {
      console.error("Error saving category:", err);
      alert(err.message || "Failed to save category. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-2xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingItem ? "Edit Category" : "Create New Category"}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter category name"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter category description (optional)"
            />
            <p className="mt-1 text-xs text-gray-500">
              A brief description of what this category represents
            </p>
          </div>

          {/* Image URL with Preview */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category Image URL
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setImageFile(file);
                  setImagePreview(URL.createObjectURL(file));
                  setImageError(false);
                }
              }}
            />

            <p className="mt-1 text-xs text-gray-500">
              Optional image to represent this category
            </p>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mt-4 relative">
                {!imageError ? (
                  <>
                    <img
                      src={imagePreview}
                      alt="Category preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-200"
                      onError={() => setImageError(true)}
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                      title="Remove image"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <div className="w-full h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center">
                    <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">
                      Failed to load image
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      Please check the URL
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Active Status */}
          <div className="border-t pt-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleInputChange}
                className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
              />
              <div>
                <span className="text-sm font-medium text-gray-700">
                  Active Category
                </span>
                <p className="text-xs text-gray-500">
                  Active categories will be visible on your website
                </p>
              </div>
            </label>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200 sticky bottom-0 bg-white">
            <button
              type="button"
              onClick={onClose}
              disabled={formSubmitting}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={formSubmitting}
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {formSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Saving...
                </>
              ) : editingItem ? (
                "Update Category"
              ) : (
                "Create Category"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}