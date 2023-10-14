import React from 'react'
import Tab, { TabProps } from '../../atoms/Tab'
import { FlatList } from 'react-native'

export type Tab = Omit<TabProps, 'onPress'>

const TopTabs: React.FC<any> = (props: any) => {
  const renderItem = ({ item: tab }: { item: Tab }) => {
    return (
      <Tab
        key={tab.id}
        onPress={() => props.navigation.navigate(`Tab-${tab.name}*${tab.id}`)}
        id={tab.id}
        name={tab.name}
        selectedId={props.tabs[props.state.index].id}
      />
    )
  }

  return (
    <FlatList
      data={props.tabs}
      horizontal
      renderItem={renderItem}
      style={{ flexGrow: 0, paddingBottom: 10 }}
    />
  )
}

export default TopTabs
