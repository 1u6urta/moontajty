// File: app/page.tsx (or pages/index.tsx if using pages directory)

"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from "react";
import { useTranslations } from "next-intl";
import { CloseIcon } from "@/_Components/CloseIcon";
import FilterItem from "@/_Components/FilterItem";
import RangeFilterItem from "@/_Components/RangeFilterItem";
import PropertyCard from "@/_Components/PropertyCard";

// Define types for our property data
interface Property {
  id: number;
  title: string;
  image: string;
  price: number;
  category: string;
  // rating: number;
  location: string;
  favorites: number;
  promo: number;
}

const sampleProperties: Property[] = [
  {
    id: 1,
    title: "Handcrafted Ceramic Vase",
    image: "/image 4.jpg",
    price: 2500,
    category: "Décoration",
    // rating: 4.8,
    location: "Alger",
    favorites: 42,
    promo: 0,
  },
  {
    id: 2,
    title: "Traditional Berber Rug",
    image: "/image 1.jpg",
    price: 8500,
    category: "Décoration",
    // rating: 4.9,
    location: "Constantine",
    favorites: 67,
    promo: 50,
  },
  {
    id: 3,
    title: "Handwoven Basket Set",
    image: "/image 3.jpg",
    price: 3200,
    category: "Cuisine",
    // rating: 4.7,
    location: "Oran",
    favorites: 28,
    promo: 0,
  },
  {
    id: 4,
    title: "Embroidered Textile Wall Art",
    image: "/image 2.jpg",
    price: 4700,
    category: "Décoration",
    // rating: 4.5,
    location: "Tlemcen",
    favorites: 35,
    promo: 90,
  },
  {
    id: 5,
    title: "Handmade Leather Pouf",
    image: "/api/placeholder/300/200",
    price: 6200,
    category: "Décoration",
    // rating: 4.6,
    location: "Alger",
    favorites: 51,
    promo: 0.9,
  },
  {
    id: 6,
    title: "Traditional Clay Tagine",
    image: "/api/placeholder/300/200",
    price: 3800,
    category: "Cuisine",
    // rating: 4.9,
    location: "Sétif",
    favorites: 73,
    promo: 0,
  },
];


