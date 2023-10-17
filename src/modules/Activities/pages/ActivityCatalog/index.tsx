import { Activity } from '@modules/Activities/interfaces/activities'
import { activities as allActivities } from '@modules/Activities/mocks/activities'
import { MasonryFlashList } from '@shopify/flash-list'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import ActivityLongCard from '@modules/Activities/components/molecules/ActivityLongCard'
import { useTheme } from '@emotion/react'
import { useNavigation } from '@react-navigation/native'
import {
  getFilteredItems,
  getLevel2,
} from '@modules/Activities/utils/shuffleAlgorithm'
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
      let daytime: string
      if (themeName === 'dark') {
        daytime = 'night'
      } else {
        daytime = 'day'
      }
      setActivities(getFilteredItems(allActivities, daytime, tags))
    } else if (tab.id === 'tab3') {
      setActivities(getLevel2(allActivities))
    } else {
      setActivities(allActivities)
    }
  }, [])

  const renderItem = ({ item }: { item: Activity }) => {
    console.log(item)
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
