import { useEffect, useState } from "react"

function IndexPopup() {
  const [data, setData] = useState<string>("")

  const setUrl = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var currentUrl = tabs[0].url
      setData(currentUrl)
    })
  }

  useEffect(() => {
    setUrl()
  }, [])
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>
      {data}
    </div>
  )
}

export default IndexPopup
