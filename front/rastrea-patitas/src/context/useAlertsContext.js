import { useContext } from "react"
import { AlertsContext } from "./AlertsContext"

export const useAlertsContext = () => {
  return useContext(AlertsContext)
}