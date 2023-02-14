import { ChangeEvent, useCallback, useState } from "react"

export enum PageTabs {
  Home = 'HOME',
  About = 'ABOUT',
  Trivia = 'TRIVIA',
}

// technically using a <Router> is more standard
export const usePageTabs = (): [
  (_event: ChangeEvent<unknown>, newValue: PageTabs | string) => void,
  PageTabs | string
] => {
  const [selectedTab, setSelectedTab] = useState(PageTabs.Home.toString())
  const handleTabChange = useCallback(
    (_event: ChangeEvent<unknown>, newValue: PageTabs | string): void => {
      setSelectedTab(newValue)
    },
    [setSelectedTab]
  )
  return [handleTabChange, selectedTab]
}