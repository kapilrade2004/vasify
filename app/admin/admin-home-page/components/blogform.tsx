import React, { useState, useEffect } from "react";
import { X, Clock, Loader2, Image as ImageIcon } from "lucide-react";

export default function BlogForm({
  editingItem,
  categories,
  onClose,
  onSubmit,
}) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    content: "",
    excerpt: "",
    featuredImage: "",
    categoryId: "",
    status: "draft",
    metaTitle: "",
    metaDescription: "",
    isFeatured: false,
    tags: [],
    publishedAt: "",
    authorName: "",
  });

  const [tagInput, setTagInput] = useState("");
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const [imageError, setImageError] = useState(false);
  const [featuredImageFile, setFeaturedImageFile] = useState<File | null>(null);

  // Update form when editingItem changes
  useEffect(() => {
    if (editingItem) {
      setFormData({
        title: editingItem.title || "",
        slug: editingItem.slug || "", // ✅ NEW
        content: editingItem.content || "",
        excerpt: editingItem.excerpt || "",
        featuredImage: editingItem.featured_image || "",
        categoryId: editingItem.category_id || "",
        status: editingItem.status || "draft",
        metaTitle: editingItem.meta_title || "",
        metaDescription: editingItem.meta_description || "",
        isFeatured: editingItem.is_featured || false,
        tags: Array.isArray(editingItem.tags)
          ? editingItem.tags.map((t) => (typeof t === "string" ? t : t.name))
          : [],
        publishedAt: editingItem.published_at
          ? editingItem.published_at.split("T")[0]
          : "",
        authorName: editingItem.author_name || "",
      });

      if (editingItem.featured_image) {
        setImagePreview(editingItem.featured_image);
      }
    }
  }, [editingItem]);


  // Calculate read time
  const calculateReadTime = (content) => {
    if (!content) return 0;
    const words = content.trim().split(/\s+/).length;
    return Math.ceil(words / 200);
  };

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
    setFormData((prev) => ({ ...prev, featuredImage: url }));

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
    setFormData((prev) => ({ ...prev, featuredImage: "" }));
  };

  // Add tag
  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()],
      }));
      setTagInput("");
    }
  };

  // Remove tag
  const removeTag = (tagToRemove) => {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    // Validation
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Title and Content are required");
      return;
    }

    if (!formData.excerpt.trim()) {
      alert("Short Description is required");
      return;
    }

    if (!formData.metaTitle.trim()) {
      alert("Meta Title is required");
      return;
    }

    if (!formData.metaDescription.trim()) {
      alert("Meta Description is required");
      return;
    }

    if (!formData.categoryId) {
      alert("Please select a category");
      return;
    }
    if (!formData.slug.trim()) {
      alert("Slug is required");
      return;
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(formData.slug)) {
      alert("Slug format is invalid (use lowercase, numbers, hyphens)");
      return;
    }


    setFormSubmitting(true);

    try {
      const endpoint = editingItem
        ? `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${editingItem.id}`
        : `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs`;

      const method = editingItem ? "PUT" : "POST";

      let body;
      let headers = {};

      // Use FormData if a file is selected, otherwise JSON
      if (featuredImageFile) {
        body = new FormData();
        body.append("title", formData.title);
        body.append("slug", formData.slug);
        body.append("content", formData.content);
        body.append("excerpt", formData.excerpt);
        body.append("categoryId", formData.categoryId);
        body.append("status", formData.status);
        body.append("metaTitle", formData.metaTitle);
        body.append("metaDescription", formData.metaDescription);
        body.append("isFeatured", String(formData.isFeatured));
        body.append("tags", JSON.stringify(formData.tags));
        if (formData.publishedAt)
          body.append("publishedAt", formData.publishedAt);
        if (formData.authorName)
          body.append("authorName", formData.authorName.trim());
        body.append("featuredImage", featuredImageFile);
      } else {
        // JSON payload if no file
        body = {
          title: formData.title,
          slug: formData.slug,
          content: formData.content,
          excerpt: formData.excerpt,
          featuredImage: formData.featuredImage,
          categoryId: formData.categoryId,
          status: formData.status,
          metaTitle: formData.metaTitle,
          metaDescription: formData.metaDescription,
          isFeatured: formData.isFeatured,
          tags: formData.tags,
          ...(formData.publishedAt && { publishedAt: formData.publishedAt }),
          ...(formData.authorName && {
            authorName: formData.authorName.trim(),
          }),
        };
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(body);
      }

      const response = await fetch(endpoint, {
        method,
        headers,
        credentials: "include",
        body,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to save blog");
      }

      await onSubmit();
      alert(`Blog ${editingItem ? "updated" : "created"} successfully!`);
      onClose();
    } catch (err) {
      console.error("Error saving blog:", err);
      alert(
        err instanceof Error
          ? err.message
          : "Failed to save blog. Please try again."
      );
    } finally {
      setFormSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-4xl my-8 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-lg z-10">
          <h2 className="text-2xl font-bold text-gray-900">
            {editingItem ? "Edit Blog" : "Create New Blog"}
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
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter blog title"
              required
            />
          </div>

          {/* Featured Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image
            </label>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4 relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  onError={() => setImageError(true)}
                  className="w-full h-48 object-cover rounded-lg border border-gray-300"
                />
                <button
                  type="button"
                  onClick={removeImage}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Upload Area */}
            {!imagePreview && (
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    if (file.size > 10 * 1024 * 1024) {
                      alert("File size exceeds 10 MB");
                      return;
                    }
                    setFeaturedImageFile(file);
                    setImagePreview(URL.createObjectURL(file));
                    setImageError(false);
                    setFormData((prev) => ({ ...prev, featuredImage: "" }));
                  }}
                  className="hidden"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <ImageIcon className="w-12 h-12 text-gray-400 mb-3" />
                  <span className="text-sm font-medium text-gray-700 mb-1">
                    Click to upload image
                  </span>
                  <span className="text-xs text-gray-500">
                    PNG, JPG or GIF (max. 10MB)
                  </span>
                </label>
              </div>
            )}
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content <span className="text-red-500">*</span>
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your blog content here..."
              required
            />
            <p className="mt-1 text-sm text-gray-500 flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Estimated read time: {calculateReadTime(formData.content)} minutes
            </p>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Short Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief summary of the blog"
              required
            />
          </div>

          {/* Category & Status */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="draft">Draft</option>
                <option value="published">Published</option>
              </select>
            </div>
          </div>

          {/* Author and Published Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Published Date
              </label>
              <input
                type="date"
                name="publishedAt"
                value={formData.publishedAt}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                Set publication date for the blog
              </p>
            </div>
          </div>
          {/* Slug */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  slug: e.target.value
                    .toLowerCase()
                    .replace(/[^a-z0-9-]/g, "")
                    .replace(/--+/g, "-"),
                }))
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example-blog-slug"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              URL: /blogs/{formData.slug || "your-slug"}
            </p>
          </div>

          {/* Meta Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Title(SEO) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="SEO optimized title"
              required
            />
          </div>

          {/* Meta Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Meta Description (SEO) <span className="text-red-500">*</span>
            </label>
            <textarea
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="SEO optimized description"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTag();
                  }
                }}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removeTag(tag)}
                    className="hover:text-blue-900"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* Featured Checkbox */}
          <div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                name="isFeatured"
                checked={formData.isFeatured}
                onChange={handleInputChange}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">
                Mark as Featured Blog
              </span>
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
              className="flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 flex items-center justify-center"
            >
              {formSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Saving...
                </>
              ) : editingItem ? (
                "Update Blog"
              ) : (
                "Create Blog"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}