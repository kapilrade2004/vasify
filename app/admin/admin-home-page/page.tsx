"use client";
import { useState, useEffect } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  BookOpen,
  FolderOpen,
  FileText,
  Loader2,
} from "lucide-react";
import { useRouter } from "next/navigation";
import BlogForm from "./components/blogform";
import CategoryForm from "./components/categoryform";
import GuideForm from "./components/guideform";
import ProfileDropdown from "./components/profile-dropdown";
import UpdateProfileModal from "./components/update-profile-modal";

export default function BlogDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [guideSearchTerm, setGuideSearchTerm] = useState("");

  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [guides, setGuides] = useState([]);

  const [blogsPagination, setBlogsPagination] = useState(null);
  const [categoriesPagination, setCategoriesPagination] = useState(null);
  const [guidesPagination, setGuidesPagination] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/me`,
        {
          credentials: "include",
        }
      );

      if (!response.ok) {
        router.push("/admin/login");
        return;
      }

      const data = await response.json();
      setUser({ name: data.data.name, email: data.data.email });

      fetchAllData();
    } catch (err) {
      console.error("Auth check failed:", err);

      router.push("/admin/login");
    }
  };

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);
    try {
      await Promise.all([fetchBlogs(), fetchCategories(), fetchGuides()]);
    } catch (err) {
      setError("Failed to load data. Please try again.");
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchBlogs = async (page = 1, search = "") => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        ...(search && { search }),
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs?${params}`
      );
      if (!response.ok) throw new Error("Failed to fetch blogs");

      const data = await response.json();
      setBlogs(data.data?.blogs || []);
      setBlogsPagination(data.data?.pagination || null);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      throw err;
    }
  };

  const fetchCategories = async (page = 1) => {
    try {
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "20",
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories?${params}`
      );
      if (!response.ok) throw new Error("Failed to fetch categories");

      const data = await response.json();
      setCategories(data.data?.categories || []);
      setCategoriesPagination(data.data?.pagination || null);
    } catch (err) {
      console.error("Error fetching categories:", err);
      throw err;
    }
  };

const fetchGuides = async (page = 1, search = "") => {
  try {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: "10",
      ...(search && { search }),
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/free-guides?${params}`
    );
    if (!response.ok) throw new Error("Failed to fetch guides");

    const data = await response.json();
    const rawGuides = data.data?.guides || [];
    
    console.log("📊 First guide from API:", rawGuides[0]);
    console.log("📊 Available fields:", Object.keys(rawGuides[0] || {}));
    
    // Process guides - use the flat category_name field from backend
    const processedGuides = rawGuides.map((guide) => {
      // The backend returns category_name, category_slug directly
      const categoryName = guide.category_name || "N/A";
      const categorySlug = guide.category_slug;
      const categoryId = guide.category_id; // This is from the JOIN, might be duplicate
      
      console.log(`Guide "${guide.title}":`, {
        category_name: guide.category_name,
        category_slug: guide.category_slug,
        category_id: guide.category_id,
        has_category_object: !!guide.category
      });
      
      return {
        ...guide,
        category_name: categoryName,
        category_slug: categorySlug,
        category_id: categoryId,
      };
    });
    
    console.log("📊 Processed guides:", processedGuides);
    
    setGuides(processedGuides);
    setGuidesPagination(data.data?.pagination || null);
  } catch (err) {
    console.error("Error fetching guides:", err);
    throw err;
  }
};

  const closeModal = () => {
    setShowModal(false);
    setEditingItem(null);
    setModalType("");
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      let endpoint = "";
      if (type === "blog")
        endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/blogs/${id}`;
      if (type === "category")
        endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/categories/${id}`;
      if (type === "guide")
        endpoint = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/free-guides/${id}`;

      const response = await fetch(endpoint, {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Delete response:", response);

      // Parse the body safely
      const result = await response.json().catch(() => null);

      // IF API returns 400
      if (response.status === 400 && type === "category") {
        alert(
          result?.message || "Cannot delete category with associated blogs."
        );
        return;
      }

      // Any other error (404, 500, etc)
      if (!response.ok) {
        alert(result?.message || "Failed to delete item.");
        throw new Error(result?.message || "Failed to delete");
      }

      // SUCCESS — refresh lists
      if (type === "blog") await fetchBlogs();
      if (type === "category") await fetchCategories();
      if (type === "guide") await fetchGuides();
    } catch (err) {
      alert("Failed to delete item. Please try again.");
      console.error("Error deleting:", err);
    }
  };

  const handleCategorySubmit = async () => {
    await fetchCategories();
  };

  const handleGuideSubmit = async () => {
    await fetchGuides();
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (activeTab === "blogs") {
      await fetchBlogs(1, searchTerm);
    }
  };

  const openModal = (type, item = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (response.ok) {
        router.push("/admin/login");
      }
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Failed to logout. Please try again.");
    }
  };

  const handleProfileUpdateSuccess = (updatedUser: {
    name: string;
    email: string;
  }) => {
    setUser(updatedUser);
  };

  const StatCard = ({ title, value, icon: Icon, color }) => (
    <div
      className="bg-white rounded-lg shadow p-6 border-l-4"
      style={{ borderColor: color }}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
        </div>
        <Icon className="w-12 h-12 opacity-20" style={{ color }} />
      </div>
    </div>
  );

  if (loading || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchAllData}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b mt-24">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">
              Blog Management Dashboard
            </h1>
            <ProfileDropdown
              user={user}
              onUpdateProfile={() => setShowUpdateProfile(true)}
              onLogout={handleLogout}
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex space-x-4 mb-8 border-b">
          {["overview", "blogs", "categories", "guides"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium capitalize transition-colors ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard
                title="Total Blogs"
                value={blogsPagination?.total || 0}
                icon={BookOpen}
                color="#3b82f6"
              />
              <StatCard
                title="Categories"
                value={categoriesPagination?.total || 0}
                icon={FolderOpen}
                color="#8b5cf6"
              />
              <StatCard
                title="Total Guides"
                value={guidesPagination?.total || 0}
                icon={FileText}
                color="#10b981"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Recent Blogs</h3>
                {blogs.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No blogs yet</p>
                ) : (
                  blogs.slice(0, 3).map((blog) => (
                    <div
                      key={blog.id}
                      className="flex justify-between items-center py-3 border-b last:border-0"
                    >
                      <div>
                        <p className="font-medium">{blog.title}</p>
                        <p className="text-sm text-gray-500">
                          {blog.category_name || "Uncategorized"}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${
                          blog.status === "published"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {blog.status}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                {categories.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">
                    No categories yet
                  </p>
                ) : (
                  categories.slice(0, 5).map((cat) => (
                    <div
                      key={cat.id}
                      className="flex items-center justify-between py-3 border-b last:border-0"
                    >
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-3 bg-blue-500"></div>
                        <span className="font-medium">{cat.name}</span>
                      </div>
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          cat.is_active
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {cat.is_active ? "Active" : "Inactive"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === "blogs" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <form
                onSubmit={handleSearch}
                className="relative flex-1 max-w-md"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </form>
              <button
                onClick={() => openModal("blog")}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ml-4"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Blog
              </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              {blogs.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">No blogs found</p>
                </div>
              ) : (
                <>
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Author
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {blogs.map((blog) => (
                        <tr key={blog.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">
                            {blog.title}
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {blog.category_name || "N/A"}
                          </td>
                          <td className="px-6 py-4">
                            <span
                              className={`px-3 py-1 rounded-full text-xs ${
                                blog.status === "published"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {blog.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {blog.author_name || "N/A"}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <button
                              onClick={() => openModal("blog", blog)}
                              className="text-blue-600 hover:text-blue-800 mr-3"
                            >
                              <Edit2 className="w-5 h-5" />
                            </button>
                            <button
                              onClick={() => handleDelete("blog", blog.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash2 className="w-5 h-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {blogsPagination && blogsPagination.totalPages > 1 && (
                    <div className="px-6 py-4 border-t flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Showing{" "}
                        {(blogsPagination.page - 1) * blogsPagination.limit + 1}{" "}
                        to{" "}
                        {Math.min(
                          blogsPagination.page * blogsPagination.limit,
                          blogsPagination.total
                        )}{" "}
                        of {blogsPagination.total} results
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            fetchBlogs(blogsPagination.page - 1, searchTerm)
                          }
                          disabled={blogsPagination.page === 1}
                          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() =>
                            fetchBlogs(blogsPagination.page + 1, searchTerm)
                          }
                          disabled={
                            blogsPagination.page >= blogsPagination.totalPages
                          }
                          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}

        {activeTab === "categories" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Categories</h2>
              <button
                onClick={() => openModal("category")}
                className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Category
              </button>
            </div>

            {categories.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <p className="text-gray-500">
                  No categories yet. Create your first category!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{cat.name}</h3>
                        <p className="text-sm text-gray-500 mt-1">{cat.slug}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => openModal("category", cat)}
                          className="text-gray-600 hover:text-blue-600"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete("category", cat.id)}
                          className="text-gray-600 hover:text-red-600"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs ${
                        cat.is_active
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {cat.is_active ? "Active" : "Inactive"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === "guides" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Free Guides</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  fetchGuides(1, searchTerm);
                }}
                className="relative flex-1 max-w-md"
              >
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </form>
              <button
                onClick={() => openModal("guide")}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                <Plus className="w-5 h-5 mr-2" />
                New Guide
              </button>
            </div>

            <div className="bg-white rounded-lg shadow overflow-hidden">
              {guides.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No guides found. Create your first guide!
                  </p>
                </div>
              ) : (
                <>
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Title
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Downloads
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      {guides.map((guide) => {
                        // DEBUG: Log each guide to see its structure
                        console.log("Guide data:", guide);

                        return (
                          <tr key={guide.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 font-medium">
                              {guide.title}
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {guide.category_name || // Check for our new field
                                guide.category?.name || // Check for nested category
                                "N/A"}
                            </td>
                            <td className="px-6 py-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs ${
                                  guide.status === "published"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {guide.status}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-gray-600">
                              {guide.download_count || 0}
                            </td>
                            <td className="px-6 py-4 text-right">
                              <button
                                onClick={() => openModal("guide", guide)}
                                className="text-blue-600 hover:text-blue-800 mr-3"
                              >
                                <Edit2 className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleDelete("guide", guide.id)}
                                className="text-red-600 hover:text-red-800"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                  {/* Add pagination for guides too */}
                  {guidesPagination && guidesPagination.totalPages > 1 && (
                    <div className="px-6 py-4 border-t flex items-center justify-between">
                      <p className="text-sm text-gray-600">
                        Showing{" "}
                        {(guidesPagination.page - 1) * guidesPagination.limit +
                          1}{" "}
                        to{" "}
                        {Math.min(
                          guidesPagination.page * guidesPagination.limit,
                          guidesPagination.total
                        )}{" "}
                        of {guidesPagination.total} results
                      </p>
                      <div className="flex gap-2">
                        <button
                          onClick={() =>
                            fetchGuides(guidesPagination.page - 1, searchTerm)
                          }
                          disabled={guidesPagination.page === 1}
                          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                          Previous
                        </button>
                        <button
                          onClick={() =>
                            fetchGuides(guidesPagination.page + 1, searchTerm)
                          }
                          disabled={
                            guidesPagination.page >= guidesPagination.totalPages
                          }
                          className="px-3 py-1 border rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>

      {showModal && modalType === "blog" && (
        <BlogForm
          editingItem={editingItem}
          categories={categories}
          onClose={closeModal}
          onSubmit={fetchBlogs}
        />
      )}

      {showModal && modalType === "category" && (
        <CategoryForm
          editingItem={editingItem}
          onClose={closeModal}
          onSubmit={handleCategorySubmit}
        />
      )}

      {showModal && modalType === "guide" && (
        <GuideForm
          editingItem={editingItem}
          categories={categories}
          onClose={closeModal}
          onSubmit={handleGuideSubmit}
        />
      )}

      <UpdateProfileModal
        isOpen={showUpdateProfile}
        onClose={() => setShowUpdateProfile(false)}
        currentUser={user}
        onSuccess={handleProfileUpdateSuccess}
      />
    </div>
  );
}
