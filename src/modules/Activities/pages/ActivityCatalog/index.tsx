import { Activity } from '@modules/Activities/interfaces/activities'
import { activities as allActivities } from '@modules/Activities/mocks/activities'
import { MasonryFlashList } from '@shopify/flash-list'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ActivityLongCard from '@modules/Activities/components/molecules/ActivityLongCard'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import { getFilteredItems } from '@modules/Activities/utils/shuffleAlgorithm'
import { useAppSelector } from 'hooks/useAppSelector'

const ActivityCatalog: React.FC<any> = ({
  route: {
    params: { tab },
  },
}) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const [activities, setActivities] = useState<Activity[]>()
  const themeName = useAppSelector(state => state.theme.theme.name)
  const tags = useAppSelector(state => state.activities.tags)

  useEffect(() => {
    console.log(tab)
    if (tab.id === 'tab1') {
      console.log('aquhsbusbus')
      setActivities(getFilteredItems(allActivities, themeName, tags))
    } else {
      setActivities(allActivities)
    }
  }, [])

  const renderItem = ({ item }: { item: Activity }) => {
    return (
      <View style={{ paddingHorizontal: 5 }}>
        <ActivityLongCard
          onPress={() =>
            navigation.navigate(item.route as any, {
              activity: item,
            })
          }
          flexDirection="column"
          activity={item}
        />
      </View>
    )
  }
  console.log(activities)
  return (
    <View
      style={{ flex: 1, backgroundColor: theme.colors.activityBackground0 }}>
      <MasonryFlashList
        numColumns={2}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 10, width: 1 }} />}
        data={activities}
      />
    </View>
  )
}

export default ActivityCatalog
