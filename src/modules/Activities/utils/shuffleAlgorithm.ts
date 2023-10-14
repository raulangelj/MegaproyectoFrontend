import { Activity, DayTime } from '../interfaces/activities'

export const filterArray = (
  activities: Activity[],
  time: DayTime,
  tags: string[],
): Activity[] => {
  const newActivities = activities.filter(activity => {
    return activity.type.includes(time)
  })

  const validationSet = new Set(tags)

  const validActivities = newActivities.filter(activity =>
    activity.type.some(tag => validationSet.has(tag)),
  )
  console.log(validActivities, 'HMM')
  return validActivities
}

export const shuffleArray = (activities: Activity[]): Activity[] => {
  for (let i = activities.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[activities[i], activities[j]] = [activities[j], activities[i]] // Swap elements
  }
  return activities
}

export const getFirstThreeElements = (
  activities: Activity[],
  time: DayTime,
  tags: string[],
): Activity[] => {
  const filteredArray = filterArray(activities, time, tags)
  const shuffledArray = shuffleArray(filteredArray)

  return shuffledArray.slice(0, 3)
}

export const getFilteredItems = (
  activities: Activity[],
  time: DayTime,
  tags: string[],
): Activity[] => {
  console.log(time, tags)
  return filterArray(activities, time, tags)
}
