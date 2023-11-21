import {
  MaterialTopTabBarProps,
  createMaterialTopTabNavigator,
} from '@react-navigation/material-top-tabs'
import TopTabs, {
  Tab as TabInterface,
} from '@modules/Activities/components/molecules/TopTabs'
import ActivityCatalog from '@modules/Activities/pages/ActivityCatalog'

const tabs: Omit<TabInterface, 'selectedId'>[] = [
  {
    id: 'tab1',
    name: 'Personalizado',
  },
  {
    id: 'tab2',
    name: 'Todas',
  },
  {
    id: 'tab3',
    name: 'Interactivas',
  },
]

const Tab = createMaterialTopTabNavigator()

const ActivityTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
      }}
      tabBar={(props: MaterialTopTabBarProps) => (
        <TopTabs {...props} tabs={tabs} />
      )}>
      {tabs.map(tab => {
        return (
          <Tab.Screen
            key={tab.id}
            name={`Tab-${tab.name}*${tab.id}`}
            component={ActivityCatalog}
            initialParams={{
              tab,
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

export default ActivityTabs
