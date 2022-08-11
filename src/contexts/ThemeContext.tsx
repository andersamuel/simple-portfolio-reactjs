import React, { createContext, ReactNode, useEffect, useState } from "react"

interface defaultValue {
  currentTheme: string
  changeCurrentTheme: (newTheme: "light" | "dark") => void
  loading: boolean
}

export const ThemeContext = createContext({} as defaultValue)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light")
  const [loading, setLoading] = useState<boolean>(true)

  const changeCurrentTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
  }

  useEffect(() => {
    const recoveredTheme = localStorage.getItem("theme")

    if (!recoveredTheme) {
      changeCurrentTheme("dark")

      document.documentElement.classList.add("dark")
    }

    if (theme === "light") document.documentElement.classList.remove("dark")
    else document.documentElement.classList.add("dark")

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, changeCurrentTheme, loading }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