export default function SearchPage() {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearchFocused, setIsSearchFocused] = useState<boolean>(false);
  const [results, setResults] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isAIMode, setIsAIMode] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  const t = useTranslations("SearchPage");
  const f = useTranslations("filters");

  // Sample property data for demo
  
  useEffect(() => {
    if (typeof document !== "undefined") {
      const navLinks = document.querySelector(".menuFilter");
      if (isFilterOpen) {
        navLinks?.classList.add("open-filter");
      } else {
        navLinks?.classList.remove("open-filter");
      }
    }

    // Initialize with sample data
    setResults(sampleProperties);
  }, [isFilterOpen]);


  const toggleFilter = (): void => setFilterOpen(!isFilterOpen);
  const closeFilter = (): void => setFilterOpen(false);
  const toggleAIMode = (): void => setIsAIMode(!isAIMode);

  const handleSearch = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setLoading(true);

    // Simulate AI search with a delay
    setTimeout(() => {
      if (isAIMode) {
        // In AI mode, simulate getting personalized recommendations
        const filteredResults = [...sampleProperties]
          .sort(() => 0.5 - Math.random()) // Random sort for demo purposes
          .slice(0, 4); // Only take 4 items to simulate personalized recommendations
        setResults(filteredResults);
      } else {
        // Regular search mode - filter the sample data based on search query
        const filteredResults = sampleProperties.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.location.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(filteredResults);
      }

      setLoading(false);
    }, 800);
  };

  const handleSearchInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="Search min-h-screen">
      <div className="searchBar">
        <div
          className={`ai-search-container ${isSearchFocused ? "focused" : ""}`}
        >
          <form
            onSubmit={handleSearch}
            className="relative w-full md:w-2/3 lg:w-1/2"
          >
            <div className="flex items-center relative">
              {isAIMode ? (
                // AI Chatbot Mode with textarea
                <textarea
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder={t("aiSearchPlaceholder")}
                  className="ai-search-textarea w-full p-4 pl-12 pr-16 rounded-xl border-2 border-[#6ba57e] focus:outline-none focus:ring-2 focus:ring-[#6ba57e] bg-white text-gray-900 resize-none"
                  rows={3}
                ></textarea>
              ) : (
                // Regular Search Mode with input
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  placeholder={t("searchPlaceholder")}
                  className="ai-search-input w-full p-4 pl-12 pr-12 rounded-xl border-2 border-[#6ba57e] focus:outline-none focus:ring-2 focus:ring-[#6ba57e] bg-white text-gray-900"
                />
              )}

              <div className="absolute  left-3 flex items-center pointer-events-none">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <div className="aisearch absolute right-3 bottom-3 flex space-x-2">
                {/* Toggle AI Mode Button with Tooltip */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={toggleAIMode}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                    className={`mode-toggle flex items-center justify-center p-2 rounded-lg transition-colors ${
                      isAIMode
                        ? "bg-purple-600 text-white hover:bg-purple-700"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                      <path
                        d="M13 8.5C13 9.05228 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05228 11 8.5C11 7.94772 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5Z"
                        fill="currentColor"
                      />
                      <path
                        d="M10.5 11.5H12V16.5H13.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-1">
                      {isAIMode ? t("aiOn") : t("aiOff")}
                    </span>
                  </button>

                  {/* Tooltip */}
                  {showTooltip && (
                    <div className="tooltip absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                      {isAIMode ? t("tooltipDisableAI") : t("tooltipEnableAI")}
                      <div className="tooltip-arrow"></div>
                    </div>
                  )}
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="search-button flex items-center justify-center bg-[#6ba57e] text-white p-2 rounded-lg hover:bg-[#5a8f6b] transition-colors"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <span className="ml-1">{t("search")}</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="SearchControls">
        <div className="text-lg font-medium">
          {isAIMode
            ? t("aiRecommendations")
            : searchQuery
            ? t("searchingFor") + searchQuery
            : t("trendingProducts")}
        </div>

        <div className="flex items-center gap-4 w-full md:w-auto justify-between">
          <button
            onClick={toggleFilter}
            className="language-modal-filrer-btn text-white px-4 py-2 rounded flex items-center gap-2 bg-[#6ba57e] hover:bg-[#5a8f6b] transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
            </svg>
            <p>{t("filter")}</p>
          </button>

          <div className="flex items-center">
            <label className="pr-2 pl-2 text-sm hidden md:inline">
              {t("sort")}
            </label>
            <select
              id="selectSort"
              className="selectSort p-2 border border-[#ddd] rounded min-w-[120px] md:min-w-[180px] text-sm"
            >
              <option value="relevance">{t("highestRated")}</option>
              <option value="price-low">{t("priceLowToHigh")}</option>
              <option value="price-high">{t("priceHighToLow")}</option>
              <option value="newest">{t("newest")}</option>
              <option value="popular">{t("mostPopular")}</option>
            </select>
          </div>
        </div>
      </div>

      {/* AI Mode Indicator */}
      {isAIMode && !loading && (
        <div className="ai-mode-indicator bg-purple-100 text-purple-800 p-3 mx-5 mb-4 rounded-lg flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M13 8.5C13 9.05228 12.5523 9.5 12 9.5C11.4477 9.5 11 9.05228 11 8.5C11 7.94772 11.4477 7.5 12 7.5C12.5523 7.5 13 7.94772 13 8.5Z"
              fill="currentColor"
            />
            <path
              d="M10.5 11.5H12V16.5H13.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{t("aiActiveNotice")}</span>
        </div>
      )}

      {/* Loading indicator */}
      {loading && (
        <div className="flex justify-center my-8">
          <div className="loader animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-[#6ba57e] h-12 w-12"></div>
        </div>
      )}

      {/* Results count */}
      {!loading && (
        <div className="px-5 my-4 text-sm text-gray-600">
          {t("showing")} {results.length} {t("Results")}
        </div>
      )}

      <div className="ResultsGrid">
        <div className="ResultsCard">
          {results.map((property) => (
            <PropertyCard key={property.id} property={property}></PropertyCard>
          ))}
        </div>
      </div>

      <div className="menuFilter">
        <div className="main-menu-title">{t("filter")}</div>
        <ul className="menu-list">
          <li className="menu-item">
            {/* Filtres avec options classiques */}
            {[
              {
                label: f("category"),
                options: ["Vêtements", "Décoration", "Cuisine"],
              },
              { label: f("material"), options: ["Bois", "Argile", "Tissu"] },
              { label: f("city"), options: ["Alger", "Oran", "Constantine"] },
              { label: f("color"), options: ["Rouge", "Bleu", "Vert", "Noir"] },
              {
                label: f("availability"),
                options: [f("available"), f("madeToOrder")],
              },
            ].map((filter, index) => (
              <FilterItem
                key={index}
                label={filter.label}
                options={filter.options}
              />
            ))}
            {/* Filtres avec plage numérique */}
            <RangeFilterItem
              label={f("price")}
              min={0}
              max={10000}
              step={100}
              unit={f("DA")}
            />
            <RangeFilterItem
              label={f("favorites")}
              min={0}
              max={100}
              step={1}
              unit=""
            />
          </li>
        </ul>
        <button className="btn--close-menu" onClick={closeFilter}>
          <CloseIcon height={25} width={25} />
        </button>
      </div>
    </div>
  );
}
