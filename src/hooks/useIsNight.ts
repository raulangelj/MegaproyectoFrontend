import { useState, useEffect } from 'react'
import Geolocation from '@react-native-community/geolocation'
import SunCalc from 'suncalc'

type UseIsNightReturnType = {
  isNight: boolean
  error: string | null
}

const useIsNightAtCurrentLocation = (): UseIsNightReturnType => {
  const [isNight, setIsNight] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const handleLocationSuccess = (position: any) => {
      const { latitude, longitude } = position.coords
      try {
        const now = new Date()
        const times = SunCalc.getTimes(now, latitude, longitude)
        setIsNight(now < times.sunrise || now > times.sunset)
      } catch (e: any) {
        setError(e.message)
      }
    }

    const handleLocationError = (e: any) => {
      setError(e.message)
    }

    Geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError)

    return () => {
      // Cleanup: Stop watching location when the component is unmounted
      Geolocation.stopObserving()
    }
  }, [])

  return { isNight, error }
}

export default useIsNightAtCurrentLocation
