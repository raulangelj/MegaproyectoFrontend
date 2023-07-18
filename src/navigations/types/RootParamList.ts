/**
 * Here we should have all the navigation tree, and all possible params
 * So we can have typescript autocomplete in all screens and params
 * This file was created when the new ref-app development was started, and
 * we should be adding more items progressively
 */

// Not defining the screen names here because they come dynamically from API and all screens have the same params

export type RootStackParamList = {
  Chat: undefined
  ActivitiesMenu: undefined
  SignIn: undefined
  SignUp: undefined
}

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
