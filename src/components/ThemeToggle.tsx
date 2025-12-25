type Props = {
  theme: "dark" | "light"
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}

export default function ThemeToggle({ theme, setTheme }: Props) {
  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="no-print fixed top-6 right-6 z-50
      bg-primary text-black px-4 py-2 rounded-full
      font-medium shadow-lg"
    >
      {theme === "dark" ? "☀ Light" : "🌙 Dark"}
    </button>
  )
}
