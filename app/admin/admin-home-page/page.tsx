import React, { useState, useEffect, Suspense } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  Search,
  BookOpen,
  FolderOpen,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import BlogForm from "./components/blogform";
import CategoryForm from "./components/categoryform";
import GuideForm from "./components/guideform";
import UpdateProfileModal from "./components/update-profile-modal";

import { DashboardHeader } from "@/components/dashboard-header";
import { DashboardSidebar } from "@/components/dashboard-sidebar";
import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { StatCard } from "@/components/dashboard/stat-card";
import { DashboardSkeleton } from "@/components/ui/skeleton-loader";
import { EmptyState } from "@/components/ui/empty-state";
import { Button } from "@/components/ui/button";

const DashboardCharts = React.lazy(() =>
  import("@/components/dashboard/dashboard-charts").then((m) => ({ default: m.DashboardCharts }))
);

const AISuggestionsWidget = React.lazy(() =>
  import("@/components/dashboard/ai-suggestions-widget").then((m) => ({ default: m.AISuggestionsWidget }))
);

const CommandPalette = React.lazy(() =>
  import("@/components/command-palette").then((m) => ({ default: m.CommandPalette }))
);

function BlogDashboardContent() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("tab") || "overview";

  const [activeTab, setActiveTab] = useState(initialTab);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [guideSearchTerm, setGuideSearchTerm] = useState("");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  const [user, setUser] = useState<{ name: string; email: string } | null>(null);
  const [showUpdateProfile, setShowUpdateProfile] = useState(false);

  const [blogs, setBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [guides, setGuides] = useState<any[]>([]);

  const [blogsPagination, setBlogsPagination] = useState<any>(null);
  const [categoriesPagination, setCategoriesPagination] = useState<any>(null);
  const [guidesPagination, setGuidesPagination] = useState<any>(null);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [editingItem, setEditingItem] = useState<any>(null);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";
      const response = await fetch(
        `${apiBaseUrl}/api/auth/me`,
        { credentials: "include" }
      );

      if (!response.ok) {
        navigate("/admin/login");
        return;
      }

      const data = await response.json();
      setUser({ name: data.data.name, email: data.data.email });
      fetchAllData();
    } catch (err) {
      console.error("Auth check failed:", err);
      navigate("/admin/login");
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
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        ...(search && { search }),
      });

      const response = await fetch(
        `${apiBaseUrl}/api/blogs?${params}`
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
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "20",
      });

      const response = await fetch(
        `${apiBaseUrl}/api/categories?${params}`
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
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";
      const params = new URLSearchParams({
        page: page.toString(),
        limit: "10",
        ...(search && { search }),
      });

      const response = await fetch(
        `${apiBaseUrl}/api/free-guides?${params}`
      );
      if (!response.ok) throw new Error("Failed to fetch guides");

      const data = await response.json();
      const rawGuides = data.data?.guides || [];
      const processedGuides = rawGuides.map((guide: any) => ({
        ...guide,
        category_name: guide.category_name || guide.category?.name || "Uncategorized",
      }));

      setGuides(processedGuides);
      setGuidesPagination(data.data?.pagination || null);
    } catch (err) {
      console.error("Error fetching guides:", err);
      throw err;
    }
  };

  const handleLogout = async () => {
    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";
      await fetch(`${apiBaseUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
      navigate("/admin/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const openModal = (type: string, item: any = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType("");
    setEditingItem(null);
  };

  const handleDelete = async (type: string, id: number) => {
    if (!confirm(`Are you sure you want to delete this ${type}?`)) return;

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "https://backend.vasifytech.com";
      let endpoint = "";
      if (type === "blog") endpoint = `${apiBaseUrl}/api/blogs/${id}`;
      else if (type === "category") endpoint = `${apiBaseUrl}/api/categories/${id}`;
      else if (type === "guide") endpoint = `${apiBaseUrl}/api/free-guides/${id}`;

      const response = await fetch(endpoint, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) throw new Error(`Failed to delete ${type}`);

      if (type === "blog") fetchBlogs(blogsPagination?.page || 1, searchTerm);
      else if (type === "category") fetchCategories(categoriesPagination?.page || 1);
      else if (type === "guide") fetchGuides(guidesPagination?.page || 1, guideSearchTerm);
    } catch (err) {
      console.error(`Error deleting ${type}:`, err);
      alert(`Failed to delete ${type}. Please try again.`);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBlogs(1, searchTerm);
  };

  const handleProfileUpdateSuccess = (updatedUser: { name: string; email: string }) => {
    setUser(updatedUser);
  };

  const handleCategorySubmit = async () => {
    await fetchCategories();
  };

  const handleGuideSubmit = async () => {
    await fetchGuides();
  };

  const getUserFirstName = () => {
    if (!user?.name) return "Mohish";
    return user.name.split(" ")[0];
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans">
      <DashboardHeader
        user={user}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onUpdateProfile={() => setShowUpdateProfile(true)}
        onLogout={handleLogout}
      />

      <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 gap-6">
        <DashboardSidebar
          activeTab={activeTab}
          onSelectTab={(tab) => {
            if (tab === "settings") {
              navigate("/admin/settings");
            } else {
              setActiveTab(tab);
            }
          }}
        />

        <main className="flex-1 min-w-0 pb-20 md:pb-6">
          {/* Personalized Dashboard Greeting Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="heading-1 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                {getGreeting()}, {getUserFirstName()} <span className="animate-bounce">👋</span>
              </h1>
              <p className="caption-text text-slate-500 dark:text-slate-400 mt-1">
                Here is your AI-powered performance & content metrics breakdown for today.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Button
                onClick={() => openModal("blog")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2 shadow-md"
              >
                <Plus className="w-4 h-4" /> New Article
              </Button>
            </div>
          </div>

          {loading ? (
            <DashboardSkeleton />
          ) : error ? (
            <div className="p-6 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-600 text-center font-medium">
              {error}
            </div>
          ) : (
            <>
              {/* Overview Tab View */}
              {(activeTab === "overview" || activeTab === "ai-workspace") && (
                <div className="space-y-6">
                  {/* Layered Metric Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard
                      title="Total Published Blogs"
                      value={blogsPagination?.total || blogs.length}
                      trend="14.2%"
                      isPositive={true}
                      comparisonText="Compared to last month"
                      icon={BookOpen}
                      color="#10b981"
                      sparklineData={[{ val: 10 }, { val: 15 }, { val: 14 }, { val: 22 }, { val: 28 }, { val: 32 }]}
                    />
                    <StatCard
                      title="Active Categories"
                      value={categoriesPagination?.total || categories.length}
                      trend="8.1%"
                      isPositive={true}
                      comparisonText="Compared to last month"
                      icon={FolderOpen}
                      color="#3b82f6"
                      sparklineData={[{ val: 5 }, { val: 7 }, { val: 6 }, { val: 10 }, { val: 12 }, { val: 15 }]}
                    />
                    <StatCard
                      title="Free Guide Downloads"
                      value={guidesPagination?.total || guides.length}
                      trend="24.5%"
                      isPositive={true}
                      comparisonText="Compared to yesterday"
                      icon={FileText}
                      color="#a855f7"
                      sparklineData={[{ val: 20 }, { val: 28 }, { val: 35 }, { val: 42 }, { val: 50 }, { val: 68 }]}
                    />
                  </div>

                  {/* Recharts Data Visualizations */}
                  <DashboardCharts />

                  {/* AI Suggestions Widget */}
                  <AISuggestionsWidget />

                  {/* Recent Articles Section */}
                  <div className="layered-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="heading-card text-slate-900 dark:text-slate-100">
                        Recent Articles
                      </h3>
                      <button
                        onClick={() => setActiveTab("blogs")}
                        className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
                      >
                        View All <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {blogs.length === 0 ? (
                      <EmptyState
                        title="No articles published yet"
                        description="Start publishing AI-optimized articles to attract organic leads."
                        actionLabel="Create First Article"
                        onAction={() => openModal("blog")}
                      />
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                          <thead className="text-xs uppercase bg-slate-100/70 dark:bg-slate-800/70 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                            <tr>
                              <th className="px-4 py-3 rounded-l-xl">Article Title</th>
                              <th className="px-4 py-3">Category</th>
                              <th className="px-4 py-3">Status</th>
                              <th className="px-4 py-3">Author</th>
                              <th className="px-4 py-3 text-right rounded-r-xl">Actions</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                            {blogs.slice(0, 5).map((blog) => (
                              <tr key={blog.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                                <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-slate-100">
                                  {blog.title}
                                </td>
                                <td className="px-4 py-3.5 text-slate-500">
                                  {blog.category_name || "Uncategorized"}
                                </td>
                                <td className="px-4 py-3.5">
                                  <span
                                    className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                      blog.status === "published"
                                        ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400"
                                        : "bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400"
                                    }`}
                                  >
                                    {blog.status}
                                  </span>
                                </td>
                                <td className="px-4 py-3.5 text-slate-500">
                                  {blog.author_name || "Admin"}
                                </td>
                                <td className="px-4 py-3.5 text-right space-x-2">
                                  <button
                                    onClick={() => openModal("blog", blog)}
                                    title="Edit article"
                                    aria-label="Edit article"
                                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-blue-600 transition-colors"
                                  >
                                    <Edit2 className="w-4 h-4" />
                                  </button>
                                  <button
                                    onClick={() => handleDelete("blog", blog.id)}
                                    title="Delete article"
                                    aria-label="Delete article"
                                    className="p-1.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-rose-600 transition-colors"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Blogs Tab View */}
              {activeTab === "blogs" && (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <form onSubmit={handleSearch} className="flex gap-2 w-full sm:w-auto">
                      <div className="relative flex-1 sm:w-72">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search articles..."
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        />
                      </div>
                      <Button type="submit" variant="secondary" className="rounded-xl">Search</Button>
                    </form>

                    <Button
                      onClick={() => openModal("blog")}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2 w-full sm:w-auto justify-center"
                    >
                      <Plus className="w-4 h-4" /> New Article
                    </Button>
                  </div>

                  <div className="layered-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 overflow-x-auto">
                    {blogs.length === 0 ? (
                      <EmptyState
                        title="No matching articles found"
                        description="Try adjusting your search criteria or create a new blog article."
                        actionLabel="Create New Article"
                        onAction={() => openModal("blog")}
                      />
                    ) : (
                      <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                        <thead className="text-xs uppercase bg-slate-100/70 dark:bg-slate-800/70 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                          <tr>
                            <th className="px-4 py-3 rounded-l-xl">Title</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Author</th>
                            <th className="px-4 py-3 text-right rounded-r-xl">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                          {blogs.map((blog) => (
                            <tr key={blog.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                              <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-slate-100">
                                {blog.title}
                              </td>
                              <td className="px-4 py-3.5 text-slate-500">{blog.category_name || "N/A"}</td>
                              <td className="px-4 py-3.5">
                                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                  blog.status === "published" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                                }`}>
                                  {blog.status}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 text-slate-500">{blog.author_name || "N/A"}</td>
                              <td className="px-4 py-3.5 text-right space-x-2">
                                <button onClick={() => openModal("blog", blog)} title="Edit article" aria-label="Edit article" className="p-1 text-blue-600 hover:text-blue-800">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete("blog", blog.id)} title="Delete article" aria-label="Delete article" className="p-1 text-rose-600 hover:text-rose-800">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              )}

              {/* Categories Tab View */}
              {activeTab === "categories" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="heading-section text-slate-900 dark:text-slate-100">Categories</h2>
                    <Button
                      onClick={() => openModal("category")}
                      className="bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> New Category
                    </Button>
                  </div>

                  {categories.length === 0 ? (
                    <EmptyState
                      icon={FolderOpen}
                      title="No categories created"
                      description="Organize your blog topics by creating your first category."
                      actionLabel="Add Category"
                      onAction={() => openModal("category")}
                    />
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categories.map((cat) => (
                        <div key={cat.id} className="layered-card rounded-2xl p-5 border-l-4 border-purple-500 space-y-3">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{cat.name}</h3>
                              <p className="text-xs text-slate-400 font-mono mt-0.5">{cat.slug}</p>
                            </div>
                            <div className="flex gap-1">
                              <button onClick={() => openModal("category", cat)} title="Edit category" aria-label="Edit category" className="p-1 text-slate-400 hover:text-blue-600">
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button onClick={() => handleDelete("category", cat.id)} title="Delete category" aria-label="Delete category" className="p-1 text-slate-400 hover:text-rose-600">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                            cat.is_active ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500"
                          }`}>
                            {cat.is_active ? "Active" : "Inactive"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Guides Tab View */}
              {activeTab === "guides" && (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="heading-section text-slate-900 dark:text-slate-100">Free Guides</h2>
                    <Button
                      onClick={() => openModal("guide")}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl px-4 py-2 flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" /> New Free Guide
                    </Button>
                  </div>

                  {guides.length === 0 ? (
                    <EmptyState
                      icon={FileText}
                      title="No free guides created"
                      description="Create downloadable PDF guides to generate high-intent WhatsApp leads."
                      actionLabel="Create Free Guide"
                      onAction={() => openModal("guide")}
                    />
                  ) : (
                    <div className="layered-card rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 overflow-x-auto">
                      <table className="w-full text-left text-sm text-slate-600 dark:text-slate-300">
                        <thead className="text-xs uppercase bg-slate-100/70 dark:bg-slate-800/70 text-slate-400 font-semibold border-b border-slate-200 dark:border-slate-800">
                          <tr>
                            <th className="px-4 py-3 rounded-l-xl">Guide Title</th>
                            <th className="px-4 py-3">Category</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Downloads</th>
                            <th className="px-4 py-3 text-right rounded-r-xl">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                          {guides.map((guide) => (
                            <tr key={guide.id} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                              <td className="px-4 py-3.5 font-semibold text-slate-900 dark:text-slate-100">{guide.title}</td>
                              <td className="px-4 py-3.5 text-slate-500">{guide.category_name || "N/A"}</td>
                              <td className="px-4 py-3.5">
                                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${
                                  guide.status === "published" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                                }`}>
                                  {guide.status}
                                </span>
                              </td>
                              <td className="px-4 py-3.5 font-semibold text-slate-700 dark:text-slate-300">
                                {guide.download_count || 0}
                              </td>
                              <td className="px-4 py-3.5 text-right space-x-2">
                                <button onClick={() => openModal("guide", guide)} title="Edit guide" aria-label="Edit guide" className="p-1 text-blue-600 hover:text-blue-800">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button onClick={() => handleDelete("guide", guide.id)} title="Delete guide" aria-label="Delete guide" className="p-1 text-rose-600 hover:text-rose-800">
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </main>
      </div>

      {showModal && modalType === "blog" && (
        <BlogForm editingItem={editingItem} categories={categories} onClose={closeModal} onSubmit={fetchBlogs} />
      )}
      {showModal && modalType === "category" && (
        <CategoryForm editingItem={editingItem} onClose={closeModal} onSubmit={handleCategorySubmit} />
      )}
      {showModal && modalType === "guide" && (
        <GuideForm editingItem={editingItem} categories={categories} onClose={closeModal} onSubmit={handleGuideSubmit} />
      )}

      {showUpdateProfile && user && (
        <UpdateProfileModal
          isOpen={showUpdateProfile}
          onClose={() => setShowUpdateProfile(false)}
          currentUser={user}
          onSuccess={handleProfileUpdateSuccess}
        />
      )}

      {isCommandPaletteOpen && (
        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
      )}

      <MobileBottomNav />
    </div>
  );
}

export default function BlogDashboard() {
  return (
    <Suspense fallback={<DashboardSkeleton />}>
      <BlogDashboardContent />
    </Suspense>
  );
}
