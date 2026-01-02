"use client"

import { useState, useEffect } from "react"
import { X, Loader2, ImageIcon, FileText, Upload } from "lucide-react"

export default function GuideForm({ editingItem, categories, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    thumbnailImage: "",
    pdfUrl: "",
    categoryId: "",
    status: "draft",
    metaTitle: "",
    metaDescription: "",
    isFeatured: false,
    tags: [],
  })

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [thumbnailPreview, setThumbnailPreview] = useState("");
  const [thumbnailError, setThumbnailError] = useState(false);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileName, setPdfFileName] = useState("");
  const [existingThumbnailName, setExistingThumbnailName] = useState("");
  const [existingPdfName, setExistingPdfName] = useState("");
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title || "",
        description: editingItem.description || "",
        content: editingItem.content || "",
        thumbnailImage: editingItem.thumbnail_image || "",
        pdfUrl: editingItem.pdf_url || "",
        categoryId: editingItem.category_id || "",
        status: editingItem.status || "draft",
        metaTitle: editingItem.meta_title || "",
        metaDescription: editingItem.meta_description || "",
        isFeatured: editingItem.is_featured || false,
        tags: Array.isArray(editingItem.tags) ? editingItem.tags.map((t) => (typeof t === "string" ? t : t.name)) : [],
      })
      
      if (editingItem.thumbnail_image) {
        setThumbnailPreview(editingItem.thumbnail_image)
        // Extract filename from URL
        const thumbnailFilename = extractFilenameFromUrl(editingItem.thumbnail_image)
        setExistingThumbnailName(thumbnailFilename)
      }
      
      if (editingItem.pdf_url) {
        // Extract filename from URL
        const pdfFilename = extractFilenameFromUrl(editingItem.pdf_url)
        setExistingPdfName(pdfFilename)
        setPdfFileName(pdfFilename)
      }
    }
  }, [editingItem])

  // Helper function to extract filename from URL
  const extractFilenameFromUrl = (url) => {
    if (!url) return "";
    try {
      // Remove query parameters if any
      const urlWithoutQuery = url.split('?')[0];
      // Get the last part of the URL
      const parts = urlWithoutQuery.split('/');
      const filenameWithTimestamp = parts[parts.length - 1];
      
      // Remove timestamp prefix (format: timestamp-filename.ext)
      const timestampRegex = /^\d+-/;
      if (timestampRegex.test(filenameWithTimestamp)) {
        return filenameWithTimestamp.replace(timestampRegex, '');
      }
      
      // Try UUID pattern removal (format: uuid-filename.ext)
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}-/i;
      if (uuidRegex.test(filenameWithTimestamp)) {
        return filenameWithTimestamp.replace(uuidRegex, '');
      }
      
      return filenameWithTimestamp || "uploaded-file";
    } catch (error) {
      console.error("Error extracting filename:", error);
      return "uploaded-file";
    }
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleThumbnailUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("File size exceeds 10 MB");
      return;
    }
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
    setThumbnailError(false);
    setFormData(prev => ({ ...prev, thumbnailImage: '' }));
    // Clear existing thumbnail name when uploading new file
    setExistingThumbnailName("");
  };

  const handlePdfUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 50 * 1024 * 1024) {
      alert("PDF size exceeds 50 MB");
      return;
    }
    setPdfFile(file);
    setPdfFileName(file.name);
    setFormData(prev => ({ ...prev, pdfUrl: '' }));
    // Clear existing PDF name when uploading new file
    setExistingPdfName("");
  };

  const removeThumbnail = () => {
    setThumbnailPreview("");
    setThumbnailError(false);
    setThumbnailFile(null);
    setFormData((prev) => ({ ...prev, thumbnailImage: "" }));
    // Also clear the existing thumbnail name
    setExistingThumbnailName("");
  };

  const removePdf = () => {
    setPdfFileName("");
    setPdfFile(null);
    setFormData((prev) => ({ ...prev, pdfUrl: "" }));
    // Also clear the existing PDF name
    setExistingPdfName("");
  };

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }))
  }

  const handleSubmit = async () => {
    if (!formData.title.trim() || !formData.description.trim()) {
      alert("Title and Description are required");
      return;
    }

    setFormSubmitting(true);

    try {
      const endpoint = editingItem
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/free-guides/${editingItem.id}`
    : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/free-guides`;

      const method = editingItem ? "PUT" : "POST";

      // Always use FormData for consistency with multer-s3
      const body = new FormData();
      body.append('title', formData.title.trim());
      body.append('description', formData.description.trim());
      body.append('content', formData.content || '');
      body.append('status', formData.status);
      body.append('metaTitle', formData.metaTitle || '');
      body.append('metaDescription', formData.metaDescription || '');
      body.append('isFeatured', formData.isFeatured ? 'true' : 'false');
      body.append('tags', JSON.stringify(formData.tags));
      
      // Only append categoryId if it has a value
      if (formData.categoryId) {
        body.append('categoryId', formData.categoryId);
      }
      
      // Append files with exact field names backend expects
      if (thumbnailFile) {
        body.append('thumbnailImage', thumbnailFile);
      }
      
      if (pdfFile) {
        body.append('pdfFile', pdfFile);
      }

      const response = await fetch(endpoint, {
        method,
        credentials: "include",
        body, // No Content-Type header - let browser set it with boundary
      });

      const result = await response.json();

      if (!response.ok) {
        console.error('Backend validation error:', result);
        throw new Error(result.message || "Failed to save guide");
      }

      await onSubmit();
      alert(`Guide ${editingItem ? "updated" : "created"} successfully!`);
      onClose();
    } catch (err) {
      console.error("Error saving guide:", err);
      alert(err.message || "Failed to save guide. Please try again.");
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl my-8 max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingItem ? "Edit Free Guide" : "Create New Free Guide"}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter guide title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Brief description of the guide"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    addTag()
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Add a tag and press Enter"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Add
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full"
                >
                  {tag}
                  <button type="button" onClick={() => removeTag(tag)} className="hover:text-green-900">
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Thumbnail Image</label>
            <div className="space-y-4">
              {/* Show existing thumbnail info when editing */}
              {editingItem && existingThumbnailName && !thumbnailFile && (
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ImageIcon className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Current thumbnail:</p>
                        <p className="text-sm text-gray-500 truncate max-w-xs">{existingThumbnailName}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {thumbnailPreview && (
                    <div className="mt-3">
                      <img
                        src={thumbnailPreview}
                        alt="Current thumbnail"
                        className="w-40 h-24 object-cover rounded-lg border border-gray-200"
                      />
                    </div>
                  )}
                </div>
              )}
              
              {/* Upload new thumbnail */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
                  <Upload className="w-4 h-4" />
                  {thumbnailFile || existingThumbnailName ? "Change Thumbnail" : "Upload Thumbnail"}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                    className="hidden"
                  />
                </label>
                
                {/* Preview for newly uploaded file */}
                {thumbnailFile && (
                  <div className="relative">
                    <img
                      src={thumbnailPreview}
                      alt="New thumbnail preview"
                      className="w-40 h-24 object-cover rounded-lg border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={removeThumbnail}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* File name for newly uploaded file */}
              {thumbnailFile && (
                <p className="text-sm text-gray-600">
                  Selected: <span className="font-medium">{thumbnailFile.name}</span>
                </p>
              )}
            </div>
          </div>

          {/* PDF Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">PDF File</label>
            <div className="space-y-4">
              {/* Show existing PDF info when editing */}
              {editingItem && existingPdfName && !pdfFile && (
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm font-medium text-gray-700">Current PDF:</p>
                        <p className="text-sm text-gray-500 truncate max-w-xs">{existingPdfName}</p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={removePdf}
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
              
              {/* Upload new PDF */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer">
                  <Upload className="w-4 h-4" />
                  {pdfFile || existingPdfName ? "Change PDF" : "Upload PDF"}
                  <input
                    type="file"
                    accept="application/pdf"
                    onChange={handlePdfUpload}
                    className="hidden"
                  />
                </label>
                
                {/* Display uploaded PDF file name */}
                {pdfFile && (
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                    <FileText className="w-4 h-4 text-gray-600" />
                    <span className="text-sm text-gray-700 truncate max-w-xs">{pdfFile.name}</span>
                    <button type="button" onClick={removePdf} className="text-red-500 hover:text-red-700">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Category (Optional)</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta Title (SEO)</label>
            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="SEO optimized title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Meta Description (SEO)</label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="SEO optimized description"
            />
          </div>

          {/* <div className="border-t pt-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-2 focus:ring-green-500"
              />
              <div>
                <span className="text-sm font-medium text-gray-700">Mark as Featured Guide</span>
                <p className="text-xs text-gray-500">Featured guides will be highlighted on your website</p>
              </div>
            </label>
          </div> */}

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
              className="flex-1 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {formSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Saving...
                </>
              ) : editingItem ? (
                "Update Guide"
              ) : (
                "Create Guide"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}